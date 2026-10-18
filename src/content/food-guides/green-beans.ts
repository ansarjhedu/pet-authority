import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const greenBeansGuide: EmergencyLongGuide = {
  title: "Green Beans for Dogs: Plain Cuts Only",
  lede: "Plain fresh, frozen, or unsalted canned green beans can be a low-calorie filler for dogs. Salted cans, casseroles, and onion seasoning are the traps. Beans are a treat or topper, not a complete diet.",
  faqs: [
    {
      question: "How many green beans can my dog have?",
      answer:
        "A small handful of plain cut beans for most dogs, inside the treat share of daily calories. Large sudden piles can cause gas.",
    },
    {
      question: "Are canned beans OK?",
      answer:
        "Only if they are plain and very low salt. Rinse if needed. Skip seasoned or cream soups.",
    },
    {
      question: "What if the beans were cooked with onion?",
      answer:
        "Treat that as an allium exposure. Open the onion and garlic guide and call if a meaningful amount was eaten.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Dogs: Safe when beans are plain. Skip salted canned beans, casseroles, and sugar-free sauces that may hide xylitol.",
        },
      ],
    },
    {
      heading: "2. How to serve",
      blocks: [
        {
          type: "p",
          text: "Steam or offer raw cut beans without butter. Frozen plain beans work after thawing. Mix a few into the bowl for volume without many calories.",
        },
      ],
    },
    {
      heading: "3. Problems that are not “vegetables”",
      blocks: [
        {
          type: "p",
          text: "Gas or loose stool after a large portion is common. Onion, garlic, or xylitol sauces are separate emergencies. Offer water and call if seasoning was involved.",
        },
        {
          type: "links",
          items: [
            { href: "/nutrition/onions-garlic", label: "Onion and garlic" },
            { href: "/nutrition/xylitol", label: "Xylitol" },
            { href: "/tools/pet-food-calculator", label: "Calorie calculator" },
          ],
        },
      ],
    },
  ],
};
