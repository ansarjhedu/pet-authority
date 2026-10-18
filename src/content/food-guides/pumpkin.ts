import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const pumpkinGuide: EmergencyLongGuide = {
  title: "Plain Pumpkin for Dogs and Cats: Fiber Aid, Not Pie Filling",
  lede: "Plain canned or cooked pumpkin can help with fiber for dogs and cats when the can is 100 percent pumpkin. Pie filling adds sugar and spices and is not this guide. Pumpkin is a topper, not a complete meal.",
  faqs: [
    {
      question: "How much pumpkin can I give?",
      answer:
        "Dogs: about 1 teaspoon for a toy dog up to about 1 tablespoon for a large dog, once or twice a day for fiber. Cats: about 1 teaspoon mixed into food. Start smaller and watch stool.",
    },
    {
      question: "Is pumpkin pie filling OK?",
      answer:
        "No. Pie filling often has sugar, nutmeg, and other spices. Confirm the label says plain pumpkin only.",
    },
    {
      question: "Can pumpkin replace a vet visit for diarrhea?",
      answer:
        "No. Ongoing diarrhea, blood, a puppy or kitten, or a pet who will not eat needs a clinic. Pumpkin is a short fiber aid, not a diagnosis.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Dogs and cats: Safe when the pumpkin is plain. Keep portions small. Skip pie filling, xylitol sweeteners, and onion seasoning.",
        },
        {
          type: "table",
          headers: ["Species", "Occasional plain pumpkin"],
          rows: [
            ["Dogs", "About 1 tsp (toy) to 1 Tbsp (large), 1–2 times daily for fiber"],
            ["Cats", "About 1 tsp mixed into food; not a meal replacement"],
          ],
        },
      ],
    },
    {
      heading: "2. Why plain pumpkin helps",
      blocks: [
        {
          type: "p",
          text: "Fiber can firm loose stool or ease mild constipation for some pets when water intake is good. Too much fiber loosens stool instead. Pumpkin does not treat parasites, toxin diarrhea, or a blocked cat.",
        },
      ],
    },
    {
      heading: "3. Preparation",
      blocks: [
        {
          type: "p",
          text: "Use canned plain pumpkin or cooked plain flesh. No butter, sugar, nutmeg, or cream. Offer water. Stop if the pet refuses food or stool worsens.",
        },
      ],
    },
    {
      heading: "4. When to call",
      blocks: [
        {
          type: "p",
          text: "Call the same day if you used pie filling, if straining continues, or if a cat stops eating. Male cats who strain with little urine need the emergency board, not more fiber.",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/cats/straining-in-litter-box", label: "Cat litter-box straining" },
            { href: "/tools/pet-food-calculator", label: "Pet food calorie calculator" },
            { href: "/nutrition", label: "Food safety hub" },
          ],
        },
      ],
    },
  ],
};
