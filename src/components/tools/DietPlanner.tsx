"use client";

import { useCallback, useState } from "react";
import { Printer } from "lucide-react";
import { cn } from "@/lib/utils";
import { PetFoodCalculator } from "@/components/tools/PetFoodCalculator";
import {
  TRANSITION_PHASES,
  WEEK_DAYS,
  describePortion,
  formatWater,
  portionForCalories,
  splitDailyPortion,
  type CaloriePortion,
  type FoodType,
  type NutritionResult,
  type WeightUnit,
} from "@/lib/calculators/pet-nutrition";

const splits = [
  { id: "kibble", label: "All kibble", dryFraction: 1 },
  { id: "topper", label: "75% kibble + 25% wet topper", dryFraction: 0.75 },
  { id: "even", label: "50% kibble + 50% wet", dryFraction: 0.5 },
  { id: "mostly-wet", label: "25% kibble + 75% wet", dryFraction: 0.25 },
  { id: "wet", label: "All wet food", dryFraction: 0 },
] as const;

type Tab = "schedule" | "transition";

export function DietPlanner() {
  const [result, setResult] = useState<NutritionResult | null>(null);
  const [splitId, setSplitId] = useState<(typeof splits)[number]["id"]>("topper");
  const [tab, setTab] = useState<Tab>("schedule");
  const onResult = useCallback((next: NutritionResult | null) => {
    setResult(next);
  }, []);

  const split = splits.find((item) => item.id === splitId) ?? splits[1];
  const plan = result ? buildWeek(result, split.dryFraction) : null;

  return (
    <div className="space-y-8">
      <PetFoodCalculator className="no-print" onResult={onResult} />

      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="no-print flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-brand-primary">7-day feeding schedule</h2>
            <p className="mb-0 max-w-reading text-slate-700">
              The week uses the calculator target. Change the kibble and wet split without
              changing the daily calories.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-primary px-5 text-sm font-semibold text-white hover:bg-brand-primary-700"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print / Save as PDF
          </button>
        </div>

        <div className="no-print mt-5 flex flex-col gap-4">
          <label className="text-sm font-semibold text-brand-primary" htmlFor="mix-split">
            Mixed-feeding split
          </label>
          <select
            id="mix-split"
            className="w-full rounded-xl border border-slate-300 bg-brand-surface px-3 py-2.5 text-base text-slate-800"
            value={splitId}
            onChange={(event) => setSplitId(event.target.value as (typeof splits)[number]["id"])}
          >
            {splits.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>

          <div className="flex gap-2" role="tablist" aria-label="Planner views">
            <TabButton pressed={tab === "schedule"} onClick={() => setTab("schedule")}>
              Feeding schedule
            </TabButton>
            <TabButton pressed={tab === "transition"} onClick={() => setTab("transition")}>
              Safe food transition
            </TabButton>
          </div>
        </div>

        {plan ? (
          <>
            <div className={cn("mt-6", tab !== "schedule" && "hidden print:block")}>
              <ScheduleTable plan={plan} />
            </div>
            <div className={cn("mt-6", tab !== "transition" && "hidden print:block")}>
              <TransitionTable plan={plan} />
            </div>
          </>
        ) : (
          <p className="mt-6 mb-0 text-slate-700">
            Enter a body weight in the calculator to fill the seven-day schedule.
          </p>
        )}
      </section>
    </div>
  );
}

function ScheduleTable({ plan }: { plan: WeekPlan }) {
  return (
    <div className="print-sheet">
      <h3 className="mb-2 text-lg font-semibold text-slate-800">Daily meals</h3>
      <p className="mb-4 text-sm text-slate-700">{plan.summary}</p>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-600">
              <th className="py-2 pr-3 font-semibold">Day</th>
              <th className="py-2 pr-3 font-semibold">Breakfast</th>
              <th className="py-2 pr-3 font-semibold">Dinner</th>
              <th className="py-2 font-semibold">Daily water</th>
            </tr>
          </thead>
          <tbody>
            {WEEK_DAYS.map((day) => (
              <tr key={day} className="border-b border-slate-100">
                <th className="py-3 pr-3 font-semibold text-slate-800">{day}</th>
                <td className="py-3 pr-3">{describePortion(plan.breakfast, plan.unit, plan.food)}</td>
                <td className="py-3 pr-3">{describePortion(plan.dinner, plan.unit, plan.food)}</td>
                <td className="py-3">{formatWater(plan.waterMl, plan.unit)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TransitionTable({ plan }: { plan: WeekPlan }) {
  return (
    <div className="print-sheet">
      <h3 className="mb-2 text-lg font-semibold text-slate-800">Safe food transition plan</h3>
      <p className="mb-4 max-w-reading text-slate-700">
        Keep the same daily calories while the bowl shifts from the current diet to the new food.
        Amounts assume the old and new foods have the same calorie density. Slow down if stool
        softens, and call a veterinarian if appetite drops.
      </p>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-600">
              <th className="py-2 pr-3 font-semibold">Days</th>
              <th className="py-2 pr-3 font-semibold">Old food</th>
              <th className="py-2 font-semibold">New food</th>
            </tr>
          </thead>
          <tbody>
            {TRANSITION_PHASES.map((phase) => {
              const oldPortion = portionForCalories(
                plan.targetKcal * phase.oldFraction,
                plan.food,
                plan.dryFraction,
              );
              const newPortion = portionForCalories(
                plan.targetKcal * phase.newFraction,
                plan.food,
                plan.dryFraction,
              );
              return (
                <tr key={phase.id} className="border-b border-slate-100">
                  <th className="py-3 pr-3 font-semibold text-slate-800">
                    {phase.label}
                    <span className="mt-1 block text-xs font-medium text-slate-500">
                      {Math.round(phase.oldFraction * 100)}% old + {Math.round(phase.newFraction * 100)}% new
                    </span>
                  </th>
                  <td className="py-3 pr-3">{describePortion(oldPortion, plan.unit, plan.food)}</td>
                  <td className="py-3">{describePortion(newPortion, plan.unit, plan.food)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TabButton({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={pressed}
      className={cn(
        "min-h-11 rounded-full px-4 text-sm font-semibold",
        pressed ? "bg-brand-primary text-white" : "bg-brand-primary-50 text-brand-primary",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

type WeekPlan = {
  summary: string;
  unit: WeightUnit;
  food: Exclude<FoodType, "fresh">;
  dryFraction: number;
  targetKcal: number;
  waterMl: number;
  breakfast: CaloriePortion;
  dinner: CaloriePortion;
};

function buildWeek(result: NutritionResult, dryFraction: number): WeekPlan {
  const food = foodForSplit(dryFraction);
  const daily = portionForCalories(result.targetKcal, food, dryFraction);
  const [breakfast, dinner] = splitDailyPortion(daily);
  const species = result.species === "dog" ? "Dog" : "Cat";
  return {
    summary: `${species} · ${result.targetKcal} kcal/day · ${result.lifeStage.label} · BCS ${result.bcs} (${result.bcsLabel})`,
    unit: result.unit,
    food,
    dryFraction,
    targetKcal: result.targetKcal,
    waterMl: result.waterMl,
    breakfast,
    dinner,
  };
}

function foodForSplit(dryFraction: number): Exclude<FoodType, "fresh"> {
  if (dryFraction >= 0.999) {
    return "dry";
  }
  if (dryFraction <= 0.001) {
    return "wet";
  }
  return "mixed";
}
