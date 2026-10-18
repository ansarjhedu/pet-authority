import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const liliesGuide: EmergencyLongGuide = {
  title: "Lilies and Pets: Cat Kidney Emergency vs Dog Irritation",
  lede: "True lilies in the Lilium and Hemerocallis groups can destroy a cat's kidneys from a chew, pollen, or vase water. Dogs more often get mouth and stomach irritation from the same plants, but any shared house with a cat makes the plant a household emergency. Peace lilies and calla lilies are different plants and still should not be chewed.",
  faqs: [
    {
      question: "Is pollen alone enough to poison a cat?",
      answer:
        "Yes. Pollen on the coat that is licked off, a leaf chew, flower petals, and vase water all count. Do not wait for the cat to stop urinating before you call.",
    },
    {
      question: "Are peace lilies the same risk?",
      answer:
        "Peace lilies and calla lilies are not true Lilium or daylily kidney toxins, but they irritate the mouth. A cat in a house with true lilies still needs the kidney protocol if any true lily was present.",
    },
    {
      question: "Should I bathe the cat before the clinic?",
      answer:
        "Wipe visible pollen with a damp cloth only if it does not delay the trip. Do not soak a stressed cat. Go to the clinic the same hour.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Cats: any true-lily exposure is Code Red. Dogs: do not let them chew lily plants; call if a large amount was eaten or vomiting continues. Remove the plant from any home that includes a cat.",
        },
        {
          type: "table",
          headers: ["Species", "Status", "Why"],
          rows: [
            ["Cats", "Deadly toxin", "Unknown water-soluble nephrotoxin; pollen and vase water count"],
            ["Dogs", "Caution", "Mostly GI and mouth irritation; shared homes still need cat-first thinking"],
          ],
        },
      ],
    },
    {
      heading: "2. How lily injury works",
      blocks: [
        {
          type: "p",
          text: "In cats, a soluble toxin damages kidney tissue after even small exposures. Vomiting and hiding can start within hours; urine output may rise then fall as the kidneys fail. Dogs usually show drooling and vomiting rather than the same kidney pattern, but they can still feel miserable after chewing the plant.",
        },
        {
          type: "p",
          text: "Easter, tiger, Asiatic, and daylilies are the classic names to fear for cats. If you cannot identify the bouquet, treat it as a true lily until a clinician says otherwise.",
        },
      ],
    },
    {
      heading: "3. Timeline",
      blocks: [
        {
          type: "table",
          headers: ["Time", "Cat pattern"],
          rows: [
            ["Hours 0–6", "Vomiting, drooling, hiding, refusing food"],
            ["Hours 12–24", "Increased thirst or urination may appear"],
            ["Day 2–3", "Urine can drop as kidney failure progresses"],
          ],
        },
        {
          type: "p",
          text: "A cat who still looks bright after a nibble is not cleared. Kidney injury can advance while the coat still looks clean.",
        },
      ],
    },
    {
      heading: "4. What to do now",
      blocks: [
        {
          type: "p",
          text: "For cats: remove the plant, wipe pollen if you can without delay, and leave for an emergency hospital the same hour. Bring a photo of the plant. Do not induce vomiting in a cat at home.",
        },
        {
          type: "p",
          text: "For dogs: remove the plant and call if vomiting continues or a large amount was eaten. Do not use peroxide unless a veterinarian orders it for this dog.",
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
          text: "The lily emergency board walks through the first-hour hospital plan for cats.",
          href: "/emergency/lily-toxicity",
          label: "Open lily toxicity emergency guide",
        },
      ],
    },
    {
      heading: "5. Clinic expectations",
      blocks: [
        {
          type: "p",
          text: "Cat teams often start intravenous fluids and kidney bloodwork even when the cat still looks fair. Decontamination is a clinic decision. Dogs are examined for mouth injury and gut upset; the bigger household risk is still a cat who shared the room.",
        },
      ],
    },
    {
      heading: "6. Related guides",
      blocks: [
        {
          type: "links",
          items: [
            { href: "/emergency/lily-toxicity", label: "Lily toxicity emergency" },
            { href: "/health-symptoms/cats/hiding-and-not-eating", label: "Cat hiding and not eating" },
            { href: "/nutrition", label: "Food safety hub" },
          ],
        },
      ],
    },
  ],
};
