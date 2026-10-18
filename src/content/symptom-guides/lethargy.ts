import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const lethargyGuide: EmergencyLongGuide = {
  title: "Dog Lethargy: Quiet Day vs Emergency",
  lede: "A dog who is quieter than usual but still drinking and walking can often be assessed the same day. Collapse, pale gums, or a dog who will not rise is an emergency. Compare today with their normal greeting and walk.",
  faqs: [
    {
      question: "How long can I watch a tired dog?",
      answer:
        "If they drink, walk outside, and gums stay pink, book within 12–24 hours. Do not stretch overnight if they worsen, stop drinking, or develop a tight belly.",
    },
    {
      question: "What if they were in a hot car?",
      answer:
        "Treat possible heatstroke as critical even if they seem a little better after cooling. Open the heatstroke emergency guide and go in.",
    },
  ],
  sections: [
    {
      heading: "1. Triage verdict",
      blocks: [
        {
          type: "snippet",
          text: "Code Yellow for unexplained quietness with pink gums. Code Red for collapse, pale or blue gums, seizures, a swelling belly, or a short-nosed dog open-mouth breathing after heat.",
        },
      ],
    },
    {
      heading: "2. Checks that change the plan",
      blocks: [
        {
          type: "table",
          headers: ["Check", "Worry if"],
          rows: [
            ["Gums", "Pale, blue, yellow, or brick red"],
            ["Breathing", "Belly effort, cough, open-mouth at rest"],
            ["Belly", "Tight, drum-like, or painful"],
            ["History", "Toxin access, heat, new medicine"],
          ],
        },
      ],
    },
    {
      heading: "3. Causes clinics consider",
      blocks: [
        {
          type: "p",
          text: "Pain, fever, infection, dehydration, anemia, heart disease, internal bleeding, toxin exposure, and heatstroke all make a dog quiet. The home job is triage, not naming the disease.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/heatstroke", label: "Heatstroke" },
            { href: "/emergency/bloat-gdv", label: "Bloat / GDV" },
            { href: "/health-symptoms/dogs/collapse-or-seizure", label: "Collapse or seizure" },
          ],
        },
      ],
    },
  ],
};
