import type { BreedGuide } from "@/lib/breeds/guide";

export const siameseGuide: BreedGuide = {
  title: "Siamese Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "Siamese cats are lean, vocal, and tightly bonded—airway coughs and dental disease show early if you listen. A sudden appetite drop is more worrying than a fussy meal. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The Siamese is a lean, vocal, social cat that bonds tightly and shows dental and airway disease early if you listen. Most live about 12 to 20 years. They suit apartments with people at home, about 30 minutes of daily play, and owners who treat a strained new cry as different from conversation.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "The Siamese is a refined colorpoint cat with a long body, blue eyes, and a short coat. The Cat Fanciers' Association, the Governing Council of the Cat Fancy, and the Australian Cat Federation publish type standards. Modern show Siamese are more angular than many older pet lines, and both still need dental and airway attention.",
        },
        {
          type: "p",
          text: "Adults usually weigh 6–14 lb (2.7–6.4 kg). Siamese cats are often lean. A sudden drop in appetite is more worrying than a fussy meal. Keep dental care on the yearly plan.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "6–14 lb (2.7–6.4 kg)"],
            ["Life expectancy", "12–20 years"],
            ["Energy level", "5 of 5"],
            ["Grooming demand", "1 of 5"],
            ["Breed classification", "CFA, GCCF, and ACF colorpoint shorthair"],
          ],
        },
        {
          type: "p",
          text: "A Siamese suits an apartment if someone is home often enough for company. They are bred to talk. An all-day alone schedule often shows up as destructive play or nonstop calling.",
        },
        {
          type: "p",
          text: "The short coat needs little brushing. Indoor living protects a social cat from traffic and keeps airway irritants more controllable. Avoid heavy aerosol sprays and cigarette smoke near the cat.",
        },
        {
          type: "p",
          text: "Most Siamese enjoy gentle children who will play without rough handling. They bond tightly and may resent a new pet if introductions are rushed. Give vertical space and separate feeding spots.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical neutered adult starts near 280 kcal per day. Active cats may need more. Recheck the ribs every month; this breed should feel lean without looking starved.",
        },
        {
          type: "p",
          text: "Use two measured meals. About three-quarters of the calories can come from a complete high-protein kibble, and up to one-quarter from wet food, with the kibble reduced so the day still totals about 280 kcal. Treats should stay near 10 percent of that total.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator to calculate exact daily grams/cups for your Siamese based on body condition score. Enter the current weight in pounds (kilograms), then follow the cup or gram result instead of filling a heaped scoop.",
          href: "/tools/pet-food-calculator",
          label: "Calculate Siamese food portions",
        },
        {
          type: "p",
          text: "A practical water baseline is about 50–60 mL per kg each day (about 0.8–1 oz per lb). A 10 lb (4.5 kg) adult is near 7–9 oz (230–270 mL) from the bowl plus moisture in the food. Extra thirst lasting more than a day or two should be reported.",
        },
      ],
    },
    {
      heading: "4. Exercise, Mental Stimulation & Grooming Routine",
      blocks: [
        {
          type: "p",
          text: "Plan about 30 minutes of active play for a healthy adult, split into short sessions. Puzzle feeders and climbing shelves count. Stop if the cat pants with the mouth open at rest afterward.",
        },
        {
          type: "p",
          text: "Brush weekly for loose hair. Check the teeth often; gum disease shows early in many Siamese. Wipe only the visible ear flap.",
        },
        {
          type: "p",
          text: "A brief pant when terrified can happen. Breathing with the mouth open at rest is an emergency in cats, including Siamese with airway disease.",
        },
      ],
    },
    {
      heading: "5. Major Genetic Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "Siamese cats are over-represented for asthma or chronic airway disease, dental and gum disease, amyloidosis in some families, and progressive retinal atrophy. None of these is certain in one cat.",
        },
        {
          type: "p",
          text: "Open-mouth breathing at rest, hiding with no appetite, or collapse goes to an emergency hospital. Use a poison hotline when a toxin is also possible, including a lily.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Asthma or chronic airway disease",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Wheezing, coughing, or open-mouth breathing can mean feline asthma. Dusty litter and smoke worsen many cases. A brief pant when terrified is different from breathing with the mouth open at rest.",
        },
        {
          type: "p",
          text: "Code Green is quiet breathing with a veterinary plan already set. Code Yellow is occasional coughing still there the next day. Code Red is open-mouth breathing at rest or blue-tinged gums.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/cats/occasional-sneezing",
              label: "Check respiratory signs in symptom triage",
            },
          ],
        },
      ],
    },
    {
      heading: "Dental and gum disease",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Tartar and gum inflammation are common. Pain often shows as a slower meal or a change from the usual talkative mealtime. Book a dental exam when gums are red or kibble is dropped.",
        },
        {
          type: "p",
          text: "Code Green is mild tartar on a cat who still eats. Code Yellow is red gums or drooling. Code Red is facial swelling or refusal to eat.",
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
      heading: "Amyloidosis and retinal atrophy",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Amyloidosis in some families can damage organs over time; unexplained weight loss and organ signs need a full workup. Progressive retinal atrophy slowly steals vision and needs an eye exam rather than waiting for total blindness.",
        },
        {
          type: "p",
          text: "Code Green is stable weight and confident navigation. Code Yellow is new night bumping or unexplained weight loss. Code Red is collapse or sudden severe illness.",
        },
      ],
    },
    {
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult. Airway emergencies, dental surgery, and specialty workups sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
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
          text: "Read whether chronic airway and hereditary disease are covered before a diagnosis becomes an exclusion. Parasite products should be the ones registered where you live, through the FDA in the United States, the VMD in the United Kingdom, and the APVMA in Australia.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about vocalizing and breathing. The answers below are educational ranges for a typical Siamese. They do not diagnose the animal you live with.",
        },
      ],
    },
    {
      heading: "Why is my Siamese so loud?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "The breed is bred to talk. A new, strained cry with hiding or not eating is different from conversation and should be checked. Adults usually weigh 6–14 lb (2.7–6.4 kg).",
        },
      ],
    },
    {
      heading: "Is open-mouth breathing ever normal?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A brief pant when terrified can happen. Breathing with the mouth open at rest is an emergency in cats, including Siamese with airway disease.",
        },
      ],
    },
    {
      heading: "What is the average lifespan of a Siamese?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A typical Siamese lives about 12 to 20 years when they stay lean and see a veterinarian regularly. Airway disease, dental disease, and amyloidosis in some families can shorten a life. This is a breed range, not a promise for one cat.",
        },
      ],
    },
  ],
};
