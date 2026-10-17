import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { blueberriesDogsGuide } from "@/content/food-guides/blueberries-dogs";
import { grapesRaisinsDogsGuide } from "@/content/food-guides/grapes-raisins-dogs";
import { onionsGarlicDogsGuide } from "@/content/food-guides/onions-garlic-dogs";
import { xylitolDogsGuide } from "@/content/food-guides/xylitol-dogs";

const FOOD_LONG_GUIDES: Record<string, EmergencyLongGuide> = {
  "blueberries-dogs": blueberriesDogsGuide,
  "grapes-raisins-dogs": grapesRaisinsDogsGuide,
  "onions-garlic-dogs": onionsGarlicDogsGuide,
  "xylitol-dogs": xylitolDogsGuide,
};

export function getFoodLongGuide(slug: string): EmergencyLongGuide | undefined {
  return FOOD_LONG_GUIDES[slug];
}
