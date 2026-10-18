import type { BreedGuide } from "@/lib/breeds/guide";

export const beagleGuide: BreedGuide = {
  title: "Beagle Care Guide: Nose, Voice, and Weight",
  lede: "Beagles are merry, determined scent hounds with a loud voice and a talent for gaining weight. Secure bins matter as much as the leash. This Pet Safety Hub profile uses pounds (kilograms) and planning costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick summary",
      blocks: [
        {
          type: "snippet",
          text: "Adults often weigh 20–30 lb (9.1–13.6 kg) and live about 10–15 years. Plan about 60 minutes of sniffing walks daily. A lean Beagle has fewer back and joint problems later.",
        },
      ],
    },
    {
      heading: "2. Living with a nose",
      blocks: [
        {
          type: "table",
          headers: ["Trait", "Typical range"],
          rows: [
            ["Weight", "20–30 lb (9.1–13.6 kg)"],
            ["Lifespan", "10–15 years"],
            ["Energy", "4 of 5"],
            ["Grooming", "2 of 5"],
            ["Calorie baseline", "About 670 kcal/day"],
            ["Annual cost planning", "About $1,500 / £1,200"],
          ],
        },
        {
          type: "p",
          text: "They are often sociable with children when food is not left unattended. Apartments work poorly if howling and long sniff walks are not planned. Temperament notes: merry, determined, sociable.",
        },
      ],
    },
    {
      heading: "3. Feeding",
      blocks: [
        {
          type: "p",
          text: "Beagles forage. Secure bins and measure food. Long ears need weekly odor checks after wet walks.",
        },
        {
          type: "callout",
          text: "Measure meals from weight and body condition.",
          href: "/tools/pet-food-calculator",
          label: "Pet food calculator",
        },
      ],
    },
    {
      heading: "4. Health risks",
      blocks: [
        {
          type: "table",
          headers: ["Condition", "Warning sign", "Urgency"],
          rows: [
            ["Ear infections", "Head shaking or dark debris", "Common"],
            ["Obesity", "Thick neck and ribs you cannot feel", "Common"],
            ["Hypothyroidism", "Weight gain and dull coat on a measured diet", "Common"],
            ["Intervertebral disc disease", "Back pain, trembling, or weak hind legs", "Urgent"],
          ],
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/dogs/head-shaking-ear-scratching", label: "Ear scratching" },
            { href: "/health-symptoms/dogs/limping", label: "Limping / back pain" },
          ],
        },
      ],
    },
  ],
};
