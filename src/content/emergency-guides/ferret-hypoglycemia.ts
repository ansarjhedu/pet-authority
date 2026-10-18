import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const ferretHypoglycemiaGuide: EmergencyLongGuide = {
  title: "Ferret Hypoglycemia and Insulinoma Collapse",
  lede: "Middle-aged and older ferrets can develop insulinoma, a pancreatic tumor that drops blood sugar. Weakness, staring, drooling, or collapse may follow a missed meal. A conscious ferret who can swallow may get a pea-sized smear of honey or corn syrup on the gums on the way to the clinic. A seizuring or unconscious ferret still needs emergency care—do not pour liquid into the mouth.",
  faqs: [
    {
      question: "Is honey a cure?",
      answer:
        "No. Sugar on the gums is a bridge to the hospital, not a substitute for a blood-glucose check and a veterinary plan.",
    },
    {
      question: "What if the ferret is seizuring?",
      answer:
        "Do not put honey, water, or syrup in the mouth. Keep them warm in a carrier and leave for emergency care while you call ahead.",
    },
    {
      question: "Can I give diabetes medicine from the human cabinet?",
      answer:
        "No. Do not give insulin, human diabetes tablets, or another pet's medicine.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Suspected low blood sugar in a ferret is critical—act within about 15 minutes. If awake and swallowing, rub a pea-sized amount of honey or corn syrup on the gums, then go to a veterinarian. Do not pour liquid into an unconscious mouth.",
        },
      ],
    },
    {
      heading: "2. Signs",
      blocks: [
        {
          type: "table",
          headers: ["Sign", "Note"],
          rows: [
            ["Hind-leg weakness, staring, pawing at the mouth", "Early neuroglycopenia"],
            ["Drooling or nausea", "Common with low sugar"],
            ["Collapse that improves after sugar, then returns", "Still needs clinic confirmation"],
            ["Seizure or unresponsiveness", "Emergency—no oral sugar"],
          ],
        },
      ],
    },
    {
      heading: "3. On the way",
      blocks: [
        {
          type: "p",
          text: "Offer a normal meal once they are alert, then leave. Keep them warm in a carrier. Note how long the episode lasted. Call ahead and say the ferret collapsed or seemed drunk and weak.",
        },
      ],
    },
    {
      heading: "4. Clinic care",
      blocks: [
        {
          type: "p",
          text: "The clinic measures blood glucose and supports the ferret with dextrose and fluids if sugar is low. They look for other causes of collapse, including heart disease and toxin exposure. Confirmed insulinoma is managed with diet changes and prescription medicine; some ferrets are referred for surgery.",
        },
        {
          type: "links",
          items: [
            { href: "/breeds/small-pets/ferret", label: "Ferret care profile" },
            { href: "/tools/vet-finder", label: "Find emergency care" },
          ],
        },
      ],
    },
  ],
};
