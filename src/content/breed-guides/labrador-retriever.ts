import type { BreedGuide } from "@/lib/breeds/guide";

export const labradorRetrieverGuide: BreedGuide = {
  title: "Labrador Retriever Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "Labradors are sturdy, food-motivated retrievers whose appetite often outruns their joints. Measure meals, keep a visible waist, and watch ears after wet swims. Weight and cost ranges below use pounds (kilograms) with yearly planning in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The Labrador Retriever is an outgoing, food-motivated sporting dog whose appetite often outruns the joints. Most live about 11 to 13 years. They suit active homes that can give about 60 minutes of daily exercise and measure every meal.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "The Labrador Retriever is a sturdy, medium-large retrieving breed with a dense water-repellent coat and an otter tail. The American Kennel Club places the breed in the Sporting Group. The Kennel Club and the Australian National Kennel Council list it as a Gundog.",
        },
        {
          type: "p",
          text: "Adults usually weigh 55–80 lb (25–36 kg). Males often sit toward the top of that band. A glossy coat can hide fat across the ribs, so feel for a waist from above rather than trusting looks alone.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "55–80 lb (25–36 kg)"],
            ["Life expectancy", "11–13 years"],
            ["Energy level", "5 of 5"],
            ["Grooming demand", "2 of 5"],
            ["Breed classification", "AKC Sporting; Kennel Club Gundog; ANKC Gundog"],
          ],
        },
        {
          type: "p",
          text: "A Labrador is a poor fit for a small apartment with long workdays. They need room for a wet shake, daily walks, and a crate that fits a dog up to about 80 lb (36 kg). They bark to greet, and they bark more if left alone all day without a walk.",
        },
        {
          type: "p",
          text: "The double coat handles cool water and mild weather well. Summer fetch in the southern United States and much of Australia should be early or late, and hard retrieve sessions need rest breaks so exercise-induced collapse is less likely.",
        },
        {
          type: "p",
          text: "Most Labs are gentle with children when meetings stay supervised. Food bowls and toys still need management so a sociable dog does not learn to guard. Calm dogs and cats usually fit if chasing is not rehearsed as a game.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical neutered adult starts near 1,400 kcal per day. Labs will eat past fullness. Measure meals; a lean adult protects hips and elbows better than a glossy overweight coat.",
        },
        {
          type: "p",
          text: "Feed two measured meals. About three-quarters of the calories can come from a complete high-protein kibble, and up to one-quarter from wet food, with the kibble reduced so the day still totals about 1,400 kcal. Treats should stay near 10 percent of that total.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator to calculate exact daily grams/cups for your Labrador Retriever based on body condition score. Enter the current weight in pounds (kilograms), then follow the cup or gram result instead of filling a heaped scoop.",
          href: "/tools/pet-food-calculator",
          label: "Calculate Labrador food portions",
        },
        {
          type: "p",
          text: "A practical water baseline is about 1 oz per lb (about 50–60 mL per kg). A 70 lb (32 kg) Lab is near 70 oz (2.1 L) from the bowl plus moisture in the food. Call a clinic if thirst jumps for more than a day or two.",
        },
      ],
    },
    {
      heading: "4. Exercise, Mental Stimulation & Grooming Routine",
      blocks: [
        {
          type: "p",
          text: "Plan about 60 minutes of walks, swimming, or training for a healthy adult, split so the dog can cool down. Puppies need shorter sessions so growing joints are not overloaded. Stop hard fetch if the hind legs go wobbly during play.",
        },
        {
          type: "p",
          text: "Brush several times a week when the undercoat sheds. Check the hanging ears weekly after swimming, wipe only the visible flap, and book a visit if the ear smells sweet or the dog still shakes their head the next day.",
        },
        {
          type: "p",
          text: "Brush the teeth as many days as the dog allows. Keep nails short. Do not shave the double coat for summer; the undercoat is insulation and a close clip can worsen sun and heat stress.",
        },
      ],
    },
    {
      heading: "5. Major Genetic Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "Labs are over-represented for obesity, hip and elbow dysplasia, ear infections, and exercise-induced collapse. None of these is certain in one dog. A lean body, measured meals, and a clear emergency route change what you do on the day a sign appears.",
        },
        {
          type: "p",
          text: "Collapse during hard play, pale gums, or a dog who cannot rise goes to an emergency hospital. Use a poison hotline when a toxin is also possible. Do not give a human pain tablet at home while you decide.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Obesity",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A strong food drive and a willing face make overfeeding easy. Ribs that are hard to feel and a waist that has disappeared load the hips and elbows. Reweigh monthly and adjust the scoop before the next bag.",
        },
        {
          type: "p",
          text: "Code Green is a dog whose ribs are felt with light pressure and who still plays. Code Yellow is a disappearing waist or slower rise after rest, and that dog needs a weight plan at the next open appointment if otherwise well.",
        },
        {
          type: "p",
          text: "Code Red for fatness alone is uncommon. Code Red is the dog who is also collapsing, vomiting, or refusing food. Treat that combination as an emergency within 60 minutes.",
        },
      ],
    },
    {
      heading: "Hip and elbow dysplasia",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Loose joints wear into arthritis. Stiffness after rest or a bunny-hopping run is a common early sign. A lean body and short, frequent walks during growth are the home steps that help.",
        },
        {
          type: "p",
          text: "Code Green is a dog who rises easily with a screening plan already set. Code Yellow is reluctance to jump or a short hind stride still there the next day, and that dog should be seen within 12 to 24 hours.",
        },
        {
          type: "p",
          text: "Code Red is a dog who cannot stand, cries when a joint is touched, or suddenly drags a hind leg. Go to an emergency hospital within 60 minutes.",
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
          text: "The hanging ear flap stays warm and damp after swimming. Head shaking, odor, or redness in the canal is painful and common. Do not push leftover cleaner deep into the canal.",
        },
        {
          type: "p",
          text: "Code Green is a clean ear with no odor on a weekly look. Code Yellow is scratching or a sweet smell still there the next day, and that dog should be seen within 12 to 24 hours. Code Red is a head tilt, loss of balance, or an ear swollen shut.",
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
      heading: "Exercise-induced collapse",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Some Labs develop wobbly hind legs during hard fetch that improve with rest. The episode can look like a seizure to an untrained eye. Stop the game, cool the dog, and rest before another retrieve.",
        },
        {
          type: "p",
          text: "Code Green is a dog who recovers fully within minutes and has a veterinary plan discussing genetic risk. Code Yellow is repeated wobbling on moderate play, and that dog should be seen within 12 to 24 hours.",
        },
        {
          type: "p",
          text: "Code Red is collapse that does not improve, paddling, or pale gums. Go to an emergency hospital within 60 minutes.",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/dogs/collapse-or-seizure", label: "Check collapse in symptom triage" },
          ],
        },
      ],
    },
    {
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult. Orthopedic surgery, chronic ear care, and specialty diets sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-grade nutrition and supplements", "$650", "£500", "A$975"],
            ["Routine veterinary care and vaccinations", "$400", "£350", "A$600"],
            ["Pet insurance, average planning premium", "$450", "£350", "A$675"],
            ["Grooming and parasite control", "$300", "£200", "A$450"],
            ["Total estimated annual investment", "$1,800", "£1,400", "A$2,700"],
          ],
        },
        {
          type: "p",
          text: "Read whether hereditary hip and elbow disease are covered before a diagnosis becomes an exclusion. Parasite products should be the ones registered where you live, through the FDA in the United States, the VMD in the United Kingdom, and the APVMA in Australia.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about exercise, weight, and which signs cannot wait. The answers below are educational ranges for a typical Labrador Retriever, including weight in pounds (kilograms). They do not diagnose the animal you live with.",
        },
      ],
    },
    {
      heading: "How much exercise does an adult Labrador need?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Plan on about an hour a day of walks, swimming, or training, split so the dog can cool down. Puppies need shorter sessions so growing joints are not overloaded.",
        },
      ],
    },
    {
      heading: "Why do Labradors gain weight so easily?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Many have a strong food drive and will finish another dog's bowl. Weigh the food, use the calorie calculator, and recheck body condition every month. Adults usually land near 55–80 lb (25–36 kg) when lean.",
        },
      ],
    },
    {
      heading: "What is the average lifespan of a Labrador Retriever?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A typical Labrador lives about 11 to 13 years when they stay lean and see a veterinarian regularly. Joint disease and obesity-related problems are common reasons lives shorten. This is a breed range, not a promise for one dog.",
        },
      ],
    },
  ],
};
