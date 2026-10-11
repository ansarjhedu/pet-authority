"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  SPECIES_LABEL,
  actionWindowLabel,
  urgencyLabel,
  type EmergencyGuide,
  type Species,
} from "@/lib/clinical/guides";
import { cn } from "@/lib/utils";

const FILTERS: Array<{ id: "all" | Species; label: string }> = [
  { id: "all", label: "All species" },
  { id: "dogs", label: "Dogs" },
  { id: "cats", label: "Cats" },
  { id: "birds", label: "Birds" },
  { id: "small-pets", label: "Small Pets" },
];

export function EmergencyBoard({ guides }: { guides: EmergencyGuide[] }) {
  const [species, setSpecies] = useState<(typeof FILTERS)[number]["id"]>("all");
  const visible = useMemo(
    () => (species === "all" ? guides : guides.filter((guide) => guide.species === species)),
    [guides, species],
  );

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2" role="radiogroup" aria-label="Filter by species">
        {FILTERS.map((filter) => {
          const selected = filter.id === species;
          return (
            <button
              key={filter.id}
              type="button"
              role="radio"
              aria-checked={selected}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold",
                selected
                  ? "border-triage-red bg-triage-red text-white"
                  : "border-slate-200 bg-white text-slate-800 hover:border-triage-red",
              )}
              onClick={() => setSpecies(filter.id)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
      <ul className="grid gap-4">
        {visible.map((guide) => (
          <li key={guide.id}>
            <article className="rounded-2xl border-2 border-triage-red/30 bg-white p-5">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-bold tracking-wide text-white uppercase">
                  {SPECIES_LABEL[guide.species]}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-bold tracking-wide uppercase",
                    guide.urgency === "CRITICAL_IMMEDIATE"
                      ? "bg-triage-red text-white"
                      : "bg-triage-yellow text-triage-yellow-foreground",
                  )}
                >
                  {urgencyLabel(guide.urgency)}
                </span>
                <span className="text-sm font-semibold text-triage-red">
                  {actionWindowLabel(guide.actionWithinMinutes)}
                </span>
              </div>
              <h2 className="mb-3 text-xl font-semibold text-slate-800">{guide.title}</h2>
              <p className="mb-4 max-w-reading text-sm text-slate-700">{guide.emergencyOverview}</p>
              <Link
                href={`/emergency/${guide.slug}`}
                className="inline-flex min-h-11 items-center rounded-full bg-triage-red px-5 text-sm font-bold text-white hover:bg-triage-red-foreground"
              >
                View Step-by-Step Action Guide →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
