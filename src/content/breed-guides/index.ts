import type { BreedGuide } from "@/lib/breeds/guide";
import { goldenRetrieverGuide } from "@/content/breed-guides/golden-retriever";
import { ragdollGuide } from "@/content/breed-guides/ragdoll";

const BREED_GUIDES: Record<string, BreedGuide> = {
  "golden-retriever": goldenRetrieverGuide,
  ragdoll: ragdollGuide,
};

export function getBreedGuide(slug: string): BreedGuide | undefined {
  return BREED_GUIDES[slug];
}
