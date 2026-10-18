import { MedicationDisclaimer } from "@/components/medications/MedicationDisclaimer";
import { MedicationLongArticle } from "@/components/medications/MedicationLongArticle";
import { getMedicationLongGuide } from "@/content/medication-guides";
import type { Medication } from "@/lib/medications/types";

export function MedicationDetail({ medication }: { medication: Medication }) {
  const longGuide = getMedicationLongGuide(medication.slug);
  if (!longGuide) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 pb-8 sm:px-6 lg:px-8 xl:px-10 lg:pb-12">
      <MedicationDisclaimer />
      <MedicationLongArticle medication={medication} longGuide={longGuide} />
    </div>
  );
}
