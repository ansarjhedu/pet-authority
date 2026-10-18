import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

const faqs = [
  {
    question: "How fast does xylitol drop a dog's blood sugar?",
    answer:
      "Weakness, vomiting, or collapse can start within about 30 to 60 minutes, and gum can release the sweetener more slowly. A normal first hour is not an all-clear. Call the same hour, even if the dog is still walking.",
  },
  {
    question: "Is birch sugar the same as xylitol?",
    answer:
      "Yes, birch sugar and birch bark extract are labeling names for xylitol, and they count as the same emergency in dogs. Erythritol, sorbitol, and maltitol are different sweeteners. If the label is unclear, call rather than guess from the word sugar-free.",
  },
  {
    question: "Should I give honey after xylitol?",
    answer:
      "No, honey, syrup, or a sugary meal is not a treatment plan, and it does not replace the hospital if the dog is weak or collapsing. Do not pour liquid into the mouth of a dog who cannot swallow. Follow only the instruction given on this call.",
  },
  {
    question: "Can a dog get liver failure without low blood sugar?",
    answer:
      "Yes, liver injury can follow a larger exposure even after blood sugar has been supported, often over 24 to 48 hours. Jaundice, vomiting, or a dog who will not eat needs a recheck. Leaving after the wobble stops can miss that second injury.",
  },
] as const;

