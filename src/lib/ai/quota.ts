import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  MAX_OUTPUT_TOKENS,
  type GeminiLimit,
  decideAllowance,
  geminiQuotaDay,
} from "@/lib/ai/limits";

const quotaPath = path.join(process.cwd(), "data", "ai-quota.json");

type MinuteEvent = {
  id: number;
  at: number;
  tokens: number;
  day: string;
};

type DailyCount = {
  day: string;
  count: number;
};

let nextId = 1;
let queue: Promise<unknown> = Promise.resolve();
let minuteEvents: MinuteEvent[] = [];
let memoryDaily: DailyCount | null = null;

function withLock<T>(task: () => Promise<T>): Promise<T> {
  const run = queue.then(task, task);
  queue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

function pruneMinute(now: number) {
  const cutoff = now - 60_000;
  minuteEvents = minuteEvents.filter((event) => event.at > cutoff);
}

async function readDailyCount(day: string): Promise<number> {
  try {
    const raw = await readFile(quotaPath, "utf8");
    const parsed = JSON.parse(raw) as { day?: unknown; count?: unknown };
    const count = Number(parsed.count);
    if (parsed.day === day && Number.isInteger(count) && count >= 0) {
      memoryDaily = { day, count };
      return count;
    }
  } catch {
    if (memoryDaily?.day === day) {
      return memoryDaily.count;
    }
  }

  return memoryDaily?.day === day ? memoryDaily.count : 0;
}

async function writeDailyCount(day: string, count: number): Promise<void> {
  memoryDaily = { day, count };
  try {
    await mkdir(path.dirname(quotaPath), { recursive: true });
    await writeFile(quotaPath, `${JSON.stringify({ day, count }, null, 2)}\n`, "utf8");
  } catch {
    memoryDaily = { day, count };
  }
}

export type GeminiReservation =
  | { ok: true; id: number; reservedTokens: number }
  | { ok: false; limit: GeminiLimit };

export function reserveGeminiCall(inputTokens: number, now = Date.now()): Promise<GeminiReservation> {
  const incomingTokens = inputTokens + MAX_OUTPUT_TOKENS;

  return withLock(async () => {
    const day = geminiQuotaDay(new Date(now));
    pruneMinute(now);
    const requestsToday = await readDailyCount(day);
    const decision = decideAllowance({
      requestsInMinute: minuteEvents.length,
      tokensInMinute: minuteEvents.reduce((sum, event) => sum + event.tokens, 0),
      requestsToday,
      incomingTokens,
    });

    if (!decision.ok) {
      return decision;
    }

    const id = nextId;
    nextId += 1;
    minuteEvents.push({ id, at: now, tokens: incomingTokens, day });
    await writeDailyCount(day, requestsToday + 1);
    return { ok: true, id, reservedTokens: incomingTokens };
  });
}

export function releaseGeminiCall(id: number): Promise<void> {
  return withLock(async () => {
    const event = minuteEvents.find((item) => item.id === id);
    if (!event) {
      return;
    }
    minuteEvents = minuteEvents.filter((item) => item.id !== id);
    const count = await readDailyCount(event.day);
    if (count > 0) {
      await writeDailyCount(event.day, count - 1);
    }
  });
}

export function reconcileGeminiCall(id: number, actualTokens: number): Promise<void> {
  if (!Number.isFinite(actualTokens) || actualTokens < 1) {
    return Promise.resolve();
  }

  return withLock(async () => {
    const event = minuteEvents.find((item) => item.id === id);
    if (event) {
      event.tokens = Math.ceil(actualTokens);
    }
  });
}
