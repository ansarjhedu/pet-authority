import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const rabbitGiStasisGuide: EmergencyLongGuide = {
  title: "Rabbit GI Stasis: When Hay and Droppings Stop",
  lede: "Rabbits must keep eating and passing fecal pellets. A rabbit who has not eaten, or who has passed few or no droppings, for more than about 12 hours can develop gastrointestinal stasis. Pain, dental disease, and a low-fiber diet are common triggers. Do not wait a full day if they are hunched or grinding their teeth.",
  faqs: [
    {
      question: "Should I syringe-feed at home first?",
      answer:
        "Do not force-feed syringe food unless a rabbit veterinarian has already taught you the method and the rabbit can swallow. Wrong technique or a rabbit who cannot swallow risks aspiration.",
    },
    {
      question: "Is this the same as a blockage?",
      answer:
        "Stasis and obstruction can look alike at home. Imaging at the clinic sorts them. Either way, same-day exotic care is the plan.",
    },
    {
      question: "Can I give gas drops or human pain medicine?",
      answer:
        "No. Do not give cat, dog, or human pain medicine, fruit piles, bread, or gas drops meant for another species.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Fewer droppings plus a quiet appetite is urgent—act within about 60 minutes of deciding something is wrong, and sooner if the rabbit is hunched or grinding teeth. Call a rabbit-savvy veterinarian the same day.",
        },
      ],
    },
    {
      heading: "2. Home checks that matter",
      blocks: [
        {
          type: "table",
          headers: ["Check", "Red flag"],
          rows: [
            ["Litter pellets", "None, tiny, or diarrhea instead of normal rounds"],
            ["Hay intake", "Refusing hay, pellets, or favorite greens"],
            ["Posture", "Hunched, teeth grinding, gas-filled belly"],
            ["Behavior", "Hiding or sudden stillness"],
          ],
        },
        {
          type: "p",
          text: "Offer hay and water and note whether they take any. Bring abnormal droppings and the usual pellet label to the appointment. Keep them warm and quiet in a familiar carrier.",
        },
      ],
    },
    {
      heading: "3. What the clinic may do",
      blocks: [
        {
          type: "p",
          text: "The clinic checks hydration, temperature, and pain, and often takes abdominal images for gas or obstruction. Treatment usually includes fluids, prescription pain relief, and gut-motility medicine chosen by the veterinarian. Dental disease is investigated if the rabbit cannot chew hay.",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/small-pets/fewer-droppings", label: "Fewer droppings triage" },
            { href: "/health-symptoms/small-pets/teeth-grinding-hunching", label: "Teeth grinding and hunching" },
            { href: "/nutrition/timothy-hay", label: "Timothy hay basics" },
          ],
        },
      ],
    },
  ],
};
