"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { Cat, Dog } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  LIFE_STAGES,
  NUTRITION_PROFILE_KEY,
  calculatePetNutrition,
  describePortion,
  displayWeight,
  formatWater,
  kilogramsToPounds,
  lifeStageById,
  poundsToKilograms,
  weightPresets,
  type LifeStage,
  type NutritionProfile,
  type NutritionResult,
  type Species,
  type WeightUnit,
} from "@/lib/calculators/pet-nutrition";

const defaultProfile: NutritionProfile = {
  species: "dog",
  unit: "imperial",
  weightInput: "",
  lifeStage: "adult-neutered",
  bcs: 5,
  food: "dry",
};

const foods: { id: NutritionProfile["food"]; label: string; detail: string }[] = [
  { id: "dry", label: "Dry kibble", detail: "375 kcal per cup" },
  { id: "wet", label: "Wet canned", detail: "250 kcal per 13 oz can" },
  { id: "mixed", label: "Mixed 50/50", detail: "Half the calories from each" },
];

type PetFoodCalculatorProps = {
  className?: string;
  onResult?: (result: NutritionResult | null) => void;
};

export function PetFoodCalculator({ className, onResult }: PetFoodCalculatorProps) {
  const baseId = useId();
  const [profile, setProfile] = useState<NutritionProfile>(defaultProfile);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(NUTRITION_PROFILE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<NutritionProfile>;
        setProfile(sanitizeProfile(parsed));
      }
    } catch {
      setProfile(defaultProfile);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    localStorage.setItem(NUTRITION_PROFILE_KEY, JSON.stringify(profile));
  }, [hydrated, profile]);

  const weight = Number(profile.weightInput);
  const result = useMemo(() => {
    if (!Number.isFinite(weight) || weight <= 0) {
      return null;
    }
    try {
      return calculatePetNutrition({
        species: profile.species,
        weight,
        weightUnit: profile.unit,
        lifeStage: profile.lifeStage,
        bcs: profile.bcs,
        food: profile.food,
        dryCalorieFraction: 0.5,
      });
    } catch {
      return null;
    }
  }, [profile, weight]);

  const onResultRef = useRef(onResult);
  onResultRef.current = onResult;

  useEffect(() => {
    onResultRef.current?.(result);
  }, [result]);

  const stage = lifeStageById(profile.lifeStage);
  const presets = weightPresets(profile.species);
  const weightUnitLabel = profile.unit === "imperial" ? "lb" : "kg";
  const unusual =
    result !== null &&
    ((profile.species === "dog" && (result.weightKg < 1 || result.weightKg > 90)) ||
      (profile.species === "cat" && (result.weightKg < 1 || result.weightKg > 12)));

  function update(patch: Partial<NutritionProfile>) {
    setProfile((current) => ({ ...current, ...patch }));
  }

  function setUnit(unit: WeightUnit) {
    if (unit === profile.unit) {
      return;
    }
    const current = Number(profile.weightInput);
    if (!Number.isFinite(current) || current <= 0) {
      update({ unit });
      return;
    }
    const kilograms = profile.unit === "metric" ? current : poundsToKilograms(current);
    const next = unit === "metric" ? kilograms : kilogramsToPounds(kilograms);
    update({ unit, weightInput: trimWeight(next) });
  }

  return (
    <div className={cn("grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start", className)}>
      <form
        className="space-y-6 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"
        onSubmit={(event) => event.preventDefault()}
      >
        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-brand-primary">Pet type</legend>
          <div className="grid grid-cols-2 gap-2">
            <SpeciesButton
              pressed={profile.species === "dog"}
              label="Dog"
              icon={<Dog className="h-5 w-5" aria-hidden="true" />}
              onClick={() => update({ species: "dog" })}
            />
            <SpeciesButton
              pressed={profile.species === "cat"}
              label="Cat"
              icon={<Cat className="h-5 w-5" aria-hidden="true" />}
              onClick={() => update({ species: "cat" })}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-brand-primary">Units</legend>
          <div className="grid grid-cols-2 gap-2">
            <ToggleButton
              pressed={profile.unit === "imperial"}
              label="Imperial"
              detail="lb / cups"
              onClick={() => setUnit("imperial")}
            />
            <ToggleButton
              pressed={profile.unit === "metric"}
              label="Metric"
              detail="kg / grams"
              onClick={() => setUnit("metric")}
            />
          </div>
        </fieldset>

        <div>
          <label htmlFor={`${baseId}-weight`} className="text-sm font-semibold text-brand-primary">
            Body weight ({weightUnitLabel})
          </label>
          <input
            id={`${baseId}-weight`}
            className="mt-2 w-full rounded-xl border border-slate-300 bg-brand-surface px-3 py-2.5 text-base text-slate-800 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
            inputMode="decimal"
            min="0"
            step="0.1"
            type="number"
            value={profile.weightInput}
            onChange={(event) => update({ weightInput: event.target.value })}
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className="rounded-full border border-brand-primary/20 bg-brand-primary-50 px-3 py-1.5 text-sm font-semibold text-brand-primary hover:bg-brand-primary-100"
                onClick={() =>
                  update({
                    weightInput: trimWeight(
                      profile.unit === "metric"
                        ? preset.kilograms
                        : kilogramsToPounds(preset.kilograms),
                    ),
                  })
                }
              >
                {preset.label} · {displayWeight(preset.kilograms, profile.unit)} {weightUnitLabel}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor={`${baseId}-stage`} className="text-sm font-semibold text-brand-primary">
            Life stage / status
          </label>
          <select
            id={`${baseId}-stage`}
            className="mt-2 w-full rounded-xl border border-slate-300 bg-brand-surface px-3 py-2.5 text-base text-slate-800 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
            value={profile.lifeStage}
            onChange={(event) => update({ lifeStage: event.target.value as LifeStage })}
          >
            {LIFE_STAGES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          {stage.min !== stage.max ? (
            <p className="mt-2 mb-0 text-sm text-slate-600">
              WSAVA lists this stage as {stage.min.toFixed(1)}–{stage.max.toFixed(1)} × RER. This
              plan uses {stage.factor.toFixed(1)} × RER, the conservative end of that range.
            </p>
          ) : null}
        </div>

        <div>
          <div className="flex items-baseline justify-between gap-3">
            <label htmlFor={`${baseId}-bcs`} className="text-sm font-semibold text-brand-primary">
              Body condition score
            </label>
            <span className="text-sm font-semibold text-slate-800">
              {profile.bcs} · {bcsCue(profile.bcs)}
            </span>
          </div>
          <input
            id={`${baseId}-bcs`}
            className="mt-3 w-full accent-brand-primary"
            type="range"
            min={1}
            max={9}
            step={1}
            value={profile.bcs}
            aria-valuemin={1}
            aria-valuemax={9}
            aria-valuenow={profile.bcs}
            aria-valuetext={`${profile.bcs}, ${bcsCue(profile.bcs)}`}
            onChange={(event) => update({ bcs: Number(event.target.value) })}
          />
          <div className="mt-1 flex justify-between text-xs font-medium text-slate-500">
            <span>Too thin</span>
            <span>Ideal</span>
            <span>Heavy</span>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-brand-primary">Food type</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {foods.map((food) => (
              <button
                key={food.id}
                type="button"
                aria-pressed={profile.food === food.id}
                className={cn(
                  "rounded-xl border px-3 py-3 text-left",
                  profile.food === food.id
                    ? "border-brand-primary bg-brand-primary-50"
                    : "border-slate-200 bg-white hover:border-brand-primary/40",
                )}
                onClick={() => update({ food: food.id })}
              >
                <span className="block text-sm font-semibold text-slate-800">{food.label}</span>
                <span className="block text-xs text-slate-600">{food.detail}</span>
              </button>
            ))}
          </div>
        </fieldset>
      </form>

      <section
        aria-live="polite"
        className="rounded-3xl bg-brand-primary p-5 text-white sm:p-6 lg:sticky lg:top-32"
      >
        <h2 className="text-sm font-semibold tracking-wide text-brand-accent-200 uppercase">
          Daily feeding target
        </h2>
        {result ? (
          <ResultDetails result={result} unit={profile.unit} unusual={unusual} />
        ) : (
          <p className="mt-4 mb-0 text-base leading-relaxed text-brand-primary-100">
            Enter a body weight to calculate resting energy, the life-stage target, and a portion
            for breakfast and dinner.
          </p>
        )}
      </section>
    </div>
  );
}

