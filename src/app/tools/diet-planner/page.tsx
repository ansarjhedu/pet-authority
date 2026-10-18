import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DetailHero } from "@/components/media/DetailHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { DietPlanner } from "@/components/tools/DietPlanner";
import { toolImage } from "@/lib/images";
import { generateToolSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "7-Day Diet Planner",
  description:
    "Turn a WSAVA calorie target into a seven-day feeding schedule and a safe food-transition plan for dogs and cats.",
};

export default function DietPlannerPage() {
  return (
    <div className="container py-8 lg:py-12">
      <JsonLd
        data={generateToolSchema(
          "7-Day Diet Planner",
          "Turn a WSAVA calorie target into a seven-day feeding schedule and a safe food-transition plan for dogs and cats.",
          "/tools/diet-planner",
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "7-Day Diet Planner", path: "/tools/diet-planner" },
        ]}
      />
      <header className="no-print mb-8 max-w-reading">
        <DetailHero src={toolImage("diet-planner")} alt="Pet meal prep bowls" />
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Nutrition tool
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          7-day diet planner
        </h1>
        <p className="mb-0 text-slate-700">
          Build a week of breakfast and dinner portions from the same calorie target, then switch
          foods on a seven-day gut-adaptation schedule. Print the plan or save it as a PDF.
        </p>
      </header>
      <DietPlanner />
    </div>
  );
}
