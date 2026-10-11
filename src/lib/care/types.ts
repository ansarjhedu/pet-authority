export const CARE_SPECIES = ["dogs", "cats"] as const;
export const CARE_CATEGORIES = [
  "vaccination",
  "dental",
  "parasites",
  "grooming",
  "exercise",
  "senior",
] as const;

export type CareSpecies = (typeof CARE_SPECIES)[number];
export type CareCategory = (typeof CARE_CATEGORIES)[number];

export type CareStep = {
  when: string;
  action: string;
};

export type CareRoutine = {
  id: string;
  slug: string;
  species: CareSpecies;
  category: CareCategory;
  title: string;
  summary: string;
  schedule: CareStep[];
};

export function isCareSpecies(value: string): value is CareSpecies {
  return CARE_SPECIES.some((species) => species === value);
}

export function isCareCategory(value: string): value is CareCategory {
  return CARE_CATEGORIES.some((category) => category === value);
}
