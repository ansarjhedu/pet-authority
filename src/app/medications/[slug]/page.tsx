import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MedicationDetail } from "@/components/medications/MedicationDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { getMedicationLongGuide } from "@/content/medication-guides";
import { getMedication, MEDICATIONS } from "@/lib/medications/directory";
import { robotsForGuide } from "@/lib/seo/indexing";
import { generateBreadcrumbSchema, generateVeterinaryArticleSchema } from "@/lib/seo/schema";

type MedicationPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return MEDICATIONS.map((medication) => ({ slug: medication.slug }));
}

export async function generateMetadata({ params }: MedicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const medication = getMedication(slug);
  if (!medication) {
    return { title: "Medication safety", robots: { index: false, follow: true } };
  }
  return {
    title: medication.name,
    description: `${medication.name} (${medication.commonBrands.join(", ")}): educational safety notes for pet owners. Not a dose chart.`,
    alternates: { canonical: `/medications/${medication.slug}` },
    robots: robotsForGuide(Boolean(getMedicationLongGuide(medication.slug))),
  };
}

export default async function MedicationPage({ params }: MedicationPageProps) {
  const { slug } = await params;
  const medication = getMedication(slug);
  if (!medication) {
    notFound();
  }
  const longGuide = getMedicationLongGuide(medication.slug);
  if (!longGuide) {
    notFound();
  }
  return (
    <>
      {longGuide ? (
        <JsonLd
          data={generateVeterinaryArticleSchema(
            {
              title: longGuide.title,
              description: longGuide.lede,
              path: `/medications/${medication.slug}`,
              faqs: longGuide.faqs,
            },
            "medication",
          )}
        />
      ) : null}
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Medications & Safety", path: "/medications" },
          { name: medication.name, path: `/medications/${medication.slug}` },
        ])}
      />
      <div className="container pt-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Medications & Safety", path: "/medications" },
            { name: medication.name, path: `/medications/${medication.slug}` },
          ]}
        />
      </div>
      <MedicationDetail medication={medication} />
    </>
  );
}
