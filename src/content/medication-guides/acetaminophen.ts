import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

const faqs = [
  {
    question: "Can one Tylenol hurt a cat?",
    answer:
      "Yes. Any suspected amount in a cat is an emergency, including a piece of a tablet or a combined cold medicine. Cats develop methemoglobinemia and can die from a dose that looks small to a person. Call before signs appear.",
  },
  {
    question: "Is paracetamol or Panadol the same risk as Tylenol?",
    answer:
      "Yes. Acetaminophen, paracetamol, and Panadol are the same drug under different names, and the risk is the chemical, not the logo. Children's liquids and combination cold tablets still count. Read the milligram strength on the box and tell the hotline that number.",
  },
  {
    question: "Should I make my pet vomit after acetaminophen?",
    answer:
      "No, do not induce vomiting unless a veterinarian tells you to for this animal. Hydrogen peroxide can burn the stomach, and a weak or blue-gumed pet can inhale the vomit. Leave for the hospital while you call; do not wait for a home recipe.",
  },
  {
    question: "Is there an antidote for acetaminophen poisoning?",
    answer:
      "Yes, clinics often use an N-acetylcysteine protocol along with oxygen and fluids, plus treatment for methemoglobinemia in cats. That antidote is a hospital drug, not a supplement from a kitchen cabinet. This page does not publish an antidote dose.",
  },
] as const;

