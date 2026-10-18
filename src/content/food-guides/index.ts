import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { avocadoGuide } from "@/content/food-guides/avocado";
import { blueberriesDogsGuide } from "@/content/food-guides/blueberries-dogs";
import { caffeineGuide } from "@/content/food-guides/caffeine";
import { carrotsGuide } from "@/content/food-guides/carrots";
import { chocolateGuide } from "@/content/food-guides/chocolate";
import { cookedChickenGuide } from "@/content/food-guides/cooked-chicken";
import { grapesRaisinsDogsGuide } from "@/content/food-guides/grapes-raisins-dogs";
import { greenBeansGuide } from "@/content/food-guides/green-beans";
import { liliesGuide } from "@/content/food-guides/lilies";
import { macadamiaNutsGuide } from "@/content/food-guides/macadamia-nuts";
import { onionsGarlicDogsGuide } from "@/content/food-guides/onions-garlic-dogs";
import { pumpkinGuide } from "@/content/food-guides/pumpkin";
import { salmonGuide } from "@/content/food-guides/salmon";
import { timothyHayGuide } from "@/content/food-guides/timothy-hay";
import { xylitolDogsGuide } from "@/content/food-guides/xylitol-dogs";

/** Hand-authored guides keyed by consolidated topic slug. */
const FOOD_LONG_GUIDES: Record<string, EmergencyLongGuide> = {
  chocolate: chocolateGuide,
  lilies: liliesGuide,
  avocado: avocadoGuide,
  "macadamia-nuts": macadamiaNutsGuide,
  caffeine: caffeineGuide,
  pumpkin: pumpkinGuide,
  "cooked-chicken": cookedChickenGuide,
  carrots: carrotsGuide,
  "green-beans": greenBeansGuide,
  salmon: salmonGuide,
  "timothy-hay": timothyHayGuide,
  blueberries: {
    ...blueberriesDogsGuide,
    title: "Can Dogs and Cats Eat Blueberries? Safety, Portions & Risks",
    lede: `${blueberriesDogsGuide.lede} Cats may taste one or two plain berries; they do not need fruit, and muffins or xylitol products remain unsafe.`,
  },
  "grapes-raisins": {
    ...grapesRaisinsDogsGuide,
    title: "Grapes and Raisins: Kidney Risk in Dogs (and Why Cats Should Skip Them)",
    lede: `${grapesRaisinsDogsGuide.lede} Cats lack a proven safe serving; do not treat dried fruit as a low-risk snack for either species.`,
  },
  xylitol: {
    ...xylitolDogsGuide,
    title: "Xylitol in Pets: Dog Emergency Risk and Why Cats Should Avoid It",
    lede: `${xylitolDogsGuide.lede} Cats do not show the same insulin spike documented in dogs, but xylitol products are still not cat food.`,
  },
  "onions-garlic": {
    ...onionsGarlicDogsGuide,
    title: "Onions and Garlic: Allium Risk for Dogs, Cats, and Small Pets",
    lede: `${onionsGarlicDogsGuide.lede} Powdered onion in broth counts for cats and small pets as well.`,
  },
};

export function getFoodLongGuide(slug: string): EmergencyLongGuide | undefined {
  return FOOD_LONG_GUIDES[slug];
}

/** True when a topic article is ready for indexing. */
export function hasFoodArticle(slug: string): boolean {
  return Boolean(getFoodLongGuide(slug));
}
