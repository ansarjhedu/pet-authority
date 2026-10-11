"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  filterMedications,
  type MedicationFilter,
} from "@/lib/medications/directory";
import { PRESCRIPTION_LABEL, type Medication } from "@/lib/medications/types";
import { cn } from "@/lib/utils";

const FILTERS: Array<{ id: MedicationFilter; label: string }> = [
  { id: "all", label: "All medicines" },
  { id: "veterinary", label: "Veterinary use" },
  { id: "dangerous", label: "Dangerous human OTCs" },
];

export function MedicationExplorer({ medications }: { medications: Medication[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<MedicationFilter>("all");

  const visible = useMemo(() => {
    const allowed = new Set(medications.map((medication) => medication.slug));
    return filterMedications(filter, query).filter((medication) => allowed.has(medication.slug));
  }, [filter, medications, query]);

  return (
    <div>
      <form
        className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="block text-sm font-semibold text-slate-800">
          Search medicines
          <input
            type="search"
            value={query}
            placeholder="Benadryl, ibuprofen, Rimadyl…"
            className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-brand-surface px-3 text-base font-normal"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Medication class">
          {FILTERS.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={filter === option.id}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold",
                filter === option.id
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-slate-200 bg-brand-surface text-slate-800 hover:border-brand-primary",
              )}
              onClick={() => setFilter(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="mt-4 mb-0 text-sm text-slate-700" aria-live="polite">
          {visible.length} {visible.length === 1 ? "medicine" : "medicines"}
        </p>
      </form>

      {visible.length === 0 ? (
        <p className="mb-0 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-8">
          No medicines match that search.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {visible.map((medication) => (
            <li key={medication.id}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <p
                  className={cn(
                    "mb-3 text-xs font-bold tracking-wide uppercase",
                    medication.prescriptionStatus === "LETHAL_TOXIN_DO_NOT_GIVE"
                      ? "text-triage-red"
                      : "text-brand-primary",
                  )}
                >
                  {PRESCRIPTION_LABEL[medication.prescriptionStatus]}
                </p>
                <h2 className="mb-2 text-xl font-semibold text-slate-800">
                  <Link href={`/medications/${medication.slug}`} className="hover:text-brand-primary">
                    {medication.name}
                  </Link>
                </h2>
                <p className="mb-4 text-sm text-slate-700">{medication.commonBrands.join(", ")}</p>
                <Link
                  href={`/medications/${medication.slug}`}
                  className="mt-auto inline-flex min-h-11 items-center text-sm font-bold text-brand-primary hover:underline"
                >
                  Read the safety note
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
