import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { blueberriesDogsGuide } from "@/content/food-guides/blueberries-dogs";

const FOOD_LONG_GUIDES: Record<string, EmergencyLongGuide> = {
  "blueberries-dogs": blueberriesDogsGuide,
};

export function getFoodLongGuide(slug: string): EmergencyLongGuide | undefined {
  return FOOD_LONG_GUIDES[slug];
}
