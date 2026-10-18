import type { Metadata } from "next";
import { HubIntro } from "@/components/editorial/HubIntro";
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
      <HubIntro
        howToUse="Filter by species and safety level, then open the topic guide. Each guide covers every species that shares that food name, with anchors for dogs, cats, birds, or small pets. Use Code Red toxin pages the same hour exposure happens."
        whatThisIsNot="This hub is not a feeding calculator for a complete diet, not a home detox recipe book, and not permission to share human dessert with a pet."
        urgentCards={[
          {
            href: "/nutrition/chocolate",
            title: "Chocolate",
            blurb: "Theobromine risk rises with darker chocolate and smaller body size. Open before you wait for tremors.",
          },
          {
            href: "/nutrition/grapes-raisins",
            title: "Grapes and raisins",
            blurb: "Any amount in a dog is treated as a kidney emergency. Cats should not get a “safe” serving either.",
          },
          {
            href: "/nutrition/xylitol",
            title: "Xylitol",
            blurb: "Sugar-free gum and baked goods can drop a dog’s blood sugar within about an hour.",
          },
          {
            href: "/nutrition/lilies",
            title: "Lilies",
            blurb: "True lilies can destroy cat kidneys from pollen or vase water. Dogs still should not chew the plant.",
          },
          {
            href: "/nutrition/onions-garlic",
            title: "Onions and garlic",
            blurb: "All forms count, including powdered onion in broth. Anemia can show days later.",
          },
        ]}
      />
      <FoodExplorer />
    </div>
  );
}
