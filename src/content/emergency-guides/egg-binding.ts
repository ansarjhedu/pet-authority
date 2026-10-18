import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const eggBindingGuide: EmergencyLongGuide = {
  title: "Egg Binding in Small Pet Birds",
  lede: "Egg binding means an egg is stuck in the reproductive tract. Budgies, cockatiels, lovebirds, and finches are often affected. A bird who is straining, fluffed, and standing wide-legged can decline the same day. Warmth and a quiet carrier help on the way—removing the egg is a veterinary job.",
  faqs: [
    {
      question: "Can I pull the egg out myself?",
      answer:
        "No. Do not pull the egg or probe the vent. Do not put oil deep inside the cloaca. Those attempts tear tissue and delay real care.",
    },
    {
      question: "How warm should the carrier be?",
      answer:
        "About 80–86°F (27–30°C) if you can do that safely without overheating. Dim lights and keep other pets away. Do not leave the bird under an unattended heat lamp or in a hot car.",
    },
    {
      question: "Is open-mouth breathing still egg binding?",
      answer:
        "Straining plus open-mouth breathing means leave immediately. Treat it as respiratory emergency transport plus reproductive emergency.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Suspected egg binding is critical—act within about 60 minutes, sooner if breathing is hard. Warm, quiet carrier; call an avian veterinarian; do not try to extract the egg at home.",
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
            ["Repeated straining or wide-legged stance", "Classic early picture"],
            ["Swollen vent or a visible egg", "Confirm with the clinic—do not pull"],
            ["Fluffed feathers, floor sitting, tail bob", "Systemic stress"],
            ["Weakness or open-mouth breathing", "Go now"],
          ],
        },
      ],
    },
    {
      heading: "3. What not to give",
      blocks: [
        {
          type: "p",
          text: "Do not give calcium, human painkillers, or another pet's medicine unless a veterinarian directs it for this bird. Offer usual food only if the bird is perching and breathing comfortably.",
        },
      ],
    },
    {
      heading: "4. Clinic care",
      blocks: [
        {
          type: "p",
          text: "The veterinarian supports heat, fluids, and pain control, then confirms the egg with an exam or imaging. They may lubricate and assist passage, or remove the egg under anesthesia if it will not move. Blood calcium and infection are checked because a stuck egg is often part of a wider reproductive problem.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/avian-respiratory-distress", label: "Respiratory distress" },
            { href: "/breeds/birds/cockatiel", label: "Cockatiel care notes" },
            { href: "/breeds/birds/budgerigar", label: "Budgerigar care notes" },
          ],
        },
      ],
    },
  ],
};
