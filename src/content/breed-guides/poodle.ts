import type { BreedGuide } from "@/lib/breeds/guide";

export const poodleGuide: BreedGuide = {
  title: "Standard Poodle Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "Standard Poodles are low-shedding sporting dogs whose coats and brains both need a schedule. Book grooming before mats hide ear and skin trouble, and know Addison’s warning signs under stress. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The Standard Poodle is an intelligent, people-focused sporting dog whose coat and cleverness both need a schedule. Most live about 12 to 15 years. They suit active homes that can give about 60 minutes of daily exercise and book regular professional clips.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "The Standard Poodle is a large, square-proportioned water dog with a continuously growing curly coat. The American Kennel Club places the breed in the Non-Sporting Group for Standards. The Kennel Club and the Australian National Kennel Council list Poodles among utility and companion sporting types.",
        },
        {
          type: "p",
          text: "Adults usually weigh 45–70 lb (20.4–31.8 kg). This page covers the Standard size, not Miniatures or Toys. A lean waist still matters; matted hair can hide weight and skin disease.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "45–70 lb (20.4–31.8 kg)"],
            ["Life expectancy", "12–15 years"],
            ["Energy level", "4 of 5"],
            ["Grooming demand", "5 of 5"],
            ["Hypoallergenic note", "Low shed; not allergen-free"],
          ],
        },
        {
          type: "p",
          text: "A Standard Poodle can live in an apartment if daily exercise and mental work are real, not optional. They are people-focused and settle better with company than with all-day solitude. They bark to alert, and they bark more if bored.",
        },
        {
          type: "p",
          text: "The coat does not shed in seasonal clumps the way a Labrador does, but it mats to the skin if skipped. Summer clips help comfort; a completely shaved dog still needs sun and heat sense on walks.",
        },
        {
          type: "p",
          text: "Most Standards are gentle with children when supervised. They greet strangers with interest more often than suspicion. Calm dogs and cats usually fit if introductions are slow and chasing is not allowed.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical neutered adult starts near 1,250 kcal per day. Feed a measured adult diet and book grooming before the coat mats to the skin. Recheck the ribs every month under the curls.",
        },
        {
          type: "p",
          text: "Feed two measured meals. About three-quarters of the calories can come from a complete high-protein kibble, and up to one-quarter from wet food, with the kibble reduced so the day still totals about 1,250 kcal. Treats should stay near 10 percent of that total.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator to calculate exact daily grams/cups for your Standard Poodle based on body condition score. Enter the current weight in pounds (kilograms), then follow the cup or gram result instead of filling a heaped scoop.",
          href: "/tools/pet-food-calculator",
          label: "Calculate Standard Poodle food portions",
        },
        {
          type: "p",
          text: "A practical water baseline is about 1 oz per lb (about 50–60 mL per kg). A 55 lb (25 kg) Standard is near 55 oz (1.6 L) from the bowl plus moisture in the food. Extra thirst lasting more than a day or two should be reported.",
        },
      ],
    },
    {
      heading: "4. Exercise, Mental Stimulation & Grooming Routine",
      blocks: [
        {
          type: "p",
          text: "Plan about 60 minutes of walking, retrieve, or training games for a healthy adult. Poodles need mental work as much as mileage. Split the time so the dog can cool down in hot weather.",
        },
        {
          type: "p",
          text: "Plan a full clip every 4–8 weeks plus brushing several times a week. Skipping months lets mats pull on the skin. Keep ear hair managed; heavy ear hair traps moisture and odor.",
        },
        {
          type: "p",
          text: "Brush the teeth as many days as the dog allows. Check the eyes in dim light if the dog starts hesitating at dusk; progressive retinal atrophy is a breed concern. Keep nails short.",
        },
      ],
    },
    {
      heading: "5. Major Genetic Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "Standard Poodles are over-represented for Addison's disease, hip dysplasia, ear infections, and progressive retinal atrophy. None of these is certain in one dog. Screening and a clear emergency route change what you do on the day a sign appears.",
        },
        {
          type: "p",
          text: "Waxing weakness, vomiting, or collapse during stress goes to an emergency hospital. Use a poison hotline when a toxin is also possible. Do not give a human pain tablet at home while you decide.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Addison's disease",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Addison's disease means the adrenal glands do not produce enough stress hormones. Waxing weakness, vomiting, or collapse during stress are classic warnings. A dog can look almost normal between crises.",
        },
        {
          type: "p",
          text: "Code Green is a bright dog with no episodes and a veterinarian who knows the breed risk. Code Yellow is intermittent lethargy or digestive upset that returns, and that dog should be seen within 12 to 24 hours.",
        },
        {
          type: "p",
          text: "Code Red is collapse, severe vomiting, or weakness that comes on during stress. Go to an emergency hospital within 60 minutes.",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/dogs/collapse-or-seizure", label: "Check collapse in symptom triage" },
            { href: "/health-symptoms/dogs/lethargy", label: "Check lethargy in symptom triage" },
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
          text: "Stiffness after exercise can mean hip dysplasia in a large Poodle. A lean body and controlled growth exercise help. Screening radiographs are worth discussing with the veterinarian.",
        },
        {
          type: "p",
          text: "Code Green is easy rising with a screening plan. Code Yellow is stiffness still there the next day. Code Red is inability to stand or crying when the hip is touched.",
        },
        {
          type: "links",
          items: [{ href: "/health-symptoms/dogs/limping", label: "Check limping in symptom triage" }],
        },
      ],
    },
    {
      heading: "Ear infections",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Odor or head shaking under heavy ear hair is common. Moisture and debris sit in the canal when hair is left unmanaged. Do not dig cotton buds deep into the ear.",
        },
        {
          type: "p",
          text: "Code Green is a clean, odor-free ear after grooming. Code Yellow is shaking or smell still there the next day. Code Red is a head tilt or loss of balance.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/dogs/head-shaking-ear-scratching",
              label: "Check head shaking in symptom triage",
            },
          ],
        },
      ],
    },
    {
      heading: "Progressive retinal atrophy",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Progressive retinal atrophy slowly steals night vision first. Hesitation in dim light that worsens over months is the usual story. It is not a same-hour emergency, and it still needs an eye exam.",
        },
        {
          type: "p",
          text: "Code Green is confident night navigation with a breeding or screening history known. Code Yellow is new night bumping or dilated pupils in low light. Book an ophthalmology visit rather than waiting for total blindness.",
        },
      ],
    },
    {
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult. Professional grooming is a large share of the Standard Poodle budget. Addisonian crises and orthopedic care sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-grade nutrition and supplements", "$650", "£550", "A$975"],
            ["Routine veterinary care and vaccinations", "$450", "£400", "A$675"],
            ["Pet insurance, average planning premium", "$500", "£400", "A$750"],
            ["Grooming and parasite control", "$600", "£450", "A$900"],
            ["Total estimated annual investment", "$2,200", "£1,800", "A$3,300"],
          ],
        },
        {
          type: "p",
          text: "Read whether endocrine disease and hereditary hip problems are covered before a diagnosis becomes an exclusion. Parasite products should be the ones registered where you live, through the FDA in the United States, the VMD in the United Kingdom, and the APVMA in Australia.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about allergens, grooming schedules, and lifespan. The answers below are educational ranges for a typical Standard Poodle. They do not diagnose the animal you live with.",
        },
      ],
    },
    {
      heading: "Are Standard Poodles hypoallergenic?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "They shed little hair, so many allergic people tolerate them better. No dog is allergen-free. Saliva and dander still circulate in the home.",
        },
      ],
    },
    {
      heading: "How often should a Standard Poodle be groomed?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Plan a full clip every 4–8 weeks plus brushing several times a week. Skipping months lets mats pull on the skin. Adults usually weigh 45–70 lb (20.4–31.8 kg).",
        },
      ],
    },
    {
      heading: "What is the average lifespan of a Standard Poodle?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A typical Standard Poodle lives about 12 to 15 years when they stay lean and see a veterinarian regularly. Addison's disease and orthopedic problems can shorten a life. This is a breed range, not a promise for one dog.",
        },
      ],
    },
  ],
};
