import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PetFoodCalculator } from "@/components/tools/PetFoodCalculator";
import { generateToolSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Pet Food Calculator",
  description:
    "Estimate a dog or cat's daily calories, food portion, and water needs with WSAVA resting energy and life-stage factors.",
};

const faqs = [
  {
    question: "What is RER for dogs and cats?",
    answer:
      "Resting energy requirement (RER) is the calorie need of a pet at rest in a comfortable room. WSAVA estimates it as 70 times body weight in kilograms raised to the power of 0.75. It is the baseline before growth, activity, or a weight goal is applied.",
  },
  {
    question: "What is DER and how is it different from RER?",
    answer:
      "Daily energy requirement (DER) is RER multiplied by a life-stage factor. A neutered adult uses 1.6 times RER, while a puppy under four months uses 3 times RER. Body condition then raises or lowers that target by 15 percent.",
  },
  {
    question: "How many calories should I feed my dog or cat?",
    answer:
      "Enter the current weight, life stage, and body condition score. The calculator returns a daily kilocalorie target, a portion in cups or grams, and a breakfast and dinner split. Recheck body condition every two weeks and change the portion if weight is not moving as planned.",
  },
  {
    question: "How much water should a dog or cat drink?",
    answer:
      "A practical veterinary rule is 1 milliliter of water for each kilocalorie eaten. A 600 kilocalorie day means about 600 milliliters of water. Pets eating wet food already take in moisture, so they may drink less from the bowl.",
  },
  {
    question: "Can this calculator replace a veterinary diet?",
    answer:
      "No. These figures follow WSAVA energy equations and typical food densities, not a diagnosis. Illness, growth problems, and prescription diets need a licensed veterinarian or a board-certified veterinary nutritionist.",
  },
] as const;

const related = [
  { href: "/dogs", label: "Dog breeds" },
  { href: "/dogs/nutrition", label: "Dog nutrition" },
  { href: "/cats", label: "Cat breeds" },
  { href: "/cats/nutrition", label: "Cat nutrition" },
  { href: "/tools/diet-planner", label: "7-day diet planner" },
] as const;

export default function PetFoodCalculatorPage() {
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
          "Pet Food Calculator",
          "Estimate a dog or cat's daily calories, food portion, and water needs with WSAVA resting energy and life-stage factors.",
          "/tools/pet-food-calculator",
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Pet Food Calculator", path: "/tools/pet-food-calculator" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="mb-8 max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Nutrition tool
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          Pet food calculator
        </h1>
        <p className="mb-0 text-slate-700">
          Estimate daily calories from body weight, then turn that target into a kibble or canned
          portion. The math follows WSAVA resting-energy and life-stage factors used in small
          animal practice.
        </p>
      </header>

      <PetFoodCalculator />

      <section className="mt-12 max-w-reading">
        <h2 className="mb-4 text-2xl font-semibold text-brand-primary">RER versus DER</h2>
        <p>
          Resting energy requirement is the calories a dog or cat uses while resting. Convert
          pounds to kilograms by dividing by 2.20462, then calculate RER as 70 × kg^0.75. A 10 kg
          pet has an RER near 394 kcal.
        </p>
        <p>
          Daily energy requirement multiplies that RER by a life-stage factor. Neutered adults use
          1.6, intact adults use 1.8, seniors use 1.4, and growing puppies or kittens use 2 or 3
          depending on age. Weight loss uses 1.0 to 1.2, and hard work uses 2.0 to 2.5.
        </p>
        <p>
          Body condition is a separate check on the 9-point scale. Scores 1 to 3 add 15 percent,
          scores 4 and 5 stay at the calculated target, and scores 6 to 9 subtract 15 percent for
          a safer loss rate. Recheck ribs, waist, and weight rather than locking the first number
          in for months.
        </p>
      </section>

      <section className="mt-12 max-w-reading" aria-labelledby="calculator-faq">
        <h2 id="calculator-faq" className="mb-6 text-2xl font-semibold text-brand-primary">
          Pet calorie questions
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

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold text-brand-primary">Related guides</h2>
        <ul className="flex flex-wrap gap-2">
          {related.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-full border border-brand-primary/15 bg-white px-4 text-sm font-semibold text-brand-primary hover:bg-brand-primary-50"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
