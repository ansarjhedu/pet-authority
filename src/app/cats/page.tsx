import { BreedHub } from "@/components/breeds/BreedHub";
import { breedsBySpecies } from "@/lib/breeds/directory";
import { breedHubMetadata } from "@/lib/breeds/metadata";

const description =
  "Maine Coon, Ragdoll, British Shorthair, Siamese, and Domestic Shorthair profiles with weight, apartment fit, and health warning signs.";

export const metadata = breedHubMetadata("cats", description);

export default function CatsPage() {
  return (
    <BreedHub
      species="cats"
      lede="Five common cat types, from large pedigree coats to the mixed-breed house cat. Each profile lists the signs that should send you to a clinic the same day."
      breeds={breedsBySpecies("cats")}
    />
  );
}
