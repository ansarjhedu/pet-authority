import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FoodDetail } from "@/components/nutrition/FoodDetail";
import { getFoodLongGuide } from "@/content/food-guides";
import { FOODS, getFood } from "@/lib/nutrition/directory";
import { SPECIES_LABEL } from "@/lib/nutrition/types";
import { robotsForGuide } from "@/lib/seo/indexing";
import { generateBreadcrumbSchema, generateVeterinaryArticleSchema } from "@/lib/seo/schema";

type FoodPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return FOODS.map((food) => ({ slug: food.slug }));
}

export async function generateMetadata({ params }: FoodPageProps): Promise<Metadata> {
  const { slug } = await params;
  const food = getFood(slug);
  if (!food) {
    return { title: "Food safety", robots: { index: false, follow: true } };
  }
  return {
    title: `${food.name} for ${SPECIES_LABEL[food.species].toLowerCase()}`,
    description: food.safeServingSize,
    alternates: { canonical: `/nutrition/${food.slug}` },
    robots: robotsForGuide(Boolean(getFoodLongGuide(food.slug))),
  };
}

export default async function FoodPage({ params }: FoodPageProps) {
  const { slug } = await params;
  const food = getFood(slug);
  if (!food) {
    notFound();
  }
  const label = `${food.name} for ${SPECIES_LABEL[food.species].toLowerCase()}`;
  const longGuide = getFoodLongGuide(food.slug);
  return (
    <>
      {longGuide ? (
        <JsonLd
          data={generateVeterinaryArticleSchema(
            {
              title: longGuide.title,
              description: longGuide.lede,
              path: `/nutrition/${food.slug}`,
              faqs: longGuide.faqs,
            },
            "nutrition",
          )}
        />
      ) : null}
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Food safety", path: "/nutrition" },
          { name: label, path: `/nutrition/${food.slug}` },
        ])}
      />
      <div className="container pt-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Food safety", path: "/nutrition" },
            { name: label, path: `/nutrition/${food.slug}` },
          ]}
        />
      </div>
      <FoodDetail food={food} />
    </>
  );
}
