export const FOOD_SPECIES = ["dogs", "cats", "birds", "small-pets"] as const;
export const SAFETY_STATUSES = ["SAFE", "CAUTION", "TOXIC_DEADLY"] as const;

export type FoodSpecies = (typeof FOOD_SPECIES)[number];
export type SafetyStatus = (typeof SAFETY_STATUSES)[number];

export type FoodItem = {
  id: string;
  slug: string;
  name: string;
  species: FoodSpecies;
  safetyStatus: SafetyStatus;
  toxicCompounds: string;
  safeServingSize: string;
  clinicalSymptoms: string[];
  emergencyAction: string;
  whatToDoIfIngested: string;
};

export const SAFETY_LABEL: Record<SafetyStatus, string> = {
  SAFE: "Safe and beneficial",
  CAUTION: "Caution / strict limits",
  TOXIC_DEADLY: "Deadly toxin",
};

export const SPECIES_LABEL: Record<FoodSpecies, string> = {
  dogs: "Dogs",
  cats: "Cats",
  birds: "Birds",
  "small-pets": "Small Pets",
};

export function isFoodSpecies(value: string): value is FoodSpecies {
  return FOOD_SPECIES.some((species) => species === value);
}

export function isSafetyStatus(value: string): value is SafetyStatus {
  return SAFETY_STATUSES.some((status) => status === value);
}
