export const PRESCRIPTION_STATUSES = [
  "OTC_VET_APPROVED",
  "PRESCRIPTION_ONLY",
  "LETHAL_TOXIN_DO_NOT_GIVE",
] as const;

export type PrescriptionStatus = (typeof PRESCRIPTION_STATUSES)[number];

export type Medication = {
  id: string;
  slug: string;
  name: string;
  commonBrands: string[];
  prescriptionStatus: PrescriptionStatus;
  primaryUses: string[];
  weightDosageGuidelineNote: string;
  toxicDoseThreshold: string;
  overdoseSymptoms: string[];
  emergencyProtocol: string;
};

export const PRESCRIPTION_LABEL: Record<PrescriptionStatus, string> = {
  OTC_VET_APPROVED: "OTC only with veterinary instruction",
  PRESCRIPTION_ONLY: "Prescription only",
  LETHAL_TOXIN_DO_NOT_GIVE: "Do not give — human OTC toxin",
};

export function isPrescriptionStatus(value: string): value is PrescriptionStatus {
  return PRESCRIPTION_STATUSES.some((status) => status === value);
}
