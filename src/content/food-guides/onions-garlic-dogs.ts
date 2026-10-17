import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

const faqs = [
  {
    question: "Is cooked onion still toxic to dogs?",
    answer:
      "Yes, cooking, frying, and drying do not destroy the allium toxin, and powdered onion in soup or baby food still counts. Broth and seasoned leftovers are enough to matter. A cooked meal is not a safer form than a raw slice.",
  },
  {
    question: "Why can anemia wait several days?",
    answer:
      "The toxin damages red blood cells, and the body removes those cells over the following days rather than in the first hour. Pale gums, fast breathing, or dark urine often show up two to five days later. A bright dog the same night is not an all-clear.",
  },
  {
    question: "Is garlic a safe flea remedy?",
    answer:
      "No, garlic is an allium and is more concentrated than onion, so it is not a flea treatment for dogs or cats. Powder, oil, and tablets marketed for pets can still cause the same red-cell injury. Use a flea plan the veterinarian named.",
  },
  {
    question: "Should I make my dog vomit after onion?",
    answer:
      "No, do not induce vomiting unless a veterinarian tells you to for this dog. Hydrogen peroxide can burn the stomach, and a weak dog can inhale the vomit. If the meal was hours ago, the useful step is a clinic plan, not a late home attempt.",
  },
] as const;

