import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PetAuthority handles site data, advertising cookies, and privacy requests under the GDPR, CCPA, and CPRA.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-8 lg:py-12">
      <article className="max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Privacy
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          Privacy policy
        </h1>
        <p className="mb-6 text-sm text-slate-600">Last updated 17 October 2026.</p>
        <p className="mb-6 text-slate-700">
          PetAuthority publishes educational pet-care pages for owners in the United States, the
          United Kingdom, and Australia. This policy explains what the site processes and how to
          ask about your information. It is not a clinical record and not an emergency service.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Information the site processes</h2>
        <p className="mb-6 text-slate-700">
          Server logs may include the browser, the page requested, and the IP address needed to
          deliver the page. When those services are enabled, the vet finder sends the place name you
          type to Google Places, and the AI assistant sends your question to Google Gemini. On the
          free Gemini tier, Google may log that chat to train future models, so leave out a
          person&apos;s name, address, and medical history.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Advertising and cookies</h2>
        <p className="mb-6 text-slate-700">
          PetAuthority does not run advertising cookies until an ad network has approved the site.
          If Google AdSense or another partner is added later, that partner may set cookies or
          similar beacons to measure views, limit repeat ads, and reduce fraud, under that
          partner&apos;s own policy. Google describes AdSense data use at
          policies.google.com/technologies/ads.
        </p>
        <p className="mb-6 text-slate-700">
          Visitors in the European Economic Area and the United Kingdom must be offered a consent
          choice before non-essential advertising cookies are stored. That consent banner is
          required before those ads are switched on. Essential cookies that only keep the site
          working do not need that choice.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">GDPR, CCPA, and CPRA</h2>
        <p className="mb-6 text-slate-700">
          If the GDPR applies, you may request access, correction, deletion, or a restriction, and
          you may object to a processing activity that relies on legitimate interests. If the CCPA
          or CPRA applies, you may request to know, delete, or correct personal information, and you
          may opt out of sale or sharing. PetAuthority does not sell personal information for money.
        </p>
        <p className="mb-0 text-slate-700">
          Send a privacy request to{" "}
          <a href="mailto:contact@petauthority.com" className="font-semibold text-brand-primary hover:underline">
            contact@petauthority.com
          </a>{" "}
          and use the subject &quot;Privacy request.&quot; You may also write to the mailing address
          on the{" "}
          <Link href="/contact" className="font-semibold text-brand-primary hover:underline">
            contact page
          </Link>{" "}
          once that address is published. We may need enough detail to find the record, and we will
          not ask you to send an animal&apos;s full medical chart to prove who you are.
        </p>
      </article>
    </div>
  );
}
