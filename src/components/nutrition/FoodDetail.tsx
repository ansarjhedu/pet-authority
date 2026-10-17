import Link from "next/link";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { ClinicalReview } from "@/components/editorial/ClinicalReview";
import { SnippetAnswer } from "@/components/editorial/SnippetAnswer";
import { FoodLongArticle } from "@/components/nutrition/FoodLongArticle";
import { HotlineBar } from "@/components/emergency/HotlineBar";
import { getFoodLongGuide } from "@/content/food-guides";
import {
  editorialCopy,
  foodChemistry,
  foodEatenParagraphs,
  foodQuestion,
  foodServingParagraph,
  foodSnippet,
} from "@/lib/editorial/copy";
import { foodEmergencyHref } from "@/lib/nutrition/directory";
import { SAFETY_LABEL, SPECIES_LABEL, type FoodItem } from "@/lib/nutrition/types";
import { cn } from "@/lib/utils";

const PILL: Record<FoodItem["safetyStatus"], string> = {
  SAFE: "bg-triage-green text-white",
  CAUTION: "bg-triage-yellow text-triage-yellow-foreground",
  TOXIC_DEADLY: "bg-triage-red text-white",
};

export function FoodDetail({ food }: { food: FoodItem }) {
  const longGuide = getFoodLongGuide(food.slug);
  const emergencyHref = foodEmergencyHref(food);
  const lifeThreatening = food.safetyStatus !== "SAFE";
  const eaten = foodEatenParagraphs(food);

  return (
    <div className="container pb-8 lg:pb-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        {longGuide ? (
          <FoodLongArticle food={food} longGuide={longGuide} />
        ) : (
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
              {food.name} for {SPECIES_LABEL[food.species].toLowerCase()}
            </h1>
            <div
              className={cn(
                "inline-flex min-h-11 items-center rounded-full px-4 text-sm font-bold",
                PILL[food.safetyStatus],
              )}
            >
              {SAFETY_LABEL[food.safetyStatus]}
            </div>
          </header>
          <ClinicalReview />
          {lifeThreatening ? (
            <div className="mb-8">
              <HotlineBar />
            </div>
          ) : null}
          <div className="space-y-8">
          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              {foodQuestion(food.name, food.species)}
            </h2>
            <SnippetAnswer>{foodSnippet(food.slug)}</SnippetAnswer>
            <h3 className="mb-3 text-xl font-semibold text-slate-800">Portion and preparation</h3>
            <p className="mb-6 leading-relaxed text-slate-800">{foodServingParagraph(food)}</p>
            <h3 className="mb-3 text-xl font-semibold text-slate-800">Why this matters chemically</h3>
            <p className="mb-6 leading-relaxed">{foodChemistry(food.slug)}</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">What clinical signs can appear?</h2>
            <SnippetAnswer>
              Signs vary with the amount eaten, the animal&apos;s weight in pounds (kilograms), and how
              much time has passed. The list below is what clinics commonly ask about. It is not a
              checklist that rules disease in or out for one animal.
            </SnippetAnswer>
            <ul className="mb-0 list-disc space-y-2 pl-5">
              {food.clinicalSymptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border-2 border-triage-red bg-triage-red-surface p-5">
            <h2 className="mb-3 text-xl font-semibold text-triage-red-foreground">
              What if this was eaten?
            </h2>
            {eaten.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-sm leading-relaxed text-triage-red-foreground">
                {paragraph}
              </p>
            ))}
          </section>
          {emergencyHref ? (
            <div className="mb-6">
              <Link href={emergencyHref} className="font-bold text-triage-red hover:underline">
                Open the emergency guide
              </Link>
            </div>
          ) : null}
          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              Which agencies regulate this advice?
            </h2>
            <p className="mb-6 leading-relaxed">{editorialCopy.regulator}</p>
          </section>
          </div>
        </article>
        )}

        <aside className="space-y-4">
          {food.safetyStatus === "SAFE" ? (
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="mb-3 text-base font-semibold text-brand-primary">Portion planning</h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-700">
                Treats sit on top of a complete diet, and they should stay near ten percent of the daily
                calorie target. Use the calculator with the pet&apos;s weight in pounds (kilograms), then
                keep extras small rather than adding a full extra meal.
              </p>
              <Link
                href="/tools/pet-food-calculator"
                className="inline-flex min-h-11 items-center text-sm font-bold text-brand-primary hover:underline"
              >
                Open the pet food calculator
              </Link>
            </section>
          ) : (
            <section className="rounded-2xl border border-triage-red/30 bg-triage-red-surface p-5">
              <h2 className="mb-3 text-base font-semibold text-triage-red-foreground">No safe portion</h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-800">
                This food has no treat allowance and no leftover amount to finish at home. If it was
                eaten, call a poison hotline and use the vet finder. A calorie calculator does not
                clear a toxin.
              </p>
              <Link
                href="/tools/vet-finder"
                className="inline-flex min-h-11 items-center text-sm font-bold text-triage-red hover:underline"
              >
                Find a 24/7 emergency hospital
              </Link>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}
