import medications from "@/data/medications.json";
import {
  isPrescriptionStatus,
  type Medication,
  type PrescriptionStatus,
} from "@/lib/medications/types";

function isStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isMedication(value: unknown): value is Medication {
  if (!value || typeof value !== "object") {
    return false;
  }
  const medication = value as Record<string, unknown>;
  return (
    typeof medication.id === "string" &&
    typeof medication.slug === "string" &&
    typeof medication.name === "string" &&
    isStringList(medication.commonBrands) &&
    typeof medication.prescriptionStatus === "string" &&
    isPrescriptionStatus(medication.prescriptionStatus) &&
    isStringList(medication.primaryUses) &&
    typeof medication.weightDosageGuidelineNote === "string" &&
    typeof medication.toxicDoseThreshold === "string" &&
    isStringList(medication.overdoseSymptoms) &&
    typeof medication.emergencyProtocol === "string"
  );
}

export const MEDICATIONS: Medication[] = (medications as unknown[]).filter(isMedication);

export function getMedication(slug: string): Medication | undefined {
  return MEDICATIONS.find((medication) => medication.slug === slug);
}

export type MedicationFilter = "all" | "veterinary" | "dangerous";

export function filterMedications(filter: MedicationFilter, query: string): Medication[] {
  const needle = query.trim().toLowerCase();
  return MEDICATIONS.filter((medication) => {
    if (filter === "veterinary" && medication.prescriptionStatus === "LETHAL_TOXIN_DO_NOT_GIVE") {
      return false;
    }
    if (filter === "dangerous" && medication.prescriptionStatus !== "LETHAL_TOXIN_DO_NOT_GIVE") {
      return false;
    }
    if (!needle) {
      return true;
    }
    const haystack = [medication.name, ...medication.commonBrands, ...medication.primaryUses]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
}

export function isDangerousMedication(status: PrescriptionStatus): boolean {
  return status === "LETHAL_TOXIN_DO_NOT_GIVE";
}
