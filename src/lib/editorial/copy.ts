import copy from "@/data/editorial-copy.json";
import type { FoodItem } from "@/lib/nutrition/types";

export function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function sentences(text: string) {
  return text
    .trim()
    .replaceAll("Dr. ", "Dr ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

export function collapseParagraph(text: string) {
  const parts = sentences(text);
  while (parts.length > 3) {
    const last = parts.pop();
    if (!last) {
      break;
    }
    const previous = parts[parts.length - 1] ?? "";
    parts[parts.length - 1] = `${previous.replace(/\.$/, "")}; ${last.charAt(0).toLowerCase()}${last.slice(1)}`;
  }
  return parts.join(" ");
}

export function fitParagraph(base: string, additions: readonly string[]) {
  const parts = sentences(base);
  const queue = [...additions];
  while (wordCount(parts.join(" ")) < 40 && queue.length > 0) {
    if (parts.length >= 3) {
      const last = parts.pop();
      if (!last || parts.length === 0) {
        if (last) {
          parts.push(last);
        }
        break;
      }
      const previous = parts[parts.length - 1] ?? "";
      parts[parts.length - 1] = `${previous.replace(/\.$/, "")}; ${last.charAt(0).toLowerCase()}${last.slice(1)}`;
    }
    const addition = queue.shift();
    if (!addition) {
      break;
    }
    if (wordCount(`${parts.join(" ")} ${addition}`) > 60) {
      continue;
    }
    parts.push(addition);
  }
  return parts.join(" ");
}

export function emergencyBody(overview: string) {
  return fitParagraph(collapseParagraph(overview), copy.eatenAdditions);
}

const CHEMISTRY_FAMILY: Record<string, keyof typeof copy.foodChemistry> = {
  chocolate: "chocolate",
  grapes: "grapes",
  xylitol: "xylitol",
  onions: "onion",
  lilies: "lily",
  avocado: "avocado",
  macadamia: "macadamia",
  caffeine: "caffeine",
  blueberries: "blueberry",
  pumpkin: "pumpkin",
  "cooked-chicken": "chicken",
  carrots: "carrot",
  "green-beans": "beans",
  salmon: "salmon",
  timothy: "hay",
};

export function foodFamily(slug: string) {
  const match = Object.keys(CHEMISTRY_FAMILY).find((prefix) => slug.startsWith(prefix));
  return match ? CHEMISTRY_FAMILY[match] : undefined;
}

export function foodQuestion(name: string, species: FoodItem["species"]) {
  const who =
    species === "small-pets"
      ? "rabbits, guinea pigs, hamsters, or ferrets"
      : species;
  return `Can ${who} eat ${name.toLowerCase()}?`;
}

export function foodSnippet(slug: string) {
  return copy.foodSnippets[slug as keyof typeof copy.foodSnippets];
}

export function foodChemistry(slug: string) {
  const family = foodFamily(slug);
  const text = family ? copy.foodChemistry[family] : "";
  return fitParagraph(collapseParagraph(text), ["Keep the package where pets cannot reach it."]);
}

export function foodServingParagraph(food: Pick<FoodItem, "safetyStatus" | "safeServingSize">) {
  const additions =
    food.safetyStatus === "SAFE" ? copy.safeServingAdditions : copy.toxicServingAdditions;
  return fitParagraph(collapseParagraph(food.safeServingSize), additions);
}

export function foodEatenParagraphs(food: Pick<FoodItem, "emergencyAction" | "whatToDoIfIngested">) {
  return [
    fitParagraph(
      collapseParagraph(`${food.emergencyAction.trim()} ${food.whatToDoIfIngested.trim()}`),
      copy.eatenAdditions,
    ),
  ];
}

export function symptomKey(species: string, slug: string) {
  return `${species}/${slug}`;
}

export function symptomSnippet(species: string, slug: string) {
  return copy.symptomSnippets[symptomKey(species, slug) as keyof typeof copy.symptomSnippets];
}

export function symptomLede(species: string, slug: string, shortDescription: string) {
  const custom = copy.symptomLedes[symptomKey(species, slug) as keyof typeof copy.symptomLedes];
  if (custom) {
    return custom;
  }
  return fitParagraph(shortDescription, [copy.symptomLedeAddition]);
}

export function emergencySnippet(slug: string) {
  return copy.emergencySnippets[slug as keyof typeof copy.emergencySnippets];
}

export function medicationSnippet(slug: string) {
  return copy.medicationSnippets[slug as keyof typeof copy.medicationSnippets];
}

export function medicationParagraph(text: string) {
  return fitParagraph(collapseParagraph(text), copy.medicationAdditions);
}

export function emergencyProcedure(text: string) {
  return fitParagraph(collapseParagraph(text), copy.eatenAdditions);
}

export function breedQuestion(name: string) {
  return `What should ${name} owners ask first?`;
}

export function breedSnippet(name: string) {
  return `Owners most often ask about housing, grooming, and which signs cannot wait. The answers below are educational ranges for a typical ${name}, including weight in pounds (kilograms) and yearly costs in dollars and pounds. They do not diagnose the animal you live with.`;
}

export function planningAud(usd: number) {
  return Math.round((usd * 1.5) / 100) * 100;
}

export const editorialCopy = copy;
