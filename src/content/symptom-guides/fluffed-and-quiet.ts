import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const fluffedAndQuietGuide: EmergencyLongGuide = {
  title: "Bird Fluffed and Quiet: Illness Triage & Same-Day Avian Care",
  lede: "This Pet Safety Hub guide helps owners in the United States, the United Kingdom, and Australia read a fluffed, quiet bird as often ill even without dramatic signs. The usual level is Code Yellow, an avian visit the same day. Go now if breathing changes, droppings stop, or a female is straining.",
  sections: [
    {
      heading: "1. Quick Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "A bird who stays fluffed, quiet, and less interested in food is often ill. Arrange an avian visit the same day. Watch for a tail bob or open beak, compare droppings with normal, and skip a long chase with a gram scale if catching them is a struggle.",
        },
      ],
    },
    {
      heading: "2. Three-Tier Clinical Triage",
      blocks: [
        {
          type: "p",
          text: "Fluffing conserves heat when a bird feels sick or cold. Quiet perching with closed eyes at a time they usually play is a warning. Use the tier that matches the bird in front of you, and move up for any breathing effort or floor-sitting.",
        },
        {
          type: "p",
          text: "Compare today's droppings with their normal color and volume. Note the last millet, pellet, or usual meal. Weigh them only if you already have a gram scale and can do it with almost no chase.",
        },
      ],
    },
    {
      heading: "Code Green · Monitor",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Green fits a brief fluff after a bath or nap that ends when the bird preens, eats, and plays again within about an hour. Droppings stay normal, and there is no tail bob. A bird who stays fluffed through a mealtime leaves this tier.",
        },
      ],
    },
    {
      heading: "Code Yellow · Urgent, same day",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Yellow is the usual level for this symptom. It fits a bird who remains fluffed and quiet, shows less interest in food, but still perches without a clear tail bob. Arrange an avian veterinarian the same day, not next week.",
        },
        {
          type: "p",
          text: "Smaller species and young birds belong in this tier even sooner. Mildly reduced droppings with quiet behavior also sit here. Do not stretch the wait if they stop eating entirely.",
        },
      ],
    },
    {
      heading: "Code Red · Emergency, within 60 minutes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Red is a tail bob, open-beak breathing, falling off the perch, absent or bloody droppings in a weak bird, fume exposure, a ceiling-fan injury, a cat bite, or a female standing wide-legged and straining. Go to avian-capable emergency care now.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/avian-respiratory-distress",
              label: "Open the avian respiratory distress emergency guide",
            },
            { href: "/emergency/egg-binding", label: "Open the egg-binding emergency guide" },
          ],
        },
      ],
    },
    {
      heading: "3. At-Home Observation Checklist",
      blocks: [
        {
          type: "p",
          text: "Watch breathing for a tail bob or open beak before you handle them. Compare droppings today with normal. Note the last time they ate a favorite food.",
        },
        {
          type: "p",
          text: "Weigh only with almost no chase if you already use a gram scale. A drop of even about 0.05–0.1 oz (1–3 g) in a small bird can matter to the clinician when paired with dullness. Skip the weigh if catching them causes panic.",
        },
        {
          type: "table",
          headers: ["Check", "Reassuring finding", "Leave for care"],
          rows: [
            ["Feather and attitude", "Brief fluff then preening and play", "Stays fluffed and quiet through meals: same-day avian visit"],
            ["Breathing", "No bob, closed beak at rest", "Tail bob or open beak: emergency now"],
            ["Droppings", "Normal color and volume", "Absent, bloody, or mostly water in a weak bird: go now"],
            ["Appetite", "Eating usual foods", "Refusing favorites all day: same-day care"],
            ["History", "No injury or fumes", "Fumes, fan injury, cat bite, or straining female: go now"],
          ],
        },
        {
          type: "p",
          text: "Do not force-feed a weak bird at home. Do not use peroxide, charcoal, alcohols, or essential oils. Do not leave a cat-bite bird overnight even if the wound looks tiny.",
        },
      ],
    },
    {
      heading: "4. Top Common Clinical Causes",
      blocks: [
        {
          type: "p",
          text: "These causes run from hidden infection to reproductive disease and heavy-metal exposure. More than one can be true. An avian exam sorts this list.",
        },
      ],
    },
    {
      heading: "Infection or pain the bird is hiding",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Birds mask weakness until reserve is low. Infection and pain often show first as fluffing, quiet perching, and skipped food. Same-day care beats waiting for a dramatic crash.",
        },
      ],
    },
    {
      heading: "Seed-heavy diet with vitamin deficiency over time",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A mostly seed diet can contribute to long-term deficiency and illness that presents as dullness. Diet change alone is not tonight's emergency treatment. Stabilization and testing come first.",
        },
      ],
    },
    {
      heading: "Reproductive disease or egg binding",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Egg binding and other reproductive problems can make a hen quiet, fluffed, and wide-legged. Pair that picture with the egg-binding emergency guide and leave rather than soaking in a sink.",
        },
      ],
    },
    {
      heading: "Toxin or heavy-metal exposure",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Fumes, lead, zinc, and other toxins can present as quiet fluffing before worse signs. Bring any chewed metal, painted chip, or fume history to the clinic.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/avian-respiratory-distress",
              label: "Avian respiratory distress emergency guide",
            },
            { href: "/emergency/egg-binding", label: "Egg-binding emergency guide" },
            { href: "/symptoms/birds/tail-bobbing", label: "Tail bobbing triage" },
          ],
        },
      ],
    },
    {
      heading: "5. Safe Supportive Care and Dangerous Mistakes",
      blocks: [
        {
          type: "p",
          text: "While you arrange same-day care, keep the cage quiet, offer favorite foods in easy reach, and maintain a stable room temperature. Move food and water higher if climbing looks hard, without forcing handling.",
        },
        {
          type: "p",
          text: "Do not give human pain medicine, leftover antibiotics, peroxide, or charcoal. Do not put the bird in a hot steamy bathroom as your only plan. Do not ignore a puncture from a cat tooth.",
        },
        {
          type: "p",
          text: "The avian clinic may give fluids, warmth, oxygen if needed, and run tests once the bird is stable. Assisted feeding is a clinical skill when aspiration risk is high.",
        },
        {
          type: "p",
          text: "Ask for avian or exotic capability in the United States, the United Kingdom, and Australia. Call ahead so a quiet oxygen-ready space can be prepared if breathing worsens on the way.",
        },
      ],
    },
    {
      heading: "6. Tools That Help After You Have Triaged",
      blocks: [
        {
          type: "p",
          text: "The Pet Safety Hub 24/7 Vet Finder locates an open clinic. The Free AI Pet Assistant can help you list dropping changes, and that chat is not a reason to delay a same-day visit.",
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
          text: "Owners usually ask whether fluffing can be sleep, how fast to book, and when breathing means emergency care. The answers below are triage ranges for birds in the United States, the United Kingdom, and Australia.",
        },
      ],
    },
    {
      heading: "Is a fluffed bird just sleeping?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Brief fluffing during a nap that ends with preening and eating can be normal. Staying fluffed and quiet through a usual mealtime is treated as illness until an avian veterinarian says otherwise. Same-day care is the default.",
        },
      ],
    },
    {
      heading: "How soon should I book if they still perch?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "The same day. Perching does not prove a bird is safe overnight. Tail bobbing, open-beak breathing, or floor-sitting should not wait for a daytime slot.",
        },
      ],
    },
    {
      heading: "What if a cat bit them but the wound looks small?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Cat bites are Code Red for birds because saliva bacteria seed deep infection quickly. Go to avian-capable care now even if feathers hide a tiny puncture.",
        },
      ],
    },
  ],
};
