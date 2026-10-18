import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const avianRespiratoryDistressGuide: EmergencyLongGuide = {
  title: "Bird Open-Mouth Breathing and Tail Bob",
  lede: "Birds hide illness until breathing takes visible work. Open-mouth breathing, a rhythmic tail bob, or a sudden voice change means the bird needs oxygen and an avian or emergency veterinarian. Extra handling can make a dyspneic bird worse—keep the carrier dim and the trip short.",
  faqs: [
    {
      question: "Can I wait overnight if the bird is still perched?",
      answer:
        "No. A tail bob with open-beak breathing is a same-hour emergency. Birds decompensate fast.",
    },
    {
      question: "Should I use vapor rub or essential oils?",
      answer:
        "No. Do not use vapor rubs, essential oils, or medicated drops. Fumes worsen respiratory distress.",
    },
    {
      question: "What about non-stick pan fumes?",
      answer:
        "Overheated PTFE cookware can kill birds quickly. Mention any new aerosols, smoke, or cookware if they were nearby.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Open-mouth breathing or a clear tail bob is critical—act within about 15 minutes. Move the bird to a small upright carrier, keep the room warm and quiet, call ahead, and limit handling to transport.",
        },
      ],
    },
    {
      heading: "2. Recognition",
      blocks: [
        {
          type: "table",
          headers: ["Sign", "Meaning"],
          rows: [
            ["Open beak breathing or rhythmic tail bob", "Increased respiratory effort"],
            ["Weak, squeaky, or absent voice", "Airway or syrinx stress"],
            ["Fluffed on the cage floor", "Systemic illness"],
            ["Sudden weakness or pale/blue skin", "Decompensation"],
          ],
        },
      ],
    },
    {
      heading: "3. Transport rules",
      blocks: [
        {
          type: "p",
          text: "Line a small carrier with a towel. Keep the bird upright. Place the carrier away from smoke, perfume, and cooking fumes. Do not squeeze the chest or hold the bird on their back. Do not offer water to a gasping bird.",
        },
        {
          type: "p",
          text: "Bring the usual food label and note any new fumes, non-stick pans, or aerosols. Call and say the bird is open-mouth breathing so oxygen can be ready.",
        },
      ],
    },
    {
      heading: "4. What the clinic may do",
      blocks: [
        {
          type: "p",
          text: "The team places the bird in oxygen and warmth before a full exam. Once breathing is safer, they may image, test for infection, or look for a foreign body or reproductive disease. Treatment depends on the cause and often includes hospital oxygen and fluids rather than a single home medicine.",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/birds/tail-bobbing", label: "Tail-bobbing triage" },
            { href: "/health-symptoms/birds/fluffed-and-quiet", label: "Fluffed and quiet" },
            { href: "/emergency/egg-binding", label: "Egg binding (if straining)" },
          ],
        },
      ],
    },
  ],
};
