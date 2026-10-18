import { FoodTopicArticle } from "@/components/nutrition/FoodTopicArticle";
import { getFoodLongGuide } from "@/content/food-guides";
import type { FoodTopic } from "@/lib/nutrition/topics";

export function FoodDetail({ topic }: { topic: FoodTopic }) {
  const guide = getFoodLongGuide(topic.slug);
  if (!guide) {
    return null;
  }
  return <FoodTopicArticle topic={topic} guide={guide} />;
}
