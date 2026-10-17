import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { chocolateToxicityGuide } from "@/content/emergency-guides/chocolate-toxicity";
import { lilyToxicityGuide } from "@/content/emergency-guides/lily-toxicity";

const EMERGENCY_LONG_GUIDES: Record<string, EmergencyLongGuide> = {
  "chocolate-toxicity": chocolateToxicityGuide,
  "lily-toxicity": lilyToxicityGuide,
};

export function getEmergencyLongGuide(slug: string): EmergencyLongGuide | undefined {
  return EMERGENCY_LONG_GUIDES[slug];
}
