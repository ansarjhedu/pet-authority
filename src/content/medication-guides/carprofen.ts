import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

const faqs = [
  {
    question: "Can I give Rimadyl to my cat for pain?",
    answer:
      "No. Carprofen is labeled for dogs and is not a cat drug. Any dose in a cat can cause stomach ulcers, liver injury, or kidney failure. Call a poison hotline and go to an emergency hospital rather than waiting for signs.",
  },
  {
    question: "Is it okay to give carprofen with ibuprofen or prednisone?",
    answer:
      "No. Stacking carprofen with another NSAID, with aspirin, or with a corticosteroid multiplies ulcer and kidney risk. An extra dose of the dog's own chewables on the same day is also an overdose. Bring every bottle to the call.",
  },
  {
    question: "My dog ate several Rimadyl chewables. What now?",
    answer:
      "Count what is missing, note the milligram strength on the label, and call a poison hotline with the weight in pounds (kilograms). Chewables taste like treats, so a whole bottle can disappear quickly. Do not induce vomiting from a chart.",
  },
  {
    question: "When do liver and stomach signs show after too much carprofen?",
    answer:
      "Vomiting or refusal to eat can start within hours, and black stool or yellow gums may follow over the next day or two. Increased thirst and urination can signal kidney stress. A bright evening is not proof the extra tablets were harmless.",
  },
] as const;