export const onionsGarlicDogsGuide: EmergencyLongGuide = {
  title: "Can Dogs Eat Onions and Garlic?",
  lede: "This guide is for a dog in the United States, the United Kingdom, or Australia who ate onion, garlic, chives, or leeks. Raw, cooked, powdered, and broth forms all count. It explains the delayed red-cell injury and what the hospital may do, and cats are at least as sensitive.",
  faqs: [...faqs],
  sections: [
    {
      heading: "1. Quick Clinical Verdict (At a Glance)",
      blocks: [
        {
          type: "snippet",
          text: "No, dogs should not eat onions, garlic, chives, or leeks in any form, including powder and broth. A meal just eaten is an emergency, and anemia can wait several days, so a bright dog tonight is not an all-clear. Call a poison hotline the same day with the recipe and the weight.",
        },
        {
          type: "p",
          text: "A large amount eaten within the last hour or two is Code Red, an emergency within 60 minutes, so the clinic can still decide about decontamination. A small seasoned bite found later, in a dog who is still bright, is Code Yellow and still needs a same-day call rather than an overnight wait. There is no safe teaspoon.",
        },
        {
          type: "p",
          text: "This page was researched and compiled by the PetAuthority Editorial Team from published clinical references, not from an examination. It does not diagnose an individual animal or replace a clinic visit. A licensed veterinarian who has seen the animal still has to set the treatment.",
        },
        {
          type: "links",
          items: [
            {
              href: "/editorial-standards",
              label: "PetAuthority editorial standards",
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
          text: "Onions, garlic, chives, and leeks are alliums, and their organosulfur compounds, including n-propyl disulfide, oxidize hemoglobin inside red blood cells. Allicin in garlic breaks down into that same family, so a garlic clove is not a milder onion. Powder and oil carry the same compounds as the whole plant.",
        },
        {
          type: "p",
          text: "Damaged cells form Heinz bodies and then rupture, which is a hemolytic anemia. The organ targeted first is the red cell, and the kidneys and the oxygen supply suffer if enough cells break. Pale gums, fast breathing, and red-brown urine are the visible end of that process, not the moment the toxin arrived.",
        },
        {
          type: "p",
          text: "Heat does not make the compounds safe. Powdered onion is concentrated, and a broth or a baby-food jar can hide it without an obvious slice on the plate. Garlic is more potent by weight than onion in published comparisons, which is why a flea remedy made from garlic is still a poison.",
        },
        {
          type: "p",
          text: "Cats are at least as sensitive, and powdered onion in broth is enough to matter for them. Some Asian breeds, including Akitas and Shiba Inus, are discussed as more prone to this red-cell injury. That note raises concern, and it does not make other breeds safe to share a seasoned pan.",
        },
        {
          type: "p",
          text: "This page does not publish a safe dose in teaspoons (grams). Injury is reported after meals that looked small once powder or broth was included, and a quiet evening does not measure the red-cell count three days later. The hotline needs the recipe and the weight in pounds (kilograms), not a home conversion.",
        },
        {
          type: "p",
          text: "In the United States the FDA and FDA-CVM oversee animal drugs while AAFCO sets pet-food profiles. In the United Kingdom the VMD licenses veterinary medicines while DEFRA, the FSA, and PFMA cover food safety. In Australia the APVMA registers veterinary chemicals, and none of them lists a safe allium portion for dogs or cats.",
        },
      ],
    },
    {
      heading: "3. Clinical Symptoms and Triage Timeline",
      blocks: [
        {
          type: "p",
          text: "The first hours may bring drooling, vomiting, or nothing at all. Owners often relax because the dog eats the next meal. The anemia is the second chapter, usually days later, and it is the part that becomes an oxygen emergency.",
        },
        {
          type: "table",
          headers: ["Time after eating", "What owners often see"],
          rows: [
            ["0–2 hours", "Drooling, vomiting, abdominal pain, or no signs"],
            ["2–6 hours", "Stomach upset, or a dog who already seems back to normal"],
            ["12–24 hours", "Often bright, which is the dangerous false recovery"],
            ["2–5 days", "Pale gums, fast breathing, weakness, or dark red-brown urine"],
          ],
        },
        {
          type: "p",
          text: "Collapse, pale gums, or a dog who cannot catch their breath is a hospital trip within 60 minutes, even if the meal was days ago. Dark urine means broken red cells are passing through, and it should not wait until morning. A dog who vomited once the first night can still reach this stage.",
        },
        {
          type: "table",
          headers: ["Situation", "Triage"],
          rows: [
            ["A meal or a large amount eaten in the last 1–2 hours", "Code Red · Emergency, within 60 minutes"],
            ["Any amount in a cat, or garlic given as a remedy", "Code Red · Emergency, within 60 minutes"],
            ["A small seasoned bite found later, pet still bright", "Code Yellow · Urgent, same day, do not wait overnight"],
            ["Pale gums, fast breathing, or dark urine days later", "Code Red · Emergency, within 60 minutes"],
          ],
        },
        {
          type: "p",
          text: "Code Green does not apply just because the dog is playing. The yellow path is only for a small, already-digested bite in a bright dog, and it still means a veterinarian the same day plus a plan to recheck the blood. It is not permission to see if the gums look pink next week.",
        },
      ],
    },
    {
      heading: "4. Immediate Emergency Next Steps",
      blocks: [
        {
          type: "p",
          text: "Save a sample of the food or a photo of the recipe, and call a poison line with the dog's weight in pounds (kilograms). Say whether the form was raw, cooked, powdered, or broth, and about how many ounces (grams) or teaspoons were in the portion. A consultation fee may apply to the United States lines.",
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
          text: "Animal PoisonLine and the Australian Animal Poisons Centre handle the toxin question. The RSPCA number is the England and Wales cruelty and advice line, and it is not an onion dose calculator. If the dog is collapsed, pale, or struggling to breathe, leave for the hospital while the call continues.",
        },
        {
          type: "callout",
          text: "Pale gums, collapse, or labored breathing cannot wait for a callback. Use the 24/7 Vet Finder and bring the food label or a photo of the pan. Mention onion or garlic even if the meal was two or three days ago.",
          href: "/tools/vet-finder",
          label: "Find a 24/7 emergency hospital",
        },
        {
          type: "p",
          text: "Take the leftovers away from every pet, including a cat who licked the pan. Baby food, gravies, and seasoned meat are common sources people do not call onion. Write the time the food was eaten, not only the time you noticed a soft stool.",
        },
        {
          type: "p",
          text: "Do not start oils, human antacids, or a flea tablet you already own as a fix. Offer the usual diet only if the dog is bright and the clinic has not told you to withhold food. A dog who is weak should not be fed or watered on the way if they cannot swallow safely.",
        },
      ],
    },
    {
      heading: "When home vomiting is contraindicated",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Do not induce vomiting unless a veterinarian tells you to for this dog. It is contraindicated if the dog is already vomiting, weak, pale, or struggling to breathe, because inhaled vomit becomes a second emergency. Hydrogen peroxide can burn the stomach, and this page does not give a peroxide dose.",
        },
        {
          type: "p",
          text: "A meal eaten many hours ago is also past the point of a useful home empty-out, and the red cells are the problem that remains. Activated charcoal, if a clinic uses it for a very recent ingestion, is measured there. Do not mix a charcoal slurry, salt, or oil at home, and this page lists no charcoal dose.",
        },
      ],
    },
    {
      heading: "5. Veterinary Diagnosis and Treatment Protocols",
      blocks: [
        {
          type: "p",
          text: "If the meal was recent and the dog is stable, the team may induce vomiting with a veterinary drug and then decide about activated charcoal. That window is short. A dog who ate yesterday is examined for anemia instead, and forcing vomiting then does not pull the toxin back out of the red cells.",
        },
        {
          type: "p",
          text: "There is no specific antidote. The hospital may start intravenous fluids, oxygen if the gums are pale, and anti-nausea care. A complete blood count looks for anemia and Heinz bodies, and it is often repeated over the next several days because the count can fall after the dog has gone home.",
        },
        {
          type: "p",
          text: "A transfusion is the support used when too few red cells remain to carry oxygen. Some clinicians add other hospital supportive care for oxidative injury, and those drugs are chosen and dosed there. This page does not list a milligram chart for any of them, and garlic supplements are not part of the repair.",
        },
        {
          type: "p",
          text: "The fees below are planning ranges, not a quote from a named clinic. A transfusion or several days of oxygen costs more than an early decontamination visit. The Australian figures follow about 1.5 Australian dollars per US dollar and are rounded as planning bands, not a hospital tariff.",
        },
        {
          type: "table",
          headers: ["Care the hospital may provide", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Same-day exam and decontamination", "$400–$1,000", "£300–£800", "A$600–A$1,500"],
            ["Blood counts over several days", "$600–$1,500", "£500–£1,200", "A$900–A$2,300"],
            ["Transfusion and oxygen support", "$2,000–$6,000", "£1,500–£4,500", "A$3,000–A$9,000"],
          ],
        },
        {
          type: "p",
          text: "Ask when the next blood count is due, often within two to five days, and which signs mean an earlier return. Those signs include new weakness, pale or yellow gums, fast breathing, and dark urine. Keep alliums out of leftovers, broths, and any homemade flea mixture.",
        },
        {
          type: "links",
          items: [
            { href: "/nutrition/onions-garlic-cats", label: "Onion and garlic guidance for cats" },
            { href: "/nutrition/grapes-raisins-dogs", label: "Grape and raisin kidney risk if fruit was in the same meal" },
            { href: "/health-symptoms/dogs/vomiting-yellow-bile", label: "Yellow bile vomiting if the stomach is already upset" },
            { href: "/emergency/chocolate-toxicity", label: "Dark chocolate poisoning if cocoa was also eaten" },
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
          text: "Owners usually ask whether cooking makes onion safe, why the dog looks fine tonight, and whether garlic can treat fleas. The answers below are triage ranges. They do not replace the hotline for this dog's weight in pounds (kilograms).",
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
