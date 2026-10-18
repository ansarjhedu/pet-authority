import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const chocolateGuide: EmergencyLongGuide = {
  title: "Chocolate for Pets: Theobromine Risk by Species",
  lede: "Chocolate is a methylxanthine poison for dogs, cats, birds, and small pets because theobromine and caffeine clear slowly. Darker chocolate and cocoa powder pack more toxin into fewer ounces (grams). This guide is for owners in the United States, the United Kingdom, and Australia who need a same-hour decision, not a kitchen experiment.",
  faqs: [
    {
      question: "Is milk chocolate safer than dark chocolate?",
      answer:
        "Milk chocolate has less theobromine per ounce (gram) than dark or baking chocolate, but it is not safe. A smaller pet can still reach a dangerous dose from milk chocolate. Baking chocolate and cocoa powder are the highest-risk forms.",
    },
    {
      question: "Can cats or birds handle a lick of chocolate?",
      answer:
        "No. Cats rarely seek chocolate, but any amount is still an exposure. Birds have tiny body mass, so a lick of cocoa can be a serious dose. Small pets should get none.",
    },
    {
      question: "Should I make my pet vomit after chocolate?",
      answer:
        "Not from this page. Do not use hydrogen peroxide, salt, milk, or oil. Call a poison hotline or emergency hospital; they decide whether decontamination is still useful.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Do not feed chocolate to dogs, cats, birds, or small pets. Status is Deadly toxin for every species on this page. Call a poison hotline the same hour with the product type, the amount missing in ounces (grams), and the pet's weight in pounds (kilograms).",
        },
        {
          type: "table",
          headers: ["Species", "Status", "Practical note"],
          rows: [
            ["Dogs", "Deadly toxin", "Baking chocolate and cocoa powder are worst; any amount needs a call"],
            ["Cats", "Deadly toxin", "Rare seekers, but a small amount still counts as poison"],
            ["Birds", "Deadly toxin", "Body size means a lick can be a serious dose"],
            ["Small pets", "Deadly toxin", "None for rabbits, guinea pigs, hamsters, or ferrets"],
          ],
        },
      ],
    },
    {
      heading: "2. Why chocolate is toxic",
      blocks: [
        {
          type: "p",
          text: "Theobromine and caffeine stimulate the heart and nervous system and clear slowly in pets. The darker the chocolate, the more theobromine sits in each ounce (gram). Cocoa powder and baking chocolate concentrate the risk; white chocolate carries little theobromine but can still add fat and sugar problems.",
        },
        {
          type: "p",
          text: "Sugar-free chocolate can add a second emergency if the sweetener is xylitol. Treat an unclear sugar-free label as a separate poison question, not as a softer chocolate problem.",
        },
      ],
    },
    {
      heading: "3. Timeline of signs",
      blocks: [
        {
          type: "table",
          headers: ["Window", "What owners often see"],
          rows: [
            ["First few hours", "Vomiting, restlessness, panting, a fast heart rate"],
            ["Later the same day", "Tremors, diarrhea, increased thirst or urination"],
            ["Severe cases", "Collapse or seizures—leave for the hospital while you call"],
          ],
        },
        {
          type: "p",
          text: "A quiet first hour is not an all-clear. Theobromine can keep working after the pet stops looking interested in the wrapper.",
        },
      ],
    },
    {
      heading: "4. What to do now",
      blocks: [
        {
          type: "p",
          text: "Remove leftovers and wrappers. Photograph the label. Note the missing amount in ounces (grams), the time eaten, and the weight in pounds (kilograms). Call a poison hotline or emergency clinic, then travel in a carrier with no home medicines.",
        },
        {
          type: "p",
          text: "Do not induce vomiting unless a veterinarian on the phone tells you to for this animal. Do not give milk, oil, salt, charcoal slurry, or hydrogen peroxide from a chart.",
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
        {
          type: "callout",
          text: "Open hospitals can start monitoring and decontamination. Use the finder if you need a 24/7 clinic.",
          href: "/tools/vet-finder",
          label: "Open the 24/7 Vet Finder",
        },
      ],
    },
    {
      heading: "5. What the clinic may do",
      blocks: [
        {
          type: "p",
          text: "The team checks gum color, heart rate, and neurologic state first. If the pet is stable and the chocolate was recent, they may empty the stomach with a veterinary method and consider activated charcoal. Fluids and heart monitoring are common; severe cases stay until the rhythm is stable.",
        },
        {
          type: "p",
          text: "There is no antidote that cancels theobromine at home. Clinic charcoal is measured there so a struggling pet does not inhale the powder.",
        },
      ],
    },
    {
      heading: "6. Related guides",
      blocks: [
        {
          type: "links",
          items: [
            { href: "/emergency/chocolate-toxicity", label: "Chocolate toxicity emergency board" },
            { href: "/nutrition/caffeine", label: "Caffeine and coffee risk" },
            { href: "/nutrition/xylitol", label: "Xylitol in sugar-free products" },
            { href: "/nutrition", label: "Food safety hub" },
          ],
        },
      ],
    },
  ],
};
