/** WSAVA resting and daily energy equations for dogs and cats. */

export const POUNDS_PER_KILOGRAM = 2.20462;

export const DRY_KIBBLE = {
  kcalPerCup: 375,
  gramsPerCup: 90,
} as const;

export const WET_FOOD = {
  kcalPerCan: 250,
  gramsPerCan: 370,
  ouncesPerCan: 13,
} as const;

export const FRESH_FOOD = {
  kcalPer100g: 150,
} as const;

export const ML_PER_US_FLUID_OUNCE = 29.5735295625;

export type Species = "dog" | "cat";
export type WeightUnit = "imperial" | "metric";
export type FoodType = "dry" | "wet" | "mixed" | "fresh";

export type LifeStage =
  | "puppy-under-4-months"
  | "puppy-4-months-plus"
  | "adult-neutered"
  | "adult-intact"
  | "senior"
  | "weight-loss"
  | "active";

export type LifeStageFactor = {
  id: LifeStage;
  label: string;
  /** Multiplier applied to RER. Range endpoints use the conservative bound. */
  factor: number;
  min: number;
  max: number;
};

export const LIFE_STAGES: readonly LifeStageFactor[] = [
  {
    id: "puppy-under-4-months",
    label: "Puppy / kitten (under 4 months)",
    factor: 3,
    min: 3,
    max: 3,
  },
  {
    id: "puppy-4-months-plus",
    label: "Puppy / kitten (4 months and older)",
    factor: 2,
    min: 2,
    max: 2,
  },
  {
    id: "adult-neutered",
    label: "Adult neutered",
    factor: 1.6,
    min: 1.6,
    max: 1.6,
  },
  {
    id: "adult-intact",
    label: "Adult intact",
    factor: 1.8,
    min: 1.8,
    max: 1.8,
  },
  {
    id: "senior",
    label: "Senior",
    factor: 1.4,
    min: 1.4,
    max: 1.4,
  },
  {
    id: "weight-loss",
    label: "Weight loss / sedentary",
    factor: 1,
    min: 1,
    max: 1.2,
  },
  {
    id: "active",
    label: "Active / working",
    factor: 2,
    min: 2,
    max: 2.5,
  },
] as const;

export const NUTRITION_PROFILE_KEY = "petauthority-nutrition-profile";

export type NutritionProfile = {
  species: Species;
  unit: WeightUnit;
  weightInput: string;
  lifeStage: LifeStage;
  bcs: number;
  food: Exclude<FoodType, "fresh">;
};

export type CaloriePortion = {
  kcal: number;
  dryCups: number;
  dryGrams: number;
  wetCans: number;
  wetGrams: number;
  freshGrams: number;
};

export type NutritionResult = {
  species: Species;
  unit: WeightUnit;
  weightKg: number;
  weightLb: number;
  rer: number;
  lifeStage: LifeStageFactor;
  der: number;
  bcs: number;
  bcsFactor: number;
  bcsLabel: "Too Thin" | "Ideal" | "Heavy";
  targetKcal: number;
  waterMl: number;
  food: Exclude<FoodType, "fresh">;
  daily: CaloriePortion;
  breakfast: CaloriePortion;
  dinner: CaloriePortion;
};

export function poundsToKilograms(pounds: number): number {
  return pounds / POUNDS_PER_KILOGRAM;
}

export function kilogramsToPounds(kilograms: number): number {
  return kilograms * POUNDS_PER_KILOGRAM;
}

export function restingEnergyRequirement(weightKg: number): number {
  return 70 * Math.pow(weightKg, 0.75);
}

export function dailyEnergyRequirement(rer: number, lifeStageMultiplier: number): number {
  return rer * lifeStageMultiplier;
}

export function bodyConditionFactor(score: number): number {
  if (score < 1 || score > 9) {
    throw new RangeError("Body condition score must be between 1 and 9.");
  }
  if (score <= 3) {
    return 1.15;
  }
  if (score <= 5) {
    return 1;
  }
  return 0.85;
}

export function bodyConditionLabel(score: number): NutritionResult["bcsLabel"] {
  if (score <= 3) {
    return "Too Thin";
  }
  if (score <= 5) {
    return "Ideal";
  }
  return "Heavy";
}

