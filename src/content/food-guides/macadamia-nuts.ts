import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const macadamiaNutsGuide: EmergencyLongGuide = {
  title: "Macadamia Nuts and Dogs: Weakness Without a Home Antidote",
  lede: "Macadamia nuts can make dogs weak in the hind legs, tremulous, and feverish within hours. Cookies and trail mix count. Most dogs recover with clinic support, but the weakness can look like a spinal emergency until a veterinarian sorts it out.",
  faqs: [
    {
      question: "How many nuts are too many?",
      answer:
        "There is no safe kitchen count. Note how many are missing and the dog's weight in pounds (kilograms), then call. Do not wait for the dog to walk normally again.",
    },
    {
      question: "Can I give a human pain tablet for the weakness?",
      answer:
        "No. Ibuprofen and acetaminophen add a second poisoning. Supportive care belongs in a clinic.",
    },
    {
      question: "Are other nuts the same?",
      answer:
        "Macadamia has a specific dog pattern. Other nuts can still cause fat-related pancreatitis or obstruction. When the mix is unclear, call with the package.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Dogs: Deadly toxin classification on this site—none. Call the same day after any macadamia exposure, especially if the dog cannot stand well.",
        },
      ],
    },
    {
      heading: "2. What happens after macadamias",
      blocks: [
        {
          type: "p",
          text: "An unidentified toxin in macadamia nuts causes temporary weakness, especially in the back legs, plus vomiting, tremors, and a high temperature in some dogs. Signs often start within 12 hours. The toxin is not something you reverse with a home antidote.",
        },
      ],
    },
    {
      heading: "3. Timeline",
      blocks: [
        {
          type: "table",
          headers: ["Window", "Common findings"],
          rows: [
            ["0–12 hours", "Vomiting, wobbly hind legs, reluctance to walk"],
            ["Same day", "Tremors or fever in more severe cases"],
            ["Recovery", "Many dogs improve with fluids and rest under clinic care"],
          ],
        },
      ],
    },
    {
      heading: "4. What to do",
      blocks: [
        {
          type: "p",
          text: "Remove remaining nuts. Count what is missing. Call a poison hotline or clinic. Do not induce vomiting unless directed. Do not give human pain medicine.",
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
          text: "If the dog cannot stand or is seizuring, leave for an emergency hospital now.",
          href: "/tools/vet-finder",
          label: "Open the 24/7 Vet Finder",
        },
      ],
    },
    {
      heading: "5. Related guides",
      blocks: [
        {
          type: "links",
          items: [
            { href: "/nutrition/xylitol", label: "Xylitol in baked goods" },
            { href: "/medications/ibuprofen", label: "Why human pain tablets are unsafe" },
            { href: "/nutrition", label: "Food safety hub" },
          ],
        },
      ],
    },
  ],
};
