import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const limpingGuide: EmergencyLongGuide = {
  title: "Dog Limping or Not Using a Leg",
  lede: "A mild limp that eases after rest can often wait 12–24 hours if the dog is otherwise well. A dangling limb, open wound, or a dog hit by a car needs an emergency hospital. Do not pull on a crooked leg.",
  faqs: [
    {
      question: "Should I give human pain tablets?",
      answer:
        "No. Ibuprofen and acetaminophen are toxins. Use only a pain medicine dispensed for this dog.",
    },
    {
      question: "My dachshund suddenly cannot use the back legs—is that a limp?",
      answer:
        "Sudden hind-end weakness in a long-backed dog can be a disc emergency. Go in the same hour.",
    },
  ],
  sections: [
    {
      heading: "1. Triage verdict",
      blocks: [
        {
          type: "snippet",
          text: "Code Yellow for a mild weight-bearing limp in a bright dog. Code Red for a dangling limb, uncontrolled bleeding, hit-by-car, pale gums, or limp plus breathing trouble or collapse.",
        },
      ],
    },
    {
      heading: "2. What to look at",
      blocks: [
        {
          type: "p",
          text: "Watch whether they put any weight on the foot. Look for wounds, swelling, or a limb at an odd angle. Check gums and breathing so you do not miss shock after trauma. Note stairs, jumps, or a fight in the last day.",
        },
      ],
    },
    {
      heading: "3. Common causes",
      blocks: [
        {
          type: "p",
          text: "Sprains, torn nails, ligament tears, arthritis flares, fractures, dislocations, bite wounds, and paw foreign bodies are common. Imaging and pain control belong in the clinic.",
        },
        {
          type: "links",
          items: [
            { href: "/breeds/dogs/dachshund", label: "Dachshund disc risk" },
            { href: "/medications/ibuprofen", label: "Why human NSAIDs are unsafe" },
            { href: "/tools/vet-finder", label: "Find care" },
          ],
        },
      ],
    },
  ],
};
