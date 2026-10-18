import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

const faqs = [
  {
    question: "Is lily pollen enough to poison a cat?",
    answer:
      "Yes, pollen, a leaf fragment, a flower, or the vase water can be enough, and the cat does not need a large meal of the plant. Grooming pollen off the coat still counts as exposure. Call within 30 minutes, before the cat looks sick.",
  },
  {
    question: "Are peace lilies the same emergency?",
    answer:
      "No, peace lilies and calla lilies are different plants and usually irritate the mouth rather than causing this kidney failure. A mixed bouquet can still hide a true lily. Send a photo to the hotline instead of deciding from the word lily on a tag.",
  },
  {
    question: "Should I make my cat vomit after a lily?",
    answer:
      "No, do not induce vomiting at home. Cats inhale vomit easily, and hydrogen peroxide is not a cat remedy on this page. The clinic will decide whether the stomach can be emptied, and that decision is not a kitchen step.",
  },
  {
    question: "How long do lily kidney signs take?",
    answer:
      "Vomiting or a skipped meal can start within hours, and the cat may still look only mildly off. Kidney values often rise over 24 to 72 hours, and urine can slow or stop. Early intravenous fluids, before those values climb, are what change the outcome.",
  },
] as const;

export const lilyToxicityGuide: EmergencyLongGuide = {
  title: "Lily Toxicity in Cats",
  lede: "This guide is for a cat in the United States, the United Kingdom, or Australia who touched or ate a true lily or a daylily. Pollen, leaves, flowers, and vase water all count. It explains the kidney timeline and what the hospital may do, and it does not offer a home antidote.",
  faqs: [...faqs],
  sections: [
    {
      heading: "1. Quick Clinical Verdict (At a Glance)",
      blocks: [
        {
          type: "snippet",
          text: "True lilies and daylilies are an acute kidney emergency in cats, including pollen, leaves, flowers, and vase water. A small lick or groomed pollen can be enough to start kidney injury. Call a poison hotline within 30 minutes and go to an emergency hospital.",
        },
        {
          type: "p",
          text: "The triage is Code Red, an emergency within 60 minutes, and sooner when you already know there was contact. Kidney failure can be advanced by the time a cat looks very ill, which is why a bright cat is not a reason to wait overnight. There is no safe nibble and no home antidote.",
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
          text: "True lilies in the Lilium group, including Easter and Asiatic lilies, and daylilies in the Hemerocallis group, contain a water-soluble toxin that causes acute kidney failure in cats. Every part of the plant counts, including vase water. The exact molecule is still not fully named, and that gap does not make a smaller exposure safe.",
        },
        {
          type: "p",
          text: "The injury hits the kidney tubules. Cats who are treated with intravenous fluids before the kidney values rise often recover, and cats who are already in failure have a much worse outlook. That difference is why the clock starts at contact, not at the first skipped meal.",
        },
        {
          type: "p",
          text: "Dogs who chew these plants usually get a stomach upset rather than this kidney syndrome, and they still need a call if a large amount was eaten. Peace lilies (Spathiphyllum) and calla lilies (Zantedeschia) are different plants whose crystals irritate the mouth. A supermarket bouquet can contain a true lily beside those safer-sounding names, so use a photo.",
        },
        {
          type: "p",
          text: "Pollen on the coat is exposure, because cats groom. Washing is useful only if the cat allows a damp cloth without a fight that spreads pollen into the mouth. Do not immerse a struggling cat, and do not assume a quick wipe replaced the veterinary visit.",
        },
        {
          type: "p",
          text: "In the United States the FDA and FDA-CVM do not license a home antidote for lily exposure, and AAFCO pet-food profiles do not cover a bouquet. In the United Kingdom the VMD and DEFRA do not either, and in Australia the APVMA does not register a household lily antidote. The treatment that changes survival is clinic fluids, started early.",
        },
      ],
    },
    {
      heading: "3. Clinical Symptoms and Triage Timeline",
      blocks: [
        {
          type: "p",
          text: "The first signs are drooling, vomiting, or a cat who suddenly refuses food, and some cats show almost nothing at first. Hiding and lethargy follow. Kidney failure is the later stage, with changes in urine that owners often notice only when the litter box stays dry.",
        },
        {
          type: "table",
          headers: ["Time after contact", "What owners often see"],
          rows: [
            ["0–2 hours", "Drooling, vomiting, grooming pollen, or a cat who still looks normal"],
            ["2–6 hours", "More vomiting, hiding, or refusing food"],
            ["12–24 hours", "Continued nausea and lethargy, sometimes with normal early bloodwork"],
            ["24–72 hours", "Rising kidney values, and urine that slows or stops if untreated"],
          ],
        },
        {
          type: "p",
          text: "A normal blood test on the first evening does not end the case, because the kidneys can still be declining. The dangerous change is often clear by 24 to 72 hours. No urine, collapse, or vomiting that will not stop is a hospital trip within 60 minutes.",
        },
        {
          type: "table",
          headers: ["Situation", "Triage"],
          rows: [
            ["Any contact with a true lily or daylily, including pollen or vase water", "Code Red · Emergency, within 60 minutes"],
            ["Vomiting, hiding, or not eating after a bouquet", "Code Red · Emergency, within 60 minutes"],
            ["Peace lily or calla lily only, confirmed by photo", "Call the same day for mouth irritation, and confirm the plant"],
          ],
        },
        {
          type: "p",
          text: "Code Green does not apply to a confirmed true lily. Code Yellow, a visit within 12 to 24 hours, is too late for the best fluid window. If more than one cat had access to the flowers, each cat needs their own plan.",
        },
      ],
    },
    {
      heading: "4. Immediate Emergency Next Steps",
      blocks: [
        {
          type: "p",
          text: "Move the cat away from the plant and call a poison line with a photo of the flower and any shop label. Say whether pollen, a leaf, a petal, or vase water was involved, and when you last saw the cat near it. A consultation fee may apply to the United States lines.",
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
          text: "Animal PoisonLine and the Australian Animal Poisons Centre can help identify the plant. The RSPCA number is the England and Wales cruelty and advice line, and it is not a lily kidney calculator. If the cat is collapsed or vomiting without stopping, travel while the call continues.",
        },
        {
          type: "callout",
          text: "Do not wait for vomiting to start. Use the 24/7 Vet Finder, bring a leaf or the shop label, and tell them a lily may be involved so fluids can be ready. A photo on your phone is enough if the plant cannot travel safely.",
          href: "/tools/vet-finder",
          label: "Find a 24/7 emergency hospital",
        },
        {
          type: "p",
          text: "If the cat allows it, wipe visible pollen off the coat with a damp cloth and stop if they struggle. Put the flowers and the vase where no pet can reach them, including the water. Check every cat in the house, not only the one you saw sniffing the bouquet.",
        },
        {
          type: "p",
          text: "Offer no food, milk, or medicine unless the veterinarian tells you to. Do not give a human pain tablet for the vomiting. Put the cat in a carrier they already know, with a towel, and keep the carrier level on the seat.",
        },
      ],
    },
    {
      heading: "When home vomiting is contraindicated",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Do not induce vomiting in a cat at home. Cats are easy to injure with a home emetic, hydrogen peroxide is not a cat treatment here, and this page does not give a peroxide dose. Vomiting is also the wrong step if the cat is already vomiting, weak, or struggling to breathe.",
        },
        {
          type: "p",
          text: "Hours after ingestion, the toxin is no longer a leaf you can bring back up, and fluids matter more than a late attempt to empty the stomach. Activated charcoal, if the clinic uses it, is given there so the cat does not inhale the powder. This page lists no charcoal dose and no home slurry.",
        },
      ],
    },
    {
      heading: "5. Veterinary Diagnosis and Treatment Protocols",
      blocks: [
        {
          type: "p",
          text: "The team confirms the plant, checks hydration, and decides whether decontamination is still safe. If the contact was recent and the cat is stable, they may empty the stomach with a veterinary method and consider activated charcoal. That sequence is not something to start in the kitchen while you pack the carrier.",
        },
        {
          type: "p",
          text: "There is no antidote. Intravenous fluids for about 48 to 72 hours are the treatment that protects the kidneys when they are started before failure is established. Blood and urine tests are repeated through that stay, because a single normal result on arrival does not finish the monitoring.",
        },
        {
          type: "p",
          text: "Cats who already have rising kidney values need a longer hospital plan, and some need referral if urine output stops. Many cats who arrive early and receive fluids go home with a good outlook. Waiting until the litter box is dry gives away that advantage.",
        },
        {
          type: "p",
          text: "The fees below are planning ranges for a cat seen promptly, not a quote from a named clinic. A cat who is already in kidney failure costs more. The Australian figures follow about 1.5 Australian dollars per US dollar and are rounded as planning bands, not a hospital tariff.",
        },
        {
          type: "table",
          headers: ["Care the hospital may provide", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Exam and decontamination", "$400–$1,000", "£300–£800", "A$600–A$1,500"],
            ["48–72 hours of intravenous fluids", "$1,500–$4,000", "£1,200–£3,000", "A$2,300–A$6,000"],
            ["Established kidney failure", "$3,500–$8,000", "£2,700–£6,000", "A$5,300–A$12,000"],
          ],
        },
        {
          type: "p",
          text: "Before you leave, ask which signs mean a return the same night, including new vomiting, hiding, or a dry litter box. Remove every lily from the house, not only the stem the cat chewed. A recheck of kidney values is part of the plan even when the cat is eating again.",
        },
        {
          type: "links",
          items: [
            { href: "/nutrition/grapes-raisins", label: "Grape and raisin toxicity if fruit was also involved" },
            { href: "/nutrition/onions-garlic", label: "Onion and garlic poisoning from table scraps" },
            { href: "/medications/ibuprofen", label: "Ibuprofen toxicity if a human pain tablet was given" },
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
          text: "Owners usually ask whether pollen counts, whether every plant named lily is the same, and whether to cause vomiting. The answers below are triage ranges for cats. They do not replace a photo identification by the hotline or the clinic.",
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
