import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const routineMoltGuide: EmergencyLongGuide = {
  title: "Bird Routine Feather Molt vs Illness: Triage & Home Checks",
  lede: "This Pet Safety Hub guide helps owners in the United States, the United Kingdom, and Australia sort a gradual molt from feather loss that needs a clinic. The usual level for a true routine molt is Code Green when appetite, droppings, and breathing stay normal. Bald patches, bleeding, or a fluffed bird on the floor are not a routine molt.",
  sections: [
    {
      heading: "1. Quick Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "A gradual loss of worn feathers, with pin feathers and a normal appetite, is usually a molt. Confirm they are eating, playing, and perching as usual. A tail bob is unrelated to a normal molt and means emergency triage instead.",
        },
      ],
    },
    {
      heading: "2. Three-Tier Clinical Triage",
      blocks: [
        {
          type: "p",
          text: "Molting replaces old feathers with new ones in a patterned way. Symmetrical loss with visible pin feathers differs from one bald plucked patch or broken bleeding shafts. Use the tier that matches the bird in front of you.",
        },
        {
          type: "p",
          text: "Check droppings and breathing first. Keep baths and humidity available if they already enjoy them. Do not oil the skin or spray household conditioners on feathers.",
        },
      ],
    },
    {
      heading: "Code Green · Monitor",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Green fits gradual, fairly symmetrical feather replacement with pin feathers, normal appetite, normal droppings, and easy closed-beak breathing. The bird still plays and perches. Mild itch around new pins can sit here.",
        },
        {
          type: "p",
          text: "Support with usual diet, clean water for bathing if they like it, and reduced handling of sore pin feathers. Book a veterinarian if bald patches appear, weight drops, or behavior dulls. Bleeding shafts or floor-sitting leave Code Green the same day.",
        },
      ],
    },
    {
      heading: "Code Yellow · Urgent, 12–24 hours",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Yellow fits feather loss that looks patchy or one-sided, reduced preening with less play, or molt paired with slightly quieter behavior while breathing stays easy. Book an avian veterinarian within 12 to 24 hours.",
        },
        {
          type: "p",
          text: "A bird with a known skin history that flares during molt also sits here. Mild dandruff alone can be seen soon. Do not stretch this tier if fluffing and appetite loss arrive together.",
        },
      ],
    },
    {
      heading: "Code Red · Emergency, within 60 minutes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Red is broken bleeding feathers the bird cannot stop damaging, self-mutilation, fluffing with weight loss or no eating, labored breathing or cage-floor sitting, or contact with a cat or dog that caused injury. Go to avian-capable care now.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/avian-respiratory-distress",
              label: "Open the avian respiratory distress guide if breathing is labored",
            },
            { href: "/symptoms/birds/fluffed-and-quiet", label: "Fluffed and quiet triage" },
            { href: "/symptoms/birds/tail-bobbing", label: "Tail bobbing triage" },
          ],
        },
      ],
    },
    {
      heading: "3. At-Home Observation Checklist",
      blocks: [
        {
          type: "p",
          text: "Confirm they are eating, playing, and perching as usual. Look for symmetrical feather loss rather than one plucked bald spot. Check droppings and breathing before you focus on cosmetics.",
        },
        {
          type: "p",
          text: "Pin feathers look like waxy sheaths along the tract. A normal molt should not produce a tail bob. Keep baths available if they already use them; do not force a bath on a weak bird.",
        },
        {
          type: "table",
          headers: ["Check", "Reassuring finding", "Leave for care"],
          rows: [
            ["Feather pattern", "Gradual, fairly symmetrical loss with pin feathers", "Bald patches, broken bleeding shafts, or self-mutilation: clinic now or same day"],
            ["Appetite and play", "Eating and playing as usual", "Fluffed, not eating, or losing weight: go now or same day"],
            ["Breathing", "No bob, closed beak", "Labored breathing or floor-sitting: emergency hospital"],
            ["Droppings", "Normal volume and color", "Major change with dullness: same-day avian care"],
            ["Household pets", "No predator contact", "Cat or dog contact with injury: go now"],
          ],
        },
        {
          type: "p",
          text: "Do not pull pin feathers out to help. Do not apply oils, petroleum jelly, or human skin creams. Do not use peroxide on a bleeding follicle as your only plan when the bird is frantic.",
        },
      ],
    },
    {
      heading: "4. Top Common Clinical Causes",
      blocks: [
        {
          type: "p",
          text: "These causes run from a normal seasonal molt to infection and cage-mate injury. Pattern and whole-bird health sort this list better than feather count alone.",
        },
      ],
    },
    {
      heading: "A normal seasonal molt",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Many pet birds molt on a seasonal or light-cycle pattern, dropping worn feathers while new pins grow. Energy needs may rise slightly, so keep a balanced diet available. Bright behavior is the key reassurance.",
        },
      ],
    },
    {
      heading: "Feather-destructive behavior or skin irritation",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Plucking and chewing create bald patches that do not look like an even molt. Itch from irritation can drive the same pattern. An avian veterinarian should examine skin and feathers rather than adding bitter sprays at random.",
        },
      ],
    },
    {
      heading: "Infection or liver disease when molt is paired with illness",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Poor feather quality with dullness, dropping changes, or weight loss can signal systemic disease. Treat that as illness triage, not as a cosmetic molt to wait out.",
        },
      ],
    },
    {
      heading: "Injury from a cage mate or household pet",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Cage-mate fights and dog or cat contact can break feathers and skin. Cat saliva is especially dangerous. Bleeding or predator contact is Code Red even during molt season.",
        },
        {
          type: "links",
          items: [
            { href: "/symptoms/birds/fluffed-and-quiet", label: "Fluffed and quiet triage" },
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
          text: "Supportive care for a Code Green molt is usual food, clean water, optional bathing if they already enjoy it, and gentle handling around pin feathers. Extra protein comes from a veterinary-approved balanced diet, not from random kitchen leftovers.",
        },
        {
          type: "p",
          text: "Do not oil the skin, use human conditioners, or give ibuprofen or other human medicine for itch. Do not use peroxide or charcoal. Do not ignore breathing changes because feathers are falling.",
        },
        {
          type: "p",
          text: "The clinic may examine feather tracts, run bloodwork when illness is suspected, and separate cage mates if trauma is involved. Bleeding follicles are controlled in hospital when home pressure is not enough.",
        },
        {
          type: "p",
          text: "Code Yellow molt concerns in the United States, the United Kingdom, and Australia can often be daytime avian practice. Breathing effort or predator bites go to emergency care.",
        },
      ],
    },
    {
      heading: "6. Tools That Help After You Have Triaged",
      blocks: [
        {
          type: "p",
          text: "If illness signs appear, the Pet Safety Hub 24/7 Vet Finder locates an open clinic. The Free AI Pet Assistant can take a follow-up question about what photos to bring, and that chat is not a diagnosis.",
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
          text: "Owners usually ask how to tell molt from plucking, whether baths help, and when feather loss is an emergency. The answers below are triage ranges for birds in the United States, the United Kingdom, and Australia.",
        },
      ],
    },
    {
      heading: "How do I tell molt from plucking?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A routine molt is gradual and fairly symmetrical with pin feathers and a bright bird. Plucking often leaves bald patches, broken shafts, and uneven tracts. When unsure, book an avian exam rather than waiting for a full naked chest.",
        },
      ],
    },
    {
      heading: "Do baths help a molting bird?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "If your bird already enjoys misting or a shallow dish, clean water can help comfort during molt. Do not oil feathers or force a bath on a weak or fluffed bird. Breathing problems override any bath plan.",
        },
      ],
    },
    {
      heading: "When is feather loss an emergency?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Bleeding self-trauma, labored breathing, floor-sitting, not eating, or injury from a cat or dog needs emergency avian care. A quiet symmetrical molt in a playing bird can stay on a Code Green watch.",
        },
      ],
    },
  ],
};