export const xylitolDogsGuide: EmergencyLongGuide = {
  title: "Xylitol Poisoning in Dogs",
  lede: "This guide is for a dog in the United States, the United Kingdom, or Australia who may have eaten xylitol, also labeled birch sugar. It covers the rapid drop in blood sugar, the later liver risk, and what the hospital may do. It does not clear one piece of gum.",
  faqs: [...faqs],
  sections: [
    {
      heading: "1. Quick Clinical Verdict (At a Glance)",
      blocks: [
        {
          type: "snippet",
          text: "Xylitol, also called birch sugar, is deadly to dogs and can drop blood sugar within about an hour. Gum, peanut butter, and some medicines list it. Call a poison hotline the same hour with the label and the dog's weight in pounds (kilograms).",
        },
        {
          type: "p",
          text: "The triage is Code Red, an emergency within 60 minutes, including when the dog still looks normal. Some sugar-free gums hold enough xylitol in one piece to affect a small dog, and the brand decides that, not a guess from the flavor. Do not taste the product to see if the dog will be fine.",
        },
        {
          type: "p",
          text: "This page was researched and compiled by the Pet Safety Hub Editorial Team from published clinical references, not from an examination. It does not diagnose an individual animal or replace a clinic visit. A licensed veterinarian who has seen the animal still has to set the treatment.",
        },
        {
          type: "links",
          items: [
            {
              href: "/editorial-standards",
              label: "Pet Safety Hub editorial standards",
            },
          ],
        },
      ],
    },
    {
      heading: "2. Toxic Mechanism and Pharmacokinetics",
      blocks: [
        {
          type: "p",
          text: "In dogs, xylitol triggers a sharp release of insulin that is out of proportion to the sweetener eaten. Blood sugar can fall fast, and the brain is the organ that fails first when glucose drops. A larger exposure can also injure the liver, sometimes after the blood sugar has been corrected.",
        },
        {
          type: "p",
          text: "Gum, mints, peanut butter, baked goods, toothpaste, mouthwash, and some liquid medicines and supplements are the usual sources. The words xylitol, birch sugar, and birch bark extract all count. Erythritol, sorbitol, and maltitol do not cause this insulin spike, and an unclear sugar-free label is still a call.",
        },
        {
          type: "p",
          text: "Absorption is quick from the stomach, often within an hour, and gum can release xylitol more slowly as it is chewed and swallowed. That is why a quiet first hour after gum is not permission to skip the hospital. There is no household formula that turns a stick of gum into a safe leftover for this dog's weight.",
        },
        {
          type: "p",
          text: "This page does not publish grams per pound (kilograms). Poison references describe low blood sugar after a small amount for the dog's size, and liver injury after a larger amount. The hotline uses the product and the weight in pounds (kilograms), and a table on a website gets misread as a limit to sit out.",
        },
        {
          type: "p",
          text: "In the United States the FDA and FDA-CVM oversee drugs that may use this sweetener, while AAFCO sets pet-food profiles. In the United Kingdom the VMD licenses veterinary medicines, and DEFRA, the FSA, and PFMA cover food safety. In Australia the APVMA registers veterinary chemicals, and none of them lists a safe xylitol dose for dogs.",
        },
        {
          type: "p",
          text: "Cats do not show the same insulin spike in published reports, and a xylitol product is still not cat food, especially a liquid medicine. A cat who ate a labeled product needs a call the same day. The dog emergency in this guide is the insulin and liver pattern.",
        },
      ],
    },
    {
      heading: "3. Clinical Symptoms and Triage Timeline",
      blocks: [
        {
          type: "p",
          text: "Low blood sugar looks like weakness, wobbling, vomiting, or a dog who seems drunk and then collapses. Tremors or a seizure can follow when the brain runs out of glucose. Liver injury is a later problem and can arrive after those signs were treated.",
        },
        {
          type: "table",
          headers: ["Time after eating", "What owners often see"],
          rows: [
            ["0–2 hours", "Vomiting, weakness, collapse, or a dog who still looks normal"],
            ["2–6 hours", "Ongoing low blood sugar, tremors, or seizures, especially after gum"],
            ["12–24 hours", "Blood sugar may stabilize while liver injury is only starting"],
            ["24–48 hours", "Vomiting, refusing food, or jaundice if the liver is injured"],
          ],
        },
        {
          type: "p",
          text: "A dog who perks up after a scare can still be heading into liver injury overnight. Jaundice, a yellow tint in the gums or eyes, usually waits until the next day or two. Collapse, a seizure, or vomiting that will not stop is a hospital trip within 60 minutes, not a watch-at-home plan.",
        },
        {
          type: "table",
          headers: ["Situation", "Triage"],
          rows: [
            ["Any product whose label lists xylitol or birch sugar", "Code Red · Emergency, within 60 minutes"],
            ["Weakness, collapse, tremors, or a seizure", "Code Red · Emergency, within 60 minutes"],
            ["Sugar-free label that does not name the sweetener", "Code Red until the hotline reads the ingredients"],
          ],
        },
        {
          type: "p",
          text: "Code Green does not apply because the dog ate and then walked to the kitchen. Code Yellow, a visit within 12 to 24 hours, is too slow for a sweetener that can drop glucose inside an hour. Every dog who shared the gum or the jar needs a weight in pounds (kilograms).",
        },
      ],
    },
    {
      heading: "4. Immediate Emergency Next Steps",
      blocks: [
        {
          type: "p",
          text: "Take the gum, jar, or medicine away and call a poison line with the ingredient panel in front of you. Report the dog's weight in pounds (kilograms), how many pieces or how many ounces (grams) are missing, and the time eaten. A consultation fee may apply to the United States lines.",
        },
        {
          type: "phones",
          items: [
            { label: "United States: ASPCA Animal Poison Control, 888-426-4435", href: "tel:+18884264435" },
            { label: "United States: Pet Poison Helpline, 855-764-7661", href: "tel:+18557647661" },
            { label: "United Kingdom: Animal PoisonLine, 01202-509000", href: "tel:+441202509000" },
            { label: "United Kingdom: RSPCA, England and Wales, 0300 1234 999", href: "tel:+443001234999" },
            { label: "Australia: Australian Animal Poisons Centre, 1300-869-738", href: "tel:+611300869738" },
          ],
        },
        {
          type: "p",
          text: "Animal PoisonLine and the Australian Animal Poisons Centre handle the toxin question. The RSPCA number is the England and Wales cruelty and advice line, and it is not a xylitol calculator. If the dog is weak, trembling, or collapsed, leave for the hospital while the call continues.",
        },
        {
          type: "callout",
          text: "Do not wait for a call back if the dog cannot stand or is having a seizure. Use the 24/7 Vet Finder, keep the dog from falling off a seat, and bring the package. Do not put your hands in the mouth during a seizure.",
          href: "/tools/vet-finder",
          label: "Find a 24/7 emergency hospital",
        },
        {
          type: "p",
          text: "Check other pets in the house, including a dog who licked a toothpaste tube or a peanut-butter jar. Shut the bin so nobody goes back. Write whether the product was gum, a baked good, or a liquid medicine, because those release the sweetener on different clocks.",
        },
        {
          type: "p",
          text: "Do not offer a second meal, honey, or syrup as a home cure. If the specialist on the phone gives an instruction for a dog who can still swallow, follow that instruction only, and still travel. Pouring liquid into a collapsed dog can send it into the lungs.",
        },
        {
          type: "p",
          text: "Carry a small dog, and keep a large dog from running to the car. Skip food and water unless the clinic told you otherwise. A dog who seems better in the driveway can worsen in the car, so the hospital that is expecting you is still the destination.",
        },
      ],
    },
    {
      heading: "When home vomiting is contraindicated",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Do not induce vomiting unless a veterinarian tells you to for this dog. Xylitol is absorbed quickly, and a dog who is already weak, hypoglycemic, or seizing can inhale vomit. Hydrogen peroxide can burn the stomach, and this page does not give a peroxide dose or a charcoal dose.",
        },
        {
          type: "p",
          text: "Home vomiting is also the wrong step if the dog is already vomiting, struggling to breathe, or too drowsy to swallow. Activated charcoal does not bind xylitol well, so it is not a kitchen remedy and many clinics skip it. Salt and oil do not cancel the insulin release.",
        },
      ],
    },
    {
      heading: "5. Veterinary Diagnosis and Treatment Protocols",
      blocks: [
        {
          type: "p",
          text: "The team checks blood sugar, mental state, and vomiting before they discuss the stomach. If the dog is alert and the ingestion was minutes ago, they may induce vomiting with a veterinary drug. A dog who is already weak usually needs glucose first, and that order is a clinic decision.",
        },
        {
          type: "p",
          text: "Treatment is intravenous dextrose and monitoring, not a home antidote, because there is no drug that blocks the insulin spike after the fact. Blood sugar is rechecked over hours, since gum can keep releasing xylitol. Liver enzymes are measured now and again over the next one to two days.",
        },
        {
          type: "p",
          text: "Dogs with seizures stay on glucose and hospital drugs that control the nervous system. Liver injury, when it happens, is supported with fluids and further blood tests, and some dogs need a longer stay. Many dogs do well when low blood sugar is treated early, which is why the first hour is the emergency.",
        },
        {
          type: "p",
          text: "The fees below are planning ranges for a dog seen promptly, not a quote from a named clinic. A seizure or liver failure costs more, especially after midnight. The Australian figures follow about 1.5 Australian dollars per US dollar and are rounded as planning bands, not a hospital tariff.",
        },
        {
          type: "table",
          headers: ["Care the hospital may provide", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Exam, glucose checks, and decontamination", "$500–$1,200", "£400–£900", "A$800–A$1,800"],
            ["Intravenous dextrose and monitoring", "$1,200–$3,000", "£900–£2,300", "A$1,800–A$4,500"],
            ["Seizures or liver injury", "$2,500–$7,000", "£2,000–£5,300", "A$3,800–A$10,500"],
          ],
        },
        {
          type: "p",
          text: "Ask which signs mean a return overnight, including new weakness, vomiting, or a yellow tint to the gums. Feed only what the clinic allowed, and skip further sugar-free products in the house until labels are checked. A next-day liver test is part of the plan when the dose may have been large.",
        },
        {
          type: "links",
          items: [
            { href: "/nutrition/grapes-raisins", label: "Grape and raisin kidney risk if fruit was also eaten" },
            { href: "/medications/diphenhydramine", label: "Why a liquid medicine may hide xylitol" },
            { href: "/emergency/chocolate-toxicity", label: "Dark chocolate poisoning if cocoa was in the same food" },
            { href: "/editorial-standards", label: "How clinical pages are checked" },
          ],
        },
      ],
    },
    {
      heading: "6. Frequently Asked Questions",
      blocks: [
        {
          type: "snippet",
          text: "Owners usually ask how fast signs start, whether birch sugar is different, and whether honey is enough. The answers below are triage ranges for dogs. They do not replace the hotline calculation for this dog's weight in pounds (kilograms).",
        },
      ],
    },
    ...faqs.map((faq) => ({
      heading: faq.question,
      level: 3 as const,
      blocks: [{ type: "p" as const, text: faq.answer }],
    })),
  ],
};
