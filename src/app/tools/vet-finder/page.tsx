import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { VetFinder } from "@/components/tools/VetFinder";
import { generateToolSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Emergency Vet Finder",
  description:
    "Find published 24/7 emergency veterinary hospitals in the United States, United Kingdom, and Australia. Call ahead before you travel.",
};

const faqs = [
  {
    question: "What happens when I arrive at an emergency vet?",
    answer:
      "A nurse usually triages your pet before a veterinarian examines them. Pets in respiratory distress, active bleeding, seizures, or collapse are seen first, even if you arrived earlier. Call ahead so the team can prepare oxygen, a stretcher, or a toxin protocol.",
  },
  {
    question: "Will I have to pay a deposit?",
    answer:
      "Most emergency hospitals ask for a deposit before diagnostics or hospitalization. The amount depends on the city and the tests your pet needs. Ask for a written estimate, and say if cost will change what you can authorize. Charity care, where it exists, has its own eligibility rules.",
  },
  {
    question: "What should I bring to the emergency visit?",
    answer:
      "Bring a photo ID, your pet’s medical notes, a current medication list with doses, and any toxin packaging if it is safe to carry. A leash, carrier, or towel keeps an injured pet contained. If your regular clinic is closed, the emergency team can still start care without those records.",
  },
  {
    question: "Does this directory replace a local clinic search?",
    answer:
      "No. It lists hospitals that publish round-the-clock emergency cover, including BluePearl, VCA, VEG, MedVet, Vets Now, Medivet, SASH, Animal Referral Hospital, and Greencross. Vets Now Birmingham is an out-of-hours clinic, so call 0121 238 2001 before you travel. Hours and phone numbers change.",
  },
  {
    question: "Where do PDSA hospitals fit in an emergency?",
    answer:
      "PDSA Pet Hospitals provide charitable veterinary care for eligible clients and are not listed here as 24/7 emergency hospitals. For London, Manchester, Birmingham, Glasgow, or Leeds, check current cover at pdsa.org.uk/near-me, and use a Vets Now or Medivet 24-hour hospital when your pet cannot wait until morning.",
  },
] as const;

export default function VetFinderPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="container py-8 lg:py-12">
      <JsonLd
        data={generateToolSchema(
          "Emergency Vet Finder",
          "Find published 24/7 emergency veterinary hospitals in the United States, United Kingdom, and Australia.",
          "/tools/vet-finder",
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Emergency Vet Finder", path: "/tools/vet-finder" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="mb-6 max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Emergency tools
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          Emergency vet finder
        </h1>
        <p className="mb-0 text-slate-700">
          Look up a published 24/7 animal hospital in the US, UK, or Australia, then call before you travel.
        </p>
      </header>

      <div
        className="mb-6 flex gap-3 rounded-2xl border border-triage-red/30 bg-triage-red-surface p-4 text-triage-red-foreground"
        role="note"
      >
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-triage-red" aria-hidden="true" />
        <p className="mb-0 font-semibold">
          If your pet is unconscious, actively bleeding, having a seizure, or bloated, call ahead to the nearest hospital immediately.
        </p>
      </div>

      <VetFinder />

      <section className="mt-12 max-w-reading" aria-labelledby="emergency-visit">
        <h2 id="emergency-visit" className="mb-6 text-2xl font-semibold text-brand-primary">
          What to expect during an emergency vet visit
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="mb-2 text-lg font-semibold text-slate-800">{faq.question}</h3>
              <p className="mb-0">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
