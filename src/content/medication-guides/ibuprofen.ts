import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

const faqs = [
  {
    question: "Can one ibuprofen tablet hurt a dog?",
    answer:
      "Yes, one human tablet can start stomach ulcers in a small dog, and a larger amount adds kidney injury. Cats are at risk from a smaller piece. There is no safe household dose, so call before you do the arithmetic at home.",
  },
  {
    question: "Is Nurofen the same risk as Advil?",
    answer:
      "Yes, Nurofen, Advil, and Motrin are ibuprofen brand names, and the risk is the drug, not the logo. Children's liquids and combination cold tablets still count. Read the milligram strength on the box and tell the hotline that number.",
  },
  {
    question: "Should I make my pet vomit after ibuprofen?",
    answer:
      "No, do not induce vomiting unless a veterinarian tells you to for this animal. Hydrogen peroxide can burn the stomach, and a weak or vomiting pet can inhale the vomit. If there is blood in the vomit, a home attempt makes the injury worse.",
  },
  {
    question: "When do ibuprofen ulcers and kidney signs show?",
    answer:
      "Vomiting can start within a few hours, and a pet may still look normal then. Black stool, pale gums, or changes in thirst and urine often follow over 12 to 48 hours. A quiet afternoon is not proof the tablet was harmless.",
  },
] as const;

