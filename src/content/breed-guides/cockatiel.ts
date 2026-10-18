import type { BreedGuide } from "@/lib/breeds/guide";

export const cockatielGuide: BreedGuide = {
  title: "Cockatiel Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "Cockatiels hide illness until breathing or egg-laying becomes obvious. Pellets and vegetables beat an all-seed cup, and non-stick pan fumes are an emergency—not a kitchen quirk. Weight ranges below use pounds (grams) with yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The cockatiel is a whistling, social small cockatoo relative that hides illness until breathing or egg-laying becomes obvious. Most live about 15 to 25 years. They suit apartments with out-of-cage time, about 60 minutes of daily activity, and air free of non-stick and aerosol fumes.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "Cockatiels are small crested parrots with a long tail and a whistling voice. Adults usually weigh 0.17–0.28 lb (0.08–0.12 kg), often discussed in grams on a kitchen scale. A weekly weigh-in in grams catches illness earlier than waiting for fluffed silence.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "0.17–0.28 lb (0.08–0.12 kg)"],
            ["Life expectancy", "15–25 years"],
            ["Energy level", "3 of 5"],
            ["Grooming demand", "2 of 5"],
            ["Apartment fit", "Yes, with clean air and out-of-cage time"],
          ],
        },
        {
          type: "p",
          text: "They suit apartments if neighbors can tolerate whistling and the kitchen stays free of non-stick cookware fumes, scented candles, and aerosol sprays. Open-mouth breathing is not normal. Whistling is.",
        },
        {
          type: "p",
          text: "Most cockatiels enjoy gentle handling when trained. Young children need adult supervision so the bird is not squeezed. Drafts and overnight temperature swings stress a bird more than a short cool walk stresses a dog.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical adult starts near 40 kcal per day. Pellets, vegetables, and a measured seed portion beat an all-seed cup. Fatty liver from a seed-only diet is a common husbandry injury.",
        },
        {
          type: "p",
          text: "Offer fresh water daily. Weigh the bird weekly in grams. A drop is an early illness sign even when the bird still looks bright.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator when adapting mammal calorie math is not enough; for birds, prioritize an avian veterinarian's pellet plan and gram-scale weigh-ins over scoop habits meant for dogs.",
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
          text: "Plan about 60 minutes of supervised out-of-cage time for a healthy adult when the room is bird-safe. Foraging toys and training whistling cues count as mental work.",
        },
        {
          type: "p",
          text: "Provide a bath dish or gentle mist if the bird enjoys it. Check the beak and nails at routine avian visits. Do not use over-the-counter oils or human lotions on feathers.",
        },
      ],
    },
    {
      heading: "5. Major Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "Cockatiels are at risk for egg binding, respiratory distress from fumes, and fatty liver from a seed-only diet. Birds hide illness; fluffed quiet sitting is a warning, not a nap preference.",
        },
        {
          type: "p",
          text: "Open-mouth breathing, a pumping tail with every breath, straining to lay, or sudden weakness goes to an avian emergency clinic. Keep the carrier warm and quiet on the way.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Egg binding",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A hen straining, standing wide, or sitting fluffed on the cage floor may be egg bound. This is an emergency, not a wait-and-see home project.",
        },
        {
          type: "p",
          text: "Code Green is a hen not in lay with normal droppings. Code Yellow is reduced appetite during a laying cycle. Code Red is straining, a wide stance, or collapse.",
        },
        {
          type: "links",
          items: [{ href: "/emergency/egg-binding", label: "Open the egg-binding emergency guide" }],
        },
      ],
    },
    {
      heading: "Respiratory distress from fumes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Non-stick cookware fumes, aerosols, and smoke can injure air sacs quickly. Open-mouth breathing or a tail bob after cooking fumes needs same-hour care.",
        },
        {
          type: "p",
          text: "Code Green is quiet breathing in clean air. Code Yellow is a voice change after a dusty day. Code Red is open-mouth breathing or a continuous tail bob.",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/birds/tail-bobbing", label: "Check tail bobbing in symptom triage" },
            { href: "/health-symptoms/birds/fluffed-and-quiet", label: "Check fluffed and quiet in symptom triage" },
          ],
        },
      ],
    },
    {
      heading: "Fatty liver from a seed-only diet",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "An overgrown beak, obesity, or sudden weakness can follow years of seed-only feeding. Transition to pellets under avian guidance rather than an overnight scoop change.",
        },
        {
          type: "p",
          text: "Code Green is a lean bird on a pellet-vegetable base. Code Yellow is weight gain with a dull crest. Code Red is sudden weakness or inability to perch.",
        },
      ],
    },
    {
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult. Avian emergencies and boarding sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-grade nutrition and supplements", "$200", "£170", "A$300"],
            ["Routine avian veterinary care", "$180", "£150", "A$270"],
            ["Cage enrichment and replacement toys", "$120", "£100", "A$180"],
            ["Grooming and parasite control", "$100", "£80", "A$150"],
            ["Total estimated annual investment", "$600", "£500", "A$900"],
          ],
        },
        {
          type: "p",
          text: "Budget for an avian veterinarian, not only a pet-shop checkup. A bird that lives 15–25 years is a long financial and care commitment.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about apartments and lifespan. The answers below are educational ranges for a typical cockatiel. They do not diagnose the bird you live with.",
        },
      ],
    },
    {
      heading: "Are cockatiels good apartment birds?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Yes, if they get out-of-cage time and the air stays free of fumes. Whistling is normal. Open-mouth breathing is not. Adults usually weigh 0.17–0.28 lb (0.08–0.12 kg).",
        },
      ],
    },
    {
      heading: "How long do cockatiels live?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Well-kept birds often live 15–25 years. That is a long commitment compared with many small mammals.",
        },
      ],
    },
  ],
};
