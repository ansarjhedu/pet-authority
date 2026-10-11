import type { Metadata } from "next";
import { FoodExplorer } from "@/components/nutrition/FoodExplorer";

export const metadata: Metadata = {
  title: "Food Safety",
  description:
    "Search which foods are safe, limited, or toxic for dogs, cats, birds, and small pets, including chocolate, grapes, xylitol, lilies, and pumpkin.",
  alternates: { canonical: "/nutrition" },
};

export default function NutritionPage() {
  return (
    <div className="container py-8 lg:py-12">
      <header className="mb-8 max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Nutrition
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          Can my pet eat this?
        </h1>
        <p className="mb-0 text-slate-700">
          Search a food and the species. Green means a plain portion can fit a treat plan. Amber
          means strict limits. Red means do not wait for symptoms before you call.
        </p>
      </header>
      <FoodExplorer />
    </div>
  );
}
