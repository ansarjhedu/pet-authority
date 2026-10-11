import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const yellowBileGuide: EmergencyLongGuide = {
  title: "Why Is My Dog Vomiting Yellow Bile? Causes, Triage & Home Checks",
  lede: "This guide helps owners in the United States, the United Kingdom, and Australia sort one episode of yellow bile from vomiting that needs a clinic. The usual level for this sign is Code Yellow, urgent within 12 to 24 hours, unless a red flag is already present. It does not diagnose the dog in your kitchen.",
  sections: [
    {
      heading: "1. Quick Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "Yellow bile usually means an empty stomach or mild gut irritation in a dog. One episode in a bright adult is not always an emergency. Right now, check that the belly is soft and the gums are pink and moist.",
        },
      ],
    },
    {
      heading: "2. Three-Tier Clinical Triage",
      blocks: [
        {
          type: "p",
          text: "Yellow fluid is bile that has entered an empty or irritated stomach. One splash in a dog who then asks for a walk is a different problem from repeated vomiting, blood, or a tight belly. Use the tier that matches the dog in front of you, and move up a tier if a new sign appears.",
        },
        {
          type: "p",
          text: "Photograph the vomit before you clean it, including anything that looks like blood, foil, or a foreign object. Note the clock time and about how much came up, in teaspoons or tablespoons (millilitres). A phone photo is more useful to the clinic than a floor that has already been cleaned.",
        },
      ],
    },
    {
      heading: "Code Green · Monitor",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Green fits one vomit of yellow fluid in a bright adult dog who then acts normal. The gums stay pink and moist, the belly stays soft, and they keep sips of water down for the next hour. There is no blood, no known toxin, and no puppy, diabetic, or dog under about 10 lb (4.5 kg) in this group.",
        },
        {
          type: "p",
          text: "Watch that dog for about 8 to 12 hours, not for two days of repeated vomiting. Offer the next meal only if they have not vomited again. A second episode, new diarrhea with blood, or a dog who hides and will not stand leaves Code Green immediately.",
        },
      ],
    },
    {
      heading: "Code Yellow · Urgent, 12–24 hours",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Yellow is the usual level for this symptom. It fits two or three yellow vomits in a day when the dog can still stand, the gums are still pink, and the belly is not tight. Book a veterinarian within 12 to 24 hours, and sooner if they refuse water.",
        },
        {
          type: "p",
          text: "A puppy, a senior, or a dog with a known kidney, liver, or pancreas problem belongs in this tier after even one vomit. Mild diarrhea without blood can sit here if the dog is bright. Do not stretch this tier overnight if the vomiting is still happening every hour.",
        },
      ],
    },
    {
      heading: "Code Red · Emergency, within 60 minutes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Red is unproductive retching with a swelling or drum-like belly, which can be bloat rather than simple bile. Blood, brown coffee-ground vomit, collapse, white or blue gums, or a seizure also belongs here. Go to an emergency hospital within 60 minutes, and call them while you travel.",
        },
        {
          type: "p",
          text: "A dog who cannot keep water down, or who might have eaten chocolate, grapes, raisins, xylitol, or a human pain tablet, is also Code Red. Bring the wrapper. Use a poison hotline for a toxin question, and do not use that call to delay the hospital if the dog is already collapsed.",
        },
        {
          type: "phones",
          items: [
            {
              label: "United States: ASPCA Animal Poison Control, 888-426-4435",
              href: "tel:+18884264435",
            },
            {
              label: "United Kingdom: Animal PoisonLine, 01202-509000",
              href: "tel:+441202509000",
            },
            {
              label: "Australia: Australian Animal Poisons Centre, 1300-869-738",
              href: "tel:+611300869738",
            },
          ],
        },
      ],
    },
    {
      heading: "3. At-Home Observation Checklist",
      blocks: [
        {
          type: "p",
          text: "Do these checks once, in a quiet room, and stop if the dog struggles or the belly is tight. A resting dog often breathes about 15 to 30 times a minute. Count for 30 seconds and double it, and ignore a rate taken while they are pacing or panting from stress.",
        },
        {
          type: "p",
          text: "Press a pink gum briefly with a finger, and the color should return in under 2 seconds. Lift the skin over the shoulder blades, and it should flatten within about 2 seconds. A normal temperature, if the dog already allows a thermometer and the belly is not painful, is about 100–102.5°F (37.8–39.2°C).",
        },
        {
          type: "table",
          headers: ["Check", "Reassuring finding", "Leave for care"],
          rows: [
            ["Gums and refill", "Pink and moist, color back in under 2 seconds", "White, blue, brick red, or slower than 2 seconds: go now"],
            ["Breathing at rest", "About 15–30 breaths per minute, easy effort", "More than about 40 at rest, or belly effort: go now"],
            ["Hydration", "Skin flattens within about 2 seconds", "Skin stays tented or gums are tacky: same-day clinic"],
            ["Belly, light touch only", "Soft, no cry, no drum-like swell", "Tight belly or retching with nothing produced: emergency hospital"],
            ["Temperature, if safe", "About 100–102.5°F (37.8–39.2°C)", "At or above 103.5°F (39.7°C), or below 99°F (37.2°C): call now"],
          ],
        },
        {
          type: "p",
          text: "Skip the thermometer if the belly is painful or the dog is fighting you. Use only a light touch along the side of the abdomen, and stop if they flinch, hunch, or retch. Prayer posture, chest down and hips up, is a pain sign that means you should leave for the clinic.",
        },
      ],
    },
    {
      heading: "4. Top 5 Common Clinical Causes",
      blocks: [
        {
          type: "p",
          text: "These causes run from problems that often settle to problems that kill. More than one can be true, and the vomit color does not name the disease. A veterinarian who examines the dog is the person who sorts this list.",
        },
      ],
    },
    {
      heading: "Empty stomach or dietary indiscretion",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Bile can irritate an empty stomach, especially first thing in the morning after a long gap between meals. A sudden food change, grass, or a stolen scrap can do the same. One episode in a bright dog is the pattern that sometimes stays at home, if the red flags stay absent.",
        },
      ],
    },
    {
      heading: "Parasites or a gut infection",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Worms, giardia, and some bacterial gut infections cause vomiting plus soft stool. The dog may still walk around and then vomit again later. A same-day clinic can test feces, so do not start a leftover antibiotic or a pet-store dewormer chosen from the vomit color.",
        },
      ],
    },
    {
      heading: "Pancreas, kidney, or liver disease",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Pancreatitis often follows a fatty meal and shows as repeated vomiting, a hunched back, and belly pain. Kidney and liver disease can add thirst, weight loss, or a dog who has been quieter for days. These need blood tests, not another night of watching yellow foam.",
        },
      ],
    },
    {
      heading: "A blockage or a toxin",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Toys, bones, corn cobs, and fabric can lodge in the gut and start as vomiting that will not stop. Chocolate, grapes, raisins, xylitol, and human pain tablets are toxins, not bile problems to fast through. If a wrapper or a missing object is in the picture, treat it as Code Red and bring the package.",
        },
      ],
    },
    {
      heading: "Bloat or another breed-linked emergency",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Gastric dilatation-volvulus is a stomach that fills with gas and twists, and it can look like failed attempts to vomit with a swelling belly. It is fatal without surgery, and deep-chested dogs are at higher risk. Addison's disease can also cause vomiting and collapse, and it is an emergency when the dog cannot stand.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/bloat-gdv", label: "Open the bloat emergency guide" },
            { href: "/emergency/chocolate-toxicity", label: "Open the chocolate emergency guide" },
          ],
        },
      ],
    },
    {
      heading: "5. Safe Supportive Care and Dangerous Mistakes",
      blocks: [
        {
          type: "p",
          text: "Supportive care is only for a Code Green adult who is bright, not diabetic, and heavier than about 10 lb (4.5 kg). That dog can skip one meal, about 8 to 12 hours from the vomit, if they keep water down. Puppies, toy dogs, and diabetic dogs should not be fasted.",
        },
        {
          type: "p",
          text: "Offer water in small amounts, about 1 to 2 teaspoons (5–10 ml) every 15 minutes, instead of a bowl they gulp and bring back up. If that stays down, try plain boiled chicken without skin or seasoning, mixed with white rice. For a 20 lb (9 kg) dog, start with about 2 tablespoons (30 ml), then wait 2 hours.",
        },
        {
          type: "p",
          text: "Plain canned pumpkin, not pie filling, is optional at about 1 teaspoon (5 ml) per 10 lb (4.5 kg). Pie mix can contain spices or xylitol, so do not use it. Stop the food and call if they vomit the test meal, and use the calculator only after the usual diet returns.",
        },
        {
          type: "p",
          text: "Do not give Pepto-Bismol, aspirin, or other human stomach and pain tablets. Pepto-Bismol contains a salicylate, which is especially dangerous for cats and is not a home treatment for a dog here either. Ibuprofen and naproxen can cause stomach bleeding and kidney failure, and hydrogen peroxide can burn the throat if someone uses it to force vomiting.",
        },
        {
          type: "p",
          text: "The clinic may feel the abdomen, check hydration, and run blood tests if the vomiting has repeated. An X-ray or ultrasound is how they look for a blockage when the history suggests a missing toy or bone. Fluids are given in hospital when the dog cannot keep water down, and that is not a home drip or a sports drink.",
        },
        {
          type: "p",
          text: "A Code Yellow dog in the United States can often be seen by a daytime practice, and the night stop is an emergency hospital. The United Kingdom uses the registered practice by day and an out-of-hours clinic later. In Australia, an after-hours emergency centre is the Code Red stop, and poison lines are for toxins rather than for bloat.",
        },
      ],
    },
    {
      heading: "6. Tools That Help After You Have Triaged",
      blocks: [
        {
          type: "p",
          text: "After the stomach settles, the Pet Food Weight Calculator can set the return to a normal portion. If red-flag signs appear, the 24/7 Vet Finder locates an open clinic. The Free AI Pet Assistant can take a follow-up question, and that chat is not a diagnosis or a reason to delay the hospital.",
        },
        {
          type: "links",
          items: [
            { href: "/tools/pet-food-calculator", label: "Open the Pet Food Weight Calculator" },
            { href: "/tools/vet-finder", label: "Open the 24/7 Vet Finder" },
            { href: "/tools/ai-assistant", label: "Open the Free AI Pet Assistant" },
          ],
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners usually ask if yellow bile can wait, what a visit costs, and which vomit color cannot wait. The answers below are triage ranges for dogs in the United States, the United Kingdom, and Australia. They do not diagnose the dog you live with.",
        },
      ],
    },
    {
      heading: "Can yellow bile vomiting resolve on its own?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Yes, one episode of yellow fluid in a bright adult can settle if water stays down and the belly stays soft. A second vomit, blood, or a puppy changes that plan the same day. This is a triage range, not a promise that this dog will be fine.",
        },
      ],
    },
    {
      heading: "How much does a vet visit cost for vomiting?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A same-day exam is often about $80–$200 in the US, £50–£150 in the UK, and A$120–A$300 in Australia. Fluids and blood tests often move that to about $300–$800, £250–£600, or A$450–A$1,200. Blockage or bloat surgery costs much more than the exam alone.",
        },
      ],
    },
    {
      heading: "How long can I wait after one yellow vomit?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A bright adult with pink moist gums and a soft belly can be watched for about 8 to 12 hours if water stays down. A second vomit, a puppy, or a tight belly should not wait that long. Call the same day if you are unsure which tier you are in.",
        },
      ],
    },
    {
      heading: "What vomit color means I should go now?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Red blood, brown coffee-ground material, or retching that brings almost nothing up needs an emergency hospital within 60 minutes. Yellow foam once, in a dog who then acts normal, can be watched briefly. Bring a photo of the vomit either way.",
        },
      ],
    },
  ],
};
