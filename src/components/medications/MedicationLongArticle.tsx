import Link from "next/link";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { ClinicalReview } from "@/components/editorial/ClinicalReview";
import { EmergencyBlocks } from "@/components/emergency/EmergencyLongArticle";
import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { PRESCRIPTION_LABEL, type Medication } from "@/lib/medications/types";
import { cn } from "@/lib/utils";

export function MedicationLongArticle({
  medication,
  longGuide,
}: {
  medication: Medication;
  longGuide: EmergencyLongGuide;
}) {
  const dangerous = medication.prescriptionStatus === "LETHAL_TOXIN_DO_NOT_GIVE";

  return (
    <article className={MEDIAVINE_CONTENT_CLASS}>
      <header className="mb-8 max-w-reading">
        <div className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          <Link href="/medications" className="hover:underline">
            Medications and safety
          </Link>
        </div>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          {longGuide.title}
        </h1>
        <div className="mb-4 text-slate-700">{medication.commonBrands.join(", ")}</div>
        <div
          className={cn(
            "mb-6 inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-bold",
            dangerous ? "bg-triage-red text-white" : "bg-brand-primary-50 text-brand-primary",
          )}
        >
          {PRESCRIPTION_LABEL[medication.prescriptionStatus]}
        </div>
        <p className="mb-6 leading-relaxed text-slate-700">{longGuide.lede}</p>
        <ClinicalReview />
      </header>
      <div className="space-y-8">
        {longGuide.sections.map((section) => {
          const Heading = section.level === 3 ? "h3" : "h2";
          const warning = section.heading.startsWith("2. Critical");
          const headingClass =
            section.level === 3
              ? "mb-3 text-xl font-semibold text-slate-800"
              : warning
                ? "mb-4 text-2xl font-semibold text-triage-red-foreground"
                : "mb-4 text-2xl font-semibold text-slate-800";
          return (
            <section
              key={section.heading}
              className={warning ? "rounded-2xl border-2 border-triage-red bg-triage-red-surface p-5" : undefined}
            >
              <Heading className={headingClass}>{section.heading}</Heading>
              <EmergencyBlocks blocks={section.blocks} />
            </section>
          );
        })}
      </div>
    </article>
  );
}
