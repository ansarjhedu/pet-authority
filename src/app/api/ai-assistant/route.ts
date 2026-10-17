import { fitHistory, MAX_HISTORY_TURNS, MAX_MESSAGE_CHARS, MAX_OUTPUT_TOKENS, type GeminiLimit } from "@/lib/ai/limits";
import { reconcileGeminiCall, releaseGeminiCall, reserveGeminiCall } from "@/lib/ai/quota";
import {
  CONTEXT_LIMIT_MESSAGE,
  DAILY_LIMIT_MESSAGE,
  MINUTE_LIMIT_MESSAGE,
  PREVIEW_MODE_MESSAGE,
  SYSTEM_INSTRUCTION,
  TOKEN_LIMIT_MESSAGE,
  isEmergencyText,
} from "@/lib/ai/triage";

const MODEL = "gemini-3.8-flash";

const LIMIT_REPLIES: Record<GeminiLimit, string> = {
  minute: MINUTE_LIMIT_MESSAGE,
  day: DAILY_LIMIT_MESSAGE,
  tokens: TOKEN_LIMIT_MESSAGE,
};

type ChatTurn = {
  role: "user" | "model";
  text: string;
};

type GeminiResponse = {
  candidates?: Array<{
    content?: { parts?: Array<{ text?: string }> };
    finishReason?: string;
  }>;
  usageMetadata?: { totalTokenCount?: number };
  error?: { code?: number; message?: string; status?: string };
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send a JSON body with a message." }, { status: 400 });
  }

  const message = readMessage(body);
  if (!message) {
    return Response.json({ error: "Message is required." }, { status: 400 });
  }

  const history = readHistory(body);
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    return Response.json({
      reply: previewReply(message),
      preview: true,
    });
  }

  const fitted = fitHistory(history, message, SYSTEM_INSTRUCTION);
  if (fitted.overflow) {
    return Response.json({ reply: CONTEXT_LIMIT_MESSAGE, rateLimited: true, limit: "tokens" }, { status: 413 });
  }

  const reservation = await reserveGeminiCall(fitted.inputTokens);
  if (!reservation.ok) {
    return Response.json(
      { reply: LIMIT_REPLIES[reservation.limit], rateLimited: true, limit: reservation.limit },
      { status: 429 },
    );
  }

  try {
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }],
          },
          contents: [
            ...fitted.history.map((turn) => ({
              role: turn.role,
              parts: [{ text: turn.text }],
            })),
            { role: "user", parts: [{ text: message }] },
          ],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: MAX_OUTPUT_TOKENS,
          },
        }),
        signal: AbortSignal.timeout(20000),
      },
    );

    const payload = (await geminiResponse.json().catch(() => null)) as GeminiResponse | null;
    const actualTokens = payload?.usageMetadata?.totalTokenCount;
    if (typeof actualTokens === "number") {
      await reconcileGeminiCall(reservation.id, actualTokens);
    }

    if (geminiResponse.status === 429 || payload?.error?.code === 429) {
      return Response.json(
        { reply: MINUTE_LIMIT_MESSAGE, rateLimited: true, limit: "minute" },
        { status: 429 },
      );
    }

    if (!geminiResponse.ok && geminiResponse.status !== 429 && geminiResponse.status < 500) {
      await releaseGeminiCall(reservation.id);
    }

    if (!geminiResponse.ok) {
      return Response.json(
        {
          reply:
            "The assistant could not reach Gemini just now. Please try again in a moment. If this may be an emergency, contact a local clinic or poison hotline.",
        },
        { status: 502 },
      );
    }

    const reply = payload?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("")
      .trim();

    if (!reply) {
      return Response.json({
        reply:
          "I could not produce a safe reply for that question. If your pet is struggling to breathe, collapsing, or may have eaten a toxin, contact an emergency veterinarian now.",
      });
    }

    return Response.json({ reply });
  } catch {
    return Response.json(
      {
        reply:
          "The assistant timed out before Gemini replied. Please try again. If your pet is in danger, call an emergency clinic or poison hotline.",
      },
      { status: 504 },
    );
  }
}

function previewReply(message: string): string {
  if (!isEmergencyText(message)) {
    return PREVIEW_MODE_MESSAGE;
  }

  return `**[EMERGENCY ALERT]**

If this is happening now, contact a local emergency veterinarian or a poison hotline before waiting on an online assistant.

${PREVIEW_MODE_MESSAGE}`;
}

function readMessage(body: unknown): string | null {
  if (!body || typeof body !== "object" || !("message" in body)) {
    return null;
  }
  const message = (body as { message?: unknown }).message;
  if (typeof message !== "string") {
    return null;
  }
  const trimmed = message.trim();
  if (!trimmed || trimmed.length > MAX_MESSAGE_CHARS) {
    return null;
  }
  return trimmed;
}

function readHistory(body: unknown): ChatTurn[] {
  if (!body || typeof body !== "object" || !("history" in body)) {
    return [];
  }
  const history = (body as { history?: unknown }).history;
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .slice(-MAX_HISTORY_TURNS)
    .flatMap((turn) => {
      if (!turn || typeof turn !== "object") {
        return [];
      }
      const role = (turn as { role?: unknown }).role;
      const text = (turn as { text?: unknown }).text;
      if ((role !== "user" && role !== "model") || typeof text !== "string") {
        return [];
      }
      const trimmed = text.trim().slice(0, MAX_MESSAGE_CHARS);
      if (!trimmed) {
        return [];
      }
      return [{ role, text: trimmed }];
    });
}
