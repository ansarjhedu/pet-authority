import type { BreedGuide } from "@/lib/breeds/guide";

export const australianShepherdGuide: BreedGuide = {
  title: "Australian Shepherd Care Guide: Work Drive and MDR1",
  lede: "Australian Shepherds are driven, loyal herding dogs that unravel without a job. Some lines carry an MDR1 drug-sensitivity gene that matters before certain parasite and veterinary drugs. This Pet Safety Hub profile uses pounds (kilograms) and planning costs in dollars and pounds sterling.",
  sections: [
    {
      heading: "1. Quick summary",
      blocks: [
        {
          type: "snippet",
          text: "Adults often weigh 40–65 lb (18–29.5 kg) and live about 12–15 years. Plan near 90 minutes of work and exercise daily. Apartments are a poor default without serious outlet.",
        },
      ],
    },
    {
      heading: "2. Size and lifestyle",
      blocks: [
        {
          type: "table",
          headers: ["Trait", "Typical range"],
          rows: [
            ["Weight", "40–65 lb (18–29.5 kg)"],
            ["Lifespan", "12–15 years"],
            ["Energy", "5 of 5"],
            ["Grooming", "3 of 5"],
            ["Calorie baseline", "About 1,200 kcal/day before body-condition adjust"],
            ["Annual cost planning", "About $1,800 / £1,400"],
          ],
        },
        {
          type: "p",
          text: "They often do well with older children who can join training games. Watchfulness and herding instincts need outlet, not punishment. Temperament notes: driven, loyal, watchful.",
        },
      ],
    },
    {
      heading: "3. Feeding an athlete",
      blocks: [
        {
          type: "p",
          text: "Active adults need more calories than couch days. Adjust the bowl to body condition, not to how much they ask after training. Keep a waist you can see from above.",
        },
        {
          type: "callout",
          text: "Recalculate portions when training volume changes.",
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
            ["MDR1 drug sensitivity", "Profound sedation after a routine drug", "Urgent"],
            ["Hip dysplasia", "Reluctance to jump into the car", "Common"],
            ["Epilepsy", "First seizure, paddling, or vacant stare", "Urgent"],
            ["Eye disease", "Bumping objects or cloudy pupil", "Common"],
          ],
        },
        {
          type: "p",
          text: "Ask your veterinarian about MDR1 testing before certain drugs. A first seizure is an emergency visit—open the collapse guide.",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/dogs/collapse-or-seizure", label: "Collapse or seizure" },
            { href: "/health-symptoms/dogs/limping", label: "Limping" },
          ],
        },
      ],
    },
  ],
};
