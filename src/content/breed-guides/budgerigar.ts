import type { BreedGuide } from "@/lib/breeds/guide";

export const budgerigarGuide: BreedGuide = {
  title: "Budgerigar Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "Budgerigars need grams on a scale more than another millet spray. A weekly weigh-in catches illness early; a tail bob at rest is an avian emergency. Ranges below use pounds (grams) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The budgerigar is a tiny flock parrot that needs grams on a scale more than another millet spray. Most live about 7 to 15 years. They suit apartments with about 60 minutes of daily activity, clean air, and adult supervision around children.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "Budgies are small Australian parrots with busy energy and a cheerful flock voice. Adults usually weigh 0.07–0.09 lb (0.03–0.04 kg). That is roughly 30–40 g; a kitchen scale that reads grams is more useful than a bathroom scale.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "0.07–0.09 lb (0.03–0.04 kg)"],
            ["Life expectancy", "7–15 years"],
            ["Energy level", "4 of 5"],
            ["Grooming demand", "1 of 5"],
            ["Apartment fit", "Yes, with clean air and flock company or rich enrichment"],
          ],
        },
        {
          type: "p",
          text: "They suit apartments when the kitchen stays free of non-stick fumes and ceiling fans are off during free flight. Small birds are injured by squeezing. Teach quiet handling.",
        },
        {
          type: "p",
          text: "They are social. A single bird needs more human interaction; a compatible pair needs enough cage space. Drafts and overnight chills are harder on a 1 oz (30 g) bird than on a dog.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical adult starts near 20 kcal per day. A pellet and vegetable base with limited seed is safer than millet all day. Iodine deficiency and thyroid enlargement follow some all-seed diets.",
        },
        {
          type: "p",
          text: "Weigh the bird weekly in grams. A drop is an early illness sign. Fresh water daily; scrub the dish so biofilm does not sit overnight.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator for general portion thinking, then confirm a budgie plan with an avian veterinarian and a gram scale rather than a heaped millet scoop.",
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
          text: "Plan about 60 minutes of supervised out-of-cage time when the room is safe. Foraging toys and flock chatter count as mental work.",
        },
        {
          type: "p",
          text: "Provide a shallow bath dish. Check the beak and nails at avian visits. A squeak, regurgitation, or a click when breathing on an all-seed diet needs a clinic visit.",
        },
      ],
    },
    {
      heading: "5. Major Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "Budgies are at risk for respiratory disease, egg binding, iodine deficiency with thyroid enlargement, and tumors in older birds. Tail bobbing means the bird is working too hard to breathe.",
        },
        {
          type: "p",
          text: "Tail bobbing, open-beak breathing, a hen too weak to perch, or sudden inability to fly level goes to an avian emergency clinic.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Respiratory disease",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Tail bobbing, a voice change, or open-beak breathing means respiratory distress. That is an avian emergency, even if the bird still looks bright.",
        },
        {
          type: "p",
          text: "Code Green is quiet breathing at rest. Code Yellow is a quieter voice after dusty air. Code Red is a continuous tail bob or open-beak breathing.",
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
      heading: "Egg binding",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A hen straining or too weak to perch may be egg bound. Warmth and quiet transport to an avian clinic beat home remedies.",
        },
        {
          type: "links",
          items: [{ href: "/emergency/egg-binding", label: "Open the egg-binding emergency guide" }],
        },
      ],
    },
    {
      heading: "Iodine deficiency and tumors",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A squeak, regurgitation, or a click when breathing on an all-seed diet can mean thyroid enlargement from iodine deficiency. Older birds may develop lumps or lose level flight; those need an exam, not a wait for the next molt.",
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
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult. Avian emergencies sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-grade nutrition and supplements", "$120", "£100", "A$180"],
            ["Routine avian veterinary care", "$120", "£100", "A$180"],
            ["Cage enrichment and replacement toys", "$90", "£70", "A$135"],
            ["Grooming and parasite control", "$70", "£50", "A$105"],
            ["Total estimated annual investment", "$400", "£320", "A$600"],
          ],
        },
        {
          type: "p",
          text: "Budget for an avian veterinarian. A cheap cage does not replace clean air, pellets, and gram-scale monitoring.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about children and tail bobbing. The answers below are educational ranges for a typical budgerigar. They do not diagnose the bird you live with.",
        },
      ],
    },
    {
      heading: "Is a budgie a good child's pet?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "They can be, with adult supervision. Small birds are injured by squeezing, ceiling fans, and non-stick fumes. Adults usually weigh 0.07–0.09 lb (0.03–0.04 kg).",
        },
      ],
    },
    {
      heading: "What does tail bobbing mean?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A tail that pumps with every breath means the bird is working too hard to breathe. That is an avian emergency, even if the bird still looks bright.",
        },
      ],
    },
  ],
};
