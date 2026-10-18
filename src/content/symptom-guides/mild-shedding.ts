import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const mildSheddingGuide: EmergencyLongGuide = {
  title: "Mild Seasonal Shedding in Rabbits and Guinea Pigs: Triage Guide",
  lede: "This Pet Safety Hub guide helps owners in the United States, the United Kingdom, and Australia sort a light, even seasonal shed from skin disease or pain that needs a clinic. The usual level is Code Green when the pet eats hay and passes normal droppings. Bald skin, bleeding scratch lines, or a hunched pet needs care.",
  sections: [
    {
      heading: "1. Quick Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "A light, even shed in a rabbit or guinea pig who is eating hay and passing normal droppings can be groomed gently at home. Confirm appetite and pellet volume first. Stop brushing if the skin is red or breathing becomes hard.",
        },
      ],
    },
    {
      heading: "2. Three-Tier Clinical Triage",
      blocks: [
        {
          type: "p",
          text: "Seasonal coat blow produces loose undercoat in a fairly even pattern. Clumps with raw skin, moving specks, or a pet who stops eating are not cosmetic. Use the tier that matches coat and whole-body health together.",
        },
        {
          type: "p",
          text: "Part the coat and look for bald patches, dandruff, or moving specks. Watch posture and appetite so shedding is not the only change you notice. Guinea pigs with a limp or swollen foot need a different pathway than a simple shed.",
        },
      ],
    },
    {
      heading: "Code Green · Monitor",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Green fits a light, even shed in a bright rabbit or guinea pig with strong hay appetite and normal dropping volume. Skin under the coat looks intact, and they move without hunching. Gentle brushing of loose undercoat can sit here.",
        },
        {
          type: "p",
          text: "Brush in short sessions and stop if they struggle to breathe or the skin reddens. Book a veterinarian if bald patches, crusts, or itch to the point of self-trauma appear. Stopped eating or fewer droppings leave Code Green the same day.",
        },
      ],
    },
    {
      heading: "Code Yellow · Urgent, 12–24 hours",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Yellow fits patchy loss, heavy dandruff, barbering suspicion from a cage mate, or itch that interrupts normal rest while appetite still holds. Book an exotic-friendly veterinarian within 12 to 24 hours.",
        },
        {
          type: "p",
          text: "A guinea pig with mild coat change plus reduced activity also sits here. Do not stretch this tier if droppings shrink or teeth grinding starts.",
        },
      ],
    },
    {
      heading: "Code Red · Emergency, within 60 minutes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Red is stopped eating, loud teeth grinding, fewer or no droppings, raw bleeding skin, labored breathing, a swollen painful foot in a guinea pig, or hair coming out in clumps after a new medicine or toxin. Go to emergency exotic care now.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/rabbit-gi-stasis", label: "Rabbit GI stasis guide if droppings and appetite fall" },
            {
              href: "/symptoms/small-pets/teeth-grinding-hunching",
              label: "Teeth grinding and hunching triage",
            },
            { href: "/symptoms/small-pets/fewer-droppings", label: "Fewer droppings triage" },
          ],
        },
      ],
    },
    {
      heading: "3. At-Home Observation Checklist",
      blocks: [
        {
          type: "p",
          text: "Confirm hay intake and a normal volume of droppings before you focus on the coat. Brush loose undercoat gently. Stop if the skin is red or the pet struggles to breathe.",
        },
        {
          type: "p",
          text: "Part the coat in a few places and look for bald patches, crusts, or moving specks. Watch posture. A hunched rabbit with shedding is a pain problem first, not a grooming problem.",
        },
        {
          type: "table",
          headers: ["Check", "Reassuring finding", "Leave for care"],
          rows: [
            ["Coat pattern", "Light, even loose undercoat", "Bald patches, crusts, or bleeding scratch lines: clinic soon or now"],
            ["Hay and droppings", "Eager hay, normal pellets", "Stops eating, grinding, or fewer droppings: go now"],
            ["Skin under coat", "Intact, not raw", "Raw, bleeding, or heavy crusts: go now or same day"],
            ["Breathing and feet", "Easy breathing, sound feet", "Labored breathing or swollen guinea pig foot: go now"],
            ["Cage mates", "No chasing or chewing each other", "Barbering with skin damage, or toxin/medicine hair loss: clinic now"],
          ],
        },
        {
          type: "p",
          text: "Do not use dog flea products, essential oils, peroxide dips, or charcoal. Do not shave large areas at home. Do not ignore gut signs because the coat looks dramatic.",
        },
      ],
    },
    {
      heading: "4. Top Common Clinical Causes",
      blocks: [
        {
          type: "p",
          text: "These causes run from a normal seasonal coat blow to mites and concurrent gut pain. Whole-pet triage matters more than how much fur is on the brush.",
        },
      ],
    },
    {
      heading: "A normal seasonal coat blow",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Rabbits and some guinea pigs release undercoat with season or indoor light changes. The pattern is diffuse, appetite stays strong, and droppings stay normal. Gentle grooming and hay continuity are enough while those remain true.",
        },
      ],
    },
    {
      heading: "Barbering by a cage mate",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A dominant companion may chew fur into neat bald patches, often on the flanks or face. Skin may stay intact at first. Separating animals and getting a clinic skin check prevents escalation to wounds.",
        },
      ],
    },
    {
      heading: "Mites or a skin infection",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Mites and infections cause itch, dandruff, crusts, and uneven loss. Moving specks or intense scratching need veterinary diagnosis. Pet-store sprays are not a substitute for an exam.",
        },
      ],
    },
    {
      heading: "Pain or gut disease that coincides with shedding",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A rabbit can shed while gut stasis or dental pain starts. If droppings fall or grinding begins, follow those emergency pathways even if the brush is full of fur.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/rabbit-gi-stasis", label: "Rabbit GI stasis emergency guide" },
            { href: "/symptoms/small-pets/fewer-droppings", label: "Fewer droppings triage" },
            {
              href: "/symptoms/small-pets/teeth-grinding-hunching",
              label: "Teeth grinding and hunching triage",
            },
          ],
        },
      ],
    },
    {
      heading: "5. Safe Supportive Care and Dangerous Mistakes",
      blocks: [
        {
          type: "p",
          text: "Supportive care for Code Green shedding is short gentle brush sessions, unlimited hay, clean water, and monitoring droppings daily. Remove large mats only if you can do so without cutting skin; otherwise leave mats for a clinic.",
        },
        {
          type: "p",
          text: "Do not use dog or cat flea chemicals, essential oils, peroxide baths, or human steroid creams. Do not give human pain medicine for itch. Do not delay care for a guinea pig with a swollen foot because the coat is also shedding.",
        },
        {
          type: "p",
          text: "The clinic may scrape skin, check for mites, assess teeth and gut motility, and advise on pair housing. Prescription parasite treatment belongs to that visit.",
        },
        {
          type: "p",
          text: "Code Yellow skin visits in the United States, the United Kingdom, and Australia can often be daytime exotic practice. Gut pain, breathing effort, or raw bleeding skin go to emergency hours.",
        },
      ],
    },
    {
      heading: "6. Tools That Help After You Have Triaged",
      blocks: [
        {
          type: "p",
          text: "If appetite or droppings change, the Pet Safety Hub 24/7 Vet Finder locates an open clinic. The Free AI Pet Assistant can help you describe coat pattern photos, and that chat is not a diagnosis.",
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
          text: "Owners usually ask how much brushing is safe, when shedding is mites, and when fur loss means an emergency. The answers below are triage ranges for small pets in the United States, the United Kingdom, and Australia.",
        },
      ],
    },
    {
      heading: "How much can I brush during a seasonal shed?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Brush loose undercoat in short sessions if the pet stays calm and breathing stays easy. Stop for red skin, struggling, or open-mouth effort. Hay appetite and normal droppings must stay intact during any grooming plan.",
        },
      ],
    },
    {
      heading: "When should I suspect mites instead of a normal shed?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Suspect mites or infection with patchy loss, heavy dandruff, crusts, intense itch, or moving specks. Book an exotic-friendly veterinarian within 12 to 24 hours rather than layering pet-store sprays.",
        },
      ],
    },
    {
      heading: "When is shedding an emergency?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Stopped eating, grinding, fewer droppings, raw bleeding skin, labored breathing, a swollen guinea pig foot, or sudden clumpy loss after a toxin or medicine needs emergency care within 60 minutes. A light even shed in a bright hay-eating pet can stay Code Green.",
        },
      ],
    },
  ],
};
