import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { yellowBileGuide } from "@/content/symptom-guides/vomiting-yellow-bile";

const SYMPTOM_LONG_GUIDES: Record<string, EmergencyLongGuide> = {
  "dogs/vomiting-yellow-bile": yellowBileGuide,
};

export function getSymptomLongGuide(species: string, slug: string): EmergencyLongGuide | undefined {
  return SYMPTOM_LONG_GUIDES[`${species}/${slug}`];
}
