import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const teethGrindingHunchingGuide: EmergencyLongGuide = {
  title: "Rabbit Teeth Grinding and Hunching: Pain Triage & Gut Stasis Risk",
  lede: "This Pet Safety Hub guide treats loud teeth grinding with a hunched posture as a pain signal in rabbits, often from the gut or teeth. The usual level is Code Red. Owners in the United States, the United Kingdom, and Australia should contact a rabbit-savvy veterinarian now, not wait until tomorrow.",
  sections: [
    {
      heading: "1. Quick Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "Loud grinding with hunching is pain until proven otherwise. Look for fecal pellets; none or very small pellets raises concern for gut stasis. Offer hay and see whether they take a bite. Do not force-feed an animal who cannot swallow.",
        },
      ],
    },
    {
      heading: "2. Three-Tier Clinical Triage",
      blocks: [
        {
          type: "p",
          text: "Rabbits grind softly when content and loudly when painful. Hunching with a tucked belly often means gut gas, dental spurs, or another acute pain source. Use Code Red when grinding and hunching arrive together with poor appetite.",
        },
        {
          type: "p",
          text: "Note drooling, a wet chin, or a preference for soft food, which can mean dental pain. Check gum color if you can lift a lip gently. Pale gums or collapse means go immediately.",
        },
      ],
    },
    {
      heading: "Code Green · Monitor",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Green does not fit loud grinding with hunching. Soft tooth purring while relaxed and eating hay is not this page. If you heard harsh grinding and saw a hunched posture, do not stay in Code Green.",
        },
      ],
    },
    {
      heading: "Code Yellow · Urgent, 12–24 hours",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Yellow is not the plan for active pain grinding with hunching and refused hay. A rabbit-savvy veterinarian may still use a same-day urgent slot if they are eating some hay and passing pellets, but loud grinding moves the visit to now. When in doubt, upgrade to Code Red.",
        },
      ],
    },
    {
      heading: "Code Red · Emergency, within 60 minutes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Red is grinding, hunching, and refusing hay; stopped or tiny droppings; a gas-filled belly feel; cold, limp, or effortful breathing; or diarrhea especially in a young rabbit. Go to a rabbit-savvy emergency clinician as soon as you can travel.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/rabbit-gi-stasis",
              label: "Open the rabbit GI stasis emergency guide",
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
          text: "Look for fecal pellets in the litter area. None, or very small pellets, raises concern for gut stasis. Offer hay and watch for a real bite. Do not syringe food into a rabbit who cannot swallow or who is grinding in pain.",
        },
        {
          type: "p",
          text: "Note drooling or a wet chin. Check gum color gently if tolerated. Pale gums, a cold ear feel, or collapse means leave now. A normal adult rabbit body temperature is often about 101–103°F (38.3–39.4°C) when measured correctly at a clinic; skip home thermometers if they fight.",
        },
        {
          type: "table",
          headers: ["Check", "Reassuring finding", "Leave for care"],
          rows: [
            ["Teeth and posture", "Soft content sounds while relaxed", "Loud grinding with hunching: emergency rabbit care"],
            ["Hay intake", "Takes bites of hay", "Refuses hay entirely: go now"],
            ["Droppings", "Normal size and number", "None or very small pellets: go now"],
            ["Belly and energy", "Moving around the pen", "Gas-filled belly feel, cold, limp, or hard breathing: go now"],
            ["Gums", "Pink if you can check gently", "Pale gums or collapse: go now"],
          ],
        },
        {
          type: "p",
          text: "Do not give human pain medicine, simethicone from a random internet dose chart, peroxide, or charcoal. Do not wait overnight hoping pellets return when grinding is loud.",
        },
      ],
    },
    {
      heading: "4. Top Common Clinical Causes",
      blocks: [
        {
          type: "p",
          text: "These causes run from gut stasis to dental spurs and true obstruction. More than one can be true. A rabbit-savvy veterinarian sorts this list with exam and often imaging.",
        },
      ],
    },
    {
      heading: "Gastrointestinal stasis and gas pain",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "When the gut slows, gas builds and rabbits hunch and grind. Droppings shrink or stop, and hay interest falls. This is a common Code Red pattern on Pet Safety Hub and needs prompt motility and pain care under veterinary direction.",
        },
      ],
    },
    {
      heading: "Dental spurs or a tooth root abscess",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Overgrown cheek teeth can lacerate the tongue or cheek and make chewing hay impossible. Drooling and choosing soft food are clues. Filing teeth is a clinic procedure, not a home nail-file job.",
        },
      ],
    },
    {
      heading: "Urinary stone or bladder sludge",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Urinary pain can look like gut pain, with grinding and a hunched stance. Urine may look thick or bloody. Imaging at a clinic separates bladder disease from stasis.",
        },
      ],
    },
    {
      heading: "A true obstruction, which is a surgical emergency",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A blockage from carpet fiber, hair, or inappropriate food can stop the gut cold. These rabbits decline fast and may need surgery. Do not delay for home remedies.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/rabbit-gi-stasis", label: "Rabbit GI stasis emergency guide" },
            { href: "/symptoms/small-pets/fewer-droppings", label: "Fewer droppings triage" },
            { href: "/nutrition/timothy-hay", label: "Timothy hay nutrition guide" },
          ],
        },
      ],
    },
    {
      heading: "5. Safe Supportive Care and Dangerous Mistakes",
      blocks: [
        {
          type: "p",
          text: "Supportive care before transport is a quiet carrier with hay available and a call to a rabbit-savvy clinician. Keep them warm with a towel if ears feel cool, without overheating. Do not force large oral feeds during active grinding.",
        },
        {
          type: "p",
          text: "Do not give ibuprofen, aspirin, leftover dog NSAIDs, peroxide, or charcoal. Do not massage a painful belly hard. Do not assume soft feces mean you should wait.",
        },
        {
          type: "p",
          text: "The clinic may give prescription pain relief, fluids, motility support when appropriate, dental care under anesthesia later, or surgery for obstruction. Those decisions need an exam.",
        },
        {
          type: "p",
          text: "Ask specifically for rabbit or exotic experience in the United States, the United Kingdom, and Australia. Call ahead so pain medicine and fluids can be ready.",
        },
      ],
    },
    {
      heading: "6. Tools That Help After You Have Triaged",
      blocks: [
        {
          type: "p",
          text: "The Pet Safety Hub 24/7 Vet Finder helps locate an open clinic. Read the rabbit GI stasis guide for transport detail. Chat tools are not a reason to delay leaving.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/rabbit-gi-stasis", label: "Open the rabbit GI stasis emergency guide" },
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
          text: "Owners usually ask whether grinding can wait, how droppings fit the picture, and what not to dose at home. The answers below are triage ranges for rabbits in the United States, the United Kingdom, and Australia.",
        },
      ],
    },
    {
      heading: "Can loud grinding wait until morning?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No. Pet Safety Hub treats loud teeth grinding with hunching as Code Red, especially when hay is refused or pellets shrink. Call a rabbit-savvy veterinarian and leave.",
        },
      ],
    },
    {
      heading: "What if droppings have stopped?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No pellets or very small pellets with pain signs means gut stasis or worse until proven otherwise. Follow the rabbit GI stasis emergency path and go in now.",
        },
      ],
    },
    {
      heading: "Should I force-feed or give human pain medicine?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Do not force-feed a grinding rabbit who cannot swallow safely, and do not give human or dog pain tablets. Peroxide and charcoal are not appropriate. Let the clinic start pain control and feeding under a plan.",
        },
      ],
    },
  ],
};
