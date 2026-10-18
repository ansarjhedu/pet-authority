import type { BreedGuide } from "@/lib/breeds/guide";
import { africanGreyGuide } from "@/content/breed-guides/african-grey";
import { australianShepherdGuide } from "@/content/breed-guides/australian-shepherd";
import { beagleGuide } from "@/content/breed-guides/beagle";
import { britishShorthairGuide } from "@/content/breed-guides/british-shorthair";
import { budgerigarGuide } from "@/content/breed-guides/budgerigar";
import { cockatielGuide } from "@/content/breed-guides/cockatiel";
import { dachshundGuide } from "@/content/breed-guides/dachshund";
import { domesticShorthairGuide } from "@/content/breed-guides/domestic-shorthair";
import { ferretGuide } from "@/content/breed-guides/ferret";
import { frenchBulldogGuide } from "@/content/breed-guides/french-bulldog";
import { germanShepherdGuide } from "@/content/breed-guides/german-shepherd";
import { goldenRetrieverGuide } from "@/content/breed-guides/golden-retriever";
import { greenCheekedConureGuide } from "@/content/breed-guides/green-cheeked-conure";
import { guineaPigGuide } from "@/content/breed-guides/guinea-pig";
import { hollandLopGuide } from "@/content/breed-guides/holland-lop";
import { labradorRetrieverGuide } from "@/content/breed-guides/labrador-retriever";
import { maineCoonGuide } from "@/content/breed-guides/maine-coon";
import { poodleGuide } from "@/content/breed-guides/poodle";
import { ragdollGuide } from "@/content/breed-guides/ragdoll";
import { siameseGuide } from "@/content/breed-guides/siamese";
import { syrianHamsterGuide } from "@/content/breed-guides/syrian-hamster";
import { BREEDS } from "@/lib/breeds/directory";

const BREED_GUIDES: Record<string, BreedGuide> = {
  "african-grey": africanGreyGuide,
  "australian-shepherd": australianShepherdGuide,
  beagle: beagleGuide,
  "british-shorthair": britishShorthairGuide,
  budgerigar: budgerigarGuide,
  cockatiel: cockatielGuide,
  dachshund: dachshundGuide,
  "domestic-shorthair": domesticShorthairGuide,
  ferret: ferretGuide,
  "french-bulldog": frenchBulldogGuide,
  "german-shepherd": germanShepherdGuide,
  "golden-retriever": goldenRetrieverGuide,
  "green-cheeked-conure": greenCheekedConureGuide,
  "guinea-pig": guineaPigGuide,
  "holland-lop": hollandLopGuide,
  "labrador-retriever": labradorRetrieverGuide,
  "maine-coon": maineCoonGuide,
  poodle: poodleGuide,
  ragdoll: ragdollGuide,
  siamese: siameseGuide,
  "syrian-hamster": syrianHamsterGuide,
};

export function getBreedGuide(slug: string): BreedGuide | undefined {
  return BREED_GUIDES[slug];
}

export function allBreedArticleSlugs(): string[] {
  return BREEDS.map((breed) => breed.slug);
}
