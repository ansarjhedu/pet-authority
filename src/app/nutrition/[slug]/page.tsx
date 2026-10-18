import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FoodDetail } from "@/components/nutrition/FoodDetail";
import { getFoodLongGuide } from "@/content/food-guides";
import { FOOD_TOPIC_SLUG, FOOD_TOPICS, getFoodTopic } from "@/lib/nutrition/topics";
import { robotsForGuide } from "@/lib/seo/indexing";
import { generateBreadcrumbSchema, generateVeterinaryArticleSchema } from "@/lib/seo/schema";

type FoodPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return FOOD_TOPICS.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: FoodPageProps): Promise<Metadata> {
  const { slug } = await params;
  const redirected = FOOD_TOPIC_SLUG[slug];
  if (redirected && redirected !== slug) {
    return { title: "Food safety", robots: { index: false, follow: true } };
  }
  const topic = getFoodTopic(slug);
  if (!topic) {
    return { title: "Food safety", robots: { index: false, follow: true } };
  }
  const guide = getFoodLongGuide(topic.slug);
  return {
    title: guide?.title ?? `${topic.name} food safety`,
    description: topic.variants.map((v) => v.safeServingSize).join(" "),
    alternates: { canonical: `/nutrition/${topic.slug}` },
    robots: robotsForGuide(Boolean(guide)),
  };
}

export default async function FoodPage({ params }: FoodPageProps) {
  const { slug } = await params;
  const redirected = FOOD_TOPIC_SLUG[slug];
  if (redirected && redirected !== slug) {
    redirect(`/nutrition/${redirected}`);
  }
  const topic = getFoodTopic(slug);
  if (!topic) {
    notFound();
  }
  const guide = getFoodLongGuide(topic.slug);
  if (!guide) {
    notFound();
  }
  const label = topic.name;
  return (
    <>
      <JsonLd
        data={generateVeterinaryArticleSchema(
          {
            title: guide.title,
            description: guide.lede,
            path: `/nutrition/${topic.slug}`,
            faqs: guide.faqs,
          },
          "nutrition",
        )}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Food safety", path: "/nutrition" },
          { name: label, path: `/nutrition/${topic.slug}` },
        ])}
      />
      <div className="mx-auto w-full max-w-[100rem] px-4 pt-8 sm:px-6 lg:px-8 xl:px-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Food safety", path: "/nutrition" },
            { name: label, path: `/nutrition/${topic.slug}` },
          ]}
        />
      </div>
      <FoodDetail topic={topic} />
    </>
  );
}
