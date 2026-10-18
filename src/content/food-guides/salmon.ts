import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const salmonGuide: EmergencyLongGuide = {
  title: "Cooked Salmon for Dogs and Cats",
  lede: "Fully cooked, boneless, unseasoned salmon can be an occasional topper for dogs and cats. Raw Pacific salmon can carry a fluke risk in some regions. Bones, skin fat, and onion marinades are the household hazards.",
  faqs: [
    {
      question: "Is raw salmon OK?",
      answer:
        "Not on this guide. Cook thoroughly. In some regions raw Pacific salmon is linked to a serious fluke infection in dogs. Cats also should not live on raw fish.",
    },
    {
      question: "How much cooked salmon?",
      answer:
        "Dogs: a small boneless portion without heavy skin. Cats: a teaspoon or two as a topper, not a daily sole diet.",
    },
    {
      question: "Canned salmon?",
      answer:
        "Only if it is plain, boneless, and not packed with onion or heavy salt. Drain well.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Dogs and cats: Safe when salmon is fully cooked, boneless, and unseasoned. Do not feed raw salmon. Bones and onion sauce are unsafe.",
        },
      ],
    },
    {
      heading: "2. Why cooking matters",
      blocks: [
        {
          type: "p",
          text: "Heat kills many parasites of concern and makes bones easier to spot and remove. Fatty skin can upset the pancreas. Smoked or seasoned products often hide onion and salt.",
        },
      ],
    },
    {
      heading: "3. Species portions",
      blocks: [
        {
          type: "table",
          headers: ["Species", "Use"],
          rows: [
            ["Dogs", "Small boneless cooked portion; remove very fatty skin"],
            ["Cats", "Teaspoon or two as a topper; not a complete diet"],
          ],
        },
      ],
    },
    {
      heading: "4. When to call",
      blocks: [
        {
          type: "p",
          text: "Call if bones were eaten, the fish was raw, or the pet becomes weak or feverish days later after raw salmon in an endemic area.",
        },
        {
          type: "links",
          items: [
            { href: "/nutrition/onions-garlic", label: "Onion seasoning risk" },
            { href: "/nutrition/cooked-chicken", label: "Plain cooked chicken" },
            { href: "/nutrition", label: "Food safety hub" },
          ],
        },
      ],
    },
  ],
};
