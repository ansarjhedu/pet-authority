import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { EmergencyLongArticle } from "@/components/emergency/EmergencyLongArticle";
import { getEmergencyLongGuide } from "@/content/emergency-guides";
import { EMERGENCY_GUIDES, getEmergencyGuide } from "@/lib/clinical/guides";
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
  const longGuide = getEmergencyLongGuide(guide.slug);
  return {
    title: longGuide?.title ?? guide.title,
    description: guide.emergencyOverview,
    alternates: { canonical: `/emergency/${guide.slug}` },
    robots: robotsForGuide(Boolean(longGuide)),
  };
}

export default async function EmergencyGuidePage({ params }: EmergencyGuidePageProps) {
  const { slug } = await params;
  const guide = getEmergencyGuide(slug);
  if (!guide) {
    notFound();
  }
  const longGuide = getEmergencyLongGuide(guide.slug);
  if (!longGuide) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 lg:py-12">
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
        <EmergencyLongArticle guide={guide} longGuide={longGuide} />
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
