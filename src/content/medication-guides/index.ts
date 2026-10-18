import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { acetaminophenGuide } from "@/content/medication-guides/acetaminophen";
import { carprofenGuide } from "@/content/medication-guides/carprofen";
import { diphenhydramineGuide } from "@/content/medication-guides/diphenhydramine";
import { famotidineGuide } from "@/content/medication-guides/famotidine";
import { gabapentinGuide } from "@/content/medication-guides/gabapentin";
import { ibuprofenGuide } from "@/content/medication-guides/ibuprofen";
import { meloxicamGuide } from "@/content/medication-guides/meloxicam";
import { MEDICATIONS } from "@/lib/medications/directory";

const MEDICATION_LONG_GUIDES: Record<string, EmergencyLongGuide> = {
  acetaminophen: acetaminophenGuide,
  carprofen: carprofenGuide,
  diphenhydramine: diphenhydramineGuide,
  famotidine: famotidineGuide,
  gabapentin: gabapentinGuide,
  ibuprofen: ibuprofenGuide,
  meloxicam: meloxicamGuide,
};

export function getMedicationLongGuide(slug: string): EmergencyLongGuide | undefined {
  return MEDICATION_LONG_GUIDES[slug];
}

export function allMedicationArticleSlugs(): string[] {
  return MEDICATIONS.map((med) => med.slug);
}