export const acetaminophenGuide: EmergencyLongGuide = {
  title: "Acetaminophen (Paracetamol) Toxicity in Dogs and Cats",
  lede: "This guide is for a dog or cat in the United States, the United Kingdom, or Australia who may have eaten acetaminophen, including Tylenol, paracetamol, or Panadol. It explains why the drug is especially lethal in cats, what liver and blood injury look like, and what the hospital may do. It does not publish a pet dose.",
  faqs: [...faqs],
  sections: [
    {
      heading: "1. Quick Clinical Verdict (At a Glance)",
      blocks: [
        {
          type: "snippet",
          text: "Acetaminophen is a lethal human pain and fever tablet for pets, especially cats, and there is no safe home dose. Cats can develop fatal methemoglobinemia from a fragment, and dogs can suffer severe liver injury. Call a poison hotline within 60 minutes and do not give a second pain medicine.",
        },
        {
          type: "p",
          text: "The triage is Code Red, an emergency within 60 minutes, for a known or suspected ingestion in either species. Any amount in a cat is an emergency, including a piece of a tablet or a sip of a cold syrup. A dog who is still walking has not been cleared by that fact alone.",
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
          text: "Acetaminophen is metabolized through liver pathways that dogs and cats share poorly with people. In cats, a toxic metabolite rapidly converts hemoglobin into methemoglobin, so blood cannot carry oxygen well, which is why gums turn brown or blue. In dogs, the same drug more often drives severe liver cell death, though large amounts can also affect the blood.",
        },
        {
          type: "p",
          text: "Cats lack efficient pathways to clear the drug, so a fragment that looks trivial on a kitchen counter can still be lethal. Dogs can develop life-threatening liver failure after a single extra-strength human tablet in a small animal. Facial or paw swelling can appear in cats as the blood injury progresses.",
        },
        {
          type: "p",
          text: "There is no household dose that turns a human tablet into a pet pain plan. A veterinarian may use a carefully chosen dog protocol in hospital under monitoring; that is not a medicine to give from the bathroom cabinet. This page intentionally omits milligrams per pound (kilograms), because that table gets copied as a dose.",
        },
        {
          type: "p",
          text: "Tylenol is a common United States name, and paracetamol or Panadol are common names in the United Kingdom and Australia. Liquids made for children, gel caps, and combination cold or flu tablets still contain the drug. Ibuprofen and aspirin are not safer swaps from the same cupboard.",
        },
        {
          type: "p",
          text: "In the United States the FDA and FDA-CVM oversee human and veterinary drugs, and a human fever label is not a veterinary license. In the United Kingdom the VMD licenses veterinary medicines while DEFRA sets animal-health rules. In Australia the APVMA registers veterinary chemicals, and none of those agencies publishes a home acetaminophen dose for dogs or cats.",
        },
        {
          type: "p",
          text: "N-acetylcysteine is the antidote clinics often start, along with oxygen, intravenous fluids, and treatment for methemoglobinemia in cats. It is a hospital protocol measured for that animal, not a mucolytic syrup or supplement to dose at home. Bring the bottle so the team can time the antidote against the ingestion.",
        },
      ],
    },
    {
      heading: "3. Clinical Symptoms and Triage Timeline",
      blocks: [
        {
          type: "p",
          text: "Early signs can be vomiting, lethargy, or a pet who still looks oddly normal. Brown or blue gums, swollen face or paws, and labored breathing signal methemoglobinemia and demand oxygen now. Jaundice and ongoing vomiting often mark liver failure as the hours pass.",
        },
        {
          type: "table",
          headers: ["Time after eating", "What owners often see"],
          rows: [
            ["0–2 hours", "Vomiting, drooling, or a pet who still looks normal"],
            ["2–12 hours", "Brown or blue gums, facial or paw swelling, or labored breathing"],
            ["12–24 hours", "Deepening lethargy, continued vomiting, or early jaundice"],
            ["24–72 hours", "Worsening liver failure, collapse, or death if untreated"],
          ],
        },
        {
          type: "p",
          text: "A normal afternoon does not close the case, because blood and liver injury often declare themselves later the same day or the next. Brown gums or trouble breathing is a large-exposure emergency and belongs in hospital within 60 minutes. Do not give a second pain tablet, steroid, or stomach medicine from your own cabinet while you watch.",
        },
        {
          type: "table",
          headers: ["Situation", "Triage"],
          rows: [
            ["Any acetaminophen in a cat, including a piece of a tablet", "Code Red · Emergency, within 60 minutes"],
            ["A human tablet or cold syrup in a dog", "Code Red · Emergency, within 60 minutes"],
            ["Brown or blue gums, swollen face, labored breathing, or collapse", "Code Red · Emergency, within 60 minutes"],
          ],
        },
        {
          type: "p",
          text: "Code Green and Code Yellow do not fit a known ingestion. Waiting 12 to 24 hours to see if the pet eats dinner misses the antidote window and the start of oxygen and fluid therapy. Count every pet who might have taken a dropped tablet, each with a weight in pounds (kilograms).",
        },
      ],
    },
    {
      heading: "4. Immediate Emergency Next Steps",
      blocks: [
        {
          type: "p",
          text: "Pick up the bottle and call a poison line with the strength in milligrams, how many tablets are missing, and the time eaten. Have the pet's weight in pounds (kilograms). A consultation fee may apply to the United States lines, and the call should not delay travel if the gums are already brown or blue.",
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
          text: "Animal PoisonLine and the Australian Animal Poisons Centre handle the toxin question. The RSPCA number is the England and Wales cruelty and advice line, and it is not an acetaminophen dose line. If the pet is collapsed, blue-gumed, or struggling to breathe, leave for the hospital while the call continues.",
        },
        {
          type: "callout",
          text: "Do not wait for a callback if there are brown or blue gums, facial swelling, labored breathing, or collapse. Use the 24/7 Vet Finder and bring the bottle, including any combination cold tablet. Tell them the milligram strength printed on the box and that you need an N-acetylcysteine protocol assessed.",
          href: "/tools/vet-finder",
          label: "Find a 24/7 emergency hospital",
        },
        {
          type: "p",
          text: "Search the floor for chewed blister packs and check other pets. Do not give food, milk, or a human antacid unless the veterinarian tells you to. Write down other drugs in the product, because a cold tablet may add a decongestant or an antihistamine.",
        },
        {
          type: "p",
          text: "Transport the pet in a carrier or on bedding that can be washed. Keep the head slightly down if they retch, and keep the airway clear if breathing is hard. A cat who is hiding still needs to go if the clinic says to come in, and a towel wrap is safer than a chase that makes them overheat.",
        },
      ],
    },
    {
      heading: "When home vomiting is contraindicated",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Do not induce vomiting unless a veterinarian tells you to for this animal. It is contraindicated if the pet is already vomiting, weak, blue-gumed, seizuring, or struggling to breathe. Hydrogen peroxide can add another stomach injury, and this page does not give a peroxide dose.",
        },
        {
          type: "p",
          text: "It is also the wrong step hours later, once the tablet has been absorbed, or in a short-nosed dog who may inhale vomit. Activated charcoal, when a clinic uses it, is measured there and timed against the antidote plan. Do not mix a charcoal slurry at home, and do not give a dose from another website.",
        },
      ],
    },
    {
      heading: "5. Veterinary Diagnosis and Treatment Protocols",
      blocks: [
        {
          type: "p",
          text: "The team starts oxygen and checks circulation, gum color, and neurologic state first. If the pet is stable and the tablet was recent, they may decontaminate with a veterinary protocol, then begin intravenous fluids. Cats need urgent care for methemoglobinemia as well as liver support.",
        },
        {
          type: "p",
          text: "The antidote protocol often includes N-acetylcysteine, measured and timed at the clinic, plus drugs the veterinarian chooses for methemoglobinemia in cats. Those are hospital choices, and this page lists no milligram dose for any of them. Do not start a human mucolytic or supplement as a stand-in while you travel.",
        },
        {
          type: "p",
          text: "Blood tests track liver values, red blood cell oxygen-carrying capacity, electrolytes, and clotting as the case unfolds. Severe liver failure may need a longer fluid plan, clotting support, or referral. Early presentation still improves the odds even when the pet looked fine an hour ago.",
        },
        {
          type: "p",
          text: "Why this page has no milligram chart: a home table is how human tablets get split for pets. The safe instruction is never to dose a dog or cat from a human acetaminophen label. Counting the missing tablets is useful, and converting that count into a dose to give is not.",
        },
        {
          type: "p",
          text: "The fees below are planning ranges for a pet seen promptly, not a quote from a named clinic. Liver failure or severe methemoglobinemia costs more. The Australian figures follow about 1.5 Australian dollars per US dollar and are rounded as planning bands, not a hospital tariff.",
        },
        {
          type: "table",
          headers: ["Care the hospital may provide", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Exam, oxygen, and decontamination", "$600–$1,500", "£450–£1,200", "A$900–A$2,300"],
            ["Antidote protocol, fluids, and monitoring", "$1,800–$4,500", "£1,400–£3,400", "A$2,700–A$6,800"],
            ["Severe liver failure or methemoglobinemia crisis", "$3,500–$10,000", "£2,700–£7,500", "A$5,300–A$15,000"],
          ],
        },
        {
          type: "p",
          text: "Ask which signs mean a return the same night, including new brown gums, labored breathing, yellowing of the eyes, or collapse. Skip every pain tablet from the bathroom cabinet until the clinic names the next drug. A liver recheck is part of discharge even when the pet ate a meal and seemed bright.",
        },
        {
          type: "links",
          items: [
            { href: "/medications/ibuprofen", label: "Why ibuprofen is a separate stomach and kidney emergency" },
            { href: "/medications/carprofen", label: "Why a dog NSAID is not a license to add human tablets" },
            { href: "/medications/diphenhydramine", label: "Diphenhydramine safety if a combination tablet was used" },
            { href: "/emergency/chocolate-toxicity", label: "Dark chocolate poisoning if cocoa was also eaten" },
            { href: "/nutrition/grapes-raisins", label: "Grape toxicity if fruit was in the same incident" },
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
          text: "Owners usually ask whether one tablet counts for a cat, whether paracetamol differs from Tylenol, and whether an antidote exists. The answers below are triage ranges for dogs and cats. They do not replace the hotline for this pet's weight in pounds (kilograms).",
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
