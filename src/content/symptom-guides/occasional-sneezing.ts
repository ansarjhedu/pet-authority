import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const occasionalSneezingGuide: EmergencyLongGuide = {
  title: "Cat Occasional Sneezing: When to Watch, When to Book, When to Go",
  lede: "This Pet Safety Hub guide helps owners in the United States, the United Kingdom, and Australia sort a few quiet sneezes from breathing trouble that needs a hospital now. The usual level for this sign is Code Green when the cat is eating and breathing quietly. Colored discharge, mouth ulcers, or any increase in breathing effort needs a clinic.",
  sections: [
    {
      heading: "1. Quick Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "A few sneezes in a cat who is eating and breathing with a closed mouth can often be watched. Yellow or bloody discharge, facial swelling, or open-mouth breathing needs care now. Right now, watch the chest from the side for extra belly effort.",
        },
      ],
    },
    {
      heading: "2. Three-Tier Clinical Triage",
      blocks: [
        {
          type: "p",
          text: "Cats sneeze when the nose is irritated by virus, dust, scent, or dental disease that drains forward. One sneeze after litter dust is different from a kitten who stops eating. Use the tier that matches the cat in front of you, and move up if breathing effort rises.",
        },
        {
          type: "p",
          text: "Confirm they are eating, drinking, and using the box. Look for eye or nose discharge. Clear and mild is less urgent than yellow, green, or bloody. Note any lily, cleaner, or smoke exposure.",
        },
      ],
    },
    {
      heading: "Code Green · Monitor",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Green fits a few sneezes in a bright adult who still eats, drinks, and breathes quietly through a closed mouth. Discharge is absent or a small amount of clear fluid. There is no facial swelling and no kitten in this group.",
        },
        {
          type: "p",
          text: "Watch for about 24 to 48 hours in a room with clean air and low dust litter if you already use it. Book a veterinarian if sneezing becomes frequent, appetite drops, or discharge turns colored. Open-mouth breathing leaves Code Green immediately.",
        },
      ],
    },
    {
      heading: "Code Yellow · Urgent, 12–24 hours",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Yellow fits repeated sneezing, colored nasal discharge, watery eyes, or a cat who is a little quieter but still eating some food. Book a veterinarian within 12 to 24 hours. Mouth ulcers or foul breath with nasal signs also sit here.",
        },
        {
          type: "p",
          text: "A kitten, a senior, or a cat with known herpesvirus flares belongs in this tier sooner. Mild clear discharge can sit here if sneezing is constant. Do not stretch this tier if they stop eating for much of a day.",
        },
      ],
    },
    {
      heading: "Code Red · Emergency, within 60 minutes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Red is open-mouth breathing aside from a brief pant when stressed, blue or pale gums, facial swelling, a nosebleed, or a kitten who becomes quiet and dehydrated. Sneezing after lily, strong cleaner, or smoke exposure also belongs here when the cat looks ill.",
        },
        {
          type: "p",
          text: "Carry the cat in a quiet carrier with good airflow. Do not chase them around the house for photos if breathing is hard. Call the hospital while you travel.",
        },
      ],
    },
    {
      heading: "3. At-Home Observation Checklist",
      blocks: [
        {
          type: "p",
          text: "Do these checks from a short distance first. Confirm eating, drinking, and litter use. Watch the chest from the side for belly effort or open-mouth breathing.",
        },
        {
          type: "p",
          text: "Look at discharge color without swabbing deep into the nose. Check gum color if they allow a gentle look. A resting cat often breathes about 20 to 30 times a minute with little belly motion.",
        },
        {
          type: "table",
          headers: ["Check", "Reassuring finding", "Leave for care"],
          rows: [
            ["Sneeze pattern", "A few sneezes, cat still bright", "Constant sneezing with appetite loss: same-day clinic"],
            ["Discharge", "None or mild clear fluid", "Yellow, green, or bloody discharge: book soon; nosebleed: go now"],
            ["Breathing", "Closed mouth, easy chest motion", "Open-mouth breathing or heavy belly effort: emergency hospital"],
            ["Eating", "Normal meals", "Kitten or adult not eating: same day or now if weak"],
            ["Exposure", "No toxin or smoke", "Lily, cleaner, or smoke with illness: go now"],
          ],
        },
        {
          type: "p",
          text: "Do not put human cold medicine, essential oils, or leftover eye drops in a cat's nose or mouth. Do not use peroxide or steam tents that overheat a small bathroom. Stress alone can worsen breathing.",
        },
      ],
    },
    {
      heading: "4. Top Common Clinical Causes",
      blocks: [
        {
          type: "p",
          text: "These causes run from mild viral irritation to foreign bodies and serious infection. More than one can be true. A veterinarian who examines the mouth and nose sorts this list.",
        },
      ],
    },
    {
      heading: "Mild viral upper-respiratory irritation",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Feline herpesvirus and calicivirus often cause sneezing, watery eyes, and sometimes ulcers. Many adult cats improve with supportive veterinary care, but kittens and cats who stop eating need earlier help. Home antivirals from a human cabinet are not appropriate.",
        },
      ],
    },
    {
      heading: "Dust, litter dust, or a scent in the home",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Fine litter dust, aerosols, and strong cleaners can trigger a short sneeze burst in an otherwise well cat. Improve ventilation and pause sprays. If sneezing continues after the air clears, book an exam rather than layering more scented products.",
        },
      ],
    },
    {
      heading: "Dental disease with nasal involvement",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Tooth root disease can drain into the nasal area and cause chronic sneezing or one-sided discharge. Bad breath and drooling are clues. Dental radiology and treatment belong in a clinic, not in a home tooth-scaling kit.",
        },
      ],
    },
    {
      heading: "Foreign body or a more serious respiratory infection",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Grass blades and other objects can lodge in the nose and cause sudden, intense sneezing. Bacterial or fungal disease and pneumonia need imaging and lab work. Breathing effort moves any of these to Code Red.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/lily-toxicity", label: "Lily toxicity if plant exposure is possible" },
            { href: "/symptoms/cats/hiding-and-not-eating", label: "Hiding and not eating triage" },
            { href: "/tools/vet-finder", label: "Open the 24/7 Vet Finder" },
          ],
        },
      ],
    },
    {
      heading: "5. Safe Supportive Care and Dangerous Mistakes",
      blocks: [
        {
          type: "p",
          text: "Supportive care for a Code Green adult is clean air, easy access to food and water, and a low-dust litter if you already have one. Warm, strong-smelling foods can encourage eating if the nose is stuffy, but do not force-feed a fighting cat at home.",
        },
        {
          type: "p",
          text: "Do not give human decongestants, ibuprofen, acetaminophen, or essential oils. Acetaminophen is especially dangerous in cats. Do not use peroxide or charcoal for sneezing.",
        },
        {
          type: "p",
          text: "The clinic may examine the mouth and eyes, test for common viruses when needed, and start prescription care. Oxygen and imaging come into play when breathing is labored.",
        },
        {
          type: "p",
          text: "Code Yellow cats in the United States, the United Kingdom, and Australia can often be seen by a daytime practice. Open-mouth breathing goes to an emergency hospital.",
        },
      ],
    },
    {
      heading: "6. Tools That Help After You Have Triaged",
      blocks: [
        {
          type: "p",
          text: "If breathing worsens, the Pet Safety Hub 24/7 Vet Finder locates an open clinic. The Free AI Pet Assistant can take a follow-up question about what to note, and that chat is not a reason to delay care.",
        },
        {
          type: "links",
          items: [
            { href: "/tools/vet-finder", label: "Open the 24/7 Vet Finder" },
            { href: "/tools/ai-assistant", label: "Open the Free AI Pet Assistant" },
          ],
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners usually ask how long sneezing can wait, what discharge color means, and whether human cold medicine is safe. The answers below are triage ranges for cats in the United States, the United Kingdom, and Australia.",
        },
      ],
    },
    {
      heading: "Can a few sneezes wait overnight?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Yes, a few sneezes in a bright adult with quiet closed-mouth breathing and a normal appetite can wait overnight. Colored discharge, a kitten, or anyone not eating should not wait that long. Open-mouth breathing should not wait at all.",
        },
      ],
    },
    {
      heading: "What discharge means I should book soon?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Yellow or green discharge, frequent sneezing, or eye crusting with reduced appetite belongs in a 12 to 24 hour visit. Bloody discharge or facial swelling needs faster care. Clear mild fluid alone can stay on a short watch if the cat is bright.",
        },
      ],
    },
    {
      heading: "Can I give human cold medicine to a cat?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No. Pet Safety Hub does not recommend human cold medicine, decongestants, or acetaminophen for cats. Those products can be toxic. Use veterinary care instead of the bathroom cabinet.",
        },
      ],
    },
  ],
};
