import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const collapseOrSeizureGuide: EmergencyLongGuide = {
  title: "Dog Collapse or Seizure",
  lede: "A dog who falls over, paddles, or cannot be woken needs an emergency clinic now. Keep hands away from the mouth during a seizure, time how long it lasts, and look for heat, toxin packaging, or a bloated belly once they are safe to approach.",
  faqs: [
    {
      question: "Should I put something in their mouth?",
      answer:
        "No. You can be bitten, and objects do not help breathing. Clear the area and time the episode.",
    },
    {
      question: "How long is too long?",
      answer:
        "Any first seizure or collapse is an emergency visit. Cluster seizures or an episode lasting more than a few minutes need immediate transport.",
    },
  ],
  sections: [
    {
      heading: "1. Triage verdict",
      blocks: [
        {
          type: "snippet",
          text: "Code Red within 60 minutes for collapse, paddling, loss of consciousness, or a dog who will not wake normally afterward.",
        },
      ],
    },
    {
      heading: "2. First minutes",
      blocks: [
        {
          type: "p",
          text: "Move furniture away and dim noise. Do not restrain the body. Time the episode and film it if you can do that safely. When they are awake, check gum color and breathing. Look for toxin packaging, heat exposure, or a drum-like belly that could be GDV.",
        },
      ],
    },
    {
      heading: "3. Related emergencies",
      blocks: [
        {
          type: "links",
          items: [
            { href: "/emergency/bloat-gdv", label: "Bloat / GDV" },
            { href: "/emergency/heatstroke", label: "Heatstroke" },
            { href: "/nutrition/xylitol", label: "Xylitol" },
            { href: "/medications/ibuprofen", label: "Ibuprofen" },
          ],
        },
      ],
    },
  ],
};
