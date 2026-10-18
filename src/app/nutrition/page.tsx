import type { Metadata } from "next";
import { HubBanner } from "@/components/media/HubBanner";
import { FoodExplorer } from "@/components/nutrition/FoodExplorer";
import { hubImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Food Safety",
  description:
    "Search which foods are safe, limited, or toxic for dogs, cats, birds, and small pets, including chocolate, grapes, xylitol, lilies, and pumpkin.",
  alternates: { canonical: "/nutrition" },
};

export default function NutritionPage() {
  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 lg:py-12">
      <HubBanner
        src={hubImage("nutrition")}
        alt="Pet nutrition and food safety"
        eyebrow="Nutrition"
        title="Can my pet eat this?"
        lede="Search a food and the species. Green means a plain portion can fit a treat plan. Amber means strict limits. Red means do not wait for symptoms before you call."
      />
      <FoodExplorer />
    </div>
  );
}