export const carprofenGuide: EmergencyLongGuide = {
  title: "Carprofen (Rimadyl) Toxicity and Safe Use in Dogs",
  lede: "This guide is for a dog in the United States, the United Kingdom, or Australia on or exposed to carprofen, including Rimadyl, Novox, or Quellin, and for any cat who may have taken a dog tablet. It explains NSAID stacking danger, why cats must never receive it, and what the hospital may do. It does not publish a pet dose.",
  faqs: [...faqs],
  sections: [
    {
      heading: "1. Quick Clinical Verdict (At a Glance)",
      blocks: [
        {
          type: "snippet",
          text: "Carprofen is a prescription dog NSAID for osteoarthritis or post-operative pain when a veterinarian dispenses it. An extra dose, stacking with another NSAID or steroid, or any dose in a cat can cause ulcers, liver injury, or kidney failure. Call within 60 minutes after a known overdose.",
        },
        {
          type: "p",
          text: "The triage is Code Red for any cat exposure, a double-up with ibuprofen or prednisone, or a dog who emptied a chewable bottle. A pet who is still walking has not been cleared by that fact alone. Bring the chewable tablets so the team can count what is missing.",
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
          text: "Carprofen blocks cyclooxygenase enzymes that protect the stomach lining and help keep blood flowing through the kidneys. Overdose or stacking often starts with gastrointestinal ulcers, and higher exposures add kidney injury. Some dogs also develop liver injury, which can show as yellow gums or a sudden refusal to eat.",
        },
        {
          type: "p",
          text: "The drug is labeled for dogs and is dosed from the dog's current weight on a veterinary prescription, in pounds (kilograms). It is not a cat drug and not a substitute for ibuprofen from the bathroom cabinet. This page does not publish milligrams per pound (kilograms), because that table gets copied as a dose.",
        },
        {
          type: "p",
          text: "NSAID stacking is one of the most preventable clinic emergencies. Carprofen plus meloxicam, ibuprofen, aspirin, or a corticosteroid multiplies ulcer and kidney risk even when each bottle seemed reasonable alone. Never give a second anti-inflammatory on the same day unless the prescribing veterinarian wrote that exact plan.",
        },
        {
          type: "p",
          text: "Rimadyl, Novox, and Quellin are common brand names, and many products are flavored chewables that dogs treat like snacks. A closed bottle on a counter is not secure storage. Human ibuprofen remains a separate lethal toxin and is not a cheaper stand-in when the Rimadyl runs out.",
        },
        {
          type: "p",
          text: "In the United States the FDA-CVM licenses veterinary carprofen products for dogs. In the United Kingdom the VMD licenses veterinary medicines while DEFRA sets animal-health rules. In Australia the APVMA registers veterinary chemicals, and none of those agencies endorses a cat dose or a kitchen chart.",
        },
        {
          type: "p",
          text: "A veterinary anti-inflammatory dispensed for a named dog is not a reason to add a human tablet the same day. Two NSAIDs together raise the ulcer risk. Bring both bottles if a prescribed pet drug and a human pain medicine may have been taken.",
        },
      ],
    },
    {
      heading: "3. Clinical Symptoms and Triage Timeline",
      blocks: [
        {
          type: "p",
          text: "The earliest sign is often vomiting, black stool, or a dog who suddenly refuses food. Liver injury can add yellow gums or dark urine. Kidney injury shows as increased thirst and urination, weakness, or collapse, and it can overlap with the stomach signs.",
        },
        {
          type: "table",
          headers: ["Time after extra or wrong dose", "What owners often see"],
          rows: [
            ["0–2 hours", "Vomiting, drooling, abdominal pain, or a dog who still looks normal"],
            ["2–12 hours", "Continued vomiting, refusing food, or early weakness"],
            ["12–48 hours", "Black stool, pale or yellow gums, thirst, or a change in urine"],
            ["Beyond 48 hours", "Ongoing ulcers, liver injury, or kidney failure if untreated"],
          ],
        },
        {
          type: "p",
          text: "A normal afternoon does not close the case, because bleeding, liver, and kidney injury often declare themselves later. Yellow gums or black stool belongs in hospital within 60 minutes. Do not give a second pain tablet, steroid, or stomach medicine from your own cabinet while you watch.",
        },
        {
          type: "table",
          headers: ["Situation", "Triage"],
          rows: [
            ["Any carprofen in a cat", "Code Red · Emergency, within 60 minutes"],
            ["Extra chewables, or stacking with another NSAID or steroid", "Code Red · Emergency, within 60 minutes"],
            ["Black stool, yellow gums, blood in vomit, or collapse", "Code Red · Emergency, within 60 minutes"],
          ],
        },
        {
          type: "p",
          text: "Code Green and Code Yellow do not fit a known overdose or cat exposure. Waiting 12 to 24 hours to see if the dog eats dinner misses the start of fluid therapy. Count every pet who might have taken a dropped chewable, each with a weight in pounds (kilograms).",
        },
      ],
    },
    {
      heading: "4. Immediate Emergency Next Steps",
      blocks: [
        {
          type: "p",
          text: "Pick up the bottle and call a poison line with the brand, the strength in milligrams, how many chewables are missing, and the time eaten. Have the pet's weight in pounds (kilograms). A consultation fee may apply to the United States lines, and the call should not delay travel if the pet is already vomiting blood.",
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
          text: "Animal PoisonLine and the Australian Animal Poisons Centre handle the toxin question. The RSPCA number is the England and Wales cruelty and advice line, and it is not a carprofen dose line. If the pet is collapsed or vomiting blood, leave for the hospital while the call continues.",
        },
        {
          type: "callout",
          text: "Do not wait for a callback if there is black stool, yellow gums, collapse, or a cat who ate a dog tablet. Use the 24/7 Vet Finder and bring the chewable bottle. Tell them every other anti-inflammatory or steroid given in the last two days.",
          href: "/tools/vet-finder",
          label: "Find a 24/7 emergency hospital",
        },
        {
          type: "p",
          text: "Search the floor for chewed tablets and check other pets, including cats who share the house. Do not give food, milk, or a human antacid unless the veterinarian tells you to. Stop any remaining carprofen until the clinic says otherwise.",
        },
        {
          type: "p",
          text: "Transport the pet in a carrier or on bedding that can be washed. Keep the head slightly down if they retch. A cat who is hiding still needs to go if the clinic says to come in, and a towel wrap is safer than a chase that makes them overheat.",
        },
      ],
    },
    {
      heading: "When home vomiting is contraindicated",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Do not induce vomiting unless a veterinarian tells you to for this animal. It is contraindicated if the pet is already vomiting, especially with blood, or is weak or struggling to breathe. Hydrogen peroxide can add another stomach injury, and this page does not give a peroxide dose.",
        },
        {
          type: "p",
          text: "It is also the wrong step hours later, once the drug has been absorbed, or in a short-nosed dog who may inhale vomit. Activated charcoal, when a clinic uses it, is measured there. Do not mix a charcoal slurry at home, and do not give a dose from another website.",
        },
      ],
    },
    {
      heading: "5. Veterinary Diagnosis and Treatment Protocols",
      blocks: [
        {
          type: "p",
          text: "The hospital stops the drug, starts intravenous fluids, uses gastrointestinal protectants, and rechecks liver and kidney tests. Blood pressure and a packed-cell check matter when the stool is black. Severe bleeding may need a transfusion, and severe organ injury may need a longer fluid plan or referral.",
        },
        {
          type: "p",
          text: "There is no specific antidote. Supportive care is the protocol, and the veterinarian chooses protectants and fluid rates for that animal. This page lists no milligram dose for any clinic drug.",
        },
        {
          type: "p",
          text: "Why this page has no milligram chart: a home table is how chewables get split for pets or shared with cats. The safe instruction is to use only the label written for that dog. Counting the missing tablets is useful, and converting that count into a dose to give is not.",
        },
        {
          type: "p",
          text: "The fees below are planning ranges for a pet seen promptly, not a quote from a named clinic. Bleeding ulcers or organ failure cost more. The Australian figures follow about 1.5 Australian dollars per US dollar and are rounded as planning bands, not a hospital tariff.",
        },
        {
          type: "table",
          headers: ["Care the hospital may provide", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Exam and decontamination if still useful", "$500–$1,300", "£400–£1,000", "A$800–A$2,000"],
            ["Fluids, stomach protection, and bloodwork", "$1,500–$3,500", "£1,200–£2,700", "A$2,300–A$5,300"],
            ["Bleeding, transfusion, or organ failure", "$3,000–$8,000", "£2,300–£6,000", "A$4,500–A$12,000"],
          ],
        },
        {
          type: "p",
          text: "Ask which signs mean a return the same night, including new blood in the vomit, black stool, yellow gums, or collapse. Skip every anti-inflammatory, including leftover meloxicam or ibuprofen, until the clinic names the next drug. A liver and kidney recheck is part of discharge even when the dog ate a meal and seemed bright.",
        },
        {
          type: "links",
          items: [
            { href: "/medications/meloxicam", label: "Why stacking meloxicam with carprofen is dangerous" },
            { href: "/medications/ibuprofen", label: "Why human ibuprofen is not a Rimadyl substitute" },
            { href: "/medications/acetaminophen", label: "Why acetaminophen is a separate emergency" },
            { href: "/medications/famotidine", label: "Acid reducers do not replace NSAID monitoring" },
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
          text: "Owners usually ask about cats, stacking with other pain drugs, and chewed Rimadyl bottles. The answers below are triage ranges for dogs and cats. They do not replace the hotline for this pet's weight in pounds (kilograms).",
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
