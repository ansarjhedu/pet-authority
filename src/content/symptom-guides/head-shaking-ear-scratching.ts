import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const headShakingEarScratchingGuide: EmergencyLongGuide = {
  title: "Dog Head Shaking and Ear Scratching",
  lede: "Occasional head shaking in a bright, eating dog is often ear irritation. A lasting head tilt, bleeding, or a dog who cannot settle needs a same-day exam. Do not push cotton swabs or oils deep into the canal.",
  faqs: [
    {
      question: "Can I clean the ear with peroxide?",
      answer:
        "No home peroxide or oil flush unless your veterinarian already taught a product for this dog. Pushing liquid into a painful ear can worsen a ruptured drum.",
    },
    {
      question: "When is head shaking an emergency?",
      answer:
        "Go in for a fixed head tilt, circling, blood, a ballooned ear flap, pale gums, or shaking after trauma or a fight.",
    },
  ],
  sections: [
    {
      heading: "1. Triage verdict",
      blocks: [
        {
          type: "snippet",
          text: "Code Green for mild shaking in an otherwise normal dog. Move to same-day care for smell, swelling, or nonstop scratching. Code Red for tilt, circling, blood, or collapse.",
        },
      ],
    },
    {
      heading: "2. Home checks",
      blocks: [
        {
          type: "p",
          text: "Confirm they are eating, drinking, and walking normally. Look at the ear flap for redness, swelling, or odor—do not probe the canal. Pink moist gums are reassuring; pale, blue, or brick-red gums are an emergency. A calm dog often breathes near 15–30 breaths per minute at rest.",
        },
      ],
    },
    {
      heading: "3. Common causes",
      blocks: [
        {
          type: "p",
          text: "Yeast or bacterial otitis, mites, allergy flares, water after swimming, or a grass awn can all look similar at home. Middle-ear or neurologic disease is less common but explains a true tilt.",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/dogs/lethargy", label: "Lethargy triage" },
            { href: "/breeds/dogs/beagle", label: "Beagle ear notes" },
          ],
        },
      ],
    },
  ],
};
