import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const heatstrokeGuide: EmergencyLongGuide = {
  title: "Heatstroke in Dogs: Cool on the Way, Still Go In",
  lede: "Heatstroke means the dog can no longer control body temperature after a hot car, hard exercise in heat, or a short-nosed dog left without shade. Cool on the way to the clinic. Looking brighter after a hose rinse does not mean the crisis is over.",
  faqs: [
    {
      question: "Should I use ice water?",
      answer:
        "No. Lukewarm or cool water over the belly, neck, armpits, and paws plus a fan is safer. Ice baths can drive blood away from the skin and worsen injury.",
    },
    {
      question: "My dog stopped panting hard. Can we stay home?",
      answer:
        "No. Organ injury can continue after the temperature falls. Go in even if panting slows.",
    },
    {
      question: "Are brachycephalic dogs higher risk?",
      answer:
        "Yes. Flat-faced breeds overheat faster. Treat heavy panting with brick-red gums after a warm walk as an emergency, not a normal cool-down.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Heatstroke is critical—act within about 15 minutes. Move to shade or air conditioning, start cool-water cooling, call ahead, and leave for an emergency hospital while you keep cooling in the car.",
        },
      ],
    },
    {
      heading: "2. Signs that cannot wait",
      blocks: [
        {
          type: "table",
          headers: ["Sign", "Why it matters"],
          rows: [
            ["Heavy panting, thick saliva, wide-eyed stare", "Early hyperthermia"],
            ["Brick-red, purple, or pale gums", "Circulation stress"],
            ["Vomiting, diarrhea, wobbling, collapse", "Systemic crisis"],
            ["Seizures or bleeding gums", "Late, life-threatening stage"],
          ],
        },
      ],
    },
    {
      heading: "3. Cool correctly",
      blocks: [
        {
          type: "p",
          text: "Pour lukewarm or cool water over the belly, neck, armpits, and paws. Use a fan if you have one. Offer a small amount of water only if the dog is standing and can swallow. Do not wrap in a wet towel that traps heat. Do not force water into an unconscious mouth.",
        },
        {
          type: "p",
          text: "If you have a rectal thermometer, note the highest reading for the clinic. Keep cooling during transport. Tell the team when exercise or the car exposure started.",
        },
      ],
    },
    {
      heading: "4. What the hospital may do",
      blocks: [
        {
          type: "p",
          text: "The clinic checks temperature, blood pressure, and organ values, cools in a controlled way, and starts intravenous fluids. They watch for clotting problems, kidney injury, and brain swelling. Many dogs stay overnight even after the thermometer looks normal.",
        },
        {
          type: "callout",
          text: "Need an open hospital now? Use the Vet Finder, then keep cooling during the drive.",
          href: "/tools/vet-finder",
          label: "Find a 24/7 emergency hospital",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/dogs/collapse-or-seizure", label: "Collapse or seizure triage" },
            { href: "/breeds/dogs/french-bulldog", label: "French Bulldog heat risk" },
          ],
        },
      ],
    },
  ],
};
