import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { SymptomLongArticle } from "@/components/symptoms/SymptomLongArticle";
import { getSymptomLongGuide } from "@/content/symptom-guides";
import {
  SPECIES_LABEL,
  SYMPTOM_GUIDES,
  getSymptomGuide,
} from "@/lib/clinical/guides";
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
  const longGuide = getSymptomLongGuide(symptom.species, symptom.slug);
  return {
    title: longGuide?.title ?? `${symptom.title} in ${SPECIES_LABEL[symptom.species]}`,
    description: symptom.shortDescription,
    alternates: { canonical: `/health-symptoms/${symptom.species}/${symptom.slug}` },
    robots: robotsForGuide(Boolean(longGuide)),
  };
}

export default async function SymptomGuidePage({ params }: SymptomPageProps) {
  const { animal, slug } = await params;
  const symptom = getSymptomGuide(animal, slug);
  if (!symptom) {
    notFound();
  }
  const longGuide = getSymptomLongGuide(symptom.species, symptom.slug);
  if (!longGuide) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 lg:py-12">
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
        <SymptomLongArticle symptom={symptom} longGuide={longGuide} />
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
