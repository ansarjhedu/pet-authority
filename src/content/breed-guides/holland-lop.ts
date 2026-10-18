import type { BreedGuide } from "@/lib/breeds/guide";

export const hollandLopGuide: BreedGuide = {
  title: "Holland Lop Rabbit Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "Holland Lops are compact pet rabbits whose gut and teeth depend on unlimited timothy hay. More than about 12 hours without pellets—or a hunched grind—needs a rabbit-savvy veterinarian. Carrots are treats, not the meal. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The Holland Lop is a small lop whose teeth, gut, and ears fail quietly if hay and floor space are skipped. Most live about 7 to 10 years. Plan several hours of safe pen time, unlimited hay, and a cool room—not a cage-only life.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "Holland Lops are compact rabbits with heavy lop ears and a short face. Adults usually weigh 2–4 lb (0.9–1.8 kg). They are curious and routine-loving. A hutch without floor time leads to weak bone, obesity, and gut slowdown.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "2–4 lb (0.9–1.8 kg)"],
            ["Life expectancy", "7–10 years"],
            ["Energy level", "3 of 5"],
            ["Grooming demand", "3 of 5"],
            ["Exercise need", "About 180 minutes of safe pen time daily"],
          ],
        },
        {
          type: "p",
          text: "They suit apartments when the pen is large and electrical cords are blocked. Heat stress rises quickly; lethargy and wet-nose breathing in a warm room are emergencies. Keep rooms cooler than you might choose for yourself in summer.",
        },
        {
          type: "p",
          text: "Most are gentle with supervised children who sit for contact and do not lift by the ears. Heavy lop ears hide infection; check for odor and head shaking weekly.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical adult starts near 130 kcal per day, but unlimited hay is the real diet. Add a small measured pellet portion and leafy greens. Treats and muesli mixes are a common cause of dental disease and obesity.",
        },
        {
          type: "p",
          text: "Do not force-feed unless a rabbit veterinarian has shown you how. Count fecal pellets daily. No droppings, hunching, or teeth grinding means pain or gastrointestinal stasis until proven otherwise.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator for general portion thinking, then prioritize unlimited hay and a rabbit veterinarian's pellet plan over scoop habits meant for dogs.",
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
          text: "Plan about 180 minutes in a safe pen for a healthy adult. A cage is housing, not exercise. Chew toys and tunnels count as enrichment.",
        },
        {
          type: "p",
          text: "Brush several times a week, more during molt. Check the ear bases for odor. Keep nails short. Watch the chin for wetness that can mean dental pain.",
        },
      ],
    },
    {
      heading: "5. Major Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "Holland Lops are at risk for dental disease, gastrointestinal stasis, ear disease under heavy lop ears, and heat stress. A quiet rabbit with no fecal pellets is an emergency, not a nap.",
        },
        {
          type: "p",
          text: "No droppings, loud tooth grinding, a hunched posture, or collapse in a warm room goes to a rabbit-savvy veterinarian the same day, sooner if they stop eating.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Dental disease",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Drooling, a wet chin, or refusing hay can mean overgrown teeth. Without hay abrasion, molars grow into painful spikes. Same-day care beats waiting for the next free afternoon.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/small-pets/teeth-grinding-hunching",
              label: "Check teeth grinding and hunching in symptom triage",
            },
          ],
        },
      ],
    },
    {
      heading: "Gastrointestinal stasis",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No droppings, hunching, or teeth grinding means pain or gut stasis. Low hay, stress, and dental pain are common triggers. Call a rabbit-savvy veterinarian the same day; do not wait overnight.",
        },
        {
          type: "p",
          text: "Code Green is steady hay intake and normal pellets. Code Yellow is fewer pellets with a still-eating rabbit. Code Red is no pellets, grinding, or refusal of hay.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/small-pets/fewer-droppings",
              label: "Check fewer droppings in symptom triage",
            },
            {
              href: "/health-symptoms/small-pets/teeth-grinding-hunching",
              label: "Check teeth grinding and hunching",
            },
          ],
        },
      ],
    },
    {
      heading: "Ear disease and heat stress",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Head shaking, odor, or scratching at the ear base is common under heavy lop ears. Lethargy, wet-nose breathing, or collapse in a warm room is heat stress—cool the rabbit gently and go to a clinic the same hour.",
        },
      ],
    },
    {
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult. Stasis hospitalization and dental procedures sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Hay, pellets, and greens", "$300", "£240", "A$450"],
            ["Routine rabbit veterinary care", "$250", "£200", "A$375"],
            ["Bedding and enclosure upkeep", "$200", "£150", "A$300"],
            ["Enrichment and parasite control", "$150", "£110", "A$225"],
            ["Total estimated annual investment", "$900", "£700", "A$1,350"],
          ],
        },
        {
          type: "p",
          text: "Find a rabbit-savvy veterinarian before an emergency. Not every small-animal clinic stocks rabbit pain protocols or syringe-feeding plans.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about cage exercise and quiet emergencies. The answers below are educational ranges for a typical Holland Lop. They do not diagnose the rabbit you live with.",
        },
      ],
    },
    {
      heading: "Is a cage enough exercise?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No. Holland Lops need several hours a day in a safe pen. A hutch without floor time leads to weak bone, obesity, and gut slowdown. Adults usually weigh 2–4 lb (0.9–1.8 kg).",
        },
      ],
    },
    {
      heading: "When is a quiet rabbit an emergency?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No fecal pellets, loud tooth grinding, or a hunched posture means pain or gut stasis. Call a rabbit-savvy veterinarian the same day, sooner if they stop eating. Unlimited hay is prevention, not a cure once stasis starts.",
        },
      ],
    },
  ],
};
