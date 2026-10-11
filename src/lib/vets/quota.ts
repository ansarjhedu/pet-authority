import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export const VET_SEARCH_LIMIT = 999;

const quotaPath = path.join(process.cwd(), "data", "quota.json");

let memoryCount: number | null = null;
let queue: Promise<unknown> = Promise.resolve();

function withLock<T>(task: () => Promise<T>): Promise<T> {
  const run = queue.then(task, task);
  queue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function readStoredCount(): Promise<number> {
  try {
    const raw = await readFile(quotaPath, "utf8");
    const parsed = JSON.parse(raw) as { count?: unknown };
    const count = Number(parsed.count);
    if (Number.isInteger(count) && count >= 0) {
      memoryCount = count;
      return count;
    }
  } catch {
    if (memoryCount !== null) {
      return memoryCount;
    }
  }

  return memoryCount ?? 0;
}

async function writeStoredCount(count: number): Promise<void> {
  memoryCount = count;
  try {
    await mkdir(path.dirname(quotaPath), { recursive: true });
    await writeFile(quotaPath, `${JSON.stringify({ count }, null, 2)}\n`, "utf8");
  } catch {
    memoryCount = count;
  }
}

export type VetSearchReservation =
  | { action: "blocked"; count: number }
  | { action: "preview"; count: number }
  | { action: "live"; count: number };

export function reserveVetSearch(hasApiKey: boolean): Promise<VetSearchReservation> {
  return withLock(async () => {
    const count = await readStoredCount();
    if (count >= VET_SEARCH_LIMIT) {
      return { action: "blocked", count };
    }

    if (!hasApiKey) {
      return { action: "preview", count };
    }

    const next = count + 1;
    await writeStoredCount(next);
    return { action: "live", count: next };
  });
}
