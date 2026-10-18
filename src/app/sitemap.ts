import type { MetadataRoute } from "next";
import { getBreedGuide } from "@/content/breed-guides";
import { getEmergencyLongGuide } from "@/content/emergency-guides";
import { getFoodLongGuide } from "@/content/food-guides";
import { getMedicationLongGuide } from "@/content/medication-guides";
import { getSymptomLongGuide } from "@/content/symptom-guides";
import { EMERGENCY_GUIDES, SYMPTOM_GUIDES } from "@/lib/clinical/guides";
import { BREEDS } from "@/lib/breeds/directory";
import { breedPath } from "@/lib/breeds/types";
import { FOOD_TOPICS } from "@/lib/nutrition/topics";
import { MEDICATIONS } from "@/lib/medications/directory";
import { absoluteUrl } from "@/lib/seo/schema";

const UPDATED = new Date("2026-10-18T00:00:00.000Z");

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function entry(path: string, priority: number, changeFrequency: ChangeFrequency) {
  return {
    url: absoluteUrl(path),
    lastModified: UPDATED,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    entry("/", 1, "weekly"),
    entry("/emergency", 0.6, "weekly"),
    entry("/health-symptoms", 0.6, "weekly"),
    entry("/nutrition", 0.6, "weekly"),
    entry("/medications", 0.6, "monthly"),
    entry("/dogs", 0.6, "monthly"),
    entry("/cats", 0.6, "monthly"),
    entry("/birds", 0.6, "monthly"),
    entry("/small-pets", 0.6, "monthly"),
    entry("/dogs/care", 0.6, "monthly"),
    entry("/dogs/nutrition", 0.6, "monthly"),
    entry("/cats/care", 0.6, "monthly"),
    entry("/cats/nutrition", 0.6, "monthly"),
  ];

  const trust = [
    entry("/about", 0.8, "monthly"),
    entry("/editorial-standards", 0.8, "monthly"),
    entry("/contact", 0.7, "monthly"),
    entry("/privacy-policy", 0.7, "monthly"),
    entry("/terms", 0.7, "monthly"),
  ];

  const tools = [
    entry("/tools/pet-food-calculator", 0.6, "monthly"),
    entry("/tools/diet-planner", 0.6, "monthly"),
    entry("/tools/vet-finder", 0.6, "weekly"),
    entry("/tools/ai-assistant", 0.6, "monthly"),
  ];

  const breeds = BREEDS.filter((breed) => getBreedGuide(breed.slug)).map((breed) =>
    entry(breedPath(breed), 0.9, "monthly"),
  );
  const symptoms = SYMPTOM_GUIDES.filter((symptom) =>
    getSymptomLongGuide(symptom.species, symptom.slug),
  ).map((symptom) => entry(`/health-symptoms/${symptom.species}/${symptom.slug}`, 0.9, "weekly"));
  const emergencies = EMERGENCY_GUIDES.filter((guide) => getEmergencyLongGuide(guide.slug)).map(
    (guide) => entry(`/emergency/${guide.slug}`, 1, "weekly"),
  );
  const foods = FOOD_TOPICS.filter((topic) => getFoodLongGuide(topic.slug)).map((topic) =>
    entry(`/nutrition/${topic.slug}`, 0.9, "monthly"),
  );
  const medications = MEDICATIONS.filter((medication) => getMedicationLongGuide(medication.slug)).map(
    (medication) => entry(`/medications/${medication.slug}`, 0.9, "monthly"),
  );

  return [...core, ...trust, ...tools, ...breeds, ...symptoms, ...emergencies, ...foods, ...medications];
}
