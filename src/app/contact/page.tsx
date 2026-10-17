import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pet Safety Hub at petsafetyhub.com about corrections and general questions. Email is not an emergency veterinary service.",
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
          Reach Pet Safety Hub (
          <a
            href="https://www.petsafetyhub.com"
            className="font-semibold text-brand-primary hover:underline"
          >
            www.petsafetyhub.com
          </a>
          ) with the addresses below for corrections, privacy requests, and general questions.
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
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Email</h2>
        <ul className="mb-8 space-y-3 text-slate-700">
          <li>
            Editorial corrections:{" "}
            <a
              href="mailto:editorial@petsafetyhub.com"
              className="font-semibold text-brand-primary hover:underline"
            >
              editorial@petsafetyhub.com
            </a>
          </li>
          <li>
            General questions:{" "}
            <a
              href="mailto:contact@petsafetyhub.com"
              className="font-semibold text-brand-primary hover:underline"
            >
              contact@petsafetyhub.com
            </a>
          </li>
          <li>
            Privacy requests:{" "}
            <a
              href="mailto:privacy@petsafetyhub.com"
              className="font-semibold text-brand-primary hover:underline"
            >
              privacy@petsafetyhub.com
            </a>
          </li>
        </ul>
        <p className="mb-6 text-slate-700">
          Include the page URL when you write about a factual error. The publisher is reached by
          email. A street mailing address will be listed here when it is ready for public posting.
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
