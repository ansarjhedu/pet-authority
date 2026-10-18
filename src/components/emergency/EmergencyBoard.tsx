"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ContentImage, MediaFrame } from "@/components/media/ContentImage";
import {
  SPECIES_LABEL,
  actionWindowLabel,
  urgencyLabel,
  type EmergencyGuide,
  type Species,
} from "@/lib/clinical/guides";
import { emergencyImage } from "@/lib/images";
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
            <article className="overflow-hidden rounded-2xl border-2 border-triage-red/30 bg-white">
              <div className="relative">
                <MediaFrame ratio="aspect-[2.5/1]" className="rounded-none">
                  <ContentImage
                    src={emergencyImage(guide.slug)}
                    alt=""
                    sizes="(max-width: 1440px) 100vw, 1360px"
                  />
                </MediaFrame>
                <span className="absolute top-3 left-3 rounded-xl bg-slate-900 px-2.5 py-1 text-xs font-bold tracking-wide text-white uppercase shadow-md ring-2 ring-white/90">
                  {SPECIES_LABEL[guide.species]}
                </span>
                <span
                  className={cn(
                    "absolute top-3 right-3 rounded-xl px-2.5 py-1 text-xs font-bold tracking-wide uppercase shadow-md ring-2 ring-white/90",
                    guide.urgency === "CRITICAL_IMMEDIATE"
                      ? "bg-triage-red text-white"
                      : "bg-triage-yellow text-triage-yellow-foreground",
                  )}
                >
                  {urgencyLabel(guide.urgency)}
                </span>
              </div>
              <div className="p-5">
                <p className="mb-3 text-sm font-semibold text-triage-red">
                  {actionWindowLabel(guide.actionWithinMinutes)}
                </p>
                <h2 className="mb-3 text-xl font-semibold text-slate-800">{guide.title}</h2>
                <p className="mb-4 max-w-reading text-sm text-slate-700">{guide.emergencyOverview}</p>
                <Link
                  href={`/emergency/${guide.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full bg-triage-red px-5 text-sm font-bold text-white hover:bg-triage-red-foreground"
                >
                  View Step-by-Step Action Guide →
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
