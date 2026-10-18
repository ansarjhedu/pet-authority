import type { BreedGuide } from "@/lib/breeds/guide";

export const germanShepherdGuide: BreedGuide = {
  title: "German Shepherd Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "German Shepherds need a job, a lean body, and an owner who notices hind-leg changes early—from hip stiffness to the slower scrape of degenerative myelopathy. Deep chests also raise bloat risk. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The German Shepherd is a loyal, alert working breed that needs a job, a lean body, and an owner who notices hind-leg changes early. Most live about 9 to 13 years. Plan about 90 minutes of daily exercise and training, not a quiet couch lifestyle.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "The German Shepherd is a large herding and working dog with a double coat and a sloping topline in many show lines. The American Kennel Club places the breed in the Herding Group. The Kennel Club and the Australian National Kennel Council list it among pastoral and working types.",
        },
        {
          type: "p",
          text: "Adults usually weigh 50–90 lb (22.7–40.8 kg). Keep this breed lean; a heavy Shepherd loads the hips and may raise bloat risk if meals are huge and followed by hard running.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "50–90 lb (22.7–40.8 kg)"],
            ["Life expectancy", "9–13 years"],
            ["Energy level", "5 of 5"],
            ["Grooming demand", "3 of 5"],
            ["Breed classification", "AKC Herding; pastoral / working type in KC and ANKC lists"],
          ],
        },
        {
          type: "p",
          text: "A German Shepherd is a poor fit for a small apartment without serious daily outlet. They need space, training, and a door that opens onto long walks. An under-worked Shepherd often barks, herds children, or destroys household items.",
        },
        {
          type: "p",
          text: "The double coat handles cool weather well and blows heavily in spring and autumn. Summer work in hot climates should be early or late. Pavement that is too hot for your hand is too hot for their feet.",
        },
        {
          type: "p",
          text: "Most Shepherds bond tightly with their people and can be good with children when socialized and supervised. Strangers may be watched rather than greeted. Calm dogs and cats usually fit if introductions are slow and herding is redirected into formal training.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical neutered adult starts near 1,500 kcal per day. Working dogs and intact dogs may need more. Recheck the ribs and the waist every month rather than locking the scoop forever.",
        },
        {
          type: "p",
          text: "Feed two measured meals and rest after eating. About three-quarters of the calories can come from a complete high-protein kibble, and up to one-quarter from wet food, with the kibble reduced so the day still totals about 1,500 kcal. Treats should stay near 10 percent of that total.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator to calculate exact daily grams/cups for your German Shepherd based on body condition score. Enter the current weight in pounds (kilograms), then follow the cup or gram result instead of filling a heaped scoop.",
          href: "/tools/pet-food-calculator",
          label: "Calculate German Shepherd food portions",
        },
        {
          type: "p",
          text: "A practical water baseline is about 1 oz per lb (about 50–60 mL per kg). A 70 lb (32 kg) Shepherd is near 70 oz (2.1 L) from the bowl plus moisture in the food. Extra thirst lasting more than a day or two should be reported.",
        },
      ],
    },
    {
      heading: "4. Exercise, Mental Stimulation & Grooming Routine",
      blocks: [
        {
          type: "p",
          text: "Plan about 90 minutes of active walking, training, or scent work for a healthy adult. Split the time so the dog can cool down. Puppies should not jog long distances on pavement until a veterinarian confirms growth is ready.",
        },
        {
          type: "p",
          text: "Brush several times a week, and use a rake daily when the undercoat blows. Check the coat for hot spots if the dog chews the feet or belly. Keep nails short enough that they do not click on a hard floor.",
        },
        {
          type: "p",
          text: "Brush the teeth as many days as the dog allows. Do not shave the double coat. A damp cloth is enough unless the dog walked through something sticky.",
        },
      ],
    },
    {
      heading: "5. Major Genetic Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "German Shepherds are over-represented for hip dysplasia, degenerative myelopathy, bloat (GDV), and skin allergy. None of these is certain in one dog. A lean body, split meals, and a clear emergency route change what you do on the day a sign appears.",
        },
        {
          type: "p",
          text: "Unproductive retching, a swelling belly, or collapse goes to an emergency hospital. Use a poison hotline when a toxin is also possible. Do not give a human pain tablet at home while you decide.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Hip dysplasia",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Hip dysplasia is a loose hip joint that wears into arthritis. Difficulty rising or a short stride behind is a common early sign. A lean body and controlled exercise during growth are the home steps that help.",
        },
        {
          type: "p",
          text: "Code Green is a dog who rises easily with a screening plan already set. Code Yellow is reluctance to jump or a swaying hind end still there the next day, and that dog should be seen within 12 to 24 hours.",
        },
        {
          type: "p",
          text: "Code Red is a dog who cannot stand or cries when the hip is touched. Go to an emergency hospital within 60 minutes.",
        },
        {
          type: "links",
          items: [{ href: "/health-symptoms/dogs/limping", label: "Check limping in symptom triage" }],
        },
      ],
    },
    {
      heading: "Degenerative myelopathy",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Degenerative myelopathy is a progressive spinal cord disease. Scraping nails or swaying hind legs that worsen over weeks are warning signs. It is not the same as a sudden disc injury, and it still needs a veterinary exam.",
        },
        {
          type: "p",
          text: "Code Green is a bright dog with normal hind strength and a genetic plan discussed with the veterinarian. Code Yellow is nail scraping or knuckling that is still there the next day, and that dog should be seen within 12 to 24 hours.",
        },
        {
          type: "p",
          text: "Code Red is sudden paralysis, loss of bladder control, or collapse. Go to an emergency hospital within 60 minutes even if myelopathy is already on the differential.",
        },
        {
          type: "links",
          items: [{ href: "/health-symptoms/dogs/limping", label: "Check hind-leg weakness in symptom triage" }],
        },
      ],
    },
    {
      heading: "Bloat (GDV)",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Gastric dilatation-volvulus is a stomach that fills with gas and twists. Deep-chested dogs, including Shepherds, are at risk. It is fatal without emergency surgery, so this is not a wait-until-morning problem.",
        },
        {
          type: "p",
          text: "Code Green is two measured meals, a rest after eating, and a soft belly with no retching. If you are unsure whether the stomach is twisting, treat the episode as red.",
        },
        {
          type: "p",
          text: "Code Red is unproductive retching, a swelling abdomen, pale gums, or collapse. Go to an emergency hospital within 60 minutes, and call them while you travel.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/bloat-gdv", label: "Open the bloat emergency guide" },
            { href: "/health-symptoms/dogs/vomiting-yellow-bile", label: "Yellow bile vomiting in dogs" },
          ],
        },
      ],
    },
    {
      heading: "Skin allergy",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Constant chewing of the feet or belly often means allergy or infection, not a need for a human antihistamine from the cupboard. Hot spots can open quickly under a dense coat.",
        },
        {
          type: "p",
          text: "Code Green is mild seasonal itch already on a veterinary plan. Code Yellow is new chewing with red skin still there the next day. Code Red is a spreading open wound, fever, or a dog who will not eat.",
        },
        {
          type: "links",
          items: [
            {
              href: "/health-symptoms/dogs/head-shaking-ear-scratching",
              label: "Check skin and ear itch in symptom triage",
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
          text: "These figures are planning ranges for a healthy adult. Bloat surgery, myelopathy support, and allergy workups sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-grade nutrition and supplements", "$700", "£550", "A$1,050"],
            ["Routine veterinary care and vaccinations", "$450", "£400", "A$675"],
            ["Pet insurance, average planning premium", "$500", "£400", "A$750"],
            ["Grooming and parasite control", "$350", "£250", "A$525"],
            ["Total estimated annual investment", "$2,000", "£1,600", "A$3,000"],
          ],
        },
        {
          type: "p",
          text: "Read whether hereditary hip disease and gastrointestinal emergencies are covered before a diagnosis becomes an exclusion. Parasite products should be the ones registered where you live, through the FDA in the United States, the VMD in the United Kingdom, and the APVMA in Australia.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about first-time homes, exercise, and which signs cannot wait. The answers below are educational ranges for a typical German Shepherd. They do not diagnose the animal you live with.",
        },
      ],
    },
    {
      heading: "Is a German Shepherd suited to a first-time home?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "They can be, with daily training and about 90 minutes of exercise. An under-worked Shepherd often barks, herds children, or destroys household items. Adults usually land near 50–90 lb (22.7–40.8 kg).",
        },
      ],
    },
    {
      heading: "What is an emergency in this breed?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Unproductive retching with a tight belly is bloat until proven otherwise. Go to an emergency hospital rather than waiting to see if it passes. Sudden hind-leg paralysis is also an emergency.",
        },
      ],
    },
    {
      heading: "What is the average lifespan of a German Shepherd?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A typical German Shepherd lives about 9 to 13 years when they stay lean and see a veterinarian regularly. Orthopedic disease, myelopathy, and bloat are problems that can shorten a life. This is a breed range, not a promise for one dog.",
        },
      ],
    },
  ],
};
