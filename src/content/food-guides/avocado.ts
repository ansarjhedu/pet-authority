import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const avocadoGuide: EmergencyLongGuide = {
  title: "Avocado for Birds and Dogs: Persin, Pits, and Fat",
  lede: "Avocado leaves, bark, pit, and fruit contain persin. Birds are the species that can crash after a small exposure. Dogs more often face a choking pit or a greasy gut upset from flesh or guacamole. Neither species should get avocado as a treat plan.",
  faqs: [
    {
      question: "Can my parrot have a tiny bite of avocado?",
      answer:
        "No. Guacamole and avocado flesh are not bird treats. Contact an avian veterinarian if any amount was eaten.",
    },
    {
      question: "What if my dog swallowed the pit?",
      answer:
        "A pit can obstruct the gut or lodge in the throat. Do not dig in the mouth if the dog is choking—go to an emergency hospital. Call the same day even if the dog seems calm after swallowing.",
    },
    {
      question: "Is guacamole safer than plain flesh?",
      answer:
        "No. Guacamole often adds onion, garlic, and salt—extra toxins for dogs—and fat that can trigger pancreatitis.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Birds: Deadly toxin—none. Dogs: Caution—not recommended; pits and seasoned guacamole are the main household disasters.",
        },
        {
          type: "table",
          headers: ["Species", "Status", "Main hazard"],
          rows: [
            ["Birds", "Deadly toxin", "Persin; labored breathing and sudden weakness"],
            ["Dogs", "Caution", "Pit obstruction, fatty flesh, onion in guacamole"],
          ],
        },
      ],
    },
    {
      heading: "2. Mechanism",
      blocks: [
        {
          type: "p",
          text: "Persin concentrates in leaves, bark, and the pit, and it is also present in the fruit. Birds can develop respiratory distress after small amounts. Dogs are more tolerant of persin than birds, but tolerance is not a serving suggestion—fat and foreign-body risk still fill emergency rooms.",
        },
      ],
    },
    {
      heading: "3. Signs to watch",
      blocks: [
        {
          type: "p",
          text: "Birds may fluff, breathe hard, weaken, or collapse. Dogs may vomit, have diarrhea, or show signs of obstruction after a pit—retching, belly pain, or refusing food.",
        },
      ],
    },
    {
      heading: "4. What to do",
      blocks: [
        {
          type: "p",
          text: "Birds: remove the food, keep warm and quiet, and contact an avian clinic the same hour. Do not offer oils or home emetics.",
        },
        {
          type: "p",
          text: "Dogs: if choking, go now. Otherwise save the remaining fruit, note onion seasoning, and call. Do not force peroxide.",
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
            { href: "/nutrition/onions-garlic", label: "Onion and garlic risk" },
            { href: "/emergency/avian-respiratory-distress", label: "Bird breathing emergency" },
            { href: "/nutrition", label: "Food safety hub" },
          ],
        },
      ],
    },
  ],
};
