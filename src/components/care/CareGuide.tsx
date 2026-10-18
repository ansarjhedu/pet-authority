import Link from "next/link";
import { HubIntro } from "@/components/editorial/HubIntro";
import { routinesForSpecies } from "@/lib/care/directory";
import type { CareSpecies } from "@/lib/care/types";

const SPECIES_COPY: Record<
  CareSpecies,
  {
    title: string;
    parentHref: string;
    parentLabel: string;
    lede: string;
    howToUse: string;
    whatThisIsNot: string;
    urgentCards: Array<{ href: string; title: string; blurb: string }>;
  }
> = {
  dogs: {
    title: "Dog care calendar",
    parentHref: "/dogs",
    parentLabel: "Dogs",
    lede: "Use this page as a yearly rhythm for vaccines, teeth, parasites, grooming, exercise, and senior checks—not as a substitute for the veterinarian who knows your dog’s weight in pounds (kilograms) and vaccine history.",
    howToUse:
      "Read each routine top to bottom, then book the next due date with your clinic. Puppy schedules move faster than adult boosters. Senior dogs need bloodwork and pain checks even when they still greet you at the door. Deep-chested breeds should also know the bloat emergency signs before a big meal or hard play.",
    whatThisIsNot:
      "This hub is not a home vaccine protocol, not a dose chart for heartworm or flea products, and not permission to skip a sick visit because the calendar looks green. Interval ranges follow common US, UK, and Australian practice and still need local dates.",
    urgentCards: [
      {
        href: "/emergency/bloat-gdv",
        title: "Bloat / GDV",
        blurb: "Unproductive retching and a tight belly need an emergency hospital the same hour.",
      },
      {
        href: "/emergency/heatstroke",
        title: "Heatstroke",
        blurb: "Short-nosed or hard-working dogs overheat fast. Cool on the way—still go in.",
      },
      {
        href: "/health-symptoms/dogs/collapse-or-seizure",
        title: "Collapse or seizure",
        blurb: "A first seizure or a dog who will not rise is Code Red triage, not a wait-and-see day.",
      },
    ],
  },
  cats: {
    title: "Cat care calendar",
    parentHref: "/cats",
    parentLabel: "Cats",
    lede: "Indoor cats still need parasite plans, dental checks, and litter-box vigilance. This calendar frames vaccines, teeth, parasites, grooming, play, and senior screening for households in the United States, the United Kingdom, and Australia.",
    howToUse:
      "Work through each routine, then ask your veterinarian which products and intervals fit this cat. Male cats who strain in the box belong on the emergency path, not in a constipation guess. Senior cats often need thyroid and kidney screening when thirst or weight shifts.",
    whatThisIsNot:
      "This hub is not a home vaccine schedule you invent from a chart, not a human medicine cabinet plan, and not a reason to wait overnight when a male cat produces little or no urine. Local clinics still set the dates and the products.",
    urgentCards: [
      {
        href: "/emergency/feline-urethral-blockage",
        title: "Urethral blockage",
        blurb: "Male cats straining with little or no urine need care within about 30 minutes.",
      },
      {
        href: "/emergency/lily-toxicity",
        title: "Lily exposure",
        blurb: "True lilies and daylilies can wreck kidneys from pollen or vase water.",
      },
      {
        href: "/health-symptoms/cats/hiding-and-not-eating",
        title: "Hiding and not eating",
        blurb: "A skipped meal streak—especially in an overweight cat—needs same-day advice.",
      },
    ],
  },
};

export function CareGuide({ species }: { species: CareSpecies }) {
  const routines = routinesForSpecies(species);
  const copy = SPECIES_COPY[species];

  return (
    <div className="container py-8 lg:py-12">
      <header className="mb-8 max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          <Link href={copy.parentHref} className="hover:underline">
            {copy.parentLabel}
          </Link>
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          {copy.title}
        </h1>
        <p className="mb-0 text-slate-700">{copy.lede}</p>
      </header>

      <HubIntro
        howToUse={copy.howToUse}
        whatThisIsNot={copy.whatThisIsNot}
        urgentCards={copy.urgentCards}
      />

      <div className="space-y-8">
        {routines.map((routine) => (
          <section key={routine.id} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="mb-2 text-2xl font-semibold text-slate-800">{routine.title}</h2>
            <p className="mb-4 max-w-reading text-slate-700">{routine.summary}</p>
            <ol className="space-y-3">
              {routine.schedule.map((step) => (
                <li
                  key={step.when}
                  className="grid gap-1 border-t border-slate-200 pt-3 sm:grid-cols-[12rem_minmax(0,1fr)]"
                >
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
