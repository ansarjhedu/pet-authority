import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const felineUrethralBlockageGuide: EmergencyLongGuide = {
  title: "Male Cat Urethral Blockage: Straining Is Not Constipation",
  lede: "When a male cat cannot pass urine, toxins and potassium rise and the heart rhythm can fail within hours. Repeated litter-box trips with little or no urine are an emergency, not a hairball problem. Go in while he can still walk.",
  faqs: [
    {
      question: "How do I tell constipation from a blockage?",
      answer:
        "Look for urine clumps. No new urine, or only drops, with repeated straining is a urinary emergency. Do not give a laxative or hairball paste while he strains.",
    },
    {
      question: "Can I wait until morning if he is still eating?",
      answer:
        "No. Eating yesterday does not protect the bladder. A firm, painful belly or vomiting means leave now.",
    },
    {
      question: "Are female cats safe from this?",
      answer:
        "Blockage is far more common in males because of a narrow urethra. Any cat with severe straining and no urine still needs same-hour care.",
    },
  ],
  sections: [
    {
      heading: "1. Direct answer",
      blocks: [
        {
          type: "snippet",
          text: "Treat a male cat who visits the box often and produces little or no urine as critical—aim to act within about 30 minutes. Call ahead, carrier him quietly, and go even if he is still walking.",
        },
      ],
    },
    {
      heading: "2. Signs to trust",
      blocks: [
        {
          type: "table",
          headers: ["Sign", "Action"],
          rows: [
            ["Repeated box trips with little or no urine", "Emergency now"],
            ["Crying, licking the penis, gritty plug", "Emergency now"],
            ["Firm, painful belly", "Emergency now"],
            ["Vomiting, hiding, sudden weakness", "Leave immediately"],
          ],
        },
      ],
    },
    {
      heading: "3. What not to do",
      blocks: [
        {
          type: "p",
          text: "Do not squeeze the bladder. Do not give ibuprofen, acetaminophen, or any human pain tablet. Do not start a laxative while he is straining. Do not wait for collapse.",
        },
      ],
    },
    {
      heading: "4. Hospital care",
      blocks: [
        {
          type: "p",
          text: "The veterinarian feels the bladder, checks electrolytes, and places a urinary catheter under sedation or anesthesia. Intravenous fluids correct potassium and dehydration. Many cats stay one to three days while urine flow and kidney values are watched.",
        },
        {
          type: "callout",
          text: "Call the nearest open hospital and say a male cat may be blocked so they can prepare.",
          href: "/tools/vet-finder",
          label: "Find emergency care",
        },
        {
          type: "links",
          items: [
            { href: "/health-symptoms/cats/straining-in-litter-box", label: "Litter-box straining triage" },
            { href: "/medications/ibuprofen", label: "Why human pain tablets are lethal" },
          ],
        },
      ],
    },
  ],
};