/** 1 ml of water for each kilocalorie eaten. */
export function dailyWaterMilliliters(kilocalories: number): number {
  return kilocalories;
}

export function lifeStageById(id: LifeStage): LifeStageFactor {
  const stage = LIFE_STAGES.find((item) => item.id === id);
  if (!stage) {
    throw new RangeError(`Unknown life stage: ${id}`);
  }
  return stage;
}

export function portionForCalories(
  kcal: number,
  food: FoodType,
  dryCalorieFraction = 0.5,
): CaloriePortion {
  const safeKcal = Math.max(0, kcal);
  const fraction = Math.min(1, Math.max(0, dryCalorieFraction));

  if (food === "dry") {
    return dryPortion(safeKcal);
  }
  if (food === "wet") {
    return wetPortion(safeKcal);
  }
  if (food === "fresh") {
    return freshPortion(safeKcal);
  }

  const dry = dryPortion(safeKcal * fraction);
  const wet = wetPortion(safeKcal * (1 - fraction));
  return {
    kcal: safeKcal,
    dryCups: dry.dryCups,
    dryGrams: dry.dryGrams,
    wetCans: wet.wetCans,
    wetGrams: wet.wetGrams,
    freshGrams: 0,
  };
}

export function calculatePetNutrition(input: {
  species: Species;
  weight: number;
  weightUnit: WeightUnit;
  lifeStage: LifeStage;
  bcs: number;
  food: Exclude<FoodType, "fresh">;
  dryCalorieFraction?: number;
}): NutritionResult {
  if (!Number.isFinite(input.weight) || input.weight <= 0) {
    throw new RangeError("Body weight must be greater than zero.");
  }

  const weightKg =
    input.weightUnit === "metric" ? input.weight : poundsToKilograms(input.weight);
  const stage = lifeStageById(input.lifeStage);
  const rer = restingEnergyRequirement(weightKg);
  const der = dailyEnergyRequirement(rer, stage.factor);
  const bcsFactor = bodyConditionFactor(input.bcs);
  const targetKcal = Math.round(der * bcsFactor);
  const fraction = input.food === "dry" ? 1 : input.food === "wet" ? 0 : (input.dryCalorieFraction ?? 0.5);
  const daily = portionForCalories(targetKcal, input.food, fraction);
  const [breakfast, dinner] = splitDailyPortion(daily);

  return {
    species: input.species,
    unit: input.weightUnit,
    weightKg,
    weightLb: kilogramsToPounds(weightKg),
    rer,
    lifeStage: stage,
    der,
    bcs: input.bcs,
    bcsFactor,
    bcsLabel: bodyConditionLabel(input.bcs),
    targetKcal,
    waterMl: dailyWaterMilliliters(targetKcal),
    food: input.food,
    daily,
    breakfast,
    dinner,
  };
}

export function describePortion(
  portion: CaloriePortion,
  unit: WeightUnit,
  food: Exclude<FoodType, "fresh">,
): string {
  if (portion.kcal <= 0) {
    return "None";
  }
  if (food === "dry") {
    return unit === "imperial"
      ? `${formatQuantity(portion.dryCups)} cups`
      : `${Math.round(portion.dryGrams)} grams`;
  }
  if (food === "wet") {
    return unit === "imperial"
      ? `${formatQuantity(portion.wetCans)} cans`
      : `${Math.round(portion.wetGrams)} grams`;
  }

  const kibble =
    unit === "imperial"
      ? `${formatQuantity(portion.dryCups)} cups kibble`
      : `${Math.round(portion.dryGrams)} grams kibble`;
  const wet =
    unit === "imperial"
      ? `${formatQuantity(portion.wetCans)} cans wet food`
      : `${Math.round(portion.wetGrams)} grams wet food`;
  return `${kibble} + ${wet}`;
}

export function formatQuantity(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return rounded.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
}

