import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { avianRespiratoryDistressGuide } from "@/content/emergency-guides/avian-respiratory-distress";
import { bloatGdvGuide } from "@/content/emergency-guides/bloat-gdv";
import { chocolateToxicityGuide } from "@/content/emergency-guides/chocolate-toxicity";
import { eggBindingGuide } from "@/content/emergency-guides/egg-binding";
import { felineUrethralBlockageGuide } from "@/content/emergency-guides/feline-urethral-blockage";
import { ferretHypoglycemiaGuide } from "@/content/emergency-guides/ferret-hypoglycemia";
import { heatstrokeGuide } from "@/content/emergency-guides/heatstroke";
import { lilyToxicityGuide } from "@/content/emergency-guides/lily-toxicity";
import { rabbitGiStasisGuide } from "@/content/emergency-guides/rabbit-gi-stasis";
import { EMERGENCY_GUIDES } from "@/lib/clinical/guides";

const EMERGENCY_LONG_GUIDES: Record<string, EmergencyLongGuide> = {
  "chocolate-toxicity": chocolateToxicityGuide,
  "bloat-gdv": bloatGdvGuide,
  heatstroke: heatstrokeGuide,
  "feline-urethral-blockage": felineUrethralBlockageGuide,
  "lily-toxicity": lilyToxicityGuide,
  "avian-respiratory-distress": avianRespiratoryDistressGuide,
  "egg-binding": eggBindingGuide,
  "rabbit-gi-stasis": rabbitGiStasisGuide,
  "ferret-hypoglycemia": ferretHypoglycemiaGuide,
};

export function getEmergencyLongGuide(slug: string): EmergencyLongGuide | undefined {
  return EMERGENCY_LONG_GUIDES[slug];
}

export function allEmergencyArticleSlugs(): string[] {
  return EMERGENCY_GUIDES.map((guide) => guide.slug);
}
