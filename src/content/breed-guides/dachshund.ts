import type { BreedGuide } from "@/lib/breeds/guide";

export const dachshundGuide: BreedGuide = {
  title: "Dachshund Care Guide: Spine, Weight, and Daily Life",
  lede: "Dachshunds are bold, curious, vocal hounds whose long backs set the rules for stairs, sofas, and body weight. This Pet Safety Hub profile uses pounds (kilograms) and planning costs in dollars and pounds sterling. A veterinarian who has examined your dog still sets the plan for that animal.",
  sections: [
    {
      heading: "1. Quick summary",
      blocks: [
        {
          type: "snippet",
          text: "Most Dachshunds live about 12–16 years at 16–32 lb (7.3–14.5 kg). Plan about 30 minutes of daily activity, keep them lean, and use ramps instead of habitual sofa jumps.",
        },
      ],
    },
    {
      heading: "2. Size and home fit",
      blocks: [
        {
          type: "table",
          headers: ["Trait", "Typical range"],
          rows: [
            ["Weight", "16–32 lb (7.3–14.5 kg)"],
            ["Lifespan", "12–16 years"],
            ["Energy", "3 of 5"],
            ["Grooming", "2 of 5"],
            ["Exercise planning", "About 30 minutes per day"],
            ["Annual cost planning", "About $1,600 / £1,300"],
          ],
        },
        {
          type: "p",
          text: "Apartments can work if stairs are managed and the dog is not left to leap off furniture. They are often too bold for rough toddler play without supervision. Temperament notes owners report: bold, curious, vocal.",
        },
      ],
    },
    {
      heading: "3. Nutrition and spine protection",
      blocks: [
        {
          type: "p",
          text: "A typical adult baseline is near 600 kcal per day. Every extra pound loads the discs. Measure meals, skip free-feeding, and keep a visible waist. Use ramps to beds and cars.",
        },
        {
          type: "callout",
          text: "Calculate portions from current weight and body condition rather than a heaped scoop.",
          href: "/tools/pet-food-calculator",
          label: "Pet food calculator",
        },
      ],
    },
    {
      heading: "4. Health risks to watch",
      blocks: [
        {
          type: "table",
          headers: ["Condition", "Warning sign", "Urgency"],
          rows: [
            ["Intervertebral disc disease", "Yelping, hunched back, or dragging hind feet", "Urgent"],
            ["Obesity", "Sausage shape with no tuck", "Common"],
            ["Dental disease", "Bad breath or dropping food", "Common"],
            ["Patellar luxation", "Skip in the stride that comes and goes", "Common"],
          ],
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/dogs/limping", label: "Limping triage" },
            { href: "/health-symptoms/dogs/collapse-or-seizure", label: "Collapse triage" },
          ],
        },
      ],
    },
    {
      heading: "5. Owner FAQs",
      blocks: [
        {
          type: "p",
          text: "Can they jump on the sofa? Occasional careful hops happen; daily leaps are how disc disease starts. Teach ramps early.",
        },
        {
          type: "p",
          text: "Sudden hind-end weakness is an emergency the same hour, not a wait-until-Monday limp.",
        },
      ],
    },
  ],
};
