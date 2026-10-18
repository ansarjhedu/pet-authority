import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const famotidineGuide: EmergencyLongGuide = {
  title: "Famotidine (Pepcid) for Pets: Vet-Directed Only",
  lede: "Famotidine is an acid reducer sometimes used in dogs and cats when a veterinarian chooses it. A human tablet strength is not a pet dose. It does not treat bloat, a blockage, or a toxin, and it should not delay care for a pet who is vomiting repeatedly or not eating.",
  faqs: [
    {
      question: "Can I give my dog a Pepcid from the cabinet?",
      answer:
        "Only if a veterinarian has already told you to use that product for this animal. Do not invent a milligram chart from a human label.",
    },
    {
      question: "Will famotidine fix yellow bile vomiting?",
      answer:
        "It might be part of a clinic plan for some dogs, but it is not a diagnosis. Ongoing vomiting still needs an exam.",
    },
    {
      question: "What if I gave an extra tablet?",
      answer:
        "Call a poison hotline or your clinic with the strength and the weight in pounds (kilograms). Large overdoses are uncommon, but dehydrated or kidney-compromised pets need guidance.",
    },
  ],
  sections: [
    {
      heading: "1. Clinical verdict",
      blocks: [
        {
          type: "snippet",
          text: "Famotidine is OTC in many stores and still vet-directed for pets. This page does not publish a home milligram dose. Do not use it to wait out bloat, a blocked cat, or toxin ingestion.",
        },
      ],
    },
    {
      heading: "2. When clinics use it",
      blocks: [
        {
          type: "p",
          text: "Primary uses include short-term stomach-acid reduction when a veterinarian recommends it, and support inside a nausea plan the clinic already built. Kidney function and body weight shape the prescription—not a bathroom-cabinet guess.",
        },
      ],
    },
    {
      heading: "3. Overdose and mistakes",
      blocks: [
        {
          type: "p",
          text: "Watch for lethargy, vomiting, or a slow heart rate after a large unplanned amount. Acid reducers do not decompress a twisted stomach or open a blocked urethra.",
        },
        {
          type: "phones",
          items: [
            { label: "US ASPCA Animal Poison Control 888-426-4435", href: "tel:+18884264435" },
            { label: "US Pet Poison Helpline 855-764-7661", href: "tel:+18557647661" },
            { label: "UK Animal PoisonLine 01202 509000", href: "tel:+441202509000" },
            { label: "AU Australian Animal Poisons Centre 1300 869 738", href: "tel:+611300869738" },
          ],
        },
      ],
    },
    {
      heading: "4. Related pages",
      blocks: [
        {
          type: "links",
          items: [
            { href: "/health-symptoms/dogs/vomiting-yellow-bile", label: "Vomiting yellow bile" },
            { href: "/emergency/bloat-gdv", label: "Bloat and GDV" },
            { href: "/medications/ibuprofen", label: "Ibuprofen is not a substitute" },
          ],
        },
      ],
    },
  ],
};
