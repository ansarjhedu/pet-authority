import { BreedHub } from "@/components/breeds/BreedHub";
import { breedsBySpecies } from "@/lib/breeds/directory";
import { breedHubMetadata } from "@/lib/breeds/metadata";

const description =
  "French Bulldogs, Labradors, Golden Retrievers, German Shepherds, Standard Poodles, Dachshunds, Australian Shepherds, and Beagles, with size, apartment, and health filters.";

export const metadata = breedHubMetadata("dogs", description);

export default function DogsPage() {
  return (
    <BreedHub
      species="dogs"
      lede="Eight high-popularity US dog breeds, with weight ranges, grooming and energy ratings, and the health signs that should change your plan for the day."
      breeds={breedsBySpecies("dogs")}
    />
  );
}
