import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { ClinicalReview } from "@/components/editorial/ClinicalReview";
import { SnippetAnswer } from "@/components/editorial/SnippetAnswer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DetailHero } from "@/components/media/DetailHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SymptomLongArticle } from "@/components/symptoms/SymptomLongArticle";
import { TriageMeter } from "@/components/symptoms/TriageMeter";
import { HotlineBar } from "@/components/emergency/HotlineBar";
import { getSymptomLongGuide } from "@/content/symptom-guides";
import {
  SPECIES_LABEL,
  SYMPTOM_GUIDES,
  getSymptomGuide,
} from "@/lib/clinical/guides";
import { editorialCopy, symptomLede, symptomSnippet } from "@/lib/editorial/copy";
import { symptomImage } from "@/lib/images";
import { robotsForGuide } from "@/lib/seo/indexing";
import { generateBreadcrumbSchema, generateVeterinaryArticleSchema } from "@/lib/seo/schema";

type SymptomPageProps = {
  params: Promise<{ animal: string; slug: string }>;
};

export const instant = false;

const tools = [
  { label: "Pet Food Calculator", href: "/tools/pet-food-calculator" },
  { label: "Vet Finder", href: "/tools/vet-finder" },
  { label: "AI Assistant", href: "/tools/ai-assistant" },
] as const;

export function generateStaticParams() {
  return SYMPTOM_GUIDES.map((symptom) => ({
    animal: symptom.species,
    slug: symptom.slug,
  }));
}

export async function generateMetadata({ params }: SymptomPageProps): Promise<Metadata> {
  const { animal, slug } = await params;
  const symptom = getSymptomGuide(animal, slug);
  if (!symptom) {
    return { title: "Symptom guide", robots: { index: false, follow: true } };
  }
  return {
    title: `${symptom.title} in ${SPECIES_LABEL[symptom.species]}`,
    description: symptom.shortDescription,
    alternates: { canonical: `/health-symptoms/${symptom.species}/${symptom.slug}` },
    robots: robotsForGuide(Boolean(getSymptomLongGuide(symptom.species, symptom.slug))),
  };
}

export default async function SymptomGuidePage({ params }: SymptomPageProps) {
  const { animal, slug } = await params;
  const symptom = getSymptomGuide(animal, slug);
  if (!symptom) {
    notFound();
  }
  const longGuide = getSymptomLongGuide(symptom.species, symptom.slug);

  return (
    <div className="container py-8 lg:py-12">
      {longGuide ? (
        <JsonLd
          data={generateVeterinaryArticleSchema(
            {
              title: longGuide.title,
              description: symptom.shortDescription,
              path: `/health-symptoms/${symptom.species}/${symptom.slug}`,
              faqs: longGuide.faqs,
            },
            "symptom",
          )}
        />
      ) : null}
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Symptom triage", path: "/health-symptoms" },
          {
            name: symptom.title,
            path: `/health-symptoms/${symptom.species}/${symptom.slug}`,
          },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Symptom triage", path: "/health-symptoms" },
          {
            name: symptom.title,
            path: `/health-symptoms/${symptom.species}/${symptom.slug}`,
          },
        ]}
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        {longGuide ? (
          <SymptomLongArticle symptom={symptom} longGuide={longGuide} />
        ) : (
        <article className={MEDIAVINE_CONTENT_CLASS}>
          <header className="mb-8 max-w-reading">
            <DetailHero
              src={symptomImage(symptom.species, symptom.slug)}
              alt={symptom.title}
            />
            <div className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
              {SPECIES_LABEL[symptom.species]}
            </div>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
              {symptom.title}
            </h1>
            <ClinicalReview />
          </header>

          <div className="mb-10 max-w-3xl">
            <TriageMeter tier={symptom.severityTier} />
          </div>

          {symptom.severityTier === "red" ? (
            <div className="mb-10">
              <HotlineBar />
            </div>
          ) : null}

          <div className="space-y-10">
          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              What does {symptom.title.toLowerCase()} mean?
            </h2>
            <SnippetAnswer>{symptomSnippet(symptom.species, symptom.slug)}</SnippetAnswer>
            <p className="mb-6 leading-relaxed">
              {symptomLede(symptom.species, symptom.slug, symptom.shortDescription)}
            </p>
          </section>

          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">What are common causes?</h2>
            <ul className="mb-0 list-disc space-y-2 pl-5">
              {symptom.commonCauses.map((cause) => (
                <li key={cause}>{cause}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              What should I check at home?
            </h2>
            <p className="mb-6 max-w-reading leading-relaxed text-slate-700">{editorialCopy.checklistIntro}</p>
            <ul className="list-disc space-y-2 pl-5">
              {symptom.homeTriageChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border-2 border-triage-red/30 bg-triage-red-surface p-5">
            <h2 className="mb-3 text-xl font-semibold text-triage-red-foreground">
              When is this an emergency?
            </h2>
            <ul className="mb-0 list-disc space-y-2 pl-5 text-triage-red-foreground">
              {symptom.seekImmediateCareIf.map((flag) => (
                <li key={flag}>{flag}</li>
              ))}
            </ul>
          </section>
          </div>
        </article>
        )}

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-base font-semibold text-brand-primary">Related tools</h2>
          <ul className="space-y-2">
            {tools.map((tool) => (
              <li key={tool.href}>
                <Link
                  href={tool.href}
                  className="flex min-h-11 items-center text-sm font-semibold text-slate-800 hover:text-brand-primary"
                >
                  {tool.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/emergency"
                className="flex min-h-11 items-center text-sm font-bold text-triage-red hover:underline"
              >
                Emergency guide
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
