import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const drinkingMoreWaterGuide: EmergencyLongGuide = {
  title: "Why Is My Cat Drinking More Water? Thirst Triage & Same-Day Checks",
  lede: "This Pet Safety Hub guide helps owners in the United States, the United Kingdom, and Australia sort a sudden rise in thirst from emergencies that cannot wait for a routine slot. The usual level for this sign is Code Yellow, a veterinary visit within a day with a urine check. Collapse, vomiting, or straining to urinate should not wait for that appointment.",
  sections: [
    {
      heading: "1. Quick Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "A cat who suddenly empties the water bowl needs a veterinary visit within a day, ideally with urine testing. Right now, confirm they are still passing urine. A blocked male cat can look restless around water and still be an emergency.",
        },
      ],
    },
    {
      heading: "2. Three-Tier Clinical Triage",
      blocks: [
        {
          type: "p",
          text: "Increased thirst means more water than is normal for that cat, not one hot afternoon sip. A bowl that needs refilling twice as often as last week is different from a diabetic crisis or a blocked urethra. Use the tier that matches the cat in front of you, and move up if they strain, vomit, or collapse.",
        },
        {
          type: "p",
          text: "Note how often you refill compared with last week, appetite, weight feel, vomiting, and litter-box clumps. Check gum moisture and grooming. Scan for lily petals, antifreeze access, or a new medicine.",
        },
      ],
    },
    {
      heading: "Code Green · Monitor",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Green fits only a mild, short-lived increase in a bright cat during hot weather or after a diet change to drier food, when urine volume looks normal and they still eat and groom. There is no vomiting, no weight loss you can feel, and no straining.",
        },
        {
          type: "p",
          text: "Recheck the bowl and the box for about 24 hours. If thirst stays clearly above their baseline, move to Code Yellow and book the visit. Straining, collapse, or a male with no urine leaves Code Green immediately.",
        },
      ],
    },
    {
      heading: "Code Yellow · Urgent, 12–24 hours",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Yellow is the usual level for this symptom. It fits a clear, sustained increase in drinking when the cat can still walk, eat something, and pass urine. Book a veterinarian within 12 to 24 hours and ask about blood and urine tests.",
        },
        {
          type: "p",
          text: "Seniors, cats with known kidney or thyroid disease, and cats who have lost weight belong in this tier even after a few days of extra thirst. Larger litter clumps with more water intake is a common pattern here. Do not stretch booking into next week if thirst arrived suddenly.",
        },
      ],
    },
    {
      heading: "Code Red · Emergency, within 60 minutes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Red is straining in the box with little or no urine, repeated vomiting, collapse, pale gums, or open-mouth breathing. A known diabetic cat who is weak, or a sweet acetone smell on the breath, also belongs here. Go to an emergency hospital within 60 minutes.",
        },
        {
          type: "p",
          text: "Thirst after lily chewing, antifreeze, or another toxin is Code Red. Bring the plant or package. Male cats with thirst plus restlessness around the box need the urethral blockage pathway, not a wait for a wellness slot.",
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
          text: "Do these checks once without stressing a hiding cat. Note bowl refills compared with last week. Watch appetite, vomiting, and litter-box clumps for both urine and stool.",
        },
        {
          type: "p",
          text: "Check gum moisture and whether they still groom. Confirm they are passing urine. A male who keeps visiting the box without wet clumps is not a thirst puzzle to solve at home.",
        },
        {
          type: "table",
          headers: ["Check", "Reassuring finding", "Leave for care"],
          rows: [
            ["Thirst change", "Mild bump in heat, cat still bright", "Sudden empty bowls daily: book within 12–24 hours"],
            ["Urine output", "Normal or larger wet clumps", "Straining with no urine or only drops: emergency hospital"],
            ["Energy and appetite", "Eating and walking normally", "Collapse, repeated vomiting, or not eating: go now or same day"],
            ["Gums and breathing", "Moist pink gums, quiet breathing", "Pale gums or open-mouth breathing: go now"],
            ["Toxin context", "No plant or chemical access", "Lily, antifreeze, or other toxin: go now"],
          ],
        },
        {
          type: "p",
          text: "Do not restrict water to test them. Do not give human diabetes tablets, diuretics, or leftover pet medicine. Do not use peroxide or charcoal for thirst.",
        },
      ],
    },
    {
      heading: "4. Top Common Clinical Causes",
      blocks: [
        {
          type: "p",
          text: "These causes run from hot weather to kidney failure and diabetes. More than one can be true, and thirst alone does not name the disease. Blood and urine tests sort this list.",
        },
      ],
    },
    {
      heading: "Kidney disease or hyperthyroidism",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Chronic kidney disease often shows as more drinking, larger urine clumps, and gradual weight loss in older cats. Hyperthyroidism can add a louder appetite with weight loss and restlessness. Neither is a home diet experiment; both need lab work.",
        },
      ],
    },
    {
      heading: "Diabetes mellitus",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Diabetic cats drink and urinate more, and may lose muscle while the belly still looks round. Weakness, vomiting, or a sweet chemical breath odor is an emergency. Insulin plans come only from a veterinarian who has current glucose data.",
        },
      ],
    },
    {
      heading: "Diet change or hot weather",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A switch toward dry food or a hot week can raise drinking a little in a well cat. The increase should be modest, and the cat should still act normal. Persistent or large jumps still deserve a urine check rather than another week of guessing.",
        },
      ],
    },
    {
      heading: "Urinary disease",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Bladder inflammation and obstruction change how often a cat visits the box and can be mistaken for simple thirst. If urine volume drops while they still seem thirsty and restless, follow the blockage emergency path.",
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
          ],
        },
      ],
    },
    {
      heading: "5. Safe Supportive Care and Dangerous Mistakes",
      blocks: [
        {
          type: "p",
          text: "Supportive care means free access to fresh water in more than one bowl and a clean box while you wait for a Code Yellow appointment. Do not withhold water. Keep food available unless the clinic told you to fast for morning bloodwork.",
        },
        {
          type: "p",
          text: "Do not start insulin, thyroid pills, or kidney supplements from an old bottle without a current exam. Do not give human pain medicine, peroxide, or charcoal. Do not wait on a male cat who cannot urinate.",
        },
        {
          type: "p",
          text: "The clinic may run blood chemistry, a thyroid value, urinalysis, and sometimes blood pressure. Treatment depends on those results, not on how empty the bowl looked overnight.",
        },
        {
          type: "p",
          text: "A Code Yellow visit in the United States, the United Kingdom, or Australia can often be a daytime practice with lab access. Code Red signs go to an emergency or out-of-hours hospital.",
        },
      ],
    },
    {
      heading: "6. Tools That Help After You Have Triaged",
      blocks: [
        {
          type: "p",
          text: "If red-flag signs appear, the Pet Safety Hub 24/7 Vet Finder locates an open clinic. The Free AI Pet Assistant can help you list what to tell the nurse about bowl refills, and that chat is not a diagnosis.",
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
          text: "Owners usually ask how soon thirst needs labs, when to worry about blockage, and whether to limit water. The answers below are triage ranges for cats in the United States, the United Kingdom, and Australia.",
        },
      ],
    },
    {
      heading: "How soon should increased thirst be checked?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A clear, sustained increase should be seen within 12 to 24 hours with urine and often blood tests. A mild hot-weather bump in a bright cat can be rechecked over about a day, then booked if it lasts. Sudden thirst with illness signs should not wait.",
        },
      ],
    },
    {
      heading: "Could more drinking mean a blocked bladder?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Restlessness around water and the box with little or no urine, especially in a male cat, is treated as urethral blockage. That is Code Red, not a thirst workup you schedule next week. Open the blockage emergency guide and leave.",
        },
      ],
    },
    {
      heading: "Should I limit water until the vet visit?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No. Pet Safety Hub does not restrict water as a home test. Limiting water can worsen kidney stress. Keep bowls full and get the appointment.",
        },
      ],
    },
  ],
};