function ResultDetails({
  result,
  unit,
  unusual,
}: {
  result: NutritionResult;
  unit: WeightUnit;
  unusual: boolean;
}) {
  const speciesName = result.species === "dog" ? "dog" : "cat";
  const bcsChange =
    result.bcsFactor === 1 ? "no body-condition change" : result.bcsFactor > 1 ? "+15%" : "−15%";

  return (
    <div className="mt-4 space-y-4">
      <p className="mb-0">
        <span className="block text-4xl font-semibold tracking-tight">{result.targetKcal}</span>
        <span className="text-sm text-brand-primary-100">kcal/day for this {speciesName}</span>
      </p>
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="text-brand-primary-200">Exact daily portion</dt>
          <dd className="text-lg font-semibold">{describePortion(result.daily, unit, result.food)}</dd>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/10 p-3">
            <dt className="text-brand-primary-200">Breakfast</dt>
            <dd className="font-semibold">{describePortion(result.breakfast, unit, result.food)}</dd>
          </div>
          <div className="rounded-xl bg-white/10 p-3">
            <dt className="text-brand-primary-200">Dinner</dt>
            <dd className="font-semibold">{describePortion(result.dinner, unit, result.food)}</dd>
          </div>
        </div>
        <div>
          <dt className="text-brand-primary-200">Minimum daily water</dt>
          <dd className="font-semibold">{formatWater(result.waterMl, unit)}</dd>
        </div>
      </dl>
      <p className="mb-0 text-sm leading-relaxed text-brand-primary-100">
        RER {Math.round(result.rer)} kcal × {result.lifeStage.factor} life stage, then {bcsChange}.
        {unusual ? " This weight is outside the usual range, so confirm the unit before you portion food." : ""}
      </p>
      <p className="mb-0 rounded-xl bg-brand-surface px-3 py-3 text-sm leading-relaxed text-slate-800">
        Based on WSAVA guidelines. Adjust according to body condition checks.
      </p>
      <Link
        href="/tools/diet-planner"
        className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-accent-100 hover:text-white"
      >
        Build a 7-day plan →
      </Link>
    </div>
  );
}

