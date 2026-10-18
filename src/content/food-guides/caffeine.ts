import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const caffeineGuide: EmergencyLongGuide = {
  title: "Caffeine Poisoning in Dogs and Cats",
  lede: "Coffee, tea, energy drinks, coffee grounds, and caffeine pills are methylxanthine sources for dogs and cats. Grounds and pills pack more caffeine into a small volume. This page is a same-hour call guide, not a leftover latte experiment.",
  faqs: [
    {
      question: "Are coffee grounds worse than a sip of coffee?",
      answer:
        "Often yes. Grounds and espresso leftovers concentrate caffeine. Pills and energy drinks are also high risk. Call with the product and the weight in pounds (kilograms).",
    },
    {
      question: "Can cats get caffeine poisoning?",
      answer:
        "Yes. A spilled energy drink or grounds can be enough. Cats hide early signs, so do not wait for dramatic tremors.",
    },
    {
      question: "Is chocolate the same problem?",
      answer:
        "Related. Chocolate adds theobromine plus caffeine. Open the chocolate guide if cocoa or baking chocolate was involved.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Dogs and cats: Deadly toxin—none. Call a poison hotline the same hour after grounds, espresso, energy drinks, or caffeine pills.",
        },
      ],
    },
    {
      heading: "2. Mechanism",
      blocks: [
        {
          type: "p",
          text: "Caffeine is a methylxanthine like theobromine. It speeds the heart and agitates the nervous system. Pets clear it slowly compared with people, so a human serving can overwhelm a small body.",
        },
      ],
    },
    {
      heading: "3. Signs and timing",
      blocks: [
        {
          type: "table",
          headers: ["Species", "Early signs"],
          rows: [
            ["Dogs", "Restlessness, vomiting, fast heart rate, tremors or seizures"],
            ["Cats", "Hyperactivity, vomiting, fast heart rate, tremors"],
          ],
        },
        {
          type: "p",
          text: "Signs often start within a few hours. Collapse or seizures mean travel while you call.",
        },
      ],
    },
    {
      heading: "4. What to do",
      blocks: [
        {
          type: "p",
          text: "Take the product away. Bring the container. Do not induce vomiting at home unless a veterinarian orders it. Do not offer milk as an antidote.",
        },
        {
          type: "phones",
          items: [
            { label: "US ASPCA Animal Poison Control 888-426-4435", href: "tel:+18884264435" },
            { label: "US Pet Poison Helpline 855-764-7661", href: "tel:+18557647661" },
            { label: "UK Animal PoisonLine 01202 509000", href: "tel:+441202509000" },
            { label: "AU Australian Animal Poisons Centre 1300 869 738", href: "tel:+611300869738" },
          ],
        },
      ],
    },
    {
      heading: "5. Related guides",
      blocks: [
        {
          type: "links",
          items: [
            { href: "/nutrition/chocolate", label: "Chocolate and theobromine" },
            { href: "/emergency/chocolate-toxicity", label: "Chocolate emergency protocol" },
            { href: "/nutrition", label: "Food safety hub" },
          ],
        },
      ],
    },
  ],
};
