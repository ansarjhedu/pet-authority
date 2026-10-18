import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const timothyHayGuide: EmergencyLongGuide = {
  title: "Timothy Hay for Rabbits and Guinea Pigs",
  lede: "Unlimited fresh timothy hay is the backbone of an adult rabbit or guinea pig diet. Alfalfa is richer and suits growing or nursing animals, not the default adult bowl. Dusty or moldy hay is the hazard—not the grass itself.",
  faqs: [
    {
      question: "Can adults live on alfalfa hay?",
      answer:
        "Not as the default. Alfalfa is higher in calories and calcium. Most adults do better on timothy or other grass hays unless a veterinarian designs otherwise.",
    },
    {
      question: "What if my rabbit stops eating hay?",
      answer:
        "A rabbit or guinea pig that stops eating hay needs a same-day exotic veterinarian. Gut stasis is an emergency.",
    },
    {
      question: "Pellets instead of hay?",
      answer:
        "Pellets do not replace hay. Hay wears teeth and keeps the gut moving. Carrots and treats never replace the hay pile.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Small pets: Safe and essential. Offer unlimited fresh timothy hay to adult rabbits and guinea pigs. Throw out wet or moldy flakes.",
        },
      ],
    },
    {
      heading: "2. Why hay is non-negotiable",
      blocks: [
        {
          type: "p",
          text: "Long-strand fiber keeps the gut moving and wears open-rooted teeth. Without hay, droppings shrink and gut stasis can follow. Pellets and produce are extras around that foundation.",
        },
      ],
    },
    {
      heading: "3. Quality checks",
      blocks: [
        {
          type: "table",
          headers: ["Check", "Action"],
          rows: [
            ["Smell and color", "Fresh, dry, green-gold; discard mold or damp bales"],
            ["Dust", "Sneezing may mean dustier hay—switch brands and ventilate"],
            ["Appetite", "No hay intake plus hunching needs same-day care"],
          ],
        },
      ],
    },
    {
      heading: "4. Related emergencies",
      blocks: [
        {
          type: "links",
          items: [
            { href: "/emergency/rabbit-gi-stasis", label: "Rabbit GI stasis" },
            { href: "/health-symptoms/small-pets/fewer-droppings", label: "Fewer droppings" },
            { href: "/nutrition/carrots", label: "Carrots as occasional treats only" },
          ],
        },
      ],
    },
  ],
};
