import type { Metadata } from "next";
import { SpeciesNutrition } from "@/components/nutrition/SpeciesNutrition";

export const metadata: Metadata = {
  title: "Cat Nutrition",
  description:
    "Kitten, adult, and senior cat calorie guidance, hydration, and quick links to safe and toxic foods.",
  alternates: { canonical: "/cats/nutrition" },
};

export default function CatNutritionPage() {
  return <SpeciesNutrition species="cats" />;
}
