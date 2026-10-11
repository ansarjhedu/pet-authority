import type { MetadataRoute } from "next";
import { EMERGENCY_GUIDES, SYMPTOM_GUIDES } from "@/lib/clinical/guides";
import { BREEDS } from "@/lib/breeds/directory";
import { breedPath } from "@/lib/breeds/types";
import { FOODS } from "@/lib/nutrition/directory";
import { MEDICATIONS } from "@/lib/medications/directory";
import { absoluteUrl } from "@/lib/seo/schema";

const UPDATED = new Date("2026-10-11T00:00:00.000Z");

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
    entry("/emergency", 1, "weekly"),
    entry("/health-symptoms", 0.9, "weekly"),
    entry("/nutrition", 0.8, "weekly"),
    entry("/medications", 0.8, "monthly"),
    entry("/dogs", 0.8, "monthly"),
    entry("/cats", 0.8, "monthly"),
    entry("/birds", 0.8, "monthly"),
    entry("/small-pets", 0.8, "monthly"),
    entry("/dogs/care", 0.8, "monthly"),
    entry("/dogs/nutrition", 0.8, "monthly"),
    entry("/cats/care", 0.8, "monthly"),
    entry("/cats/nutrition", 0.8, "monthly"),
  ];

  const tools = [
    entry("/tools/pet-food-calculator", 0.9, "monthly"),
    entry("/tools/diet-planner", 0.9, "monthly"),
    entry("/tools/vet-finder", 0.9, "weekly"),
    entry("/tools/ai-assistant", 0.9, "monthly"),
  ];

  const breeds = BREEDS.map((breed) => entry(breedPath(breed), 0.8, "monthly"));
  const symptoms = SYMPTOM_GUIDES.map((symptom) =>
    entry(`/health-symptoms/${symptom.species}/${symptom.slug}`, 0.9, "weekly"),
  );
  const emergencies = EMERGENCY_GUIDES.map((guide) =>
    entry(`/emergency/${guide.slug}`, 1, "weekly"),
  );
  const foods = FOODS.map((food) => entry(`/nutrition/${food.slug}`, 0.7, "monthly"));
  const medications = MEDICATIONS.map((medication) =>
    entry(`/medications/${medication.slug}`, 0.7, "monthly"),
  );

  return [...core, ...tools, ...breeds, ...symptoms, ...emergencies, ...foods, ...medications];
}
