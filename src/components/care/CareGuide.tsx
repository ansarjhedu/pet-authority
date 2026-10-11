import Link from "next/link";
import { routinesForSpecies } from "@/lib/care/directory";
import type { CareSpecies } from "@/lib/care/types";

const SPECIES_TITLE: Record<CareSpecies, string> = {
  dogs: "Dog care",
  cats: "Cat care",
};

export function CareGuide({ species }: { species: CareSpecies }) {
  const routines = routinesForSpecies(species);

  return (
    <div className="container py-8 lg:py-12">
      <header className="mb-8 max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          <Link href={species === "dogs" ? "/dogs" : "/cats"} className="hover:underline">
            {species === "dogs" ? "Dogs" : "Cats"}
          </Link>
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          {SPECIES_TITLE[species]}
        </h1>
        <p className="mb-0 text-slate-700">
          Vaccines, teeth, parasites, grooming, exercise, and senior checks. Intervals follow
          common US, UK, and Australian practice and still need a local veterinarian to set the
          dates.
        </p>
      </header>
      <div className="space-y-8">
        {routines.map((routine) => (
          <section key={routine.id} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="mb-2 text-2xl font-semibold text-slate-800">{routine.title}</h2>
            <p className="mb-4 max-w-reading text-slate-700">{routine.summary}</p>
            <ol className="space-y-3">
              {routine.schedule.map((step) => (
                <li key={step.when} className="grid gap-1 border-t border-slate-200 pt-3 sm:grid-cols-[12rem_minmax(0,1fr)]">
                  <p className="mb-0 text-sm font-bold text-brand-primary">{step.when}</p>
                  <p className="mb-0 text-sm text-slate-800">{step.action}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
