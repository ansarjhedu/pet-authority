import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const strainingInLitterBoxGuide: EmergencyLongGuide = {
  title: "Cat Straining in the Litter Box",
  lede: "A cat who squats often and passes little or no urine may have a urethral blockage, especially if male. That is an emergency, not constipation, until a veterinarian proves otherwise. Check the box for urine clumps first.",
  faqs: [
    {
      question: "Can I give a laxative?",
      answer:
        "No. Do not give hairball paste or a laxative while a male cat is straining. You may be treating the wrong problem and delaying a life-saving catheter.",
    },
    {
      question: "What if I am not sure it is urine?",
      answer:
        "Go in. Uncertainty is a reason to leave, not a reason to wait overnight.",
    },
  ],
  sections: [
    {
      heading: "1. Triage verdict",
      blocks: [
        {
          type: "snippet",
          text: "Code Red for a male cat with repeated straining and little or no urine. Call ahead, carrier him quietly, and treat it as a blockage until proven otherwise.",
        },
      ],
    },
    {
      heading: "2. Home checklist",
      blocks: [
        {
          type: "p",
          text: "Check the box for urine, not only stool. Note crying, licking under the tail, or vomiting. Look at gum color; do not press a firm belly hard. Open-mouth breathing in a cat is an emergency on its own.",
        },
      ],
    },
    {
      heading: "3. Causes clinics sort",
      blocks: [
        {
          type: "p",
          text: "Urethral obstruction, painful bladder inflammation that still lets urine pass, constipation, and infection can look similar at home. Only the clinic separates them safely.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/feline-urethral-blockage", label: "Urethral blockage emergency" },
            { href: "/medications/ibuprofen", label: "Never give human pain tablets" },
          ],
        },
      ],
    },
  ],
};
