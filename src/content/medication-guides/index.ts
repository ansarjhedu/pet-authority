import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { diphenhydramineGuide } from "@/content/medication-guides/diphenhydramine";
import { ibuprofenGuide } from "@/content/medication-guides/ibuprofen";

const MEDICATION_LONG_GUIDES: Record<string, EmergencyLongGuide> = {
  diphenhydramine: diphenhydramineGuide,
  ibuprofen: ibuprofenGuide,
};

export function getMedicationLongGuide(slug: string): EmergencyLongGuide | undefined {
  return MEDICATION_LONG_GUIDES[slug];
}
