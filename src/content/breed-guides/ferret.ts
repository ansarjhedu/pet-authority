import type { BreedGuide } from "@/lib/breeds/guide";

export const ferretGuide: BreedGuide = {
  title: "Ferret Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "Ferrets are curious carnivores that need secure play space and ferret-appropriate food. Middle-aged animals can develop insulinoma—weakness or collapse is a same-hour emergency, with honey on the gums only if they are conscious and swallowing. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The ferret is a high-energy carnivore that collapses from low blood sugar more often than owners expect. Most live about 6 to 10 years. Plan about 120 minutes of supervised floor time daily, a high-protein diet, and a room cleared of rubber and foam chew hazards.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "Ferrets are long-bodied mustelids with playful, inquisitive energy. Adults usually weigh 1.5–4.5 lb (0.7–2 kg), with males often heavier. They suit apartments with several hours of supervised floor time and a room that has been cleared of chew hazards. They are not cage-only pets.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "1.5–4.5 lb (0.7–2 kg)"],
            ["Life expectancy", "6–10 years"],
            ["Energy level", "5 of 5"],
            ["Grooming demand", "2 of 5"],
            ["Apartment fit", "Yes, with ferret-proofed floor time"],
          ],
        },
        {
          type: "p",
          text: "They are social with their people and often with other ferrets, and they are a poor match for toddlers who may be bitten during rough play. Rubber, foam, and headphone ear pads are obstruction risks.",
        },
        {
          type: "p",
          text: "Feed a high-protein, animal-based ferret or high-quality cat diet. Carbohydrate-heavy treats are a poor match and may worsen insulinoma risk discussions with your veterinarian.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical adult starts near 250 kcal per day. Multiple small meals or free-choice high-protein food often suit their metabolism better than one huge bowl. Recheck weight monthly.",
        },
        {
          type: "p",
          text: "Keep sugary treats rare. If a ferret collapses from suspected low blood sugar and is awake enough to swallow, rub a small amount of honey on the gums and offer a meal, then go to a veterinarian. Do not pour liquid into the mouth of a ferret who is seizuring.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator for general portion thinking, then confirm a high-protein ferret plan with a veterinarian experienced with mustelids.",
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
          text: "Plan about 120 minutes of supervised floor time for a healthy adult. Tunnels, dig boxes, and play with people count. A cage without out time leads to boredom and chewing hazards.",
        },
        {
          type: "p",
          text: "Wipe the coat as needed; bathe sparingly so skin oils are not stripped. Trim nails regularly. Watch for symmetrical hair loss that can mean adrenal disease.",
        },
      ],
    },
    {
      heading: "5. Major Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "Ferrets are over-represented for insulinoma, foreign-body obstruction, adrenal disease, and lymphoma. Hind-leg weakness, drooling, staring, or collapse can mean hypoglycemia from insulinoma.",
        },
        {
          type: "p",
          text: "Collapse, seizures, vomiting with teeth grinding after chewing foam, or labored breathing goes to an emergency clinic. Call ahead so the team is ready.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Insulinoma (hypoglycemia)",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Insulinoma is a pancreatic tumor that drives blood sugar too low. Hind-leg weakness, drooling, staring, or collapse are classic signs. If they are awake and can swallow, rub a small amount of honey on the gums and offer a meal, then go to a veterinarian immediately.",
        },
        {
          type: "p",
          text: "Code Green is a ferret on a known insulinoma plan with stable energy. Code Yellow is brief weakness that resolves after a meal. Code Red is collapse, seizures, or inability to swallow—do not pour liquid into the mouth during a seizure.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/ferret-hypoglycemia", label: "Open the ferret hypoglycemia emergency guide" },
          ],
        },
      ],
    },
    {
      heading: "Foreign-body obstruction",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Vomiting, teeth grinding, or refusing food after chewing foam or rubber can mean a blockage. Ferret-proof the room before play. This is a same-day emergency.",
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
      heading: "Adrenal disease and lymphoma",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Symmetrical hair loss, itch, or a swollen vulva can mean adrenal disease. Weight loss, enlarged nodes, or labored breathing can mean lymphoma. Both need veterinary workups rather than waiting for the next molt.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/small-pets/fewer-droppings",
              label: "Check appetite and droppings changes in symptom triage",
            },
          ],
        },
      ],
    },
    {
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult. Insulinoma care, obstruction surgery, and adrenal treatment sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-protein nutrition", "$500", "£400", "A$750"],
            ["Routine veterinary care and vaccinations", "$400", "£320", "A$600"],
            ["Pet insurance or emergency reserve", "$350", "£280", "A$525"],
            ["Litter, enrichment, and parasite control", "$250", "£200", "A$375"],
            ["Total estimated annual investment", "$1,500", "£1,200", "A$2,250"],
          ],
        },
        {
          type: "p",
          text: "Find a ferret-experienced veterinarian before the first collapse. Read whether endocrine disease is covered if you insure. Legal status varies by region; confirm local rules before bringing a ferret home.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about collapse and apartment living. The answers below are educational ranges for a typical ferret. They do not diagnose the animal you live with.",
        },
      ],
    },
    {
      heading: "What do I do if a ferret collapses?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "If they are awake and can swallow, rub a small amount of honey on the gums and offer a meal, then go to a veterinarian. Do not pour liquid into the mouth of a ferret who is seizuring. See the hypoglycemia emergency guide.",
        },
      ],
    },
    {
      heading: "Can ferrets live in an apartment?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Yes, with several hours of supervised floor time every day and a room that has been cleared of chew hazards. They are not cage-only pets. Adults usually weigh 1.5–4.5 lb (0.7–2 kg).",
        },
      ],
    },
  ],
};
