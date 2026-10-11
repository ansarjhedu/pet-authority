import Link from "next/link";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { ClinicalReview } from "@/components/editorial/ClinicalReview";
import { SnippetAnswer } from "@/components/editorial/SnippetAnswer";
import { HotlineBar } from "@/components/emergency/HotlineBar";
import { MedicationDisclaimer } from "@/components/medications/MedicationDisclaimer";
import { MedicationLongArticle } from "@/components/medications/MedicationLongArticle";
import { getMedicationLongGuide } from "@/content/medication-guides";
import { editorialCopy, medicationParagraph, medicationSnippet } from "@/lib/editorial/copy";
import { isDangerousMedication } from "@/lib/medications/directory";
import { PRESCRIPTION_LABEL, type Medication } from "@/lib/medications/types";

export function MedicationDetail({ medication }: { medication: Medication }) {
  const longGuide = getMedicationLongGuide(medication.slug);
  const dangerous = isDangerousMedication(medication.prescriptionStatus);

  return (
    <div className="container pb-8 lg:pb-12">
      <MedicationDisclaimer />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        {longGuide ? (
          <MedicationLongArticle medication={medication} longGuide={longGuide} />
        ) : (
        <article className={MEDIAVINE_CONTENT_CLASS}>
          <header className="mb-8 max-w-reading">
            <div className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
              <Link href="/medications" className="hover:underline">
                Medications and safety
              </Link>
            </div>
            <h1 className="mb-3 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
              {medication.name}
            </h1>
            <div className="mb-6 text-slate-700">{medication.commonBrands.join(", ")}</div>
            <div
              className={
                dangerous
                  ? "inline-flex min-h-11 items-center rounded-full bg-triage-red px-4 py-2 text-sm font-bold text-white"
                  : "inline-flex min-h-11 items-center rounded-full bg-brand-primary-50 px-4 py-2 text-sm font-bold text-brand-primary"
              }
            >
              {PRESCRIPTION_LABEL[medication.prescriptionStatus]}
            </div>
          </header>
          <ClinicalReview />
          {dangerous ? (
            <div className="mb-8">
              <HotlineBar />
            </div>
          ) : null}
          <div className="space-y-8">
          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              Is {medication.name} safe to give at home?
            </h2>
            <SnippetAnswer>{medicationSnippet(medication.slug)}</SnippetAnswer>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              {dangerous ? "Why this is dangerous" : "Veterinary use"}
            </h2>
            <ul className="mb-0 list-disc space-y-2 pl-5">
              {medication.primaryUses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              Weight and dosage reference
            </h2>
            <p className="mb-6 font-bold leading-relaxed text-triage-red">
              Do not calculate a home dose from this page. A veterinarian uses the animal&apos;s weight
              in pounds (kilograms), the species, and the exact product. This database does not
              publish a milligram chart, and a dose must never be copied from another pet.
            </p>
            <p className="mb-6 leading-relaxed">{medicationParagraph(medication.weightDosageGuidelineNote)}</p>
          </section>

          <section className="rounded-2xl border-2 border-triage-red bg-triage-red-surface p-5">
            <h2 className="mb-3 text-xl font-semibold text-triage-red-foreground">
              Overdose and toxic exposure
            </h2>
            <p className="mb-6 text-sm font-semibold leading-relaxed text-triage-red-foreground">
              {medicationParagraph(medication.toxicDoseThreshold)}
            </p>
            <ul className="mb-0 list-disc space-y-2 pl-5 text-sm text-triage-red-foreground">
              {medication.overdoseSymptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
          </section>

          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              What the emergency vet will do
            </h2>
            <p className="mb-6 leading-relaxed">{medicationParagraph(medication.emergencyProtocol)}</p>
          </section>
          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              Which agencies regulate veterinary drugs?
            </h2>
            <p className="mb-6 leading-relaxed">{editorialCopy.regulator}</p>
          </section>
          </div>
        </article>
        )}

        <aside className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-base font-semibold text-brand-primary">If it was swallowed</h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-700">
              Bring the bottle, because the strength in milligrams and the time of ingestion change
              the plan. A veterinarian still has to examine the animal. Human pain tablets are not a
              home treatment while you travel to the clinic.
            </p>
            <Link
              href="/emergency"
              className="inline-flex min-h-11 items-center text-sm font-bold text-triage-red hover:underline"
            >
              Open the emergency guide
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}
