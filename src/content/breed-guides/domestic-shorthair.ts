import type { BreedGuide } from "@/lib/breeds/guide";

export const domesticShorthairGuide: BreedGuide = {
  title: "Domestic Shorthair Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "Domestic Shorthairs are the everyday house cats: sturdy, variable, and still at risk for teeth, weight, and urethral blockage in males. Start from a lean portion and change it when the waist changes—not when the bowl looks empty. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The Domestic Shorthair is a mixed-ancestry house cat: sturdy, variable, and still at risk for teeth, weight, and urinary blockage. Most live about 12 to 18 years. They suit apartments with about 20 minutes of daily play and owners who watch the litter box as carefully as pedigree owners do.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "A Domestic Shorthair is a mixed-ancestry cat with a short coat, not a closed pedigree. Temperament and size vary more than in a single breed. Coat color does not predict health; litter-box habits and weight do.",
        },
        {
          type: "p",
          text: "Adults in this dataset usually weigh 8–12 lb (3.6–5.4 kg). Mixed-breed cats vary. Start from a lean adult portion and change it when the waist changes, not when the bowl looks empty.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "8–12 lb (3.6–5.4 kg)"],
            ["Life expectancy", "12–18 years"],
            ["Energy level", "3 of 5"],
            ["Grooming demand", "2 of 5"],
            ["Classification", "Mixed-ancestry short-coated house cat"],
          ],
        },
        {
          type: "p",
          text: "Most Domestic Shorthairs suit apartments. They are adaptable companions. Indoor living with enrichment reduces traffic risk and still requires veterinary care for teeth, weight, and urinary disease.",
        },
        {
          type: "p",
          text: "The short coat needs weekly brushing. Summer heat still matters; keep water fresh. Outdoor access increases trauma and infectious disease risk.",
        },
        {
          type: "p",
          text: "Many are good with children when introductions are calm. Individual temperament varies more than in a closed breed. A male cat crying in the litter box may be blocked, not constipated.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical neutered adult starts near 260 kcal per day. Quiet indoor cats gain easily. Recheck the ribs every month.",
        },
        {
          type: "p",
          text: "Use two measured meals. About three-quarters of the calories can come from a complete high-protein kibble, and up to one-quarter from wet food, with the kibble reduced so the day still totals about 260 kcal. Treats should stay near 10 percent of that total.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator to calculate exact daily grams/cups for your Domestic Shorthair based on body condition score. Enter the current weight in pounds (kilograms), then follow the cup or gram result instead of filling a heaped scoop.",
          href: "/tools/pet-food-calculator",
          label: "Calculate Domestic Shorthair food portions",
        },
        {
          type: "p",
          text: "A practical water baseline is about 50–60 mL per kg each day (about 0.8–1 oz per lb). A 10 lb (4.5 kg) adult is near 7–9 oz (230–270 mL) from the bowl plus moisture in the food. Extra thirst in older cats can mean hyperthyroidism or kidney disease.",
        },
      ],
    },
    {
      heading: "4. Exercise, Mental Stimulation & Grooming Routine",
      blocks: [
        {
          type: "p",
          text: "Plan about 20 minutes of active play for a healthy adult. Wand toys and climbing shelves count. Stop if the cat pants with the mouth open.",
        },
        {
          type: "p",
          text: "Brush weekly. Check the teeth yearly and sooner if breath changes. Wipe only the visible ear flap. Keep nails trimmed if they catch on carpet.",
        },
        {
          type: "p",
          text: "Watch the litter box daily. Straining with little or no urine is a same-hour emergency in males.",
        },
      ],
    },
    {
      heading: "5. Major Genetic Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "Domestic Shorthairs commonly face urethral obstruction in males, dental disease, obesity, and hyperthyroidism in older cats. Mixed ancestry does not erase these risks.",
        },
        {
          type: "p",
          text: "A male who cannot pass urine, open-mouth breathing, or collapse goes to an emergency hospital. Use a poison hotline when a toxin is also possible, including a lily.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Urethral obstruction in males",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A blocked urethra means urine cannot leave the bladder. Owners often think the cat is constipated because he squats and produces little. No urine is a same-hour emergency.",
        },
        {
          type: "p",
          text: "Code Green is normal urine volume. Code Yellow is frequent trips or blood-tinged urine with some urine still passed. Code Red is straining with little or no urine, crying in the box, vomiting, or collapse.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/feline-urethral-blockage",
              label: "Open the urinary blockage emergency guide",
            },
            {
              href: "/health-symptoms/cats/straining-in-litter-box",
              label: "Check litter-box straining in symptom triage",
            },
            { href: "/emergency/lily-toxicity", label: "Lily toxicity in cats" },
          ],
        },
      ],
    },
    {
      heading: "Dental disease and obesity",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Tartar and gum disease are common in adult cats. Extra weight hides the waist and adds load to joints. Measure meals and book dental care when gums redden.",
        },
        {
          type: "p",
          text: "Code Green is a felt waist and pink gums. Code Yellow is bad breath with slowed eating or a lost waist. Code Red is facial swelling or refusal to eat.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/cats/hiding-and-not-eating",
              label: "Check hiding and not eating in symptom triage",
            },
          ],
        },
      ],
    },
    {
      heading: "Hyperthyroidism in older cats",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Older cats may develop an overactive thyroid. Weight loss despite a good appetite, restlessness, and increased thirst are common signs. It is treatable when caught.",
        },
        {
          type: "p",
          text: "Code Green is stable weight in a senior on a wellness plan. Code Yellow is unexplained weight loss with more thirst. Code Red is collapse, open-mouth breathing, or severe weakness.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/cats/drinking-more-water",
              label: "Check drinking more water in symptom triage",
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
          text: "These figures are planning ranges for a healthy adult. Urinary emergencies, dental surgery, and thyroid treatment sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-grade nutrition and supplements", "$280", "£230", "A$420"],
            ["Routine veterinary care and vaccinations", "$220", "£180", "A$330"],
            ["Pet insurance, average planning premium", "$180", "£140", "A$270"],
            ["Grooming and parasite control", "$120", "£100", "A$180"],
            ["Total estimated annual investment", "$800", "£650", "A$1,200"],
          ],
        },
        {
          type: "p",
          text: "Insurance still helps mixed-breed cats when urinary emergencies and dental disease appear. Parasite products should be the ones registered where you live, through the FDA in the United States, the VMD in the United Kingdom, and the APVMA in Australia.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask whether a Domestic Shorthair is a breed and which emergencies are easy to miss. The answers below are educational ranges. They do not diagnose the animal you live with.",
        },
      ],
    },
    {
      heading: "Is a Domestic Shorthair a breed?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "It is a mixed-ancestry cat with a short coat, not a closed pedigree. Temperament and size vary more than in a single breed. Adults in this dataset usually weigh 8–12 lb (3.6–5.4 kg).",
        },
      ],
    },
    {
      heading: "What emergency is easy to miss?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A male cat crying in the litter box may be blocked, not constipated. No urine is a same-hour emergency.",
        },
      ],
    },
    {
      heading: "What is the average lifespan of a Domestic Shorthair?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A typical Domestic Shorthair lives about 12 to 18 years when they stay lean and see a veterinarian regularly. Urinary blockage, dental disease, and hyperthyroidism in seniors are common threats. This is a population range, not a promise for one cat.",
        },
      ],
    },
  ],
};