function SpeciesButton({
  pressed,
  label,
  icon,
  onClick,
}: {
  pressed: boolean;
  label: string;
  icon: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border text-sm font-semibold",
        pressed
          ? "border-brand-primary bg-brand-primary text-white"
          : "border-slate-200 bg-white text-slate-800 hover:border-brand-primary/40",
      )}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}

function ToggleButton({
  pressed,
  label,
  detail,
  onClick,
}: {
  pressed: boolean;
  label: string;
  detail: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={cn(
        "rounded-xl border px-3 py-2 text-left",
        pressed
          ? "border-brand-primary bg-brand-primary-50"
          : "border-slate-200 bg-white hover:border-brand-primary/40",
      )}
      onClick={onClick}
    >
      <span className="block text-sm font-semibold text-slate-800">{label}</span>
      <span className="block text-xs text-slate-600">{detail}</span>
    </button>
  );
}

function bcsCue(score: number): string {
  if (score <= 3) {
    return "Too thin";
  }
  if (score <= 5) {
    return "Ideal";
  }
  return "Heavy";
}

function sanitizeProfile(parsed: Partial<NutritionProfile>): NutritionProfile {
  const lifeStage = LIFE_STAGES.some((stage) => stage.id === parsed.lifeStage)
    ? parsed.lifeStage
    : defaultProfile.lifeStage;
  const food = parsed.food === "dry" || parsed.food === "wet" || parsed.food === "mixed"
    ? parsed.food
    : defaultProfile.food;

  return {
    species: parsed.species === "cat" ? "cat" : "dog",
    unit: parsed.unit === "metric" ? "metric" : "imperial",
    weightInput: typeof parsed.weightInput === "string" ? parsed.weightInput : "",
    lifeStage: lifeStage ?? defaultProfile.lifeStage,
    bcs: clampBcs(parsed.bcs),
    food,
  };
}

function clampBcs(value: number | undefined): number {
  if (!Number.isFinite(value)) {
    return 5;
  }
  return Math.min(9, Math.max(1, Math.round(value ?? 5)));
}

function trimWeight(value: number): string {
  return (Math.round(value * 10) / 10).toString();
}
