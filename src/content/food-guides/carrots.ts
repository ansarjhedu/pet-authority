import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const carrotsGuide: EmergencyLongGuide = {
  title: "Carrots for Dogs and Small Pets",
  lede: "Plain carrot is a low-calorie crunch for many dogs and an occasional sugary treat for rabbits and guinea pigs. It never replaces unlimited hay for small herbivores. Cut pieces to reduce choking in gulpers.",
  faqs: [
    {
      question: "Can dogs eat raw carrot every day?",
      answer:
        "A few sticks or cooked coins can fit a treat budget under about 10 percent of calories. Large uncut chunks can choke dogs who gulp.",
    },
    {
      question: "How often can rabbits have carrot?",
      answer:
        "A thin slice a few times a week. Unlimited timothy hay remains the main food. Too many sugary treats soften droppings.",
    },
    {
      question: "Cooked or raw?",
      answer:
        "Both plain forms are fine for dogs. For small pets, raw thin slices are typical; hay still rules the diet.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Dogs: Safe as a few sticks or cooked coins. Small pets: Safe as an occasional thin slice—hay first.",
        },
      ],
    },
    {
      heading: "2. Species notes",
      blocks: [
        {
          type: "p",
          text: "Dogs use carrot as a crunchy low-calorie treat. Cut rounds for gulpers. Skip butter, salt, and onion dips.",
        },
        {
          type: "p",
          text: "Rabbits and guinea pigs need fiber from hay far more than sugar from root vegetables. Carrot is a garnish, not a bowl filler. Soft droppings or fewer pellets after treats mean cut back and call an exotic veterinarian if droppings stop.",
        },
      ],
    },
    {
      heading: "3. When to seek care",
      blocks: [
        {
          type: "p",
          text: "Seek care for choking, ongoing vomiting, or a small pet that hunches and stops producing droppings.",
        },
        {
          type: "links",
          items: [
            { href: "/nutrition/timothy-hay", label: "Timothy hay for small pets" },
            { href: "/emergency/rabbit-gi-stasis", label: "Rabbit GI stasis emergency" },
            { href: "/nutrition", label: "Food safety hub" },
          ],
        },
      ],
    },
  ],
};
