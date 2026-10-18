import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { collapseOrSeizureGuide } from "@/content/symptom-guides/collapse-or-seizure";
import { drinkingMoreWaterGuide } from "@/content/symptom-guides/drinking-more-water";
import { fewerDroppingsGuide } from "@/content/symptom-guides/fewer-droppings";
import { fluffedAndQuietGuide } from "@/content/symptom-guides/fluffed-and-quiet";
import { headShakingEarScratchingGuide } from "@/content/symptom-guides/head-shaking-ear-scratching";
import { hidingAndNotEatingGuide } from "@/content/symptom-guides/hiding-and-not-eating";
import { lethargyGuide } from "@/content/symptom-guides/lethargy";
import { limpingGuide } from "@/content/symptom-guides/limping";
import { mildSheddingGuide } from "@/content/symptom-guides/mild-shedding";
import { occasionalSneezingGuide } from "@/content/symptom-guides/occasional-sneezing";
import { routineMoltGuide } from "@/content/symptom-guides/routine-molt";
import { strainingInLitterBoxGuide } from "@/content/symptom-guides/straining-in-litter-box";
import { tailBobbingGuide } from "@/content/symptom-guides/tail-bobbing";
import { teethGrindingHunchingGuide } from "@/content/symptom-guides/teeth-grinding-hunching";
import { yellowBileGuide } from "@/content/symptom-guides/vomiting-yellow-bile";
import { SYMPTOM_GUIDES } from "@/lib/clinical/guides";

const SYMPTOM_LONG_GUIDES: Record<string, EmergencyLongGuide> = {
  "dogs/head-shaking-ear-scratching": headShakingEarScratchingGuide,
  "dogs/vomiting-yellow-bile": yellowBileGuide,
  "dogs/lethargy": lethargyGuide,
  "dogs/limping": limpingGuide,
  "dogs/collapse-or-seizure": collapseOrSeizureGuide,
  "cats/straining-in-litter-box": strainingInLitterBoxGuide,
  "cats/drinking-more-water": drinkingMoreWaterGuide,
  "cats/occasional-sneezing": occasionalSneezingGuide,
  "cats/hiding-and-not-eating": hidingAndNotEatingGuide,
  "birds/tail-bobbing": tailBobbingGuide,
  "birds/fluffed-and-quiet": fluffedAndQuietGuide,
  "birds/routine-molt": routineMoltGuide,
  "small-pets/teeth-grinding-hunching": teethGrindingHunchingGuide,
  "small-pets/fewer-droppings": fewerDroppingsGuide,
  "small-pets/mild-shedding": mildSheddingGuide,
};

export function getSymptomLongGuide(species: string, slug: string): EmergencyLongGuide | undefined {
  return SYMPTOM_LONG_GUIDES[`${species}/${slug}`];
}

export function allSymptomArticleKeys(): Array<{ species: string; slug: string }> {
  return SYMPTOM_GUIDES.map((symptom) => ({ species: symptom.species, slug: symptom.slug }));
}
