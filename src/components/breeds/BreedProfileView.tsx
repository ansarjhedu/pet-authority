import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { BreedGuideArticle } from "@/components/breeds/BreedGuideArticle";
import { ClinicalReview } from "@/components/editorial/ClinicalReview";
import { SnippetAnswer } from "@/components/editorial/SnippetAnswer";
import { getBreedGuide } from "@/content/breed-guides";
import {
  breedQuestion,
  breedSnippet,
  collapseParagraph,
  editorialCopy,
  fitParagraph,
  planningAud,
} from "@/lib/editorial/copy";
import { healthRiskHref } from "@/lib/breeds/directory";
import { SPECIES_LABEL, SPECIES_PATH, type Breed } from "@/lib/breeds/types";

const SIZE_LABEL: Record<Breed["size"], string> = {
  toy: "Toy",
  small: "Small",
  medium: "Medium",
  large: "Large",
  giant: "Giant",
};

function formatRange(min: number, max: number, unit: string) {
  const number = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
  return `${number.format(min)}–${number.format(max)} ${unit}`;
}

function formatMoney(amount: number, currency: "USD" | "GBP" | "AUD") {
  const formatted = new Intl.NumberFormat(currency === "GBP" ? "en-GB" : "en-US", {
    style: currency === "AUD" ? "decimal" : "currency",
    currency: currency === "AUD" ? "USD" : currency,
    maximumFractionDigits: 0,
  }).format(amount);
  if (currency === "AUD") {
    return `A$${formatted}`;
  }
  return formatted;
}

