import type { BreedGuide } from "@/lib/breeds/guide";

export const britishShorthairGuide: BreedGuide = {
  title: "British Shorthair Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "British Shorthairs are dense-coated, steady cats that hide illness and gain weight quietly. Feel the ribs weekly through the plush coat, and treat open-mouth breathing as urgent. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The British Shorthair is a calm, dense-coated cat that hides illness and gains weight quietly. Most live about 12 to 17 years. They suit quiet apartments with about 15 minutes of daily play and owners who feel the ribs weekly under the plush coat.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "The British Shorthair is a compact, round-faced cat with a dense short coat. The Governing Council of the Cat Fancy, the Cat Fanciers' Association, and the Australian Cat Federation describe the type. A round face is not the same as a healthy weight; the body should still have a waist behind the ribs.",
        },
        {
          type: "p",
          text: "Adults usually weigh 7–17 lb (3.2–7.7 kg). The plush coat can hide fat. Feel the ribs weekly. A complete cat diet, not a grazing bowl, keeps the waist.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "7–17 lb (3.2–7.7 kg)"],
            ["Life expectancy", "12–17 years"],
            ["Energy level", "2 of 5"],
            ["Grooming demand", "2 of 5"],
            ["Breed classification", "GCCF, CFA, and ACF British Shorthair"],
          ],
        },
        {
          type: "p",
          text: "A British Shorthair often suits an apartment. They are independent without being aloof, and they usually meow softly. They are a poor match for a household that expects constant outdoor roaming.",
        },
        {
          type: "p",
          text: "The short dense coat needs weekly brushing more than daily work. Summer heat still matters for a heavy-bodied cat; keep water fresh and rooms cool.",
        },
        {
          type: "p",
          text: "Most tolerate gentle children when meetings stay calm. They often ignore strangers rather than greet them. Other cats and calm dogs usually work if introductions are slow.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical neutered adult starts near 280 kcal per day. Quiet cats gain easily. Recheck the ribs under the coat every month.",
        },
        {
          type: "p",
          text: "Use two measured meals. About three-quarters of the calories can come from a complete high-protein kibble, and up to one-quarter from wet food, with the kibble reduced so the day still totals about 280 kcal. Treats should stay near 10 percent of that total.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator to calculate exact daily grams/cups for your British Shorthair based on body condition score. Enter the current weight in pounds (kilograms), then follow the cup or gram result instead of filling a heaped scoop.",
          href: "/tools/pet-food-calculator",
          label: "Calculate British Shorthair food portions",
        },
        {
          type: "p",
          text: "A practical water baseline is about 50–60 mL per kg each day (about 0.8–1 oz per lb). A 12 lb (5.4 kg) adult is near 9–11 oz (270–320 mL) from the bowl plus moisture in the food. Increased thirst in a middle-aged cat can mean kidney disease in some lines.",
        },
      ],
    },
    {
      heading: "4. Exercise, Mental Stimulation & Grooming Routine",
      blocks: [
        {
          type: "p",
          text: "Plan about 15 minutes of play for a healthy adult. Short wand sessions beat expecting this breed to self-exercise. Stop if the cat pants with the mouth open.",
        },
        {
          type: "p",
          text: "Brush weekly to pull dead undercoat. Check the teeth yearly and more often if breath changes. Wipe only the visible ear flap.",
        },
        {
          type: "p",
          text: "The coat is short, but the breed is quiet about pain. Annual exams and a home check of breathing, appetite, and waist still matter.",
        },
      ],
    },
    {
      heading: "5. Major Genetic Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "British Shorthairs are over-represented for hypertrophic cardiomyopathy, polycystic kidney disease in some lines, obesity, and dental disease. None of these is certain in one cat. Screening and a lean weight change the odds.",
        },
        {
          type: "p",
          text: "Open-mouth breathing, sudden weakness, or a cat who hides and will not eat goes to an emergency hospital. Use a poison hotline when a toxin is also possible.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Hypertrophic cardiomyopathy",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Breathing with the mouth open or sudden weakness can mean heart disease. A normal kitten exam does not retire the risk. Screening ultrasound is worth discussing.",
        },
        {
          type: "p",
          text: "Code Green is quiet breathing with a screening plan. Code Yellow is faster breathing at rest. Code Red is open-mouth panting or hind-leg paralysis.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/cats/drinking-more-water",
              label: "Check increased thirst in symptom triage",
            },
          ],
        },
      ],
    },
    {
      heading: "Polycystic kidney disease",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Some lines carry polycystic kidney disease. Increased thirst, weight loss, or a poor coat in a middle-aged cat needs a workup. DNA testing of breeding cats reduces risk in litters.",
        },
        {
          type: "p",
          text: "Code Green is normal thirst and weight. Code Yellow is drinking more for more than a day or two. Code Red is collapse, vomiting with no urine, or severe weakness.",
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
      heading: "Obesity and dental disease",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Quiet indoor life plus a grazing bowl leads to fat under a plush coat and tartar on the teeth. Feel ribs weekly and book dental care when gums redden or kibble is dropped.",
        },
        {
          type: "p",
          text: "Code Green is a felt waist and pink gums. Code Yellow is a lost waist or bad breath with slowed eating. Code Red is facial swelling or refusal to eat.",
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
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult. Heart ultrasound, kidney workups, and dental surgery sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-grade nutrition and supplements", "$350", "£280", "A$525"],
            ["Routine veterinary care and vaccinations", "$280", "£230", "A$420"],
            ["Pet insurance, average planning premium", "$230", "£180", "A$345"],
            ["Grooming and parasite control", "$140", "£110", "A$210"],
            ["Total estimated annual investment", "$1,000", "£800", "A$1,500"],
          ],
        },
        {
          type: "p",
          text: "Read whether hereditary heart and kidney disease are covered before a diagnosis becomes an exclusion. Parasite products should be the ones registered where you live, through the FDA in the United States, the VMD in the United Kingdom, and the APVMA in Australia.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about maintenance and weight. The answers below are educational ranges for a typical British Shorthair. They do not diagnose the animal you live with.",
        },
      ],
    },
    {
      heading: "Are British Shorthairs low maintenance?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "The coat is short, but the breed is quiet about pain. Annual exams and a home check of breathing, appetite, and waist still matter. Adults usually weigh 7–17 lb (3.2–7.7 kg).",
        },
      ],
    },
    {
      heading: "Is a round face the same as a healthy weight?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "The head is naturally round. The body should still have a waist behind the ribs. Ask a veterinarian for a body-condition score if you are unsure.",
        },
      ],
    },
    {
      heading: "What is the average lifespan of a British Shorthair?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A typical British Shorthair lives about 12 to 17 years when they stay lean and see a veterinarian regularly. Heart disease, kidney disease, and obesity can shorten a life. This is a breed range, not a promise for one cat.",
        },
      ],
    },
  ],
};
