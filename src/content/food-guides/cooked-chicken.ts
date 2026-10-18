import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const cookedChickenGuide: EmergencyLongGuide = {
  title: "Plain Cooked Chicken for Dogs and Cats",
  lede: "Boneless, skinless, unseasoned cooked chicken can be a short bland topper for dogs and cats. Bones splinter. Onion, garlic, and fatty skin turn a simple meal into a toxin or pancreatitis problem. Chicken alone is not a complete long-term diet.",
  faqs: [
    {
      question: "Can I feed only chicken for a week?",
      answer:
        "Not as a complete diet. A chicken-only plan lacks calcium balance and, for cats, long-term taurine balance. Use it briefly unless a veterinarian designs a full diet.",
    },
    {
      question: "What about rotisserie chicken?",
      answer:
        "Skip it. Seasoning and skin add salt, fat, and often alliums. Stick to plain home-cooked boneless meat.",
    },
    {
      question: "Raw chicken?",
      answer:
        "This guide covers cooked meat. Raw poultry adds bacterial risk and is not the bland-meal plan described here.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Dogs and cats: Safe when the chicken is boneless, skinless, and unseasoned. Not a complete diet. Bones and allium seasoning are unsafe.",
        },
      ],
    },
    {
      heading: "2. How to prepare it",
      blocks: [
        {
          type: "p",
          text: "Boil or bake plain chicken. Remove every bone and most fat. Cool, shred, and mix a small amount into the usual food or use it for a short bland period a veterinarian already approved.",
        },
        {
          type: "p",
          text: "Dogs may get a larger topper than cats. Cats still need a complete diet after a short soft-food period. Watch for vomiting after greasy leftovers.",
        },
      ],
    },
    {
      heading: "3. Risks that are not “protein”",
      blocks: [
        {
          type: "table",
          headers: ["Hazard", "Why it matters"],
          rows: [
            ["Cooked bones", "Splinter and can injure the gut"],
            ["Skin and drippings", "Fat load that can trigger pancreatitis"],
            ["Onion or garlic seasoning", "Allium toxin—see the onion guide"],
          ],
        },
      ],
    },
    {
      heading: "4. When to call",
      blocks: [
        {
          type: "p",
          text: "Go in for bone choking, repeated vomiting, a painful abdomen, or a male cat straining in the box after any meal change.",
        },
        {
          type: "links",
          items: [
            { href: "/nutrition/onions-garlic", label: "Onion and garlic" },
            { href: "/tools/diet-planner", label: "7-day diet planner" },
            { href: "/nutrition", label: "Food safety hub" },
          ],
        },
      ],
    },
  ],
};
