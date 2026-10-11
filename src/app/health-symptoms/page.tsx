import type { Metadata } from "next";
import Link from "next/link";
import { SymptomExplorer } from "@/components/symptoms/SymptomExplorer";
import { SYMPTOM_GUIDES } from "@/lib/clinical/guides";

export const metadata: Metadata = {
  title: "Symptom Triage",
  description:
    "Filter dog, cat, bird, and small-pet symptoms by urgency. Green means watch at home, yellow means a clinic within a day, and red means go now.",
};

export default function SymptomExplorerPage() {
  return (
    <div className="container py-8 lg:py-12">
      <header className="mb-8 max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Triage
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          Symptom explorer
        </h1>
        <p className="mb-0 text-slate-700">
          Match the species and the change you see. Red symptoms should go to an emergency
          hospital. This explorer does not diagnose your pet.
        </p>
      </header>
      <SymptomExplorer symptoms={SYMPTOM_GUIDES} />
      <p className="mt-8 mb-0 max-w-reading text-sm text-slate-700">
        If the pet is unconscious, bleeding, seizuring, or bloated, skip the search and open the{" "}
        <Link href="/emergency" className="font-semibold text-triage-red hover:underline">
          emergency guide
        </Link>
        .
      </p>
    </div>
  );
}
