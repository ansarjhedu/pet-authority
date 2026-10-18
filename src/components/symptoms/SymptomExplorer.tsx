"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ContentImage, MediaFrame } from "@/components/media/ContentImage";
import {
  SEVERITY_LABEL,
  SPECIES_LABEL,
  type SeverityTier,
  type Species,
  type SymptomGuide,
} from "@/lib/clinical/guides";
import { symptomImage } from "@/lib/images";
import { cn } from "@/lib/utils";

const SPECIES_TABS: Array<{ id: "all" | Species; label: string }> = [
  { id: "all", label: "All Species" },
  { id: "dogs", label: "Dogs" },
  { id: "cats", label: "Cats" },
  { id: "birds", label: "Birds" },
  { id: "small-pets", label: "Small Pets" },
];

const SEVERITY_FILTERS: Array<{ id: "all" | SeverityTier; label: string }> = [
  { id: "all", label: "All severities" },
  { id: "green", label: "Code Green (Monitor at Home)" },
  { id: "yellow", label: "Code Yellow (Veterinary Attention in 12–24h)" },
  { id: "red", label: "Code Red (Immediate Emergency Visit)" },
];

const PILL_CLASS: Record<SeverityTier, string> = {
  green: "bg-triage-green-surface text-triage-green-foreground",
  yellow: "bg-triage-yellow-surface text-triage-yellow-foreground",
  red: "bg-triage-red-surface text-triage-red-foreground",
};

export function SymptomExplorer({ symptoms }: { symptoms: SymptomGuide[] }) {
  const [species, setSpecies] = useState<(typeof SPECIES_TABS)[number]["id"]>("all");
  const [severity, setSeverity] = useState<(typeof SEVERITY_FILTERS)[number]["id"]>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return symptoms.filter((symptom) => {
      if (species !== "all" && symptom.species !== species) {
        return false;
      }
      if (severity !== "all" && symptom.severityTier !== severity) {
        return false;
      }
      if (!needle) {
        return true;
      }
      const haystack = [symptom.title, symptom.shortDescription, ...symptom.commonCauses]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [query, severity, species, symptoms]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label="Species">
        {SPECIES_TABS.map((tab) => {
          const selected = tab.id === species;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={cn(
                "inline-flex min-h-11 max-w-full items-center whitespace-normal rounded-full border px-4 text-left text-sm font-semibold",
                selected
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-slate-200 bg-white text-slate-800 hover:border-brand-primary",
              )}
              onClick={() => setSpecies(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mb-4 flex flex-wrap gap-2" role="radiogroup" aria-label="Severity">
        {SEVERITY_FILTERS.map((filter) => {
          const selected = filter.id === severity;
          return (
            <button
              key={filter.id}
              type="button"
              role="radio"
              aria-checked={selected}
              className={cn(
                "inline-flex min-h-11 max-w-full items-center whitespace-normal rounded-full border px-4 text-left text-sm font-semibold",
                selected
                  ? "border-slate-800 bg-slate-800 text-white"
                  : "border-slate-200 bg-brand-surface text-slate-800 hover:border-slate-800",
              )}
              onClick={() => setSeverity(filter.id)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <label htmlFor="symptom-search" className="mb-2 block text-sm font-semibold text-slate-800">
        Search symptoms
      </label>
      <input
        id="symptom-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try litter box, tail bob, bile, hunching"
        className="mb-6 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-800 outline-none focus-visible:border-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      />

      {visible.length === 0 ? (
        <p className="mb-0 max-w-reading text-slate-700">
          No symptoms match that search. If your pet is struggling to breathe, collapsed, or a male
          cat is straining, open the emergency guide.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((symptom) => (
            <li key={symptom.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="relative">
                  <MediaFrame ratio="aspect-[4/3]" className="rounded-none">
                    <ContentImage
                      src={symptomImage(symptom.species, symptom.slug)}
                      alt={symptom.title}
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </MediaFrame>
                  <span className="absolute top-3 left-3 rounded-xl bg-brand-primary px-2.5 py-1 text-xs font-bold tracking-wide text-white uppercase shadow-md ring-2 ring-white/90">
                    {SPECIES_LABEL[symptom.species]}
                  </span>
                  <span
                    className={cn(
                      "absolute top-3 right-3 rounded-xl px-2.5 py-1 text-xs font-bold shadow-md ring-2 ring-white/90",
                      PILL_CLASS[symptom.severityTier],
                    )}
                  >
                    {SEVERITY_LABEL[symptom.severityTier]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="mb-2 text-lg font-semibold text-slate-800">{symptom.title}</h2>
                  <p className="mb-3 text-sm text-slate-700">{symptom.shortDescription}</p>
                  <p className="mb-4 text-sm text-slate-700">
                    <span className="font-semibold text-slate-800">Common causes: </span>
                    {symptom.commonCauses.slice(0, 2).join("; ")}.
                  </p>
                  <Link
                    href={`/health-symptoms/${symptom.species}/${symptom.slug}`}
                    className="mt-auto inline-flex min-h-11 items-center text-sm font-bold text-brand-primary hover:underline"
                  >
                    Open the full guide →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