export function formatWater(milliliters: number, unit: WeightUnit): string {
  const ml = `${Math.round(milliliters)} ml`;
  if (unit === "metric") {
    return ml;
  }
  const ounces = milliliters / ML_PER_US_FLUID_OUNCE;
  return `${formatQuantity(ounces)} fl oz (${ml})`;
}

export const TRANSITION_PHASES = [
  { id: "days-1-2", label: "Days 1–2", days: [1, 2], oldFraction: 0.75, newFraction: 0.25 },
  { id: "days-3-4", label: "Days 3–4", days: [3, 4], oldFraction: 0.5, newFraction: 0.5 },
  { id: "days-5-6", label: "Days 5–6", days: [5, 6], oldFraction: 0.25, newFraction: 0.75 },
  { id: "day-7", label: "Day 7", days: [7], oldFraction: 0, newFraction: 1 },
] as const;

export const WEEK_DAYS = [
  "Day 1",
  "Day 2",
  "Day 3",
  "Day 4",
  "Day 5",
  "Day 6",
  "Day 7",
] as const;

export function weightPresets(species: Species): { id: string; label: string; kilograms: number }[] {
  if (species === "cat") {
    return [
      { id: "toy", label: "Toy", kilograms: 3.5 },
      { id: "medium", label: "Medium", kilograms: 4.5 },
      { id: "large", label: "Large", kilograms: 7 },
    ];
  }
  return [
    { id: "toy", label: "Toy", kilograms: 3.6 },
    { id: "medium", label: "Medium", kilograms: 18 },
    { id: "large", label: "Large", kilograms: 36 },
  ];
}

export function displayWeight(kilograms: number, unit: WeightUnit): string {
  const value = unit === "metric" ? kilograms : kilogramsToPounds(kilograms);
  return formatQuantity(value);
}

function dryPortion(kcal: number): CaloriePortion {
  const cups = kcal / DRY_KIBBLE.kcalPerCup;
  return {
    kcal,
    dryCups: cups,
    dryGrams: cups * DRY_KIBBLE.gramsPerCup,
    wetCans: 0,
    wetGrams: 0,
    freshGrams: 0,
  };
}

function wetPortion(kcal: number): CaloriePortion {
  const cans = kcal / WET_FOOD.kcalPerCan;
  return {
    kcal,
    dryCups: 0,
    dryGrams: 0,
    wetCans: cans,
    wetGrams: cans * WET_FOOD.gramsPerCan,
    freshGrams: 0,
  };
}

function freshPortion(kcal: number): CaloriePortion {
  return {
    kcal,
    dryCups: 0,
    dryGrams: 0,
    wetCans: 0,
    wetGrams: 0,
    freshGrams: (kcal / FRESH_FOOD.kcalPer100g) * 100,
  };
}

export function splitDailyPortion(daily: CaloriePortion): [CaloriePortion, CaloriePortion] {
  const [breakfastKcal, dinnerKcal] = splitRounded(daily.kcal, 0);
  const [breakfastCups, dinnerCups] = splitRounded(daily.dryCups, 2);
  const [breakfastDryGrams, dinnerDryGrams] = splitRounded(Math.round(daily.dryGrams), 0);
  const [breakfastCans, dinnerCans] = splitRounded(daily.wetCans, 2);
  const [breakfastWetGrams, dinnerWetGrams] = splitRounded(Math.round(daily.wetGrams), 0);
  const [breakfastFresh, dinnerFresh] = splitRounded(Math.round(daily.freshGrams), 0);

  return [
    {
      kcal: breakfastKcal,
      dryCups: breakfastCups,
      dryGrams: breakfastDryGrams,
      wetCans: breakfastCans,
      wetGrams: breakfastWetGrams,
      freshGrams: breakfastFresh,
    },
    {
      kcal: dinnerKcal,
      dryCups: dinnerCups,
      dryGrams: dinnerDryGrams,
      wetCans: dinnerCans,
      wetGrams: dinnerWetGrams,
      freshGrams: dinnerFresh,
    },
  ];
}

function splitRounded(value: number, digits: number): [number, number] {
  const factor = 10 ** digits;
  const units = Math.round(value * factor);
  const first = Math.floor(units / 2);
  return [first / factor, (units - first) / factor];
}
