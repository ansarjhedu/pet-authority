import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Standards",
  description:
    "How the PetAuthority Editorial Team compiles educational pet-care pages from published sources, and what those pages cannot do.",
};

export default function EditorialStandardsPage() {
  return (
    <div className="container py-8 lg:py-12">
      <article className="max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Standards
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          Editorial standards
        </h1>
        <p className="mb-6 text-slate-700">
          PetAuthority publishes educational guidance for pet owners in the United States, the
          United Kingdom, and Australia. The pages are researched and compiled by the PetAuthority
          Editorial Team. They are not signed by an in-house veterinarian, and they cannot diagnose
          one animal or replace an examination.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Where the clinical notes come from</h2>
        <p className="mb-6 text-slate-700">
          Guides draw on published veterinary references, including the ASPCA Animal Poison Control
          Center and the Merck Veterinary Manual, plus regulator labeling where a drug or a food is
          discussed. Editors label the species, the urgency, and the measurement units. A page that
          mentions a drug states that a veterinarian must set the dose, and it does not copy a
          milligram chart for home use.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Update cycle</h2>
        <p className="mb-6 text-slate-700">
          Published guides are scheduled for another pass at least every quarter, and sooner when a
          regulator or a poison-control recommendation changes. The date on a page is the last
          content update, not a promise that a veterinarian rechecked every sentence that morning.
          Send a correction to editorial@petauthority.com and name the URL.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Independence from advertising</h2>
        <p className="mb-6 text-slate-700">
          Advertisers do not commission, approve, or edit clinical conclusions. A product mention,
          if one appears, is labeled and is not a payment for a favorable medical claim. Advertising
          is not loaded on the site until an ad network has approved the property.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">What the tools may not do</h2>
        <p className="mb-0 text-slate-700">
          The food calculator, vet finder, and AI assistant are educational aids. They do not
          confirm a diagnosis, read an image, or prescribe. If a pet is collapsed, struggling to
          breathe, or may have eaten a toxin, call an emergency hospital or a poison hotline, or
          write through the{" "}
          <Link href="/contact" className="font-semibold text-brand-primary hover:underline">
            contact page
          </Link>
          .
        </p>
      </article>
    </div>
  );
}
