import emergencyGuides from "@/data/emergency-guides.json";
import symptoms from "@/data/symptoms.json";

export const SPECIES = ["dogs", "cats", "birds", "small-pets"] as const;
export const SEVERITY_TIERS = ["green", "yellow", "red"] as const;
export const URGENCY_LEVELS = ["CRITICAL_IMMEDIATE", "URGENT"] as const;

export type Species = (typeof SPECIES)[number];
export type SeverityTier = (typeof SEVERITY_TIERS)[number];
export type Urgency = (typeof URGENCY_LEVELS)[number];

export type EmergencyGuide = {
  id: string;
  slug: string;
  title: string;
  species: Species;
  urgency: Urgency;
  actionWithinMinutes: number;
  emergencyOverview: string;
  whatToDoSteps: string[];
  whatNotToDoWarnings: string[];
  clinicalSigns: string[];
  estimatedVetProcedures: string;
};

export type SymptomGuide = {
  id: string;
  slug: string;
  title: string;
  species: Species;
  severityTier: SeverityTier;
  shortDescription: string;
  homeTriageChecklist: string[];
  seekImmediateCareIf: string[];
  commonCauses: string[];
};

export const SPECIES_LABEL: Record<Species, string> = {
  dogs: "Dogs",
  cats: "Cats",
  birds: "Birds",
  "small-pets": "Small Pets",
};

export const SEVERITY_LABEL: Record<SeverityTier, string> = {
  green: "Code Green · Monitor",
  yellow: "Code Yellow · Urgent, 12–24 hours",
  red: "Code Red · Emergency, within 60 minutes",
};

export function isSpecies(value: string): value is Species {
  return SPECIES.some((species) => species === value);
}

function isStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isEmergencyGuide(value: unknown): value is EmergencyGuide {
  if (!value || typeof value !== "object") {
    return false;
  }
  const guide = value as Record<string, unknown>;
  return (
    typeof guide.id === "string" &&
    typeof guide.slug === "string" &&
    typeof guide.title === "string" &&
    typeof guide.species === "string" &&
    isSpecies(guide.species) &&
    (guide.urgency === "CRITICAL_IMMEDIATE" || guide.urgency === "URGENT") &&
    typeof guide.actionWithinMinutes === "number" &&
    typeof guide.emergencyOverview === "string" &&
    isStringList(guide.whatToDoSteps) &&
    isStringList(guide.whatNotToDoWarnings) &&
    isStringList(guide.clinicalSigns) &&
    typeof guide.estimatedVetProcedures === "string"
  );
}

function isSymptomGuide(value: unknown): value is SymptomGuide {
  if (!value || typeof value !== "object") {
    return false;
  }
  const symptom = value as Record<string, unknown>;
  return (
    typeof symptom.id === "string" &&
    typeof symptom.slug === "string" &&
    typeof symptom.title === "string" &&
    typeof symptom.species === "string" &&
    isSpecies(symptom.species) &&
    (symptom.severityTier === "green" ||
      symptom.severityTier === "yellow" ||
      symptom.severityTier === "red") &&
    typeof symptom.shortDescription === "string" &&
    isStringList(symptom.homeTriageChecklist) &&
    isStringList(symptom.seekImmediateCareIf) &&
    isStringList(symptom.commonCauses)
  );
}

export const EMERGENCY_GUIDES: EmergencyGuide[] = emergencyGuides.filter(isEmergencyGuide);
export const SYMPTOM_GUIDES: SymptomGuide[] = symptoms.filter(isSymptomGuide);

export function getEmergencyGuide(slug: string): EmergencyGuide | undefined {
  return EMERGENCY_GUIDES.find((guide) => guide.slug === slug);
}

export function getSymptomGuide(animal: string, slug: string): SymptomGuide | undefined {
  if (!isSpecies(animal)) {
    return undefined;
  }
  return SYMPTOM_GUIDES.find((symptom) => symptom.species === animal && symptom.slug === slug);
}

export function urgencyLabel(urgency: Urgency): string {
  return urgency === "CRITICAL_IMMEDIATE" ? "Critical — go now" : "Urgent — same day";
}

export function actionWindowLabel(minutes: number): string {
  if (minutes < 60) {
    return `Act within ${minutes} minutes`;
  }
  if (minutes === 60) {
    return "Act within 60 minutes";
  }
  const hours = Math.round(minutes / 60);
  return `Act within ${hours} hours`;
}
