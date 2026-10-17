import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { ClinicalReview } from "@/components/editorial/ClinicalReview";
import { SnippetAnswer } from "@/components/editorial/SnippetAnswer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ActionChecklist } from "@/components/emergency/ActionChecklist";
import { EmergencyLongArticle } from "@/components/emergency/EmergencyLongArticle";
import { HotlineBar } from "@/components/emergency/HotlineBar";
import { getEmergencyLongGuide } from "@/content/emergency-guides";
import {
  EMERGENCY_GUIDES,
  SPECIES_LABEL,
  actionWindowLabel,
  getEmergencyGuide,
  urgencyLabel,
} from "@/lib/clinical/guides";
import { emergencyBody, emergencyProcedure, emergencySnippet } from "@/lib/editorial/copy";
import { robotsForGuide } from "@/lib/seo/indexing";
import { generateBreadcrumbSchema, generateVeterinaryArticleSchema } from "@/lib/seo/schema";

type EmergencyGuidePageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return EMERGENCY_GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: EmergencyGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getEmergencyGuide(slug);
  if (!guide) {
    return { title: "Emergency guide", robots: { index: false, follow: true } };
  }
  return {
    title: guide.title,
    description: guide.emergencyOverview,
    alternates: { canonical: `/emergency/${guide.slug}` },
    robots: robotsForGuide(Boolean(getEmergencyLongGuide(guide.slug))),
  };
}

export default async function EmergencyGuidePage({ params }: EmergencyGuidePageProps) {
  const { slug } = await params;
  const guide = getEmergencyGuide(slug);
  if (!guide) {
    notFound();
  }
  const longGuide = getEmergencyLongGuide(guide.slug);

  return (
    <div className="container py-8 lg:py-12">
      {longGuide ? (
        <JsonLd
          data={generateVeterinaryArticleSchema(
            {
              title: longGuide.title,
              description: guide.emergencyOverview,
              path: `/emergency/${guide.slug}`,
              faqs: longGuide.faqs,
            },
            "emergency",
          )}
        />
      ) : null}
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Emergency guide", path: "/emergency" },
          { name: guide.title, path: `/emergency/${guide.slug}` },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Emergency guide", path: "/emergency" },
          { name: guide.title, path: `/emergency/${guide.slug}` },
        ]}
      />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        {longGuide ? (
          <EmergencyLongArticle guide={guide} longGuide={longGuide} />
        ) : (
        <article className={MEDIAVINE_CONTENT_CLASS}>
          <header className="mb-6 rounded-3xl bg-triage-red px-5 py-6 text-white sm:px-8">
            <div className="mb-3 text-sm font-semibold tracking-wide text-white uppercase">
              {SPECIES_LABEL[guide.species]} · {urgencyLabel(guide.urgency)}
            </div>
            <h1 className="mb-4 max-w-reading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {guide.title}
            </h1>
            <div className="mb-6 max-w-reading text-base font-semibold text-white">
              {actionWindowLabel(guide.actionWithinMinutes)}
            </div>
            <Link
              href="/tools/vet-finder"
              className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-bold text-triage-red hover:bg-triage-red-surface"
            >
              Call an emergency hospital
            </Link>
          </header>
          <ClinicalReview />
          <div className="mb-8">
            <HotlineBar />
          </div>
          <div className="space-y-8">
          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">What is {guide.title.toLowerCase()}?</h2>
            <SnippetAnswer>{emergencySnippet(guide.slug)}</SnippetAnswer>
            <p className="mb-6 leading-relaxed">{emergencyBody(guide.emergencyOverview)}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              What to Do in the Next 15 Minutes
            </h2>
            <ActionChecklist steps={guide.whatToDoSteps} />
          </section>

          <section className="rounded-2xl border-2 border-triage-yellow bg-triage-yellow-surface p-5">
            <h2 className="mb-3 text-xl font-semibold text-triage-yellow-foreground">What NOT to Do</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-triage-yellow-foreground">
              {guide.whatNotToDoWarnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          </section>

          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">Signs the team will ask about</h2>
            <ul className="mb-0 list-disc space-y-2 pl-5">
              {guide.clinicalSigns.map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
          </section>

          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">What the ER Vet Will Do</h2>
            <p className="mb-6 leading-relaxed">{emergencyProcedure(guide.estimatedVetProcedures)}</p>
          </section>
          </div>
        </article>
        )}

        <aside className="h-fit space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-base font-semibold text-brand-primary">While you are on the way</h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-700">
              Use the vet finder for a published 24/7 hospital, then call so they can prepare oxygen,
              a litter box check, or a toxin protocol.
            </p>
            <Link
              href="/tools/vet-finder"
              className="inline-flex min-h-11 items-center text-sm font-bold text-brand-primary hover:underline"
            >
              Find Nearest 24/7 Emergency Animal Hospital
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}
