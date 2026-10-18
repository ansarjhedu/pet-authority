import type { BreedGuide } from "@/lib/breeds/guide";

export const guineaPigGuide: BreedGuide = {
  title: "Guinea Pig Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "Guinea pigs need unlimited grass hay, a vitamin C source, and same-day care when droppings shrink or teeth grinding starts. Pellets never replace the hay pile. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The guinea pig is a social, vocal herd animal that needs hay all day, vitamin C every day, and a friend of its own species. Most live about 5 to 8 years. Plan about 60 minutes of floor time, unlimited grass hay, and a measured pellet that supplies vitamin C.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "American guinea pigs are short-coated cavies with a sturdy body and expressive vocal range. Adults usually weigh 1.5–2.6 lb (0.7–1.2 kg). They are herd animals; a compatible companion of the same species, with enough hide space, is the welfare baseline.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "1.5–2.6 lb (0.7–1.2 kg)"],
            ["Life expectancy", "5–8 years"],
            ["Energy level", "3 of 5"],
            ["Grooming demand", "2 of 5"],
            ["Apartment fit", "Yes, with a large enclosure and daily floor time"],
          ],
        },
        {
          type: "p",
          text: "They suit apartments when the enclosure is large enough for two and the floor-time pen is chewed-safe. Human visits do not replace another guinea pig. Keep rooms cool; heat stress rises quickly in a heavy-bodied rodent.",
        },
        {
          type: "p",
          text: "Most are gentle with supervised children who sit on the floor for contact. Never use rabbit pellets as the sole food. Unlimited grass hay is the diet; pellets are a measured supplement.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical adult starts near 80 kcal per day, but hay volume matters more than calorie math alone. Guinea pigs cannot make their own vitamin C. A diet without a reliable source leads to scurvy, which is painful and can become an emergency.",
        },
        {
          type: "p",
          text: "Offer unlimited grass hay, a measured guinea-pig pellet with vitamin C, and safe vegetables. Do not force-feed unless a veterinarian has shown you how. Watch droppings daily; fewer pellets can mean gut slowdown or dental pain.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator for general portion thinking, then prioritize unlimited hay and a vitamin-C plan from a veterinarian over scoop habits meant for dogs.",
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
          text: "Plan about 60 minutes of supervised floor time for a healthy adult pair. Hides, tunnels, and chew toys count. A cage without floor time leads to weak muscle and boredom.",
        },
        {
          type: "p",
          text: "Brush short coats weekly. Check teeth if food is dropped or the chin is wet. Keep nails trimmed. Clean the enclosure so ammonia does not irritate the lungs.",
        },
      ],
    },
    {
      heading: "5. Major Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "Guinea pigs are at risk for vitamin C deficiency (scurvy), dental malocclusion, respiratory infection, and bladder stones. Hay keeps teeth and gut moving; without it, GI stasis-like quiet and fewer droppings can appear.",
        },
        {
          type: "p",
          text: "Clicking breaths, blood in the urine, dropping food, or a hunched quiet pig goes to a veterinarian the same day, sooner if they stop eating. Do not wait overnight on a silent gut.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Vitamin C deficiency (scurvy)",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A rough coat, painful joints, or bleeding gums can mean scurvy. Pellets expire; old vitamin C is not a plan. Vegetables and proper pellets must supply a daily source.",
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
      heading: "Dental disease and gut slowdown",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Dropping food, drooling, or losing weight while hay is available can mean dental malocclusion. Fewer droppings, hunching, or teeth grinding can mean pain or gut slowdown related to low hay intake. Both need same-day care.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/small-pets/teeth-grinding-hunching",
              label: "Check teeth grinding and hunching",
            },
            {
              href: "/health-symptoms/small-pets/fewer-droppings",
              label: "Check fewer droppings in symptom triage",
            },
          ],
        },
      ],
    },
    {
      heading: "Respiratory infection and bladder stones",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Clicking breaths, discharge, or sitting still and fluffed can mean respiratory infection. Blood in the urine, crying while passing urine, or straining needs a same-day visit for possible bladder stones.",
        },
      ],
    },
    {
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult (often double for a bonded pair's food and bedding). Dental and urinary emergencies sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Hay, pellets, and vitamin C vegetables", "$250", "£200", "A$375"],
            ["Routine veterinary care", "$200", "£160", "A$300"],
            ["Bedding and enclosure upkeep", "$150", "£120", "A$225"],
            ["Enrichment and parasite control", "$100", "£70", "A$150"],
            ["Total estimated annual investment", "$700", "£550", "A$1,050"],
          ],
        },
        {
          type: "p",
          text: "Find an exotic or small-mammal veterinarian before an emergency. Rabbit-only clinics are not always the same as cavy-savvy care.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about living alone and vitamin C. The answers below are educational ranges for a typical guinea pig. They do not diagnose the animal you live with.",
        },
      ],
    },
    {
      heading: "Can a guinea pig live alone?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "They are herd animals. A compatible companion of the same species, with enough hide space, is the welfare baseline. Human visits do not replace another guinea pig. Adults usually weigh 1.5–2.6 lb (0.7–1.2 kg).",
        },
      ],
    },
    {
      heading: "Why is vitamin C mentioned every time?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Guinea pigs cannot make their own vitamin C. A diet without a reliable source leads to scurvy, which is painful and can become an emergency. Unlimited hay still matters for teeth and gut motility.",
        },
      ],
    },
  ],
};
