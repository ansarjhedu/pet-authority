export const BREED_SPECIES = ["dogs", "cats", "birds", "small-pets"] as const;
export const BREED_SIZES = ["toy", "small", "medium", "large", "giant"] as const;

export type BreedSpecies = (typeof BREED_SPECIES)[number];
export type BreedSize = (typeof BREED_SIZES)[number];

export type WeightRange = {
  min: number;
  max: number;
};

export type HealthRisk = {
  condition: string;
  warningSign: string;
  severity: "Common" | "Urgent";
};

export type BreedFaq = {
  question: string;
  answer: string;
};

export type Breed = {
  id: string;
  slug: string;
  name: string;
  species: BreedSpecies;
  tagline: string;
  weightLbs: WeightRange;
  weightKg: WeightRange;
  lifespan: string;
  size: BreedSize;
  temperament: string[];
  energyLevel: number;
  groomingDemand: number;
  hypoallergenic: boolean;
  apartmentFriendly: boolean;
  goodWithKids: boolean;
  healthRisks: HealthRisk[];
  dailyCalorieBaseline: number;
  dietaryNotes: string;
  exerciseMinutesPerDay: number;
  annualCostUsd: number;
  annualCostGbp: number;
  faqs: BreedFaq[];
};

export const SPECIES_PATH: Record<BreedSpecies, string> = {
  dogs: "/dogs",
  cats: "/cats",
  birds: "/birds",
  "small-pets": "/small-pets",
};

export const SPECIES_LABEL: Record<BreedSpecies, string> = {
  dogs: "Dogs",
  cats: "Cats",
  birds: "Birds",
  "small-pets": "Small Pets",
};

export function isBreedSpecies(value: string): value is BreedSpecies {
  return BREED_SPECIES.some((species) => species === value);
}

export function breedPath(breed: Pick<Breed, "species" | "slug">): string {
  return `${SPECIES_PATH[breed.species]}/${breed.slug}`;
}
