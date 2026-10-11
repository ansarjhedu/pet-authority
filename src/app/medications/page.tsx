import type { Metadata } from "next";
import { MedicationDisclaimer } from "@/components/medications/MedicationDisclaimer";
import { MedicationExplorer } from "@/components/medications/MedicationExplorer";
import { MEDICATIONS } from "@/lib/medications/directory";

export const metadata: Metadata = {
  title: "Medications & Safety",
  description:
    "Educational notes on veterinary medicines and human painkillers that are dangerous for pets. Not a dosing chart.",
  alternates: { canonical: "/medications" },
};

export default function MedicationsPage() {
  return (
    <div className="container py-8 lg:py-12">
      <MedicationDisclaimer />
      <header className="mb-8 max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Clinical safety
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          Medications and safety
        </h1>
        <p className="mb-0 text-slate-700">
          Compare medicines a veterinarian may prescribe with human pain tablets that injure the
          stomach, kidneys, or blood. The notes explain the risk. They do not tell you how many
          milligrams to give.
        </p>
      </header>
      <MedicationExplorer medications={MEDICATIONS} />
    </div>
  );
}
