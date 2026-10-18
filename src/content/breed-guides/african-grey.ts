import type { BreedGuide } from "@/lib/breeds/guide";

export const africanGreyGuide: BreedGuide = {
  title: "African Grey Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "African Greys are long-lived, intelligent parrots whose calcium balance, air sacs, and boredom are clinical issues—not quirks. Feather plucking needs an avian workup, not only a new toy. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The African Grey is a long-lived parrot whose calcium balance, air sacs, and boredom are clinical issues, not quirks. Most live about 40 to 60 years. Plan about 120 minutes of daily foraging and interaction in a quiet, consistent adult household.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "African Greys are medium grey parrots with red tails and intense social bonds. Adults usually weigh 0.9–1.4 lb (0.4–0.65 kg). They fit a quiet, consistent adult household better than a busy home with toddlers.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "0.9–1.4 lb (0.4–0.65 kg)"],
            ["Life expectancy", "40–60 years"],
            ["Energy level", "3 of 5"],
            ["Grooming demand", "2 of 5"],
            ["Apartment fit", "Yes, with serious enrichment and clean air"],
          ],
        },
        {
          type: "p",
          text: "They bond intensely and can bite when startled or jealous. Plan for a bird that may outlive the first owner. Keep air free of fumes; aspergillosis risk rises in dusty, damp, or poorly ventilated spaces.",
        },
        {
          type: "p",
          text: "They need large cages plus daily out time. A silent Grey that stops talking may be ill, not polite. Voice change with a tail bob is a respiratory warning.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical adult starts near 90 kcal per day. A pellet, vegetable, and controlled-nut diet supports calcium better than a seed mix. Foraging time is part of feeding, not an extra.",
        },
        {
          type: "p",
          text: "Hypocalcemia can cause seizures and falling off the perch. Do not guess calcium supplements; follow an avian veterinarian. Weigh weekly in grams or ounces with a consistent scale.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator for general portion thinking, then confirm an African Grey calcium and pellet plan with an avian veterinarian.",
          href: "/tools/pet-food-calculator",
          label: "Open the pet food calculator",
        },
      ],
    },
    {
      heading: "4. Exercise, Mental Stimulation & Grooming Routine",
      blocks: [
        {
          type: "p",
          text: "Plan about 120 minutes of foraging, training, and supervised out-of-cage time for a healthy adult. Boredom drives feather-destructive behavior. Rotate toys so the day is not empty.",
        },
        {
          type: "p",
          text: "Provide bath opportunities. Chewed chest or flank feathers with normal wing molt need a medical and behavioral workup. Keep flight feathers managed only under professional guidance if clipping is used.",
        },
      ],
    },
    {
      heading: "5. Major Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "African Greys are over-represented for hypocalcemia, aspergillosis, atherosclerosis, and feather-destructive behavior. Seizures, falling, or sudden weakness need same-hour avian care.",
        },
        {
          type: "p",
          text: "Seizures, a continuous tail bob, or exercise collapse in a middle-aged bird goes to an avian emergency clinic. Keep the carrier warm and quiet.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Hypocalcemia",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Seizures, falling off the perch, or weakness can mean low blood calcium. Seed-only diets and inadequate UV or dietary planning raise risk. This is an emergency, not a wait for the next wellness visit.",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/birds/fluffed-and-quiet", label: "Check fluffed and quiet in symptom triage" },
          ],
        },
      ],
    },
    {
      heading: "Aspergillosis and atherosclerosis",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A voice change, tail bob, or exercise intolerance can mean aspergillosis in the airways. Sudden weakness, falling, or exercise collapse in a middle-aged bird can mean atherosclerosis. Both need avian diagnostics.",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/birds/tail-bobbing", label: "Check tail bobbing in symptom triage" },
          ],
        },
      ],
    },
    {
      heading: "Feather-destructive behavior",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Chewed chest or flank feathers with normal wing molt may be medical, behavioral, or both. Rule out disease before assuming the bird is only bored.",
        },
      ],
    },
    {
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult. Decades of care, boarding, and avian emergencies sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-grade nutrition and supplements", "$400", "£320", "A$600"],
            ["Routine avian veterinary care", "$350", "£280", "A$525"],
            ["Cage enrichment and replacement toys", "$280", "£220", "A$420"],
            ["Grooming and parasite control", "$170", "£130", "A$255"],
            ["Total estimated annual investment", "$1,200", "£950", "A$1,800"],
          ],
        },
        {
          type: "p",
          text: "Plan estate and rehoming arrangements for a bird that may live 40–60 years. An avian veterinarian, not only a pet-shop checkup, should be on the annual budget.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about lifespan and children. The answers below are educational ranges for a typical African Grey. They do not diagnose the bird you live with.",
        },
      ],
    },
    {
      heading: "How long is the commitment?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "African Greys often live 40–60 years. Plan for a bird that may outlive the first owner, and for an avian veterinarian, not only a pet-shop checkup. Adults usually weigh 0.9–1.4 lb (0.4–0.65 kg).",
        },
      ],
    },
    {
      heading: "Are they a family bird for small children?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "They bond intensely and can bite when startled or jealous. They fit a quiet, consistent adult household better than a busy home with toddlers.",
        },
      ],
    },
  ],
};
