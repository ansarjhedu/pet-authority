import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using PetAuthority. The veterinary disclaimer states that the site is educational and is not clinical advice.",
};

export default function TermsPage() {
  return (
    <div className="container py-8 lg:py-12">
      <article className="max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Terms
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          Terms of use
        </h1>
        <p className="mb-6 text-sm text-slate-600">Last updated 17 October 2026.</p>
        <div className="mb-8 rounded-2xl border-2 border-triage-red bg-triage-red-surface p-5">
          <h2 className="mb-2 text-lg font-semibold text-triage-red-foreground">
            Veterinary medical disclaimer
          </h2>
          <p className="mb-0 text-slate-800">
            PetAuthority is for educational purposes only. It is not clinical veterinary advice, a
            diagnosis, a prognosis, a prescription, or a treatment plan for any individual animal.
            Always consult a licensed veterinarian who has examined your pet, and use an emergency
            hospital or a poison hotline when the situation cannot wait.
          </p>
        </div>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Using the site</h2>
        <p className="mb-6 text-slate-700">
          You may read the pages for personal education. You may not copy the collection of guides
          to build a competing publisher, and you may not present a PetAuthority page as a
          veterinarian&apos;s instruction for a specific animal. Tools, including the calculator,
          the vet finder, and the AI assistant, can be wrong and are not a substitute for a clinic.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">No emergency service</h2>
        <p className="mb-6 text-slate-700">
          Nothing on this site creates a veterinarian-client-patient relationship. Email to
          editorial@petauthority.com or contact@petauthority.com is not monitored as an emergency
          line. If an animal is in danger, leave the website and call a local emergency hospital.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Advertising</h2>
        <p className="mb-6 text-slate-700">
          If advertising is added after a network approves the site, an ad is not an endorsement and
          does not change a clinical page. The{" "}
          <Link href="/editorial-standards" className="font-semibold text-brand-primary hover:underline">
            editorial standards
          </Link>{" "}
          keeps advertisers out of medical conclusions. The{" "}
          <Link href="/privacy-policy" className="font-semibold text-brand-primary hover:underline">
            privacy policy
          </Link>{" "}
          describes advertising cookies.
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-brand-primary">Liability</h2>
        <p className="mb-0 text-slate-700">
          Guides are planning information and can be incomplete for your animal&apos;s history. To
          the extent the law allows, PetAuthority is not liable for a decision you make from a page
          instead of from an examination. Some jurisdictions do not allow that limit, and those
          rules still apply to you.
        </p>
      </article>
    </div>
  );
}
