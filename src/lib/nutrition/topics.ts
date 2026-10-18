import { FOODS } from "@/lib/nutrition/directory";
import type { FoodItem, FoodSpecies, SafetyStatus } from "@/lib/nutrition/types";

/** Species-specific food slug → consolidated topic article slug. */
export const FOOD_TOPIC_SLUG: Record<string, string> = {
  "chocolate-dogs": "chocolate",
  "chocolate-cats": "chocolate",
  "chocolate-birds": "chocolate",
  "chocolate-small-pets": "chocolate",
  "grapes-raisins-dogs": "grapes-raisins",
  "grapes-raisins-cats": "grapes-raisins",
  "xylitol-dogs": "xylitol",
  "xylitol-cats": "xylitol",
  "onions-garlic-dogs": "onions-garlic",
  "onions-garlic-cats": "onions-garlic",
  "onions-garlic-small-pets": "onions-garlic",
  "lilies-cats": "lilies",
  "lilies-dogs": "lilies",
  "avocado-birds": "avocado",
  "avocado-dogs": "avocado",
  "macadamia-nuts-dogs": "macadamia-nuts",
  "caffeine-dogs": "caffeine",
  "caffeine-cats": "caffeine",
  "blueberries-dogs": "blueberries",
  "blueberries-cats": "blueberries",
  "pumpkin-dogs": "pumpkin",
  "pumpkin-cats": "pumpkin",
  "cooked-chicken-dogs": "cooked-chicken",
  "cooked-chicken-cats": "cooked-chicken",
  "carrots-dogs": "carrots",
  "carrots-small-pets": "carrots",
  "green-beans-dogs": "green-beans",
  "salmon-dogs": "salmon",
  "salmon-cats": "salmon",
  "timothy-hay-small-pets": "timothy-hay",
};

/** Image file stem under /images/foods/ for each topic. */
export const FOOD_TOPIC_IMAGE: Record<string, string> = {
  chocolate: "chocolate-dogs",
  "grapes-raisins": "grapes-raisins-dogs",
  xylitol: "xylitol-dogs",
  "onions-garlic": "onions-garlic-dogs",
  lilies: "lilies-cats",
  avocado: "avocado-birds",
  "macadamia-nuts": "macadamia-nuts-dogs",
  caffeine: "caffeine-dogs",
  blueberries: "blueberries-dogs",
  pumpkin: "pumpkin-dogs",
  "cooked-chicken": "cooked-chicken-dogs",
  carrots: "carrots-dogs",
  "green-beans": "green-beans-dogs",
  salmon: "salmon-dogs",
  "timothy-hay": "timothy-hay-small-pets",
};

export type FoodTopic = {
  slug: string;
  name: string;
  imageSlug: string;
  variants: FoodItem[];
  /** Worst safety across variants, for badge tone. */
  safetyStatus: SafetyStatus;
  species: FoodSpecies[];
};

const SAFETY_RANK: Record<SafetyStatus, number> = {
  SAFE: 0,
  CAUTION: 1,
  TOXIC_DEADLY: 2,
};

function worstSafety(items: FoodItem[]): SafetyStatus {
  return items.reduce<SafetyStatus>((worst, item) => {
    return SAFETY_RANK[item.safetyStatus] > SAFETY_RANK[worst] ? item.safetyStatus : worst;
  }, "SAFE");
}

function buildTopics(): FoodTopic[] {
  const byTopic = new Map<string, FoodItem[]>();
  for (const food of FOODS) {
    const topic = FOOD_TOPIC_SLUG[food.slug] ?? food.slug;
    const list = byTopic.get(topic) ?? [];
    list.push(food);
    byTopic.set(topic, list);
  }
  return [...byTopic.entries()].map(([slug, variants]) => ({
    slug,
    name: variants[0].name,
    imageSlug: FOOD_TOPIC_IMAGE[slug] ?? variants[0].slug,
    variants,
    safetyStatus: worstSafety(variants),
    species: [...new Set(variants.map((v) => v.species))],
  }));
}

export const FOOD_TOPICS: FoodTopic[] = buildTopics();

export function getFoodTopic(slug: string): FoodTopic | undefined {
  return FOOD_TOPICS.find((topic) => topic.slug === slug);
}

export function foodArticleHref(food: FoodItem): string {
  const topic = FOOD_TOPIC_SLUG[food.slug] ?? food.slug;
  return `/nutrition/${topic}#${food.species}`;
}

export function foodTopicRedirects(): Array<{ source: string; destination: string; permanent: boolean }> {
  return Object.entries(FOOD_TOPIC_SLUG)
    .filter(([from, to]) => from !== to)
    .map(([from, to]) => ({
      source: `/nutrition/${from}`,
      destination: `/nutrition/${to}`,
      permanent: true,
    }));
}
