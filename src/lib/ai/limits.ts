export const REQUESTS_PER_MINUTE = 15;
export const REQUESTS_PER_DAY = 1500;
export const TOKENS_PER_MINUTE = 1_000_000;
export const MAX_OUTPUT_TOKENS = 800;
export const MAX_MESSAGE_CHARS = 2000;
export const MAX_HISTORY_TURNS = 16;

/** Share of the minute token budget one request may use, including the reply. */
export const MAX_REQUEST_TOKENS = Math.floor(TOKENS_PER_MINUTE / REQUESTS_PER_MINUTE);
export const MAX_INPUT_TOKENS = MAX_REQUEST_TOKENS - MAX_OUTPUT_TOKENS;

export type ChatTurn = {
  role: "user" | "model";
  text: string;
};

export type GeminiLimit = "minute" | "day" | "tokens";

export type UsageWindow = {
  requestsInMinute: number;
  tokensInMinute: number;
  requestsToday: number;
  incomingTokens: number;
};

export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

export function fitHistory(
  history: ChatTurn[],
  message: string,
  systemInstruction: string,
): { history: ChatTurn[]; inputTokens: number; overflow: boolean } {
  const systemTokens = estimateTokens(systemInstruction);
  const messageTokens = estimateTokens(message);
  let budget = MAX_INPUT_TOKENS - systemTokens - messageTokens;

  if (budget < 0) {
    return {
      history: [],
      inputTokens: systemTokens + messageTokens,
      overflow: true,
    };
  }

  const kept: ChatTurn[] = [];
  for (let index = history.length - 1; index >= 0; index -= 1) {
    const turn = history[index];
    const turnTokens = estimateTokens(turn.text) + 2;
    if (turnTokens > budget) {
      break;
    }
    budget -= turnTokens;
    kept.push(turn);
  }
  kept.reverse();

  return {
    history: kept,
    inputTokens: MAX_INPUT_TOKENS - budget,
    overflow: false,
  };
}

export function decideAllowance(usage: UsageWindow): { ok: true } | { ok: false; limit: GeminiLimit } {
  if (usage.requestsToday >= REQUESTS_PER_DAY) {
    return { ok: false, limit: "day" };
  }
  if (usage.requestsInMinute >= REQUESTS_PER_MINUTE) {
    return { ok: false, limit: "minute" };
  }
  if (
    usage.incomingTokens > MAX_REQUEST_TOKENS ||
    usage.tokensInMinute + usage.incomingTokens > TOKENS_PER_MINUTE
  ) {
    return { ok: false, limit: "tokens" };
  }
  return { ok: true };
}

/** Google AI Studio daily quotas reset at midnight Pacific time. */
export function geminiQuotaDay(now: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
