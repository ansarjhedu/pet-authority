import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const meloxicamGuide: EmergencyLongGuide = {
  title: "Meloxicam (Metacam) in Dogs and Cats",
  lede: "Meloxicam is a prescription NSAID with a narrow safety margin. The label is written for that animal's weight that day. A dog dose given to a cat, a repeated oral cat dose, or stacking with another anti-inflammatory can cause kidney failure or stomach ulcers.",
  faqs: [
    {
      question: "Can I give leftover dog Metacam to my cat?",
      answer:
        "No. Dog oral solutions and cat protocols are not interchangeable. Treat any mix-up as an overdose emergency.",
    },
    {
      question: "What if I accidentally gave two doses?",
      answer:
        "Call a poison hotline or emergency hospital with the bottle, the milligram strength, the times, and the weight in pounds (kilograms). Do not add another pain medicine.",
    },
    {
      question: "Is meloxicam safer than ibuprofen?",
      answer:
        "Veterinary NSAIDs are still prescription drugs with ulcer and kidney risk. Human ibuprofen remains a lethal toxin for pets and is not a substitute.",
    },
  ],
  sections: [
    {
      heading: "1. Clinical verdict",
      blocks: [
        {
          type: "snippet",
          text: "Meloxicam is prescription-only. This page does not publish a milligram-per-kilogram dose. Extra doses, NSAID stacking, or giving a dog product to a cat are emergencies.",
        },
      ],
    },
    {
      heading: "2. How clinics use it",
      blocks: [
        {
          type: "p",
          text: "Dogs may receive meloxicam for pain and inflammation under a veterinary prescription. Some countries allow a single labeled cat dose only from the prescribing veterinarian. Never copy a dose from another pet or from a human pain chart.",
        },
      ],
    },
    {
      heading: "3. Overdose signs",
      blocks: [
        {
          type: "table",
          headers: ["Sign", "Why it matters"],
          rows: [
            ["Vomiting, sometimes with blood", "Stomach injury"],
            ["Black stool", "Digested blood"],
            ["Increased thirst", "Possible kidney stress"],
            ["Weakness or collapse", "Needs emergency care"],
          ],
        },
        {
          type: "p",
          text: "The emergency team stops the drug, starts fluids, protects the stomach, and checks kidney values and blood pressure. Bring the bottle and the time of the last dose.",
        },
      ],
    },
    {
      heading: "4. Related pages",
      blocks: [
        {
          type: "links",
          items: [
            { href: "/medications/carprofen", label: "Carprofen (another dog NSAID)" },
            { href: "/medications/ibuprofen", label: "Ibuprofen toxicity" },
            { href: "/medications/acetaminophen", label: "Acetaminophen toxicity" },
          ],
        },
      ],
    },
  ],
};
