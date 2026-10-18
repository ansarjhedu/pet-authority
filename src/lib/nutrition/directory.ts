import foods from "@/data/foods.json";
import {
  isFoodSpecies,
  isSafetyStatus,
  type FoodItem,
  type FoodSpecies,
  type SafetyStatus,
} from "@/lib/nutrition/types";

function isStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isFoodItem(value: unknown): value is FoodItem {
  if (!value || typeof value !== "object") {
    return false;
  }
  const food = value as Record<string, unknown>;
  return (
    typeof food.id === "string" &&
    typeof food.slug === "string" &&
    typeof food.name === "string" &&
    typeof food.species === "string" &&
    isFoodSpecies(food.species) &&
    typeof food.safetyStatus === "string" &&
    isSafetyStatus(food.safetyStatus) &&
    typeof food.toxicCompounds === "string" &&
    typeof food.safeServingSize === "string" &&
    isStringList(food.clinicalSymptoms) &&
    typeof food.emergencyAction === "string" &&
    typeof food.whatToDoIfIngested === "string"
  );
}

export const FOODS: FoodItem[] = (foods as unknown[]).filter(isFoodItem);

export function getFood(slug: string): FoodItem | undefined {
  return FOODS.find((food) => food.slug === slug);
}

export function foodEmergencyHref(food: FoodItem): string | null {
  if (food.safetyStatus !== "TOXIC_DEADLY") {
    return null;
  }
  if (food.slug.includes("chocolate") || food.name.toLowerCase() === "chocolate") {
    return "/emergency/chocolate-toxicity";
  }
  if (food.slug.includes("lil")) {
    return "/emergency/lily-toxicity";
  }
  return "/emergency";
}

const SPECIES_WORDS: Record<string, FoodSpecies> = {
  dog: "dogs",
  dogs: "dogs",
  puppy: "dogs",
  cat: "cats",
  cats: "cats",
  kitten: "cats",
  bird: "birds",
  birds: "birds",
  parrot: "birds",
  rabbit: "small-pets",
  "guinea": "small-pets",
  hamster: "small-pets",
  ferret: "small-pets",
};

const STOP_WORDS = new Set([
  "can",
  "my",
  "eat",
  "eats",
  "are",
  "is",
  "for",
  "safe",
  "the",
  "and",
  "a",
  "an",
  "does",
  "do",
  "what",
  "about",
  "with",
]);

export function inferSpecies(query: string): FoodSpecies | null {
  const words = query.toLowerCase().split(/[^a-z]+/);
  for (const word of words) {
    const species = SPECIES_WORDS[word];
    if (species) {
      return species;
    }
  }
  return null;
}

export function foodMatchesQuery(food: FoodItem, query: string): boolean {
  const words = query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word) && !SPECIES_WORDS[word]);
  if (words.length === 0) {
    return true;
  }
  const haystack = [food.name, food.toxicCompounds, food.slug, ...food.clinicalSymptoms]
    .join(" ")
    .toLowerCase();
  return words.every((word) => haystack.includes(word));
}

export function filterFoods(
  species: FoodSpecies | "all",
  safety: SafetyStatus | "all",
  query: string,
): FoodItem[] {
  const hinted = inferSpecies(query);
  const speciesFilter = species !== "all" ? species : hinted;
  return FOODS.filter((food) => {
    if (speciesFilter && food.species !== speciesFilter) {
      return false;
    }
    if (safety !== "all" && food.safetyStatus !== safety) {
      return false;
    }
    return foodMatchesQuery(food, query);
  });
}
