import type { Metadata } from "next";
import Link from "next/link";
import {
  PUBLISHER_EMAILS,
  PUBLISHER_LEGAL_NAME,
  PUBLISHER_OPERATED_AS,
  PUBLISHER_SITE,
} from "@/lib/publisher";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pet Safety Hub by email about corrections and general questions. Email is not an emergency veterinary service.",
};

export default function ContactPage() {
  return (
    <div className="container py-8 lg:py-12">
      <article className="mx-auto max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Publisher
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          Contact
        </h1>
        <p className="mb-6 text-slate-700">
          {PUBLISHER_LEGAL_NAME} ({PUBLISHER_OPERATED_AS};{" "}
          <a href={PUBLISHER_SITE} className="font-semibold text-brand-primary hover:underline">
            www.petsafetyhub.com
          </a>
          ) is an educational website. Use the emails below for corrections, privacy requests, and
          general questions. We do not operate a clinic or a public office.
        </p>
        <div className="mb-8 rounded-2xl border-2 border-triage-red bg-triage-red-surface p-5">
          <h2 className="mb-2 text-lg font-semibold text-triage-red-foreground">
            This inbox is not emergency triage
          </h2>
          <p className="mb-0 text-slate-800">
            Pet Safety Hub does not examine individual animals and does not provide emergency triage
            by email or by the AI assistant. If your pet is collapsed, struggling to breathe, or
            may have eaten a toxin, call an emergency hospital or a poison hotline now.
          </p>
        </div>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Email contacts</h2>
        <ul className="mb-8 space-y-3 text-slate-700">
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
          When you report a factual error, include the page URL. These inboxes are the official
          publisher contact channels for {PUBLISHER_LEGAL_NAME}.
        </p>
        <p className="mb-0 text-slate-700">
          Privacy requests are described on the{" "}
          <Link href="/privacy-policy" className="font-semibold text-brand-primary hover:underline">
            privacy policy
          </Link>
          . The medical limits of the site are on the{" "}
          <Link href="/terms" className="font-semibold text-brand-primary hover:underline">
            terms of use
          </Link>
          .
        </p>
      </article>
    </div>
  );
}
