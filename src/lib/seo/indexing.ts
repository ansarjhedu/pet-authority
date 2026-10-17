import type { Metadata } from "next";

export const INDEX_FOLLOW = { index: true, follow: true } satisfies Metadata["robots"];
export const NOINDEX_FOLLOW = { index: false, follow: true } satisfies Metadata["robots"];

export function robotsForGuide(hasLongGuide: boolean): Metadata["robots"] {
  return hasLongGuide ? INDEX_FOLLOW : NOINDEX_FOLLOW;
}
