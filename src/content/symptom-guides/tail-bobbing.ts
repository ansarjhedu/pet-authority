import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const tailBobbingGuide: EmergencyLongGuide = {
  title: "Bird Tail Bobbing: Respiratory Distress Triage & What to Do Now",
  lede: "This Pet Safety Hub guide treats rhythmic tail bobbing with each breath as an avian emergency, even if the bird still looks alert. Owners in the United States, the United Kingdom, and Australia should arrange an avian veterinarian now. Birds compensate until they suddenly cannot, so waiting overnight is not the plan.",
  sections: [
    {
      heading: "1. Quick Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "A rhythmic tail bob with each breath means the bird is working too hard to breathe. That is Code Red. Watch from a short distance, note open-mouth breathing or fumes from non-stick pans, and do not catch them repeatedly. Stress can worsen hypoxia.",
        },
      ],
    },
    {
      heading: "2. Three-Tier Clinical Triage",
      blocks: [
        {
          type: "p",
          text: "Tail bobbing is the tail moving in time with each breath as the bird recruits extra effort. An alert bird on the perch can still be in respiratory failure. Use Code Red as the default when the bob is present at rest.",
        },
        {
          type: "p",
          text: "Note open-mouth breathing, voice change, sitting on the cage floor, or recent fumes from overheated non-stick coatings, aerosols, smoke, or strong cleaners. Prepare a quiet carrier with a familiar perch towel while you call an avian clinic.",
        },
      ],
    },
    {
      heading: "Code Green · Monitor",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Green does not apply to true tail bobbing at rest. A bird who briefly fans the tail while singing or climbing is not this page. If you are unsure whether the tail moves with every breath, treat it as urgent and call an avian veterinarian the same hour.",
        },
      ],
    },
    {
      heading: "Code Yellow · Urgent, 12–24 hours",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Yellow is not the home plan once a resting tail bob is clear. A recovered bird after brief stress still needs same-day avian advice if any bob returns. Do not schedule a routine wellness slot days away for active bobbing.",
        },
      ],
    },
    {
      heading: "Code Red · Emergency, within 60 minutes",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Code Red is a tail that bobs at rest, a beak that stays open to breathe, a bird on the cage floor, fluffed and too weak to perch, or any of these after fume exposure, injury, or possible egg binding. Go to an avian-capable emergency hospital as soon as you can travel safely.",
        },
        {
          type: "p",
          text: "If you are unsure, still go. Birds hide illness until reserve is gone. Call ahead so oxygen and a quiet room can be ready.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/avian-respiratory-distress",
              label: "Open the avian respiratory distress emergency guide",
            },
            { href: "/emergency/egg-binding", label: "Open the egg-binding emergency guide if a female is straining" },
          ],
        },
      ],
    },
    {
      heading: "3. At-Home Observation Checklist",
      blocks: [
        {
          type: "p",
          text: "Watch from a short distance. Count whether the tail moves with every breath. Note open-mouth breathing, voice change, or floor-sitting. Check recent fumes in the kitchen or bathroom.",
        },
        {
          type: "p",
          text: "Do not catch them repeatedly to inspect the chest. One gentle move into a carrier is enough. Keep the room warm but not hot, about typical indoor comfort, and cover three sides of the carrier for calm darkness.",
        },
        {
          type: "table",
          headers: ["Check", "Reassuring finding", "Leave for care"],
          rows: [
            ["Tail motion at rest", "No bob with each breath", "Rhythmic bob at rest: emergency avian care now"],
            ["Beak and posture", "Closed beak, steady perch", "Open-mouth breathing or cage-floor sitting: go now"],
            ["Feather look", "Sleek when active", "Fluffed, quiet, and weak: go now"],
            ["Environment", "No fumes or smoke", "Non-stick, aerosol, smoke, or cleaner fumes: go now"],
            ["Female signs", "Normal posture", "Wide-legged straining or possible egg: go now"],
          ],
        },
        {
          type: "p",
          text: "Do not put oils, vapor rubs, or human inhalers near the bird. Do not use peroxide or charcoal. Do not give leftover bird antibiotics from an old prescription without an exam tonight.",
        },
      ],
    },
    {
      heading: "4. Top Common Clinical Causes",
      blocks: [
        {
          type: "p",
          text: "These causes run from airway infection to fume injury and egg binding. More than one can be true. An avian veterinarian who can provide oxygen sorts this list.",
        },
      ],
    },
    {
      heading: "Airway or lung disease, including infection",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Bacteria, fungi, and other infections can fill airways and air sacs until every breath needs a tail bob. The bird may still look bright minutes before crashing. Delay costs oxygen reserve.",
        },
      ],
    },
    {
      heading: "Fume exposure from overheated non-stick coatings",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Overheated polytetrafluoroethylene coatings and other airborne toxins can damage bird lungs quickly. Turn off the heat source, ventilate for people, and leave with the bird rather than waiting to see if the bobbing stops.",
        },
      ],
    },
    {
      heading: "Egg binding or a mass pressing on the air sacs",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A stuck egg or a space-occupying mass can limit air-sac movement and look like respiratory distress. Wide-legged stance and straining are clues in females. This is still Code Red transport, not a warm-bath experiment that delays care.",
        },
      ],
    },
    {
      heading: "Heart disease or anemia",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Heart failure and severe anemia reduce oxygen delivery and can produce a bob with weakness. Diagnosis needs an avian exam and often imaging. Home supplements do not replace oxygen and triage.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/avian-respiratory-distress",
              label: "Avian respiratory distress emergency guide",
            },
            { href: "/emergency/egg-binding", label: "Egg-binding emergency guide" },
            { href: "/symptoms/birds/fluffed-and-quiet", label: "Fluffed and quiet triage" },
          ],
        },
      ],
    },
    {
      heading: "5. Safe Supportive Care and Dangerous Mistakes",
      blocks: [
        {
          type: "p",
          text: "Supportive care is quiet, dim transport and a call ahead. Keep handling to the minimum needed to crate. Offer nothing by mouth if the bird is open-mouth breathing.",
        },
        {
          type: "p",
          text: "Do not spray water, essential oils, or steam into the face. Do not use peroxide, charcoal, or human asthma inhalers. Do not chase the bird around the room for a better video.",
        },
        {
          type: "p",
          text: "The avian hospital may give oxygen, reduce stress, take radiographs when stable, and test for infection. Survival often depends on how fast that oxygen starts.",
        },
        {
          type: "p",
          text: "In the United States, the United Kingdom, and Australia, ask specifically for avian or exotic emergency capability. A general dog-and-cat ER may still stabilize oxygen while you arrange transfer.",
        },
      ],
    },
    {
      heading: "6. Tools That Help After You Have Triaged",
      blocks: [
        {
          type: "p",
          text: "The Pet Safety Hub 24/7 Vet Finder helps locate an open clinic while you prepare the carrier. Read the avian respiratory distress guide for transport detail. Chat tools are not a reason to delay leaving.",
        },
        {
          type: "links",
          items: [
            {
              href: "/emergency/avian-respiratory-distress",
              label: "Open the avian respiratory distress emergency guide",
            },
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
          text: "Owners usually ask whether an alert bird with a bob can wait, what fumes matter, and how to move them safely. The answers below are triage ranges for birds in the United States, the United Kingdom, and Australia.",
        },
      ],
    },
    {
      heading: "Can an alert bird with a tail bob wait overnight?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No. Pet Safety Hub treats resting tail bobbing as Code Red even when the bird still looks aware. Birds compensate until they crash. Call an avian-capable hospital and leave.",
        },
      ],
    },
    {
      heading: "Which kitchen fumes are dangerous?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Overheated non-stick coatings, smoke, aerosols, and strong cleaners can injure bird lungs quickly. If bobbing follows kitchen or bathroom fumes, ventilate for people and transport the bird as an emergency.",
        },
      ],
    },
    {
      heading: "Should I catch them for a chest check first?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No repeated catch-and-inspect. Watch from a distance, then one calm move into a carrier. Extra handling can worsen hypoxia. Let the hospital examine under oxygen when possible.",
        },
      ],
    },
  ],
};
