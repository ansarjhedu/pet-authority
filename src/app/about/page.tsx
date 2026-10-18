import type { Metadata } from "next";
import Link from "next/link";
import {
  PUBLISHER_EMAILS,
  PUBLISHER_LEGAL_NAME,
  PUBLISHER_OPERATED_AS,
  PUBLISHER_SITE,
} from "@/lib/publisher";

export const metadata: Metadata = {
  title: "About Pet Safety Hub",
  description:
    "Pet Safety Hub publishes educational pet-care guidance for owners in the United States, the United Kingdom, and Australia.",
};

export default function AboutPage() {
  return (
    <div className="container py-8 lg:py-12">
      <article className="mx-auto max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          About the publisher
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          About {PUBLISHER_LEGAL_NAME}
        </h1>
        <p className="mb-6 text-slate-700">
          {PUBLISHER_OPERATED_AS} (
          <a href={PUBLISHER_SITE} className="font-semibold text-brand-primary hover:underline">
            www.petsafetyhub.com
          </a>
          ). The site publishes educational guides on everyday care, nutrition, symptoms, and
          emergencies for dogs, cats, birds, and small pets. Content is written for owners in the
          United States, the United Kingdom, and Australia. A licensed veterinarian who has examined
          the animal remains responsible for diagnosis and treatment.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Who publishes this site</h2>
        <p className="mb-6 text-slate-700">
          The publishing name is <strong>{PUBLISHER_LEGAL_NAME}</strong>. Editorial work is credited
          to the Pet Safety Hub Editorial Team. Pages are educational. They are not signed by an
          in-house veterinarian and do not create a veterinary-client-patient relationship.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">How to contact us</h2>
        <p className="mb-3 text-slate-700">
          {PUBLISHER_LEGAL_NAME} is an online educational publisher. We do not run a clinic or a
          public office. Official publisher contact is by email:
        </p>
        <ul className="mb-6 space-y-2 text-slate-700">
          <li>
            Editorial corrections:{" "}
            <a
              href={`mailto:${PUBLISHER_EMAILS.editorial}`}
              className="font-semibold text-brand-primary hover:underline"
            >
              {PUBLISHER_EMAILS.editorial}
            </a>
          </li>
          <li>
            General questions:{" "}
            <a
              href={`mailto:${PUBLISHER_EMAILS.contact}`}
              className="font-semibold text-brand-primary hover:underline"
            >
              {PUBLISHER_EMAILS.contact}
            </a>
          </li>
          <li>
            Privacy requests:{" "}
            <a
              href={`mailto:${PUBLISHER_EMAILS.privacy}`}
              className="font-semibold text-brand-primary hover:underline"
            >
              {PUBLISHER_EMAILS.privacy}
            </a>
          </li>
        </ul>
        <p className="mb-6 text-slate-700">
          Full contact notes are on the{" "}
          <Link href="/contact" className="font-semibold text-brand-primary hover:underline">
            contact page
          </Link>
          . Email is not for emergency triage.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">What this site covers</h2>
        <p className="mb-6 text-slate-700">
          Guides use both imperial and metric measures, and costs are shown in US dollars, British
          pounds, and Australian dollars when a planning range is useful. Emergency pages name the
          poison hotlines and the signs that belong in a clinic within the hour. Medication pages
          explain risk and do not publish a home dose.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Who compiles the clinical pages</h2>
        <p className="mb-0 text-slate-700">
          The Pet Safety Hub Editorial Team researches and compiles toxin and emergency pages from
          published veterinary references, including the ASPCA Animal Poison Control Center and the
          Merck Veterinary Manual where those sources apply. Breed and husbandry pages use breed and
          care references instead of poison-center citations. The{" "}
          <Link href="/editorial-standards" className="font-semibold text-brand-primary hover:underline">
            editorial standards
          </Link>{" "}
          describe how a page is checked before it is published. Advertising, when it is added, does
          not choose the clinical conclusion.
        </p>
      </article>
    </div>
  );
}
