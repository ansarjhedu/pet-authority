import Link from "next/link";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { ClinicalReview } from "@/components/editorial/ClinicalReview";
import { DirectAnswer } from "@/components/editorial/SnippetAnswer";
import { EmergencyBlocks } from "@/components/emergency/EmergencyLongArticle";
import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { takeLeadSnippet } from "@/lib/editorial/lead";
import { SAFETY_LABEL, SPECIES_LABEL, type FoodItem } from "@/lib/nutrition/types";
import { cn } from "@/lib/utils";

const PILL: Record<FoodItem["safetyStatus"], string> = {
  SAFE: "bg-triage-green text-white",
  CAUTION: "bg-triage-yellow text-triage-yellow-foreground",
  TOXIC_DEADLY: "bg-triage-red text-white",
};

export function FoodLongArticle({
  food,
  longGuide,
}: {
  food: FoodItem;
  longGuide: EmergencyLongGuide;
}) {
  const { lead, sections } = takeLeadSnippet(longGuide.sections);
  return (
    <article className={MEDIAVINE_CONTENT_CLASS}>
      <header className="mb-8 max-w-reading">
        <div className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          <Link href="/nutrition" className="hover:underline">
            Food safety
          </Link>
          {" · "}
          {SPECIES_LABEL[food.species]}
        </div>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          {longGuide.title}
        </h1>
        {lead ? <DirectAnswer>{lead}</DirectAnswer> : null}
        <div
          className={cn(
            "mb-6 inline-flex min-h-11 items-center rounded-full px-4 text-sm font-bold",
            PILL[food.safetyStatus],
          )}
        >
          {SAFETY_LABEL[food.safetyStatus]}
        </div>
        <p className="mb-6 leading-relaxed text-slate-700">{longGuide.lede}</p>
        <ClinicalReview />
      </header>
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
