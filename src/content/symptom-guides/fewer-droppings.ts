import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const fewerDroppingsGuide: EmergencyLongGuide = {
  title: "Rabbit Fewer or Smaller Droppings: Early Stasis Triage & When to Go",
  lede: "This Pet Safety Hub guide treats smaller or fewer fecal pellets as a gut that is slowing. If the rabbit is still eating, call a rabbit veterinarian the same day. The usual level is Code Yellow. No pellets plus pain is an emergency, not a wait-and-see litter check.",
  sections: [
    {
      heading: "1. Quick Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "Count pellets in the litter area compared with a normal day. Watch hay intake more than pellets or treats. Hunching and loud tooth grinding with fewer droppings means leave for rabbit-savvy care now.",
        },
      ],
    },
    {
      heading: "2. Three-Tier Clinical Triage",
      blocks: [
        {
          type: "p",
          text: "Rabbit droppings should stay fairly consistent in size and number when diet is stable. A sudden shrink or count drop is an early stasis warning even if the rabbit still nibbles. Use the tier that matches appetite and pain signs together.",
        },
        {
          type: "p",
          text: "Note urine, soft uneaten cecotropes stuck to the fur, and any recent diet change away from hay. Check posture for hunching. Listen for loud grinding rather than soft content sounds.",
        },
      ],
    },
    {
      heading: "Code Green · Monitor",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Green fits only a tiny, brief dip in pellet count in a bright rabbit who still eats hay eagerly, moves normally, and has no grinding or hunching. Recheck within a few hours. A second smaller batch or any pain sign leaves this tier.",
        },
      ],
    },
    {
      heading: "Code Yellow · Urgent, same day",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Yellow is the usual level for this symptom. It fits clearly fewer or smaller pellets when the rabbit is still eating some hay and can hop around without loud grinding. Call a rabbit veterinarian the same day.",
        },
        {
          type: "p",
          text: "A low-fiber day, recent stress, or a rabbit with known dental history belongs in this tier quickly. Soft cecotropes stuck to the fur can sit here if they still eat. Do not stretch booking overnight if pellets keep shrinking.",
        },
      ],
    },
    {
      heading: "Code Red · Emergency, within 60 minutes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Red is no eating, no pellets for about 12 hours, loud grinding, pressing the belly to the floor, a bloated feel, watery diarrhea, collapse, or a low body temperature. A young rabbit who is quiet and soiling the hind end also belongs here. Go now.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/rabbit-gi-stasis",
              label: "Open the rabbit GI stasis emergency guide",
            },
            {
              href: "/symptoms/small-pets/teeth-grinding-hunching",
              label: "Teeth grinding and hunching triage",
            },
          ],
        },
      ],
    },
    {
      heading: "3. At-Home Observation Checklist",
      blocks: [
        {
          type: "p",
          text: "Count pellets compared with a normal day. Watch hay intake closely. Check posture for hunching and listen for loud tooth grinding. Note urine and any soft uneaten cecotropes on the fur.",
        },
        {
          type: "p",
          text: "Offer fresh hay and see whether they take sustained bites, not one polite nibble. Do not replace hay with cereal treats to coax pellets. Skip force-feeding if they cannot swallow or are grinding in pain.",
        },
        {
          type: "table",
          headers: ["Check", "Reassuring finding", "Leave for care"],
          rows: [
            ["Pellet count and size", "Near normal for that rabbit", "Clearly fewer or smaller: same-day rabbit vet; none ~12 hours: go now"],
            ["Hay intake", "Eager, sustained hay eating", "Stops eating entirely: emergency care"],
            ["Pain signs", "Relaxed posture, soft content sounds", "Grinding, hunching, or bloated belly: go now"],
            ["Stool character", "Firm round pellets", "Watery diarrhea or young rabbit soiling hind end: go now"],
            ["Energy", "Hopping and exploring", "Collapse or cold feel: go now"],
          ],
        },
        {
          type: "p",
          text: "Do not give human laxatives, peroxide, charcoal, or random online motility doses. Do not wait a full day with zero pellets because they looked okay this morning.",
        },
      ],
    },
    {
      heading: "4. Top Common Clinical Causes",
      blocks: [
        {
          type: "p",
          text: "These causes run from early stasis to blockage. More than one can be true. Hay history and pain signs guide urgency while the clinic confirms the cause.",
        },
      ],
    },
    {
      heading: "Early gastrointestinal stasis",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Gut motility can slow before the rabbit looks dramatic. Smaller pellets are often the first clue. Same-day care can prevent a full stop that needs emergency fluids and pain control.",
        },
      ],
    },
    {
      heading: "A low-fiber diet or not enough hay",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Diets heavy on pellets and treats without unlimited hay slow the gut. Fixing the diet matters after the rabbit is stable. Tonight's priority is veterinary assessment, not a sudden treat purge that adds stress.",
        },
      ],
    },
    {
      heading: "Pain from teeth, urine, or an injury",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Dental spurs, urinary sludge, and musculoskeletal pain reduce eating and then reduce droppings. Loud grinding points strongly to pain. Pair this page with the teeth-grinding guide when posture is hunched.",
        },
      ],
    },
    {
      heading: "A blockage from carpet, hair, or the wrong food",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Foreign material can obstruct the gut and stop pellets entirely. These rabbits need imaging and sometimes surgery. Home waiting worsens dehydration and pain.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/rabbit-gi-stasis", label: "Rabbit GI stasis emergency guide" },
            {
              href: "/symptoms/small-pets/teeth-grinding-hunching",
              label: "Teeth grinding and hunching triage",
            },
            { href: "/nutrition/timothy-hay", label: "Timothy hay nutrition guide" },
          ],
        },
      ],
    },
    {
      heading: "5. Safe Supportive Care and Dangerous Mistakes",
      blocks: [
        {
          type: "p",
          text: "While you arrange a same-day visit, keep unlimited hay, quiet surroundings, and water available. Encourage gentle movement only if they already hop without pain. Do not exercise a grinding, hunched rabbit.",
        },
        {
          type: "p",
          text: "Do not give human pain medicine, enemas, peroxide, or charcoal. Do not syringe large volumes into a rabbit who is fighting or unable to swallow. Do not assume one soft treat will restart the gut.",
        },
        {
          type: "p",
          text: "The clinic may give fluids, prescription pain relief, and motility support when appropriate, then investigate teeth and blockage risk. Assisted feeding follows a veterinary plan.",
        },
        {
          type: "p",
          text: "Ask for rabbit or exotic experience in the United States, the United Kingdom, and Australia. Zero pellets with pain go to emergency hours, not a next-week dental slot.",
        },
      ],
    },
    {
      heading: "6. Tools That Help After You Have Triaged",
      blocks: [
        {
          type: "p",
          text: "The Pet Safety Hub 24/7 Vet Finder locates an open clinic. The Free AI Pet Assistant can help you describe pellet size changes, and that chat is not a diagnosis.",
        },
        {
          type: "links",
          items: [
            { href: "/tools/vet-finder", label: "Open the 24/7 Vet Finder" },
            { href: "/tools/ai-assistant", label: "Open the Free AI Pet Assistant" },
            { href: "/emergency/rabbit-gi-stasis", label: "Open the rabbit GI stasis emergency guide" },
          ],
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners usually ask how few pellets is too few, how hay fits, and when to treat it as an emergency. The answers below are triage ranges for rabbits in the United States, the United Kingdom, and Australia.",
        },
      ],
    },
    {
      heading: "How few pellets means I should call today?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A clear drop in number or size compared with that rabbit's normal day should prompt a same-day rabbit veterinary call even if they still eat some hay. No pellets for about 12 hours, or any loud grinding, should not wait for daytime only if emergency care is available.",
        },
      ],
    },
    {
      heading: "Does hay matter more than pellet food?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Yes. Hay intake is the better home signal of gut health. A rabbit who ignores hay but crunching cereal treats is not fine. Keep hay available and get clinical care for shrinking droppings.",
        },
      ],
    },
    {
      heading: "When are fewer droppings an emergency tonight?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No eating, no pellets for about 12 hours, grinding, hunching, bloating, watery diarrhea, collapse, or a cold quiet young rabbit needs emergency rabbit-savvy care within 60 minutes.",
        },
      ],
    },
  ],
};
