import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

const faqs = [
  {
    question: "Can one grape hurt a dog?",
    answer:
      "Yes, one grape or one raisin can injure some dogs, and other dogs have eaten more without the same result. The risk is not a reliable count of ounces (grams). Treat any amount as an emergency and call before the dog looks sick.",
  },
  {
    question: "Are raisins worse than fresh grapes?",
    answer:
      "Raisins, sultanas, and dried currants from grapes are concentrated, so a smaller volume can carry the same toxin as fresh fruit. Fresh grapes are still unsafe. Call with the form that was eaten, and do not treat dried fruit as a smaller problem.",
  },
  {
    question: "Should I make my dog vomit after grapes?",
    answer:
      "No, do not induce vomiting unless a veterinarian tells you to for this dog. Hydrogen peroxide can burn the stomach, and inhaled vomit can injure the lungs. If the dog is drowsy, weak, or already vomiting, a home attempt makes the trip more dangerous.",
  },
  {
    question: "How soon do grape poisoning signs start?",
    answer:
      "Vomiting or lethargy can start within a few hours, and some dogs still look normal then. Kidney failure often shows 24 to 72 hours later as thirst, nausea, or little urine. A quiet first evening is not an all-clear.",
  },
] as const;

export const grapesRaisinsDogsGuide: EmergencyLongGuide = {
  title: "Can Dogs Eat Grapes and Raisins?",
  lede: "This guide is for a dog in the United States, the United Kingdom, or Australia who may have eaten grapes, raisins, sultanas, or dried currants. It explains the kidney toxin, the first-day timeline, and what the hospital may do. It does not clear a small handful.",
  faqs: [...faqs],
  sections: [
    {
      heading: "1. Quick Clinical Verdict (At a Glance)",
      blocks: [
        {
          type: "snippet",
          text: "No, dogs cannot eat grapes, raisins, sultanas, or dried currants under any circumstances. Even one grape can trigger acute kidney failure, and the risk is not predicted by how many were eaten. Call a poison hotline within 60 minutes, before the dog looks sick.",
        },
        {
          type: "p",
          text: "The triage for a known ingestion is Code Red, an emergency within 60 minutes, because the useful window for decontamination is early. A dog who looks bright can still lose kidney function over the next two or three days. Do not wait for vomiting to stop on its own.",
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
          text: "Tartaric acid, and the potassium bitartrate that travels with it, is the leading identified kidney toxin in grapes and raisins. It targets the tubules inside the kidney, and the injury can progress after the fruit has left the stomach. Dogs differ, so a small handful in one dog is not a safe test for the next.",
        },
        {
          type: "p",
          text: "Fresh grapes, raisins, sultanas, and dried currants made from grapes all count, including fruit in trail mix, cereal, and baked goods. Juice and pomace are not a free pass, and the hotline should hear about those too. A grape-flavored candy that contains no fruit is a different product, so read the label before you assume it is safe.",
        },
        {
          type: "p",
          text: "Dried currants in baking are often Zante currants, which are small dried grapes, and those belong in this emergency. True currants in the Ribes group are a different plant. If the package does not say which one you have, treat it as the grape form and let the hotline sort the label.",
        },
        {
          type: "p",
          text: "There is no reliable toxic threshold in ounces (grams) that tells you this dog will be spared. Some dogs develop acute kidney injury after a small amount, and some dogs eat more and do not. That scatter is why this site publishes no safe serving and no leftover count to sit out at home.",
        },
        {
          type: "p",
          text: "In the United States the FDA and FDA-CVM oversee animal drugs while AAFCO sets food profiles, and in the United Kingdom the VMD licenses veterinary medicines while DEFRA, the FSA, and PFMA cover food safety. In Australia the APVMA registers veterinary chemicals and PFIAA represents pet-food makers. None of those bodies publishes a safe serving of grapes or raisins for dogs.",
        },
        {
          type: "p",
          text: "Cats are not the proven kidney cases that dogs are, and there is still no established safe cat serving in ounces (grams). A cat who ate the same fruit needs a same-day call, not a home experiment. The dog guide does not replace that conversation.",
        },
      ],
    },
    {
      heading: "3. Clinical Symptoms and Triage Timeline",
      blocks: [
        {
          type: "p",
          text: "Early signs are mostly stomach upset, and they do not measure how the kidneys will look tomorrow. A dog can vomit and then seem better while the tubules are still being injured. Use the clock from the time of eating, not from the time the dog last looked cheerful.",
        },
        {
          type: "table",
          headers: ["Time after eating", "What owners often see"],
          rows: [
            ["0–2 hours", "Normal appearance, drooling, or the start of vomiting"],
            ["2–6 hours", "Vomiting, diarrhea, abdominal pain, or lethargy"],
            ["12–24 hours", "Thirst, more vomiting, or a dog who only looks mildly ill"],
            ["24–72 hours", "Rising kidney injury, nausea, or little or no urine"],
          ],
        },
        {
          type: "p",
          text: "The 24 to 72 hour window is when kidney failure declares itself, often as increased thirst, a sore belly, or urine that slows and then stops. Waiting for that stage throws away the hours when intravenous fluids can still protect the kidneys. Collapse, repeated vomiting, or no urine is a hospital trip within 60 minutes.",
        },
        {
          type: "table",
          headers: ["Situation", "Triage"],
          rows: [
            ["Any known grape, raisin, sultana, or dried currant", "Code Red · Emergency, within 60 minutes"],
            ["Vomiting that will not stop, weakness, or no urine", "Code Red · Emergency, within 60 minutes"],
            ["A grape-flavored product with no fruit on the label", "Call and read the ingredients before you wait"],
          ],
        },
        {
          type: "p",
          text: "Code Green does not apply to a known ingestion, even when the dog is eating breakfast. A bright dog is still in the danger window until a veterinarian has decided that monitoring or fluids are enough. Bring every animal who shared the fruit, each with a weight in pounds (kilograms).",
        },
      ],
    },
    {
      heading: "4. Immediate Emergency Next Steps",
      blocks: [
        {
          type: "p",
          text: "Call one poison line while another person moves the dog away from the remaining fruit. Have a photo of the package, the amount missing in ounces (grams), the dog's weight in pounds (kilograms), and the clock time eaten. A consultation fee may apply to the United States lines.",
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
          text: "Animal PoisonLine and the Australian Animal Poisons Centre handle the toxin question. The RSPCA number is the England and Wales cruelty and advice line, and it is not a grape calculator or a reason to delay the hospital. If the dog is collapsed or vomiting without stopping, leave while the call continues.",
        },
        {
          type: "callout",
          text: "If the dog is weak, vomiting without stopping, or has not passed urine, do not wait for a call back. Use the 24/7 Vet Finder and bring the package plus the weight in pounds (kilograms). Early fluids matter more than a perfect count of the fruit.",
          href: "/tools/vet-finder",
          label: "Find a 24/7 emergency hospital",
        },
        {
          type: "p",
          text: "Pick up loose grapes, open boxes of raisins, trail mix, and any baked good that used dried fruit. Shut the dog away from the bin. If a second pet ate from the same bowl, start a separate note with that animal's weight in pounds (kilograms).",
        },
        {
          type: "p",
          text: "Photograph the ingredient panel and write how much is missing, in ounces (grams), rather than the whole package if some remains. Note when the dog was last seen normal. Look at the gums, and do not put your hands in the mouth of a dog who is weak or fitting.",
        },
        {
          type: "p",
          text: "Offer no food, water, milk, oil, or medicine unless the veterinarian on the phone tells you to. Carry a small dog to the car, and let a steady large dog walk rather than run. Keep the head level or slightly down if they retch, so vomit is less likely to be inhaled.",
        },
      ],
    },
    {
      heading: "When home vomiting is contraindicated",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Do not make the dog vomit unless a veterinarian tells you to for this specific dog. Hydrogen peroxide can burn the throat and stomach, and this page does not give a peroxide dose. Home vomiting is the wrong step if the dog is already vomiting, drowsy, weak, trembling, or having trouble breathing.",
        },
        {
          type: "p",
          text: "It is also the wrong step hours later, when the fruit is no longer in the stomach, or when a short-nosed dog may inhale vomit. Salt, oils, and milk do not bind tartaric acid. Activated charcoal is a clinic treatment, and this page lists no charcoal dose.",
        },
      ],
    },
    {
      heading: "5. Veterinary Diagnosis and Treatment Protocols",
      blocks: [
        {
          type: "p",
          text: "The team checks gum color, hydration, vomiting, and urine output before they decide whether the stomach can still be emptied. If the dog is stable and the fruit was recent, they may induce vomiting with a veterinary drug. That choice is theirs, and it is not a kitchen step.",
        },
        {
          type: "p",
          text: "Some hospitals give activated charcoal after vomiting is controlled, and others move straight to intravenous fluids because tartaric acid is absorbed quickly. Neither choice is a dose you can copy, and there is no specific antidote that reverses the kidney toxin. Blood and urine tests track kidney values, electrolytes, and how much urine is produced.",
        },
        {
          type: "p",
          text: "Intravenous fluids are the main protection, often continued for about 48 hours while creatinine and urine output are rechecked. A dog who stops making urine may need a longer stay or a referral where dialysis exists. Many dogs go home if treatment starts before the kidneys fail, which is why the first call cannot wait for lethargy.",
        },
        {
          type: "p",
          text: "The fees below are planning ranges for a dog who is seen promptly, not a quote from a named clinic. An after-midnight arrival or kidney failure costs more. The Australian figures follow about 1.5 Australian dollars per US dollar and are rounded as planning bands, not a hospital tariff.",
        },
        {
          type: "table",
          headers: ["Care the hospital may provide", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Exam and decontamination", "$500–$1,200", "£400–£900", "A$800–A$1,800"],
            ["Two-day fluids and kidney tests", "$1,500–$3,500", "£1,200–£2,700", "A$2,300–A$5,300"],
            ["Kidney failure and a longer stay", "$3,500–$8,000", "£2,700–£6,000", "A$5,300–A$12,000"],
          ],
        },
        {
          type: "p",
          text: "Before discharge, ask which signs mean a return the same night, including new vomiting, weakness, or no urine. Offer water only if the clinic allowed it, and keep the usual diet off the menu until they say otherwise. A recheck of kidney values is part of the plan even when the dog ate and then seemed fine.",
        },
        {
          type: "links",
          items: [
            { href: "/nutrition/xylitol", label: "Xylitol ingestion if the trail mix was sugar-free" },
            { href: "/nutrition/onions-garlic", label: "Onion and garlic poisoning if the food was seasoned" },
            { href: "/health-symptoms/dogs/vomiting-yellow-bile", label: "Yellow bile vomiting if the dog is already sick" },
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
          text: "Owners usually ask whether one grape counts, whether dried fruit is worse, and whether to cause vomiting. The answers below are triage ranges for dogs. They do not replace the hotline for this dog's weight in pounds (kilograms).",
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
