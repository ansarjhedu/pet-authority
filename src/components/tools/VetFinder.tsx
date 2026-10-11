"use client";

import { useState } from "react";
import { Globe, Loader2, MapPin, Phone, ShieldCheck } from "lucide-react";
import { toTelHref } from "@/lib/vets/phone";
import type { EmergencyVet, VetCountry, VetFinderResponse, VetSource } from "@/lib/vets/types";
import { cn } from "@/lib/utils";

const COUNTRIES: Array<{ id: VetCountry; label: string; flag: string }> = [
  { id: "US", label: "United States", flag: "🇺🇸" },
  { id: "UK", label: "United Kingdom", flag: "🇬🇧" },
  { id: "AU", label: "Australia", flag: "🇦🇺" },
];

const CITY_SHORTCUTS: Array<{ label: string; country: VetCountry; query: string }> = [
  { label: "New York", country: "US", query: "New York" },
  { label: "London", country: "UK", query: "London" },
  { label: "Sydney", country: "AU", query: "Sydney" },
  { label: "Los Angeles", country: "US", query: "Los Angeles" },
  { label: "Chicago", country: "US", query: "Chicago" },
];

const SOURCE_LABEL: Record<VetSource, string> = {
  curated_directory: "Curated 24/7 Emergency Network",
  preview_directory: "Curated 24/7 Emergency Network",
  google_places: "Live Network Search",
};

export function VetFinder() {
  const [country, setCountry] = useState<VetCountry>("US");
  const [query, setQuery] = useState("");
  const [emergencyOnly, setEmergencyOnly] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState<VetFinderResponse | null>(null);

  async function search(next?: { country?: VetCountry; query?: string; emergencyOnly?: boolean }) {
    const payload = {
      country: next?.country ?? country,
      query: next?.query ?? query,
      emergencyOnly: next?.emergencyOnly ?? emergencyOnly,
    };

    setLoading(true);
    setError("");

    try {
      const result = await fetch("/api/vet-finder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await result.json()) as VetFinderResponse & { error?: string };
      if (!result.ok || !Array.isArray(data.results)) {
        setError(data.error || "The directory could not be searched. Try again in a moment.");
        return;
      }
      setResponse(data);
    } catch {
      setError("The directory could not be reached. Use a phone number you already have, or try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6" aria-labelledby="vet-finder-heading">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 id="vet-finder-heading" className="text-xl font-semibold text-brand-primary">
            Find a 24/7 emergency hospital
          </h2>
          <p className="mt-2 mb-0 max-w-reading text-sm text-slate-700">
            Search a city or postal code, then call the hospital before you leave.
          </p>
        </div>
        <p className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-brand-primary/15 bg-brand-primary-50 px-3 py-1.5 text-sm font-semibold text-brand-primary">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Verified Clinical Directory
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2" role="radiogroup" aria-label="Country">
        {COUNTRIES.map((option) => {
          const selected = option.id === country;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold",
                selected
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-slate-200 bg-brand-surface text-slate-800 hover:border-brand-primary",
              )}
              onClick={() => setCountry(option.id)}
            >
              <span aria-hidden="true">{option.flag}</span>
              {option.label}
            </button>
          );
        })}
      </div>

      <form
        className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"
        onSubmit={(event) => {
          event.preventDefault();
          void search();
        }}
      >
        <div>
          <label htmlFor="vet-query" className="mb-2 block text-sm font-semibold text-slate-800">
            City or postal code
          </label>
          <input
            id="vet-query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="New York, SW7, 2000"
            autoComplete="off"
            className="min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-800 outline-none focus-visible:border-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-primary px-5 text-sm font-semibold text-white hover:bg-brand-primary-600 disabled:cursor-wait disabled:opacity-70"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
          {loading ? "Searching" : "Search"}
        </button>
      </form>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex min-h-11 cursor-pointer items-center gap-3 text-sm font-semibold text-slate-800">
          <input
            type="checkbox"
            className="h-5 w-5 accent-brand-primary"
            checked={emergencyOnly}
            onChange={(event) => setEmergencyOnly(event.target.checked)}
          />
          24/7 Emergency Only
        </label>
        <p className="mb-0 text-sm text-slate-600">
          {response ? SOURCE_LABEL[response.source] : "Curated 24/7 Emergency Network"}
        </p>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-sm font-semibold text-slate-800">Quick cities</p>
        <div className="flex flex-wrap gap-2">
          {CITY_SHORTCUTS.map((shortcut) => (
            <button
              key={shortcut.label}
              type="button"
              disabled={loading}
              className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-brand-surface px-4 text-sm font-semibold text-slate-800 hover:border-brand-primary hover:text-brand-primary disabled:opacity-60"
              onClick={() => {
                setCountry(shortcut.country);
                setQuery(shortcut.query);
                void search({ country: shortcut.country, query: shortcut.query });
              }}
            >
              {shortcut.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6" aria-live="polite" aria-busy={loading}>
        {error ? <p className="mb-0 text-sm font-semibold text-triage-red">{error}</p> : null}
        {response?.quotaExceeded ? (
          <p className="mb-4 text-sm text-slate-700">
            Live search is paused after 999 lookups. These hospitals are from the offline 24/7 directory.
          </p>
        ) : null}
        {response?.source === "preview_directory" ? (
          <p className="mb-4 text-sm text-slate-700">
            Showing the offline 24/7 directory. Call the hospital before you leave.
          </p>
        ) : null}
        {response?.broadened ? (
          <p className="mb-4 text-sm text-slate-700">
            No hospital matched that place name. Showing 24/7 hospitals for this country. Call before you travel.
          </p>
        ) : null}
        {response && response.results.length === 0 ? (
          <p className="mb-0 text-sm text-slate-700">
            No hospitals are listed for that search. Call a local emergency clinic or poison hotline.
          </p>
        ) : null}
        {response && response.results.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2">
            {response.results.map((vet) => (
              <li key={vet.id}>
                <VetCard vet={vet} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

function VetCard({ vet }: { vet: EmergencyVet }) {
  const tel = toTelHref(vet.phone, vet.country);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-brand-surface p-4">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-base font-semibold leading-snug text-slate-800">{vet.name}</h3>
        {vet.is24Hours ? (
          <span className="shrink-0 rounded-full bg-triage-red px-2.5 py-1 text-xs font-bold tracking-wide text-white uppercase">
            24/7 Emergency
          </span>
        ) : null}
      </div>
      <p className="mb-1 text-sm font-semibold text-brand-primary">{vet.network}</p>
      <p className="mb-4 text-sm leading-relaxed text-slate-700">
        {vet.address}
        <span className="block">{[vet.city, vet.stateOrRegion].filter(Boolean).join(", ")}</span>
      </p>
      <div className="mt-auto flex flex-col gap-2">
        {tel ? (
          <a
            href={tel}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-triage-red px-4 text-sm font-bold text-white hover:bg-triage-red-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {vet.phone}
          </a>
        ) : (
          <p className="mb-0 text-sm text-slate-700">Phone not listed. Open the hospital website and call from there.</p>
        )}
        <a
          href={vet.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-primary px-4 text-sm font-semibold text-brand-primary hover:bg-white"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Get Directions
        </a>
        <a
          href={vet.website}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-slate-700 underline-offset-4 hover:underline"
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          Official website
        </a>
      </div>
    </article>
  );
}
