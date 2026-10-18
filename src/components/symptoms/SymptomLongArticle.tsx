import Link from "next/link";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { ClinicalReview } from "@/components/editorial/ClinicalReview";
import { DirectAnswer } from "@/components/editorial/SnippetAnswer";
import { EmergencyBlocks } from "@/components/emergency/EmergencyLongArticle";
import { DetailHero } from "@/components/media/DetailHero";
import { TriageMeter } from "@/components/symptoms/TriageMeter";
import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { takeLeadSnippet } from "@/lib/editorial/lead";
import { SPECIES_LABEL, type SymptomGuide } from "@/lib/clinical/guides";
import { symptomImage } from "@/lib/images";

export function SymptomLongArticle({
  symptom,
  longGuide,
}: {
  symptom: SymptomGuide;
  longGuide: EmergencyLongGuide;
}) {
  const { lead, sections } = takeLeadSnippet(longGuide.sections);
  return (
    <article className={MEDIAVINE_CONTENT_CLASS}>
      <header className="mb-8 max-w-reading">
        <DetailHero
          src={symptomImage(symptom.species, symptom.slug)}
          alt={symptom.title}
        />
        <div className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          <Link href="/health-symptoms" className="hover:underline">
            Symptom triage
          </Link>
          {" · "}
          {SPECIES_LABEL[symptom.species]}
        </div>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          {longGuide.title}
        </h1>
        {lead ? <DirectAnswer>{lead}</DirectAnswer> : null}
        <p className="mb-6 leading-relaxed text-slate-700">{longGuide.lede}</p>
        <ClinicalReview />
      </header>
      <div className="mb-10 max-w-3xl">
        <TriageMeter tier={symptom.severityTier} />
      </div>
      <div className="space-y-8">
        {sections.map((section) => {
          const Heading = section.level === 3 ? "h3" : "h2";
          const headingClass =
            section.level === 3
              ? "mb-3 text-xl font-semibold text-slate-800"
              : "mb-4 text-2xl font-semibold text-slate-800";
          return (
            <section key={section.heading}>
              <Heading className={headingClass}>{section.heading}</Heading>
              <EmergencyBlocks blocks={section.blocks} />
            </section>
          );
        })}
      </div>
    </article>
  );
}
