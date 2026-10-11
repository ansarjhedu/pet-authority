export const POISON_HOTLINES = [
  {
    region: "US",
    name: "ASPCA Animal Poison Control",
    number: "888-426-4435",
    href: "tel:+18884264435",
  },
  {
    region: "UK",
    name: "Animal PoisonLine",
    number: "01202 509000",
    href: "tel:+441202509000",
  },
  {
    region: "AU",
    name: "Australian Animal Poisons Centre",
    number: "1300 869 738",
    href: "tel:+611300869738",
  },
] as const;

const EMERGENCY_PATTERNS = [
  /\bbloat\b/i,
  /swollen\s+(abdomen|belly|stomach)/i,
  /(can(?:not|'t)|unable to|inability to)\s+urinate/i,
  /not\s+urinat/i,
  /\b(?:chocolate|grapes?|raisins?|xylitol|lilies|lily)\b/i,
  /severe\s+lethargy/i,
  /\bseizures?\b/i,
  /\bconvuls/i,
  /pale\s+gums/i,
  /open[-\s]?mouth\s+breathing/i,
  /\bheat\s*stroke\b/i,
  /\[EMERGENCY ALERT\]/i,
];

export function isEmergencyText(text: string): boolean {
  return EMERGENCY_PATTERNS.some((pattern) => pattern.test(text));
}

export const PREVIEW_MODE_MESSAGE =
  "AI Assistant is running in local preview mode. Add your free GEMINI_API_KEY to .env.local to enable live Gemini Flash responses.";

export const RATE_LIMIT_MESSAGE =
  "The free Gemini tier needs a short cooldown. Please wait about a minute, then send your question again. If your pet may be in danger, contact an emergency clinic or a poison hotline now.";

export const SYSTEM_INSTRUCTION = `You are the PetAuthority AI Triage & Care Assistant. You provide empathetic, evidence-based guidance for dogs, cats, birds, and small pets.
SAFETY PROTOCOL:
1. If the user mentions potential emergency signs (such as bloat/swollen abdomen, inability to urinate, chocolate/grape/lily ingestion, severe lethargy, seizures, pale gums, open-mouth breathing in cats or birds), you MUST start your response with a bold [EMERGENCY ALERT] header advising immediate contact with a local emergency vet or poison hotline.
2. Never diagnose conditions with certainty and never recommend specific prescription medication dosages. Always refer to a licensed veterinary doctor.
3. Support both US and UK/AU conventions (imperial and metric measurements).
4. Keep answers concise, highly readable, and structured with bullet points (2-3 sentences per paragraph maximum).`;
