import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

const faqs = [
  {
    question: "How fast can GDV kill a dog?",
    answer:
      "Shock and stomach death can progress within an hour once the twist cuts off blood flow. Unproductive retching and a tight belly are enough reason to leave now. Waiting to see if the swelling softens is how dogs arrive too late for surgery.",
  },
  {
    question: "Is every swollen belly GDV?",
    answer:
      "Not every gas-filled stomach has twisted, and both presentations still need an emergency hospital the same hour. Only an X-ray and a veterinary exam separate simple bloat from volvulus. Do not try to decide that difference at home.",
  },
  {
    question: "Can I give Gas-X or walk the dog it off?",
    answer:
      "No. Antacids, simethicone, walks, and belly massage do not untwist a stomach and waste minutes. Food, water, and forced vomiting make the trip more dangerous. The useful next step is a hospital that can decompress and operate.",
  },
  {
    question: "Which dogs are at highest risk?",
    answer:
      "Deep-chested large and giant breeds are over-represented, and any dog can develop GDV. A history of a big meal, gulping water, or recent exercise is useful history, not a requirement. Treat the signs in front of you, not the breed label.",
  },
] as const;

export const bloatGdvGuide: EmergencyLongGuide = {
  title: "Bloat and GDV in Dogs",
  lede: "This guide is for a dog in the United States, the United Kingdom, or Australia with unproductive retching, a tight abdomen, or sudden collapse that may be gastric dilation-volvulus. It covers the first 15 minutes, what must not be tried at home, and what surgery usually involves. It does not clear a dog to wait and see.",
  faqs: [...faqs],
  sections: [
    {
      heading: "1. Leave-Now Verdict",
      blocks: [
        {
          type: "snippet",
          text: "Unproductive retching plus a drum-tight belly is a surgical emergency until a veterinarian proves otherwise. GDV can kill within an hour once the stomach twists and blood flow fails. Call a 24/7 hospital, say you suspect bloat, and leave within 15 minutes.",
        },
        {
          type: "p",
          text: "Bloat means the stomach fills with gas. GDV means that stomach also rotates, trapping the gas and cutting off return of blood to the heart. Deep-chested dogs are at higher risk, and the same signs in a mixed-breed or smaller dog still count as an emergency. This page was researched by the Pet Safety Hub Editorial Team from published clinical references and does not replace an exam.",
        },
      ],
    },
    {
      heading: "2. How the Twist Becomes Shock",
      blocks: [
        {
          type: "p",
          text: "As the stomach expands, it presses on major vessels and the diaphragm. The dog cannot bring up the gas because the twist blocks the exit, which is why you see dry heaves rather than a full vomit. Blood pressure falls, the stomach wall begins to die, and the spleen can twist with it.",
        },
        {
          type: "p",
          text: "That cascade is why a dog who was hungry an hour ago can look grey and weak now. Pale gums, a racing or irregular pulse, and an inability to settle are late signs, not the moment to start worrying. The clock starts at the first empty retch.",
        },
        {
          type: "table",
          headers: ["What you notice", "What it often means"],
          rows: [
            ["Retching with little or no vomit", "Gas or fluid cannot leave the stomach"],
            ["Tight, swollen, or drum-like abdomen", "Dilation, with or without a twist"],
            ["Restlessness, stretching, or staring at the belly", "Pain and rising pressure"],
            ["Pale gums, weakness, or collapse", "Shock — carry the dog in"],
          ],
        },
      ],
    },
    {
      heading: "3. The Next 15 Minutes",
      blocks: [
        {
          type: "p",
          text: "Call the nearest emergency hospital before you buckle the dog in, and say you are coming with suspected bloat so they can prepare oxygen and a surgery team. Leave immediately. Do not wait to see if the swelling goes down after a walk around the block.",
        },
        {
          type: "callout",
          text: "Use the Pet Safety Hub 24/7 Vet Finder if you do not already know the closest emergency hospital. Tell them when the retching started, the dog's approximate weight in pounds (kilograms), and whether the dog can still stand.",
          href: "/tools/vet-finder",
          label: "Find a 24/7 emergency hospital",
        },
        {
          type: "p",
          text: "Keep the dog calm in the car and avoid pressure on the belly from a tight harness or a leaning passenger. A crate the dog already accepts is better than a free climb across seats. If the dog collapses, carry them rather than coaxing a walk into the lobby.",
        },
        {
          type: "p",
          text: "Offer no food, water, antacids, or simethicone on the way. Note the clock time the empty retching began and whether the dog had a large meal, a drink from a hose, or hard exercise beforehand. That history helps the team, and it is not a reason to delay departure.",
        },
      ],
    },
    {
      heading: "4. What Must Not Happen at Home",
      blocks: [
        {
          type: "p",
          text: "Home first-aid for bloat often steals the only hour surgery still has. The hospital decompresses the stomach with equipment and training. Kitchen versions of that step injure the esophagus or waste time while shock deepens.",
        },
      ],
    },
    {
      heading: "Do not tube, massage, or force a vomit",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Do not try to pass a stomach tube, knead the belly, or induce vomiting. A twisted stomach will not empty the way a full stomach after chocolate might, and a home tube can tear tissue. Vomiting drugs and peroxide have no place on this page and are not a GDV treatment.",
        },
      ],
    },
    {
      heading: "Do not give food, water, or human pain tablets",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Water and food add volume to a stomach that cannot empty. Ibuprofen, naproxen, and acetaminophen are a second poisoning in dogs and do not relieve a surgical belly. Skip leftover gabapentin or tramadol from another pet unless the veterinarian on the phone directs it for this dog.",
        },
      ],
    },
    {
      heading: "Do not wait overnight",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A dog who seemed fine at dinner can twist after a late meal or a drink. Morning is too late when the abdomen is already tight. If you are unsure whether the retching is productive, treat empty heaves as GDV until proven otherwise.",
        },
      ],
    },
    {
      heading: "5. What the Emergency Team Usually Does",
      blocks: [
        {
          type: "p",
          text: "Shock treatment comes first: oxygen, an intravenous catheter, and fluids chosen for a dog whose blood pressure may already be low. Pain medicine is given in hospital. An X-ray confirms whether the stomach is dilated alone or has the classic twist pattern once the dog is stable enough for imaging.",
        },
        {
          type: "p",
          text: "The team decompresses the stomach, often with a tube or a needle placed by a clinician, then moves to surgery when volvulus is present. Surgery untwists the stomach, checks whether the wall or spleen is still viable, and usually attaches the stomach to the body wall so it is less likely to twist again. That attachment is called a gastropexy and is the long-term prevention step after an acute GDV.",
        },
        {
          type: "p",
          text: "Intravenous fluids and pain control continue through recovery. Some dogs need intensive care if the heart rhythm is unstable or part of the stomach must be removed. A dog who arrives walking still needs the same urgency; standing does not mean the twist is mild.",
        },
        {
          type: "p",
          text: "The fees below are planning ranges for a dog taken in promptly, not a quote from a named clinic. Overnight intensive care, spleen removal, or a long stay costs more. Australian figures follow about 1.5 Australian dollars per US dollar and are rounded planning bands.",
        },
        {
          type: "table",
          headers: ["Care the hospital may provide", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Emergency exam, fluids, and imaging", "$500–$1,200", "£400–£900", "A$750–A$1,800"],
            ["GDV surgery with gastropexy", "$2,500–$6,000", "£2,000–£4,500", "A$3,800–A$9,000"],
            ["Complicated intensive care stay", "$5,000–$10,000+", "£4,000–£8,000+", "A$7,500–A$15,000+"],
          ],
        },
        {
          type: "p",
          text: "Before discharge, ask about incision care, when food and water restart, and which signs mean a same-night return. Preventive gastropexy is sometimes discussed later for high-risk littermates; that elective talk does not replace tonight's emergency.",
        },
      ],
    },
    {
      heading: "Related emergency guides",
      blocks: [
        {
          type: "p",
          text: "Heatstroke and toxin ingestion can look like restlessness or collapse for different reasons. Open the matching guide if the history points there instead of a tight belly.",
        },
        {
          type: "links",
          items: [
            { href: "/emergency/heatstroke", label: "Heatstroke and hyperthermia in dogs" },
            { href: "/emergency/chocolate-toxicity", label: "Dark chocolate poisoning in dogs" },
            { href: "/editorial-standards", label: "Pet Safety Hub editorial standards" },
          ],
        },
      ],
    },
    {
      heading: "6. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners usually ask how fast GDV kills, whether Gas-X helps, and which breeds are at risk. The answers below are triage ranges. They do not replace the hospital that can take an X-ray tonight.",
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
