import breeds from "@/data/breeds.json";
import {
  BREED_SIZES,
  isBreedSpecies,
  type Breed,
  type BreedSize,
  type BreedSpecies,
} from "@/lib/breeds/types";

function isRange(value: unknown): value is { min: number; max: number } {
  if (!value || typeof value !== "object") {
    return false;
  }
  const range = value as { min?: unknown; max?: unknown };
  return typeof range.min === "number" && typeof range.max === "number";
}

function isStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isBreedSize(value: unknown): value is BreedSize {
  return typeof value === "string" && BREED_SIZES.some((size) => size === value);
}

function isRating(value: unknown): value is number {
  return typeof value === "number" && value >= 1 && value <= 5;
}

function isBreed(value: unknown): value is Breed {
  if (!value || typeof value !== "object") {
    return false;
  }
  const breed = value as Record<string, unknown>;
  return (
    typeof breed.id === "string" &&
    typeof breed.slug === "string" &&
    typeof breed.name === "string" &&
    typeof breed.species === "string" &&
    isBreedSpecies(breed.species) &&
    typeof breed.tagline === "string" &&
    isRange(breed.weightLbs) &&
    isRange(breed.weightKg) &&
    typeof breed.lifespan === "string" &&
    isBreedSize(breed.size) &&
    isStringList(breed.temperament) &&
    isRating(breed.energyLevel) &&
    isRating(breed.groomingDemand) &&
    typeof breed.hypoallergenic === "boolean" &&
    typeof breed.apartmentFriendly === "boolean" &&
    typeof breed.goodWithKids === "boolean" &&
    Array.isArray(breed.healthRisks) &&
    typeof breed.dailyCalorieBaseline === "number" &&
    typeof breed.dietaryNotes === "string" &&
    typeof breed.exerciseMinutesPerDay === "number" &&
    typeof breed.annualCostUsd === "number" &&
    typeof breed.annualCostGbp === "number" &&
    Array.isArray(breed.faqs)
  );
}

export const BREEDS: Breed[] = (breeds as unknown[]).filter(isBreed);

export function breedsBySpecies(species: BreedSpecies): Breed[] {
  return BREEDS.filter((breed) => breed.species === species);
}

export function getBreed(species: BreedSpecies, slug: string): Breed | undefined {
  return BREEDS.find((breed) => breed.species === species && breed.slug === slug);
}

export function healthRiskHref(breed: Breed, condition: string, warningSign: string): string {
  const text = `${condition} ${warningSign}`.toLowerCase();

  if (breed.species === "cats") {
    if (/urin|ureth|bladder|litter/.test(text)) {
      return "/health-symptoms/cats/straining-in-litter-box";
    }
    if (/breath|wheez|asthma|sneez/.test(text)) {
      return "/health-symptoms/cats/occasional-sneezing";
    }
    if (/heart|hcm|cardiomyopath|kidney|thirst|thyroid/.test(text)) {
      return "/health-symptoms/cats/drinking-more-water";
    }
    return "/health-symptoms/cats/hiding-and-not-eating";
  }

  if (breed.species === "birds") {
    if (/egg/.test(text)) {
      return "/emergency/egg-binding";
    }
    if (/breath|respir|fume|asperg|tail|voice/.test(text)) {
      return "/health-symptoms/birds/tail-bobbing";
    }
    return "/health-symptoms/birds/fluffed-and-quiet";
  }

  if (breed.species === "small-pets") {
    if (/insulin|sugar|hypogly/.test(text)) {
      return "/emergency/ferret-hypoglycemia";
    }
    if (/stasis|dental|teeth|hay|gut|dropp/.test(text)) {
      return "/health-symptoms/small-pets/teeth-grinding-hunching";
    }
    return "/health-symptoms/small-pets/fewer-droppings";
  }

  if (/bloat|gdv/.test(text)) {
    return "/emergency/bloat-gdv";
  }
  if (/heat|boas|airway|brachy/.test(text)) {
    return "/emergency/heatstroke";
  }
  if (/ivdd|disc|myelopath|hip|elbow|patella|limp|spinal|hind/.test(text)) {
    return "/health-symptoms/dogs/limping";
  }
  if (/ear|skin|allerg|dermat/.test(text)) {
    return "/health-symptoms/dogs/head-shaking-ear-scratching";
  }
  if (/seizure|collapse|epilep|weak|addison/.test(text)) {
    return "/health-symptoms/dogs/collapse-or-seizure";
  }
  return "/health-symptoms/dogs/lethargy";
}