export function BreedProfileView({ breed }: { breed: Breed }) {
  const guide = getBreedGuide(breed.slug);
  const facts = [
    {
      label: "Weight",
      value: `${formatRange(breed.weightLbs.min, breed.weightLbs.max, "lb")} (${formatRange(breed.weightKg.min, breed.weightKg.max, "kg")})`,
    },
    { label: "Lifespan", value: breed.lifespan },
    { label: "Grooming", value: `${breed.groomingDemand} of 5` },
    { label: "Energy", value: `${breed.energyLevel} of 5` },
    {
      label: "Apartment",
      value: breed.apartmentFriendly ? "Suitable for many apartments" : "Better with more space",
    },
  ];

  return (
    <div className="container pb-8 lg:pb-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        {guide ? (
          <BreedGuideArticle breed={breed} guide={guide} />
        ) : (
        <article className={MEDIAVINE_CONTENT_CLASS}>
          <header className="mb-8 max-w-reading">
            <div className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
              <Link href={SPECIES_PATH[breed.species]} className="hover:underline">
                {SPECIES_LABEL[breed.species]}
              </Link>
              {" · "}
              {SIZE_LABEL[breed.size]}
            </div>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
              {breed.name}
            </h1>
            <p className="mb-6 leading-relaxed text-slate-700">
              {fitParagraph(collapseParagraph(breed.tagline), editorialCopy.taglineAdditions)}
            </p>
            <ClinicalReview />
          </header>
          <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">Quick facts</h2>
            <table className="w-full border-collapse overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm">
              <tbody>
                {facts.map((fact) => (
                  <tr key={fact.label} className="border-b border-slate-200 last:border-b-0">
                    <th
                      scope="row"
                      className="w-36 bg-brand-primary-50 px-4 py-3 text-left font-semibold text-brand-primary"
                    >
                      {fact.label}
                    </th>
                    <td className="px-4 py-3 text-slate-800">{fact.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              {breed.species === "dogs"
                ? "Which kennel clubs recognize this breed?"
                : breed.species === "cats"
                  ? "Which registries describe this breed?"
                  : "What standard guides this profile?"}
            </h2>
            <p className="mb-6 max-w-reading leading-relaxed text-slate-800">
              {breed.species === "dogs"
                ? editorialCopy.dogStandard
                : breed.species === "cats"
                  ? editorialCopy.catStandard
                  : breed.species === "birds"
                    ? editorialCopy.birdStandard
                    : editorialCopy.smallPetStandard}
            </p>
          </section>

          <section className="rounded-2xl border border-brand-primary/20 bg-brand-primary-50 p-5 sm:p-6">
            <h2 className="mb-2 text-2xl font-semibold text-brand-primary">
              Daily calorie and portion estimation
            </h2>
            <p className="mb-6 leading-relaxed text-slate-800">
              A typical adult {breed.name} starts near{" "}
              <strong>{`${breed.dailyCalorieBaseline.toLocaleString("en-US")} kcal/day,`}</strong> with
              about {breed.exerciseMinutesPerDay} minutes of steady daily activity. {editorialCopy.calorieAddition}
            </p>
            <p className="mb-6 text-sm leading-relaxed text-slate-700">
              {fitParagraph(collapseParagraph(breed.dietaryNotes), editorialCopy.dietAdditions)}
            </p>
            <Link
              href="/tools/pet-food-calculator"
              className="inline-flex min-h-11 items-center rounded-full bg-brand-primary px-5 text-sm font-bold text-white hover:bg-brand-primary-800"
            >
              {`Calculate ${breed.name}'s Custom Food Portions →`}
            </Link>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              Common health predispositions
            </h2>
            <ul className="space-y-3">
              {breed.healthRisks.map((risk) => (
                <li
                  key={risk.condition}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-slate-800">{risk.condition}</h3>
                    <span
                      className={
                        risk.severity === "Urgent"
                          ? "rounded-full bg-triage-red-surface px-2.5 py-0.5 text-xs font-bold text-triage-red-foreground"
                          : "rounded-full bg-triage-yellow-surface px-2.5 py-0.5 text-xs font-bold text-triage-yellow-foreground"
                      }
                    >
                      {risk.severity}
                    </span>
                  </div>
                  <div className="mb-3 text-sm leading-relaxed text-slate-700">Watch for: {risk.warningSign}</div>
                  <Link
                    href={healthRiskHref(breed, risk.condition, risk.warningSign)}
                    className="text-sm font-bold text-brand-primary hover:underline"
                  >
                    Check this sign in symptom triage
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">{breedQuestion(breed.name)}</h2>
            <SnippetAnswer>{breedSnippet(breed.name)}</SnippetAnswer>
            <div className="space-y-6">
              {breed.faqs.map((faq) => (
                <section key={faq.question}>
                  <h3 className="mb-3 text-xl font-semibold text-slate-800">{faq.question}</h3>
                  <p className="mb-6 leading-relaxed text-slate-700">
                    {fitParagraph(collapseParagraph(faq.answer), editorialCopy.faqAdditions)}
                  </p>
                </section>
              ))}
            </div>
          </section>
          </div>
        </article>
        )}

        <aside className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-base font-semibold text-brand-primary">
              Typical annual ownership cost
            </h2>
            <div className="mb-1 text-2xl font-semibold text-slate-800">
              {formatMoney(breed.annualCostUsd, "USD")}
            </div>
            <div className="mb-1 text-lg font-semibold text-slate-700">
              {formatMoney(breed.annualCostGbp, "GBP")}
            </div>
            <div className="mb-3 text-lg font-semibold text-slate-700">
              {formatMoney(planningAud(breed.annualCostUsd), "AUD")}
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-700">{editorialCopy.costNote}</p>
          </section>

          <section className="rounded-2xl border border-brand-primary/20 bg-white p-5">
            <div className="mb-3 flex items-center gap-2 text-brand-primary">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <h2 className="text-base font-semibold">Editorial sources</h2>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-700">
              <Link href="/editorial-standards" className="font-semibold text-brand-primary hover:underline">
                Researched & Compiled by the Pet Safety Hub Editorial Team
              </Link>
              . Clinical Data Sources: ASPCA Animal Poison Control Center & Merck Veterinary Manual.
              This profile is educational, and a licensed veterinarian who has examined your animal
              still has to confirm the next step.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
