import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About PetAuthority",
  description:
    "PetAuthority publishes educational pet-care guidance for owners in the United States, the United Kingdom, and Australia.",
};

export default function AboutPage() {
  return (
    <div className="container py-8 lg:py-12">
      <article className="max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          About the publisher
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          About PetAuthority
        </h1>
        <p className="mb-6 text-slate-700">
          PetAuthority explains everyday care, nutrition, symptoms, and emergencies for dogs, cats,
          birds, and small pets. The pages are written for owners in the United States, the United
          Kingdom, and Australia. A licensed veterinarian who has examined the animal remains
          responsible for diagnosis and treatment.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">What this site covers</h2>
        <p className="mb-6 text-slate-700">
          Guides use both imperial and metric measures, and costs are shown in US dollars, British
          pounds, and Australian dollars when a planning range is useful. Emergency pages name the
          poison hotlines and the signs that belong in a clinic within the hour. Medication pages
          explain risk and do not publish a home dose.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Who compiles the clinical pages</h2>
        <p className="mb-6 text-slate-700">
          The PetAuthority Editorial Team researches and compiles these pages from published
          veterinary references, including the ASPCA Animal Poison Control Center and the Merck
          Veterinary Manual. The{" "}
          <Link href="/editorial-standards" className="font-semibold text-brand-primary hover:underline">
            editorial standards
          </Link>{" "}
          describe how a page is checked before it is published. Advertising, when it is added, does
          not choose the clinical conclusion.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">How to reach the publisher</h2>
        <p className="mb-0 text-slate-700">
          Corrections and general questions go to the addresses on the{" "}
          <Link href="/contact" className="font-semibold text-brand-primary hover:underline">
            contact page
          </Link>
          . PetAuthority does not examine an individual animal and does not provide emergency triage
          by email.
        </p>
      </article>
    </div>
  );
}
