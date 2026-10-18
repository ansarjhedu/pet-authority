import type { BreedGuide } from "@/lib/breeds/guide";

export const frenchBulldogGuide: BreedGuide = {
  title: "French Bulldog Complete Care Guide: Health, Nutrition, Lifespan & Costs",
  lede: "French Bulldogs are affectionate apartment companions with airways that overheat and tire faster than the bat ears suggest. Plan cool rooms, short walks, and lean weight—not closed cars or midday pavement. Ranges below use pounds (kilograms) and yearly costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick Breed Summary",
      blocks: [
        {
          type: "snippet",
          text: "The French Bulldog is an affectionate, adaptable companion with a short airway that overheats and tires faster than the face suggests. Most live about 10 to 12 years. They suit cool apartments and short walks of about 25 minutes, not summer runners or closed cars.",
        },
      ],
    },
    {
      heading: "2. Physical Characteristics & Living Suitability",
      blocks: [
        {
          type: "p",
          text: "The French Bulldog is a small, compact companion with a broad chest, bat ears, and a brachycephalic muzzle. The American Kennel Club places the breed in the Non-Sporting Group. The Kennel Club and the Australian National Kennel Council list it among companion dogs with the same short-faced type.",
        },
        {
          type: "p",
          text: "Adults usually weigh 16–28 lb (7.3–12.7 kg). A dog at the top of that range still needs a lean waist, because extra fat tightens an already narrow airway. Height is short and stocky rather than tall, so crates and beds should match chest width, not a long-legged spaniel.",
        },
        {
          type: "table",
          headers: ["Trait", "Typical adult range"],
          rows: [
            ["Weight", "16–28 lb (7.3–12.7 kg)"],
            ["Life expectancy", "10–12 years"],
            ["Energy level", "2 of 5"],
            ["Grooming demand", "2 of 5"],
            ["Breed classification", "AKC Non-Sporting; companion / utility type in KC and ANKC lists"],
          ],
        },
        {
          type: "p",
          text: "A French Bulldog often suits an apartment if the home stays cool and stairs are not a daily workout. They bark to greet, and they settle when the day is short and social. A hot hallway, a parked car, or a midday sidewalk walk is a poor fit.",
        },
        {
          type: "p",
          text: "The short coat handles mild weather, and it handles heat poorly. Summer walks in the southern United States and much of Australia should be early or late. If the pavement is too hot for your hand, it is too hot for their feet, and the airway will struggle before the feet do.",
        },
        {
          type: "p",
          text: "Most Frenchies are playful with gentle children when meetings stay supervised. Rough tug or long chase games can tip a dog into gasping. Calm dogs and cats usually fit if the Frenchie is not left to overheat while playing.",
        },
      ],
    },
    {
      heading: "3. Daily Nutrition & Feeding Guidelines",
      blocks: [
        {
          type: "p",
          text: "A typical neutered adult starts near 630 kcal per day. Keep the body lean; extra weight makes breathing and spinal disease harder to manage. Recheck the ribs and the waist every month rather than locking the scoop forever.",
        },
        {
          type: "p",
          text: "Feed two measured meals. About three-quarters of the calories can come from a complete small-breed adult diet, and up to one-quarter from moisture-rich wet food, with the dry food reduced so the day still totals about 630 kcal. Treats should stay near 10 percent of that total.",
        },
        {
          type: "callout",
          text: "Use our interactive Pet Food Weight Calculator to calculate exact daily grams/cups for your French Bulldog based on body condition score. Enter the current weight in pounds (kilograms), then follow the cup or gram result instead of filling a heaped scoop.",
          href: "/tools/pet-food-calculator",
          label: "Calculate French Bulldog food portions",
        },
        {
          type: "p",
          text: "A practical water baseline is about 1 oz per lb (about 50–60 mL per kg). A 22 lb (10 kg) Frenchie is near 22 oz (0.65 L) from the bowl plus moisture in the food. Call a clinic if thirst jumps for more than a day or two, including after hot weather.",
        },
      ],
    },
    {
      heading: "4. Exercise, Mental Stimulation & Grooming Routine",
      blocks: [
        {
          type: "p",
          text: "Plan about 25 minutes of walking or play for a healthy adult, split so the dog can cool down. Skip noon walks when the air is hot. Stop if breathing becomes noisy and the tongue darkens; that is not a fitness goal in this breed.",
        },
        {
          type: "p",
          text: "Wipe facial and tail-pocket folds several times a week so moisture does not sit against the skin. Brush the short coat weekly. Check the ears for odor, and keep nails short enough that they do not click on a hard floor.",
        },
        {
          type: "p",
          text: "Brush the teeth as many days as the dog allows. Do not use a snug harness that presses on the throat if the dog already snores at rest; ask a veterinarian which gear keeps the airway freer on walks.",
        },
      ],
    },
    {
      heading: "5. Major Genetic Health Predispositions & Symptoms to Watch For",
      blocks: [
        {
          type: "p",
          text: "French Bulldogs are over-represented for brachycephalic airway syndrome, heat intolerance, spinal disc disease, and skin-fold dermatitis. None of these is certain in one dog. A cool home, a lean body, and a clear emergency route change what you do on the day a sign appears.",
        },
        {
          type: "p",
          text: "Open-mouth gasping, a blue or purple tongue, or collapse after mild play goes to an emergency hospital the same hour. Use a poison hotline when a toxin is also possible. Do not give a human pain tablet at home while you decide.",
        },
        { type: "hotline" },
      ],
    },
    {
      heading: "Brachycephalic airway syndrome",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A short muzzle, narrow nostrils, and a soft palate that sits too far back make every breath harder work. Excitement, heat, and a tight collar amplify the problem. Noisy breathing is common, and it is not the same as a safe airway.",
        },
        {
          type: "p",
          text: "Code Green is quiet rest breathing in a cool room, with a veterinary plan already discussing nostrils or palate if needed. Code Yellow is louder snoring than usual or slower recovery after a short walk, and that dog should be seen within 12 to 24 hours if still eating.",
        },
        {
          type: "p",
          text: "Code Red is open-mouth gasping, blue-tinged gums, or collapse after mild play. Cool the dog with room-temperature water on the body, keep the air moving, and go to an emergency hospital within 60 minutes. Do not force water into the mouth.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/heatstroke", label: "Open the heatstroke emergency guide" },
            { href: "/health-symptoms/dogs/lethargy", label: "Check lethargy in symptom triage" },
          ],
        },
      ],
    },
    {
      heading: "Heat intolerance",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "French Bulldogs cannot dump heat as efficiently as longer-muzzled dogs. Heavy panting that does not settle in shade is a warning, not a personality quirk. Cars, crates in sun, and midday pavement walks are high-risk settings.",
        },
        {
          type: "p",
          text: "Code Green is a dog who cools within a few minutes in shade with water available. Code Yellow is panting that continues after rest in a cool room, and that dog should be seen the same day if appetite or gum color also changes.",
        },
        {
          type: "p",
          text: "Code Red is collapse, vomiting, bright-red or purple gums, or a dog who will not settle after cooling attempts. Treat as heatstroke and go to an emergency hospital within 60 minutes.",
        },
        {
          type: "links",
          items: [{ href: "/emergency/heatstroke", label: "Open the heatstroke emergency guide" }],
        },
      ],
    },
    {
      heading: "Spinal disc disease",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "The compact body and screw-tail genetics put extra load on the spine. Crying, a hunched back, or sudden weakness in the hind legs can mean a disc problem. Ramps beat jumping on and off furniture.",
        },
        {
          type: "p",
          text: "Code Green is a dog who rises easily and plays without crying. Code Yellow is reluctance to jump or a short stride that is still there the next day, and that dog should be seen within 12 to 24 hours.",
        },
        {
          type: "p",
          text: "Code Red is crying when picked up, dragging hind feet, or loss of control over urine or stool. Crate the dog and go to an emergency hospital within 60 minutes. Do not give a human pain tablet on the way.",
        },
        {
          type: "links",
          items: [{ href: "/health-symptoms/dogs/limping", label: "Check limping in symptom triage" }],
        },
      ],
    },
    {
      heading: "Skin-fold dermatitis",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Facial and tail-pocket folds stay warm and moist. Red, smelly, or weeping skin in those creases is painful and common. Leaving ointment from another pet in the fold is not a plan.",
        },
        {
          type: "p",
          text: "Code Green is dry, clean folds on a weekly wipe. Code Yellow is redness or odor that returns the next day, and that dog should be seen within a few days if otherwise bright. Code Red is a swollen, hot fold with fever or refusal to eat; go the same day.",
        },
      ],
    },
    {
      heading: "6. Estimated Annual Ownership Cost Breakdown",
      blocks: [
        {
          type: "p",
          text: "These figures are planning ranges for a healthy adult, covering food, routine care, insurance, and prevention. Airway surgery, disc care, and heatstroke emergencies sit outside the table. The Australian total follows this site's planning conversion of the US figure, about 1.5 Australian dollars per US dollar, rounded to the nearest hundred.",
        },
        {
          type: "table",
          headers: ["Annual expense", "United States", "United Kingdom", "Australia"],
          rows: [
            ["High-grade nutrition and supplements", "$800", "£650", "A$1,200"],
            ["Routine veterinary care and vaccinations", "$600", "£500", "A$900"],
            ["Pet insurance, average planning premium", "$700", "£550", "A$1,050"],
            ["Grooming and parasite control", "$400", "£300", "A$600"],
            ["Total estimated annual investment", "$2,500", "£2,000", "A$3,750"],
          ],
        },
        {
          type: "p",
          text: "Insurance premiums move with age, postcode, and the excess you choose. Read whether brachycephalic airway disease and spinal problems are covered before a diagnosis becomes an exclusion. Parasite products should be the ones registered where you live, through the FDA in the United States, the VMD in the United Kingdom, and the APVMA in Australia.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners most often ask about housing, heat, and which breathing signs cannot wait. The answers below are educational ranges for a typical French Bulldog, including weight in pounds (kilograms) and yearly costs in dollars and pounds. They do not diagnose the animal you live with.",
        },
      ],
    },
    {
      heading: "Can a French Bulldog live in an apartment?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Yes, if the home stays cool and walks stay short. They are not outdoor athletes, and a hot hallway or a closed car is dangerous. Plan about 25 minutes of daily activity and a lean weight near 16–28 lb (7.3–12.7 kg).",
        },
      ],
    },
    {
      heading: "When is French Bulldog breathing an emergency?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Open-mouth gasping, a tongue that looks blue or purple, or collapse after mild play needs an emergency clinic the same hour. Do not wait for the evening to cool. See the heatstroke guide if the dog has been in a warm space.",
        },
      ],
    },
    {
      heading: "What is the average lifespan of a French Bulldog?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A typical French Bulldog lives about 10 to 12 years when they stay lean and cool. Airway disease, heatstroke, and spinal injury are the problems that most often shorten a life. This is a breed range, not a promise for one dog.",
        },
      ],
    },
  ],
};
