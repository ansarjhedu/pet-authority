"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { Loader2, RotateCcw, Send, Shield } from "lucide-react";
import { MAX_MESSAGE_CHARS } from "@/lib/ai/limits";
import { DAILY_LIMIT_MESSAGE, POISON_HOTLINES, isEmergencyText } from "@/lib/ai/triage";
import { cn } from "@/lib/utils";

const SUGGESTIONS = [
  "Can dogs safely eat blueberries?",
  "Why is my indoor cat drinking so much water?",
  "My budgie is tail bobbing, what does it mean?",
  "Safe vegetables for guinea pigs",
  "Signs of heatstroke in dogs",
] as const;

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  emergency: boolean;
};

const greeting: ChatMessage = {
  id: "greeting",
  role: "assistant",
  text: "Tell me the species, age, and what you are seeing. I can sort urgent signs from home-care questions. I cannot diagnose your pet or prescribe medication.",
  emergency: false,
};

export function AIAssistant({ className }: { className?: string }) {
  const inputId = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([greeting]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(false);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const message = text.trim();
    if (!message || loading || dailyLimit) {
      return;
    }

    const history = messages
      .filter((item) => item.id !== greeting.id)
      .map((item) => ({
        role: item.role === "assistant" ? ("model" as const) : ("user" as const),
        text: item.text,
      }));

    setMessages((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        role: "user",
        text: message,
        emergency: isEmergencyText(message),
      },
    ]);
    setDraft("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });
      const payload = (await response.json().catch(() => null)) as {
        reply?: string;
        preview?: boolean;
        error?: string;
        limit?: string;
      } | null;
      const reply =
        payload?.reply ??
        payload?.error ??
        "The assistant did not return a reply. Please try again, or call a clinic if this may be urgent.";

      setPreview(Boolean(payload?.preview));
      if (payload?.limit === "day") {
        setDailyLimit(true);
      }
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: reply,
          emergency: isEmergencyText(message) || isEmergencyText(reply),
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "The request did not go through. Check your connection and try again. If your pet is in danger, call an emergency clinic.",
          emergency: isEmergencyText(message),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void send(draft);
  }

  function resetSession() {
    setMessages([greeting]);
    setDraft("");
    setPreview(false);
    setLoading(false);
  }

  const showSuggestions = messages.length <= 1 && !loading;

  return (
    <section
      className={cn(
        "flex min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white",
        className,
      )}
    >
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 px-4 py-2.5 sm:px-5">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base font-semibold text-brand-primary">AI Pet Assistant</h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary-50 px-2.5 py-0.5 text-xs font-semibold text-brand-primary">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span
                  className={cn(
                    "absolute inline-flex h-full w-full rounded-full opacity-75 motion-safe:animate-ping",
                    preview ? "bg-amber-500" : "bg-brand-accent",
                  )}
                />
                <span
                  className={cn(
                    "relative inline-flex h-2 w-2 rounded-full",
                    preview ? "bg-amber-700" : "bg-brand-accent-700",
                  )}
                />
              </span>
              {preview ? "Local preview" : "Free Gemini"}
            </span>
          </div>
          <p className="mb-0 text-xs text-slate-600">Not a clinical veterinary diagnosis</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <p className="mb-0 text-xs font-semibold text-slate-600">15/min · 1,500/day</p>
          <button
            type="button"
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-slate-200 px-3 text-xs font-semibold text-slate-700 hover:border-brand-primary hover:text-brand-primary"
            onClick={resetSession}
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Reset
          </button>
        </div>
      </header>

      {showSuggestions ? (
        <div className="shrink-0 border-b border-slate-200 px-4 py-2 sm:px-5">
          <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="shrink-0 rounded-full border border-brand-primary/15 bg-brand-surface px-3 py-1.5 text-left text-sm font-semibold text-brand-primary hover:bg-brand-primary-50 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={loading || dailyLimit}
                onClick={() => void send(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div
        ref={listRef}
        className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-brand-surface px-4 py-3 sm:px-5"
        aria-live="polite"
      >
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {loading ? (
          <div className="flex items-center gap-2 text-sm text-slate-600" role="status">
            <Loader2 className="h-4 w-4 motion-safe:animate-spin" aria-hidden="true" />
            Checking the question
          </div>
        ) : null}
      </div>

      <form className="shrink-0 border-t border-slate-200 bg-white px-3 py-3 sm:px-4" onSubmit={onSubmit}>
        <p className="mb-2 text-xs leading-relaxed text-slate-600">
          {dailyLimit
            ? DAILY_LIMIT_MESSAGE
            : "Free tier: 15 questions a minute, 1,500 a day, and 1 million tokens a minute. Google may log this chat to train future models."}
        </p>
        <div className="flex items-end gap-2">
          <label htmlFor={inputId} className="sr-only">
            Your question
          </label>
          <textarea
            id={inputId}
            rows={1}
            maxLength={MAX_MESSAGE_CHARS}
            value={draft}
            disabled={loading || dailyLimit}
            placeholder={dailyLimit ? "Daily limit reached" : "Describe the pet and what changed"}
            className="max-h-24 min-h-11 w-full resize-none rounded-2xl border border-slate-300 bg-brand-surface px-3 py-2.5 text-base text-slate-800 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 disabled:opacity-60"
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void send(draft);
              }
            }}
          />
          <button
            type="submit"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-primary px-4 text-sm font-semibold text-white hover:bg-brand-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={loading || dailyLimit || draft.trim().length === 0}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[40rem] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser ? "bg-slate-200 text-slate-800" : "bg-white text-slate-800",
          message.emergency && "border-2 border-triage-red bg-triage-red-surface",
        )}
      >
        {isUser ? null : (
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-primary uppercase">
            <Shield className="h-4 w-4" aria-hidden="true" />
            PetAuthority
          </div>
        )}
        <MessageBody text={message.text} />
        {message.emergency && !isUser ? <HotlineList /> : null}
      </div>
    </div>
  );
}

function HotlineList() {
  return (
    <div className="mt-3 border-t border-triage-red/20 pt-3">
      <p className="mb-2 text-xs font-semibold tracking-wide text-triage-red uppercase">
        Tap to call
      </p>
      <ul className="space-y-1">
        {POISON_HOTLINES.map((line) => (
          <li key={line.href}>
            <a
              href={line.href}
              className="flex min-h-11 items-center justify-between gap-3 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-800"
            >
              <span>
                {line.region} · {line.name}
              </span>
              <span className="text-triage-red">{line.number}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MessageBody({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);
  return (
    <div className="space-y-3">
      {blocks.map((block, index) => {
        const lines = block.split("\n").filter((line) => line.trim().length > 0);
        const bullets = lines.length > 0 && lines.every((line) => /^[-*•]\s+/.test(line.trim()));
        if (bullets) {
          return (
            <ul key={index} className="list-disc space-y-1 pl-5">
              {lines.map((line) => (
                <li key={line}>
                  <RichText text={line.replace(/^[-*•]\s+/, "")} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={block} className="mb-0">
            {lines.map((line, lineIndex) => (
              <span key={`${line}-${lineIndex}`}>
                {lineIndex > 0 ? <br /> : null}
                <RichText text={line} />
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
