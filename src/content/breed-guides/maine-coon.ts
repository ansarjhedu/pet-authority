import type { BreedGuide } from "@/lib/breeds/guide";

export const maineCoonGuide: BreedGuide = {
  title: "Maine Coon Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "Maine Coons are large, social cats whose heart and hips deserve screening as they mature. Large does not mean unlimited food—feed to a waist you can see from above, and brush britches before mats form. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The Maine Coon is a large, gentle, people-oriented cat whose heart and hips deserve screening as they mature. Most live about 12 to 15 years. They suit apartments with tall perches, about 20 minutes of daily play, and a measured diet that keeps a visible waist.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "The Maine Coon is a substantial semi-longhaired cat with tufted ears and a lined, rectangular body. The Cat Fanciers' Association, the Governing Council of the Cat Fancy, and the Australian Cat Federation publish conformation standards. Those standards describe coat and type, and they do not replace heart ultrasound.",
        },
        {
          type: "p",
          text: "Adults usually weigh 10–20 lb (4.5–9 kg), with males often heavier. Large does not mean unlimited food. Feed to a waist you can see from above, and brush the belly and britches so mats do not form.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "10–20 lb (4.5–9 kg)"],
            ["Life expectancy", "12–15 years"],
            ["Energy level", "3 of 5"],
            ["Grooming demand", "4 of 5"],
            ["Breed classification", "CFA, GCCF, and ACF large semi-longhair"],
          ],
        },
        {
          type: "p",
          text: "A Maine Coon suits an apartment if there is vertical space and a clean litter box. They are talkative in a softer chirp more often than a Siamese shout. Keeping them indoors protects a trusting, large cat from traffic.",
        },
        {
          type: "p",
          text: "The semi-long coat mats on the belly and britches if skipped. Summer heat still matters; shade, airflow, and fresh water beat a sunny balcony as the only plan.",
        },
        {
          type: "p",
          text: "Most Maine Coons tolerate gentle children and calm dogs when introductions are slow. A cat who never flees can still be overwhelmed; give a high shelf that smaller housemates cannot climb.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical neutered adult starts near 380 kcal per day. That figure fits a lean indoor cat, not every male at the top of the weight range. A veterinarian should reset it from the current weight in pounds (kilograms).",
        },
        {
          type: "p",
          text: "Use two measured meals rather than a bowl left out all day. About three-quarters of the calories can come from a complete high-protein kibble, and up to one-quarter from wet food, with the kibble reduced so the day still totals about 380 kcal. Treats should stay near 10 percent of that total.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator to calculate exact daily grams/cups for your Maine Coon based on body condition score. Enter the current weight in pounds (kilograms), then follow the cup or gram result instead of filling a heaped scoop.",
          href: "/tools/pet-food-calculator",
          label: "Calculate Maine Coon food portions",
        },
        {
          type: "p",
          text: "A practical water baseline is about 50–60 mL per kg each day (about 0.8–1 oz per lb). A 15 lb (6.8 kg) adult is near 12–14 oz (340–410 mL) from the bowl plus moisture in the food. Extra thirst lasting more than a day or two should be reported.",
        },
      ],
    },
    {
      heading: "4. Exercise, Mental Stimulation & Grooming Routine",
      blocks: [
        {
          type: "p",
          text: "Plan about 20 minutes of active play for a healthy adult, split into short sessions. A wand toy and a climb to a tall perch count. Stop if the cat pants with the mouth open.",
        },
        {
          type: "p",
          text: "Brush several times a week, and add a daily pass when loose undercoat increases. Focus on the belly, armpits, and britches. A metal comb finds mats a slicker brush can skate over.",
        },
        {
          type: "p",
          text: "Check the ears weekly. Brush the teeth as many days as the cat allows. Watch for reluctance to jump onto a familiar perch; that can mean hip pain in this large breed.",
        },
      ],
    },
    {
      heading: "5. Major Genetic Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "Maine Coons are over-represented for hypertrophic cardiomyopathy, hip dysplasia, and obesity. None of these is certain in one cat. Screening and a lean weight change the odds, and they do not erase them.",
        },
        {
          type: "p",
          text: "Open-mouth breathing, sudden hind-leg weakness, or collapse goes to an emergency hospital. Use a poison hotline when a toxin is also possible, including a lily or a human pain tablet.",
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
          text: "Hypertrophic cardiomyopathy means the heart muscle is too thick. Open-mouth breathing, sudden hind-leg weakness, or collapse can mean a clot or heart failure. An ultrasound by a cardiologist is the test that sees the muscle.",
        },
        {
          type: "p",
          text: "Code Green is a bright cat with a screening ultrasound planned. Code Yellow is a cat who tires after short play or breathes faster at rest. Code Red is fainting, open-mouth panting at rest, or hind legs that go cold, weak, or paralyzed.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/cats/drinking-more-water",
              label: "Check increased thirst in symptom triage",
            },
            {
              href: "/health-symptoms/cats/hiding-and-not-eating",
              label: "Check hiding and not eating in symptom triage",
            },
          ],
        },
      ],
    },
    {
      heading: "Hip dysplasia",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Reluctance to jump onto a familiar perch can mean hip pain. Large cats carry more load through the hips. A lean body and lower platforms help while you wait for an exam.",
        },
        {
          type: "p",
          text: "Code Green is easy jumping. Code Yellow is hesitation still there the next day. Code Red is inability to walk or crying when the hip is touched.",
        },
      ],
    },
    {
      heading: "Obesity",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A swinging belly and no waist behind the ribs load the joints and the heart you are already watching. The coat can hide fat across the ribs.",
        },
        {
          type: "p",
          text: "Code Green is ribs felt with light pressure. Code Yellow is a lost waist or stopped jumping. Code Red is breathing effort plus refusal to eat; treat that combination as an emergency within 60 minutes.",
        },
      ],
    },
    {
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult. Heart ultrasound and orthopedic care sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-grade nutrition and supplements", "$450", "£350", "A$675"],
            ["Routine veterinary care and vaccinations", "$300", "£250", "A$450"],
            ["Pet insurance, average planning premium", "$280", "£220", "A$420"],
            ["Grooming and parasite control", "$170", "£130", "A$255"],
            ["Total estimated annual investment", "$1,200", "£950", "A$1,800"],
          ],
        },
        {
          type: "p",
          text: "Insure before a murmur or a scan becomes a pre-existing exclusion. Read whether hereditary heart disease is covered. Parasite products should be the ones registered where you live, through the FDA in the United States, the VMD in the United Kingdom, and the APVMA in Australia.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about size and heart signs. The answers below are educational ranges for a typical Maine Coon. They do not diagnose the animal you live with.",
        },
      ],
    },
    {
      heading: "How big should a Maine Coon be?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Many adults land between about 10 and 20 lb (4.5–9 kg), with males often heavier. A veterinarian should confirm the cat is muscular rather than overweight.",
        },
      ],
    },
    {
      heading: "What heart sign cannot wait?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Open-mouth breathing at rest, or sudden inability to use the hind legs, is an emergency. Maine Coons are predisposed to hypertrophic cardiomyopathy.",
        },
      ],
    },
    {
      heading: "What is the average lifespan of a Maine Coon?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A typical Maine Coon lives about 12 to 15 years when they stay lean and see a veterinarian regularly. Heart disease and obesity-related problems can shorten a life. This is a breed range, not a promise for one cat.",
        },
      ],
    },
  ],
};
