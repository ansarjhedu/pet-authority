import type { Metadata } from "next";

export const INDEX_FOLLOW = { index: true, follow: true } satisfies Metadata["robots"];
export const NOINDEX_FOLLOW = { index: false, follow: true } satisfies Metadata["robots"];

/** Index only when a standard or long article exists (checklist-complete depth). */
export function robotsForGuide(hasArticle: boolean): Metadata["robots"] {
  return hasArticle ? INDEX_FOLLOW : NOINDEX_FOLLOW;
}
