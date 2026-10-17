import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { AIAssistant } from "@/components/tools/AIAssistant";
import { POISON_HOTLINES } from "@/lib/ai/triage";
import { generateToolSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Free AI Pet Assistant",
  description:
    "Ask evidence-based questions about dogs, cats, birds, and small pets. The assistant flags emergencies and never replaces a licensed veterinarian.",
};

const faqs = [
  {
    question: "What can the AI pet assistant answer?",
    answer:
      "It can explain everyday diet questions, common behavior changes, and which signs usually need a same-day clinic visit. Answers stay general, use both metric and imperial measures, and point you toward a licensed veterinarian when the picture is unclear.",
  },
  {
    question: "What can the assistant not answer?",
    answer:
      "It cannot confirm a diagnosis, read an X-ray, or give a prescription drug dose. Those decisions need an examination, and sometimes bloodwork, by a veterinarian who is licensed where you live.",
  },
  {
    question: "When should I skip the chat and call a clinic?",
    answer:
      "Call an emergency clinic or poison hotline first for bloat, trouble urinating, seizures, pale gums, toxin ingestion, or open-mouth breathing in a cat or bird. The chat can repeat that warning, but it cannot examine your pet or start treatment.",
  },
  {
    question: "How many questions can the free assistant answer?",
    answer:
      "The free Gemini tier allows 15 questions a minute, 1,500 questions a day, and 1 million tokens a minute. Older turns are dropped when a chat would use more than one request's share of that token budget. Google may log free-tier chats to train future models, so leave out names and addresses.",
  },
  {
    question: "Is this a clinical veterinary diagnosis?",
    answer:
      "No. PetAuthority offers the assistant for education. A licensed veterinarian remains responsible for diagnosis, prognosis, and treatment, including any medication.",
  },
] as const;

export default function AIAssistantPage() {
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
    <>
      <div className="container flex h-[calc(100dvh-8rem)] min-h-0 flex-col pt-3">
        <JsonLd
          data={generateToolSchema(
            "Free AI Pet Assistant",
            "Ask evidence-based questions about dogs, cats, birds, and small pets. The assistant flags emergencies and never replaces a licensed veterinarian.",
            "/tools/ai-assistant",
          )}
        />
        <Breadcrumbs
          className="mb-2 shrink-0"
          items={[
            { name: "Home", path: "/" },
            { name: "Free AI Pet Assistant", path: "/tools/ai-assistant" },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <header className="mb-2 flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-xl font-semibold tracking-tight text-brand-primary sm:text-2xl">
              AI pet assistant
            </h1>
            <p className="mb-0 truncate text-sm text-slate-600">
              Ask about a dog, cat, bird, or small pet. A veterinarian still makes the diagnosis.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 sm:justify-end">
            {POISON_HOTLINES.map((line) => (
              <li key={line.href}>
                <a
                  href={line.href}
                  className="flex h-9 items-center gap-1.5 rounded-full border border-triage-red/25 bg-triage-red-surface px-2.5 text-xs font-semibold text-slate-800 hover:bg-white sm:text-sm"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-triage-red" aria-hidden="true" />
                  {line.region} {line.number}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <AIAssistant className="min-h-0 flex-1" />
      </div>

      <div className="container pb-12">
        <section className="mt-8 max-w-reading" aria-labelledby="assistant-safety">
        <h2 id="assistant-safety" className="mb-6 text-2xl font-semibold text-brand-primary">
          How to use this assistant safely
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
    </>
  );
}
