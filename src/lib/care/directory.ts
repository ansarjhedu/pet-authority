import routines from "@/data/care-routines.json";
import {
  isCareCategory,
  isCareSpecies,
  type CareRoutine,
  type CareSpecies,
} from "@/lib/care/types";

function isCareRoutine(value: unknown): value is CareRoutine {
  if (!value || typeof value !== "object") {
    return false;
  }
  const routine = value as Record<string, unknown>;
  return (
    typeof routine.id === "string" &&
    typeof routine.slug === "string" &&
    typeof routine.species === "string" &&
    isCareSpecies(routine.species) &&
    typeof routine.category === "string" &&
    isCareCategory(routine.category) &&
    typeof routine.title === "string" &&
    typeof routine.summary === "string" &&
    Array.isArray(routine.schedule) &&
    routine.schedule.every((step) => {
      if (!step || typeof step !== "object") {
        return false;
      }
      const item = step as { when?: unknown; action?: unknown };
      return typeof item.when === "string" && typeof item.action === "string";
    })
  );
}

export const CARE_ROUTINES: CareRoutine[] = (routines as unknown[]).filter(isCareRoutine);

export function routinesForSpecies(species: CareSpecies): CareRoutine[] {
  return CARE_ROUTINES.filter((routine) => routine.species === species);
}
