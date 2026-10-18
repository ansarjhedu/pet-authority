/** Public asset paths for generated Pet Safety Hub imagery. */

export const SITE_OG_IMAGE = "/images/og/site-default.jpg";
export const HOME_HERO_IMAGE = "/images/home/hero.jpg";
export const NOT_FOUND_IMAGE = "/images/system/not-found.jpg";

export function breedImage(slug: string): string {
  return `/images/breeds/${slug}.jpg`;
}

export function foodImage(slug: string): string {
  return `/images/foods/${slug}.jpg`;
}

export function medImage(slug: string): string {
  return `/images/meds/${slug}.jpg`;
}

export function symptomImage(species: string, slug: string): string {
  return `/images/symptoms/${species}-${slug}.jpg`;
}

export function emergencyImage(slug: string): string {
  return `/images/emergency/${slug}.jpg`;
}

export function hubImage(
  hub:
    | "dogs"
    | "cats"
    | "birds"
    | "small-pets"
    | "nutrition"
    | "symptoms"
    | "medications"
    | "emergency",
): string {
  return `/images/hubs/${hub}.jpg`;
}

export function toolImage(
  tool: "pet-food-calculator" | "diet-planner" | "vet-finder" | "ai-assistant",
): string {
  return `/images/tools/${tool}.jpg`;
}

export const HOME_CATEGORY_IMAGES = {
  dogs: "/images/home/category-dogs.jpg",
  cats: "/images/home/category-cats.jpg",
  birds: "/images/home/category-birds.jpg",
  "small-pets": "/images/home/category-small-pets.jpg",
  symptoms: "/images/home/category-symptoms.jpg",
  calculator: "/images/home/category-calculator.jpg",
  ai: "/images/home/category-ai.jpg",
  "vet-finder": "/images/home/category-vet-finder.jpg",
} as const;

export const HOME_TOXIN_IMAGES: Record<string, string> = {
  "/nutrition/grapes-raisins": "/images/home/toxin-grapes.jpg",
  "/emergency/chocolate-toxicity": "/images/home/toxin-chocolate.jpg",
  "/emergency/lily-toxicity": "/images/home/toxin-lilies.jpg",
  "/nutrition/xylitol": "/images/home/toxin-xylitol.jpg",
  "/medications/ibuprofen": "/images/home/toxin-ibuprofen.jpg",
  "/nutrition/onions-garlic": "/images/home/toxin-onion.jpg",
};

export const HOME_CARE_IMAGES: Record<string, string> = {
  "/dogs/nutrition": "/images/home/care-dog-nutrition.jpg",
  "/cats/care": "/images/home/care-cat-care.jpg",
  "/birds": "/images/home/care-birds.jpg",
  "/health-symptoms/dogs/limping": "/images/home/care-limping.jpg",
};
