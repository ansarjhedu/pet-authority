import type { Metadata } from "next";
import { SpeciesNutrition } from "@/components/nutrition/SpeciesNutrition";

export const metadata: Metadata = {
  title: "Dog Nutrition",
  description:
    "Puppy, adult, and senior dog calorie guidance, hydration, and quick links to safe and toxic foods.",
  alternates: { canonical: "/dogs/nutrition" },
};

export default function DogNutritionPage() {
  return <SpeciesNutrition species="dogs" />;
}