export const ibuprofenGuide: EmergencyLongGuide = {
  title: "Ibuprofen Toxicity in Dogs and Cats",
  lede: "This guide is for a dog or cat in the United States, the United Kingdom, or Australia who may have eaten ibuprofen, including Advil, Motrin, or Nurofen. It explains the stomach and kidney injury and what the hospital may do. It does not publish a pet dose.",
  faqs: [...faqs],
  sections: [
    {
      heading: "1. Quick Clinical Verdict (At a Glance)",
      blocks: [
        {
          type: "snippet",
          text: "Ibuprofen is a lethal human pain tablet for dogs and cats, and there is no safe home dose. One tablet can start stomach ulcers and kidney injury. Call a poison hotline within 60 minutes and do not give a second pain medicine.",
        },
        {
          type: "p",
          text: "The triage is Code Red, an emergency within 60 minutes, for a known or suspected ingestion in either species. Any amount in a cat is an emergency, including a fragment of a tablet. A dog who is still walking has not been cleared by that fact alone.",
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
          text: "Ibuprofen blocks cyclooxygenase enzymes that protect the stomach lining and help keep blood flowing through the kidneys. The first injury is often a stomach or intestinal ulcer, and higher exposures add kidney failure. Very large amounts can also affect the brain, with stumbling, tremors, or seizures.",
        },
        {
          type: "p",
          text: "Dogs and cats do not clear this human tablet the way an adult person does, and cats are at risk from a smaller amount. The drug can keep cycling between the gut and the bloodstream, so signs are not finished when the tablet leaves the stomach. That is why a single vomiting episode is not the end of the case.",
        },
        {
          type: "p",
          text: "There is no household dose that turns a human tablet into a pet pain plan. Published cases describe stomach injury after one tablet in a small dog, and kidney injury after larger amounts. This page does not list milligrams per pound (kilograms), because that table gets copied as a dose.",
        },
        {
          type: "p",
          text: "Advil and Motrin are common United States names, and Nurofen is a common name in the United Kingdom and Australia. Liquids made for children, gel capsules, and combination cold or allergy tablets still contain the drug. Naproxen and aspirin are not safer swaps from the same cupboard.",
        },
        {
          type: "p",
          text: "In the United States the FDA and FDA-CVM oversee human and veterinary drugs, and a human pain label is not a veterinary license. In the United Kingdom the VMD licenses veterinary medicines while DEFRA sets animal-health rules. In Australia the APVMA registers veterinary chemicals, and none of those agencies publishes a home ibuprofen dose for dogs or cats.",
        },
        {
          type: "p",
          text: "A veterinary anti-inflammatory such as carprofen is a different drug, dispensed for a named animal, and it is not a reason to add ibuprofen the same day. Two anti-inflammatory drugs together raise the ulcer risk. Bring both bottles if a prescribed pet drug and a human tablet may have been taken.",
        },
      ],
    },
    {
      heading: "3. Clinical Symptoms and Triage Timeline",
      blocks: [
        {
          type: "p",
          text: "The earliest sign is often vomiting, with or without blood, or a pet who looks guilty and then normal. Ulcers can bleed into the gut and show later as black, tarry stool or pale gums. Kidney injury shows as thirst, a change in urine, or weakness, and it can overlap with the stomach signs.",
        },
        {
          type: "table",
          headers: ["Time after eating", "What owners often see"],
          rows: [
            ["0–2 hours", "Vomiting, drooling, abdominal pain, or a pet who still looks normal"],
            ["2–6 hours", "Continued vomiting, restlessness, or early weakness"],
            ["12–24 hours", "Black stool, pale gums, thirst, or a change in urine"],
            ["24–72 hours", "Ongoing ulcers, kidney injury, or neurologic signs after a large amount"],
          ],
        },
        {
          type: "p",
          text: "A normal afternoon does not close the case, because bleeding and kidney injury often declare themselves later the same day or the next. Stumbling or a seizure is a large-exposure emergency and belongs in hospital within 60 minutes. Do not give a second pain tablet, steroid, or stomach medicine from your own cabinet while you watch.",
        },
        {
          type: "table",
          headers: ["Situation", "Triage"],
          rows: [
            ["Any ibuprofen in a cat, including a piece of a tablet", "Code Red · Emergency, within 60 minutes"],
            ["A human tablet in a dog, even one tablet", "Code Red · Emergency, within 60 minutes"],
            ["Black stool, blood in vomit, collapse, or a seizure", "Code Red · Emergency, within 60 minutes"],
          ],
        },
        {
          type: "p",
          text: "Code Green and Code Yellow do not fit a known ingestion. Waiting 12 to 24 hours to see if the pet eats dinner misses the decontamination window and the start of fluid therapy. Count every pet who might have taken a dropped tablet, each with a weight in pounds (kilograms).",
        },
      ],
    },
    {
      heading: "4. Immediate Emergency Next Steps",
      blocks: [
        {
          type: "p",
          text: "Pick up the bottle and call a poison line with the strength in milligrams, how many tablets are missing, and the time eaten. Have the pet's weight in pounds (kilograms). A consultation fee may apply to the United States lines, and the call should not delay travel if the pet is already vomiting blood.",
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
          text: "Animal PoisonLine and the Australian Animal Poisons Centre handle the toxin question. The RSPCA number is the England and Wales cruelty and advice line, and it is not an ibuprofen dose line. If the pet is collapsed, seizuring, or vomiting blood, leave for the hospital while the call continues.",
        },
        {
          type: "callout",
          text: "Do not wait for a callback if there is blood in the vomit, black stool, collapse, or a seizure. Use the 24/7 Vet Finder and bring the bottle, including any combination cold tablet. Tell them the milligram strength printed on the box.",
          href: "/tools/vet-finder",
          label: "Find a 24/7 emergency hospital",
        },
        {
          type: "p",
          text: "Search the floor for chewed blister packs and check other pets. Do not give food, milk, or a human antacid unless the veterinarian tells you to. Write down other drugs in the product, because a cold tablet may add a decongestant or an antihistamine.",
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
          text: "Do not induce vomiting unless a veterinarian tells you to for this animal. It is contraindicated if the pet is already vomiting, especially with blood, or is weak, seizuring, or struggling to breathe. Hydrogen peroxide can add another stomach injury, and this page does not give a peroxide dose.",
        },
        {
          type: "p",
          text: "It is also the wrong step hours later, once the tablet has been absorbed, or in a short-nosed dog who may inhale vomit. Activated charcoal, when a clinic uses it, is measured there and sometimes repeated because ibuprofen can cycle through the gut. Do not mix a charcoal slurry at home, and do not give a dose from another website.",
        },
      ],
    },
    {
      heading: "5. Veterinary Diagnosis and Treatment Protocols",
      blocks: [
        {
          type: "p",
          text: "The team checks circulation, gum color, and neurologic state first. If the pet is stable and the tablet was recent, they may induce vomiting with a veterinary drug, then consider activated charcoal. Cats are decontaminated only when the clinician judges the aspiration risk acceptable.",
        },
        {
          type: "p",
          text: "There is no specific antidote. Intravenous fluids support the kidneys and circulation, and the veterinarian may add stomach-protectant medicines, which can include a proton-pump inhibitor, sucralfate, or misoprostol. Those are clinic choices, and this page lists no milligram dose for any of them.",
        },
        {
          type: "p",
          text: "Blood tests track kidney values, electrolytes, proteins, and anemia if an ulcer is bleeding. A packed-cell check and blood pressure matter when the stool is black. Severe bleeding may need a transfusion, and severe kidney injury may need a longer fluid plan or referral.",
        },
        {
          type: "p",
          text: "Why this page has no milligram chart: a home table is how human tablets get split for pets. The safe instruction is to use only a pain medicine dispensed for that animal. Counting the missing tablets is useful, and converting that count into a dose to give is not.",
        },
        {
          type: "p",
          text: "The fees below are planning ranges for a pet seen promptly, not a quote from a named clinic. Bleeding ulcers or kidney failure cost more. The Australian figures follow about 1.5 Australian dollars per US dollar and are rounded as planning bands, not a hospital tariff.",
        },
        {
          type: "table",
          headers: ["Care the hospital may provide", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Exam and decontamination", "$500–$1,300", "£400–£1,000", "A$800–A$2,000"],
            ["Fluids and stomach protection", "$1,500–$3,500", "£1,200–£2,700", "A$2,300–A$5,300"],
            ["Bleeding, transfusion, or kidney failure", "$3,000–$8,000", "£2,300–£6,000", "A$4,500–A$12,000"],
          ],
        },
        {
          type: "p",
          text: "Ask which signs mean a return the same night, including new blood in the vomit, black stool, or collapse. Skip every anti-inflammatory, including leftover carprofen, until the clinic names the next drug. A kidney recheck is part of discharge even when the pet ate a meal and seemed bright.",
        },
        {
          type: "links",
          items: [
            { href: "/medications/acetaminophen", label: "Why acetaminophen is a separate emergency" },
            { href: "/medications/carprofen", label: "Why a dog NSAID is not a license to add ibuprofen" },
            { href: "/emergency/chocolate-toxicity", label: "Dark chocolate poisoning if cocoa was also eaten" },
            { href: "/nutrition/grapes-raisins", label: "Grape toxicity if fruit was in the same incident" },
            { href: "/medications/diphenhydramine", label: "Diphenhydramine safety if a combination tablet was used" },
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
          text: "Owners usually ask whether one tablet counts, whether brand names differ, and whether to cause vomiting. The answers below are triage ranges for dogs and cats. They do not replace the hotline for this pet's weight in pounds (kilograms).",
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
