import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const hidingAndNotEatingGuide: EmergencyLongGuide = {
  title: "Cat Hiding and Not Eating: Anorexia Triage & Hepatic Lipidosis Risk",
  lede: "This Pet Safety Hub guide helps owners in the United States, the United Kingdom, and Australia sort a social cat who withdraws from meals that cannot wait. The usual level for this sign is Code Yellow, a veterinarian within 12 to 24 hours. Overweight cats can develop hepatic lipidosis if anorexia continues, and straining or toxin exposure should not wait for that window.",
  sections: [
    {
      heading: "1. Quick Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "A cat who skips more than a meal or hides when they are usually social should see a veterinarian within 12 to 24 hours. Right now, note the last full meal, check the litter box for urine, and scan for lilies or string. Collapse, pale gums, or a male who cannot urinate is an emergency now.",
        },
      ],
    },
    {
      heading: "2. Three-Tier Clinical Triage",
      blocks: [
        {
          type: "p",
          text: "Hiding plus not eating is how many cats show pain, nausea, or fear of the box. One missed snack after a house guest is different from a day without food in an overweight cat. Use the tier that matches the cat in front of you, and move up if vomiting repeats or urine stops.",
        },
        {
          type: "p",
          text: "Write down the last full meal, water intake, litter clumps, and any plant or string access. Look at gum color and breathing without dragging them out roughly. A phone note of hours since food helps the clinic more than a vague sense they have been off.",
        },
      ],
    },
    {
      heading: "Code Green · Monitor",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Green fits a usually social adult who skips one small meal after a clear stressor, then returns to food within a few hours, with normal urine and stool. Gums stay pink, breathing stays quiet, and there is no known toxin. Overweight cats do not stay in this tier for a full day without food.",
        },
        {
          type: "p",
          text: "Offer a familiar strong-smelling food and quiet space. If they still refuse the next meal, move to Code Yellow. Straining, repeated vomiting, or yellow gums leave Code Green immediately.",
        },
      ],
    },
    {
      heading: "Code Yellow · Urgent, 12–24 hours",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Yellow is the usual level for this symptom. It fits a cat who has skipped more than one meal or is hiding when they are usually social, while still able to walk and pass urine. Book a veterinarian within 12 to 24 hours.",
        },
        {
          type: "p",
          text: "An overweight cat who has not eaten for much of a day belongs here at minimum, and sooner is better because hepatic lipidosis risk rises with fasting. Seniors and cats with kidney disease also sit in this tier after a short anorexia. Do not stretch booking if they stop drinking.",
        },
      ],
    },
    {
      heading: "Code Red · Emergency, within 60 minutes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Red is straining to urinate, repeated vomiting, a painful belly, pale or yellow gums, collapse, or open-mouth breathing. Known lily chewing, string hanging from the mouth, or another toxin also belongs here. Go to an emergency hospital within 60 minutes.",
        },
        {
          type: "p",
          text: "Male cats who hide and will not eat after visiting the box with no urine need the urethral blockage pathway. Bring any plant material or string you found.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/feline-urethral-blockage",
              label: "Open the feline urethral blockage emergency guide",
            },
            { href: "/emergency/lily-toxicity", label: "Open the lily toxicity emergency guide" },
          ],
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
          text: "Do these checks with minimal chase. Note the last full meal and whether water intake changed. Check the litter box for urine and stool. Scan for lilies, string, or a medicine bottle within reach.",
        },
        {
          type: "p",
          text: "Look at gum color and breathing effort without yanking them from a den. Pink moist gums and quiet closed-mouth breathing are more reassuring than pale or yellow gums. A resting cat often breathes about 20 to 30 times a minute.",
        },
        {
          type: "table",
          headers: ["Check", "Reassuring finding", "Leave for care"],
          rows: [
            ["Food intake", "Missed one snack, then ate", "More than a meal missed, or overweight cat fasting much of a day: book within 12–24 hours"],
            ["Litter box", "Normal urine and stool", "Straining with no urine: emergency hospital"],
            ["Gums", "Pink and moist", "Pale or yellow gums, or collapse: go now"],
            ["Breathing", "Quiet, closed mouth", "Open-mouth breathing or heavy effort: go now"],
            ["Exposure", "No lily, string, or toxin", "Lily, string, or toxin seen: go now"],
          ],
        },
        {
          type: "p",
          text: "Do not force large volumes of food or water into a resisting cat. Do not pull string from the mouth or anus. Do not give peroxide, charcoal, or human pain medicine.",
        },
      ],
    },
    {
      heading: "4. Top Common Clinical Causes",
      blocks: [
        {
          type: "p",
          text: "These causes run from dental pain to liver lipidosis and urinary obstruction. More than one can be true. A veterinarian who examines the cat sorts this list.",
        },
      ],
    },
    {
      heading: "Pain, nausea, or fever",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Cats hide when joints hurt, the belly is sore, or a fever makes them feel dull. They may still drink a little and refuse food. Same-day exam finds sources that a waiting game will not.",
        },
      ],
    },
    {
      heading: "Dental disease or a foreign body",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Tooth pain and oral ulcers make chewing miserable. String, rubber, and bones can lodge in the gut and start as anorexia with vomiting. Never pull a visible string; the clinic cuts and images safely.",
        },
      ],
    },
    {
      heading: "Urinary obstruction",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A blocked male cat often hides, stops eating, and visits the box without producing urine. This is Code Red. Open the feline urethral blockage guide and leave rather than offering another meal.",
        },
      ],
    },
    {
      heading: "Early liver or kidney illness",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Kidney disease and emerging hepatic lipidosis after fasting can present as hiding and anorexia before more dramatic signs. Overweight cats are at special risk when food stops. Bloodwork and supportive feeding plans belong to the clinic.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/feline-urethral-blockage",
              label: "Feline urethral blockage emergency guide",
            },
            { href: "/emergency/lily-toxicity", label: "Lily toxicity emergency guide" },
            { href: "/symptoms/cats/straining-in-litter-box", label: "Straining in litter box triage" },
            { href: "/symptoms/cats/drinking-more-water", label: "Drinking more water triage" },
          ],
        },
      ],
    },
    {
      heading: "5. Safe Supportive Care and Dangerous Mistakes",
      blocks: [
        {
          type: "p",
          text: "Supportive care while you arrange a Code Yellow visit is quiet space, familiar food, and free water. Warming food slightly can help aroma. Do not force a syringe of food into a cat who is fighting hard enough to aspirate.",
        },
        {
          type: "p",
          text: "Do not give ibuprofen, acetaminophen, leftover antibiotics, peroxide, or charcoal. Do not wait multiple days in an overweight cat who will not eat. Do not assume hiding is only mood.",
        },
        {
          type: "p",
          text: "The clinic may run bloodwork, check the bladder, look for dental disease, and start anti-nausea care or assisted feeding under a plan. Hepatic lipidosis treatment is a hospital process, not a home blender diet you invent overnight.",
        },
        {
          type: "p",
          text: "Code Yellow visits in the United States, the United Kingdom, and Australia can often be daytime practice. Code Red signs go to an emergency or out-of-hours hospital.",
        },
      ],
    },
    {
      heading: "6. Tools That Help After You Have Triaged",
      blocks: [
        {
          type: "p",
          text: "If red-flag signs appear, the Pet Safety Hub 24/7 Vet Finder locates an open clinic. The Free AI Pet Assistant can help you list hours since the last meal, and that chat is not a diagnosis.",
        },
        {
          type: "links",
          items: [
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
          text: "Owners usually ask how long a cat can skip food, why overweight cats are special, and when hiding means emergency care. The answers below are triage ranges for cats in the United States, the United Kingdom, and Australia.",
        },
      ],
    },
    {
      heading: "How long can a cat go without eating?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Pet Safety Hub does not treat multi-day fasting as safe at home. Skip of more than a meal, or much of a day in an overweight cat, should be seen within 12 to 24 hours. Collapse, vomiting, or no urine should not wait that long.",
        },
      ],
    },
    {
      heading: "Why are overweight cats at higher risk?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "When an overweight cat stops eating, fat can mobilize to the liver and contribute to hepatic lipidosis. That risk is why anorexia is treated as urgent rather than as stubborn mood. Get a same-day or next-morning appointment.",
        },
      ],
    },
    {
      heading: "When is hiding an emergency tonight?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Straining without urine, repeated vomiting, pale or yellow gums, collapse, open-mouth breathing, lily exposure, or visible string need an emergency hospital within 60 minutes. Bring the plant or string evidence if you have it.",
        },
      ],
    },
  ],
};
