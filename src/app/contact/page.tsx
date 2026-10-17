import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PetAuthority about corrections and general questions. Email is not an emergency veterinary service.",
};

export default function ContactPage() {
  return (
    <div className="container py-8 lg:py-12">
      <article className="max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Publisher
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          Contact
        </h1>
        <div className="mb-8 rounded-2xl border-2 border-triage-red bg-triage-red-surface p-5">
          <h2 className="mb-2 text-lg font-semibold text-triage-red-foreground">
            This inbox is not emergency triage
          </h2>
          <p className="mb-0 text-slate-800">
            PetAuthority does not examine individual animals and does not provide emergency triage
            by email or by the AI assistant. If your pet is collapsed, struggling to breathe, or
            may have eaten a toxin, call an emergency hospital or a poison hotline now.
          </p>
        </div>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Email</h2>
        <p className="mb-6 text-slate-700">
          Editorial corrections:{" "}
          <a href="mailto:editorial@petauthority.com" className="font-semibold text-brand-primary hover:underline">
            editorial@petauthority.com
          </a>
          . General questions:{" "}
          <a href="mailto:contact@petauthority.com" className="font-semibold text-brand-primary hover:underline">
            contact@petauthority.com
          </a>
          . Include the page URL when you write about a factual error.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Mailing address</h2>
        <p className="mb-6 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-slate-700">
          Replace this line with the publisher&apos;s street address, city, region, and postal code
          before you submit an advertising application. A placeholder is not a valid business
          address.
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
