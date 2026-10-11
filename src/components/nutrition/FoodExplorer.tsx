"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  SAFETY_LABEL,
  SPECIES_LABEL,
  type FoodItem,
  type FoodSpecies,
  type SafetyStatus,
} from "@/lib/nutrition/types";
import { filterFoods } from "@/lib/nutrition/directory";
import { cn } from "@/lib/utils";

const SPECIES_OPTIONS: Array<{ id: FoodSpecies | "all"; label: string }> = [
  { id: "all", label: "All species" },
  { id: "dogs", label: "Dogs" },
  { id: "cats", label: "Cats" },
  { id: "birds", label: "Birds" },
  { id: "small-pets", label: "Small Pets" },
];

const SAFETY_OPTIONS: Array<{ id: SafetyStatus | "all"; label: string }> = [
  { id: "all", label: "All safety levels" },
  { id: "SAFE", label: "Safe" },
  { id: "CAUTION", label: "Caution" },
  { id: "TOXIC_DEADLY", label: "Highly toxic" },
];

const PILL: Record<SafetyStatus, string> = {
  SAFE: "bg-triage-green-surface text-triage-green-foreground",
  CAUTION: "bg-triage-yellow-surface text-triage-yellow-foreground",
  TOXIC_DEADLY: "bg-triage-red-surface text-triage-red-foreground",
};

export function FoodExplorer() {
  const [query, setQuery] = useState("");
  const [species, setSpecies] = useState<FoodSpecies | "all">("all");
  const [safety, setSafety] = useState<SafetyStatus | "all">("all");

  const visible = useMemo(
    () => filterFoods(species, safety, query),
    [query, safety, species],
  );

  return (
    <div>
      <form
        className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="block text-sm font-semibold text-slate-800">
          Search foods
          <input
            type="search"
            value={query}
            placeholder="Can my dog eat pumpkin? Are grapes safe for cats?"
            className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-brand-surface px-3 text-base font-normal text-slate-800"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Species">
          {SPECIES_OPTIONS.map((option) => (
            <FilterButton
              key={option.id}
              pressed={species === option.id}
              label={option.label}
              onClick={() => setSpecies(option.id)}
            />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Safety">
          {SAFETY_OPTIONS.map((option) => (
            <FilterButton
              key={option.id}
              pressed={safety === option.id}
              label={option.label}
              onClick={() => setSafety(option.id)}
            />
          ))}
        </div>
        <p className="mt-4 mb-0 text-sm text-slate-700" aria-live="polite">
          {visible.length} {visible.length === 1 ? "food" : "foods"}
        </p>
      </form>

      {visible.length === 0 ? (
        <p className="mb-0 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-8 text-slate-700">
          No foods match that search. Try the food name, such as pumpkin, grapes, or xylitol.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {visible.map((food) => (
            <li key={food.id}>
              <FoodResult food={food} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FoodResult({ food }: { food: FoodItem }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-brand-primary-50 px-2.5 py-1 text-xs font-bold tracking-wide text-brand-primary uppercase">
          {SPECIES_LABEL[food.species]}
        </span>
        <span className={cn("rounded-full px-2.5 py-1 text-xs font-bold", PILL[food.safetyStatus])}>
          {SAFETY_LABEL[food.safetyStatus]}
        </span>
      </div>
      <h2 className="mb-2 text-xl font-semibold text-slate-800">
        <Link href={`/nutrition/${food.slug}`} className="hover:text-brand-primary">
          {food.name}
        </Link>
      </h2>
      <p className="mb-4 text-sm text-slate-700">{food.safeServingSize}</p>
      <Link
        href={`/nutrition/${food.slug}`}
        className="mt-auto inline-flex min-h-11 items-center text-sm font-bold text-brand-primary hover:underline"
      >
        Open the safety note
      </Link>
    </article>
  );
}

function FilterButton({
  pressed,
  label,
  onClick,
}: {
  pressed: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={cn(
        "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold",
        pressed
          ? "border-brand-primary bg-brand-primary text-white"
          : "border-slate-200 bg-brand-surface text-slate-800 hover:border-brand-primary",
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
