import { BreedHub } from "@/components/breeds/BreedHub";
import { breedsBySpecies } from "@/lib/breeds/directory";
import { breedHubMetadata } from "@/lib/breeds/metadata";

const description =
  "Cockatiel, budgerigar, green-cheeked conure, and African grey profiles covering diet, airway risks, and typical yearly cost.";

export const metadata = breedHubMetadata("birds", description);

export default function BirdsPage() {
  return (
    <BreedHub
      species="birds"
      lede="Four companion parrots, from the budgerigar to the African grey. Profiles cover diet, airway emergencies, and the time these birds actually need out of the cage."
      breeds={breedsBySpecies("birds")}
    />
  );
}
