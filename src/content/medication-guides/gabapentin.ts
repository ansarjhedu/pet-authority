import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const gabapentinGuide: EmergencyLongGuide = {
  title: "Gabapentin for Pets: Sedation, Seizures, and Xylitol Liquids",
  lede: "Gabapentin is a prescription drug used for nerve pain, as a seizure add-on, and sometimes for pre-visit anxiety. Human capsules are sometimes used at a strength the veterinarian calculated. Some human liquid gabapentin contains xylitol and must never be substituted from the pharmacy shelf without checking the label.",
  faqs: [
    {
      question: "My dog is very sleepy after a dose. Is that normal?",
      answer:
        "Mild sleepiness can occur on a prescribed dose. Marked wobbliness, low body temperature, or inability to stand needs a call. Do not add another sedative.",
    },
    {
      question: "What if I miss seizure doses?",
      answer:
        "Stopping a seizure prescription suddenly can trigger seizures. Call the prescribing clinic for restart instructions rather than doubling up on your own.",
    },
    {
      question: "Can I use human liquid gabapentin?",
      answer:
        "Only if the veterinarian confirmed the exact product. Many human liquids contain xylitol, which is a separate dog emergency.",
    },
  ],
  sections: [
    {
      heading: "1. Clinical verdict",
      blocks: [
        {
          type: "snippet",
          text: "Gabapentin is prescription-only. This page does not list a milligram dose. Extra doses cause heavy sedation; xylitol liquids are a poison call; missed seizure courses need clinic guidance.",
        },
      ],
    },
    {
      heading: "2. Dosing context (no home chart)",
      blocks: [
        {
          type: "p",
          text: "The dose depends on weight, species, kidney function, and whether the drug is for pain or seizures. Bring the bottle to every refill question so the team can confirm the formulation.",
        },
      ],
    },
    {
      heading: "3. Overdose and formulation traps",
      blocks: [
        {
          type: "table",
          headers: ["Problem", "What you may see"],
          rows: [
            ["Extra doses", "Marked sleepiness, wobbly walking, low temperature"],
            ["Abrupt stop of seizure plan", "Breakthrough seizures"],
            ["Xylitol liquid", "Treat as xylitol poisoning—call a hotline"],
          ],
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
      heading: "4. Related pages",
      blocks: [
        {
          type: "links",
          items: [
            { href: "/nutrition/xylitol", label: "Xylitol in pets" },
            { href: "/health-symptoms/dogs/collapse-or-seizure", label: "Collapse or seizure" },
            { href: "/medications/diphenhydramine", label: "Diphenhydramine (different drug)" },
          ],
        },
      ],
    },
  ],
};
