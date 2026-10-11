import { BreedHub } from "@/components/breeds/BreedHub";
import { breedsBySpecies } from "@/lib/breeds/directory";
import { breedHubMetadata } from "@/lib/breeds/metadata";

const description =
  "American guinea pig, Holland Lop rabbit, Syrian hamster, and ferret profiles with diet rules, urgent signs, and yearly cost.";

export const metadata = breedHubMetadata("small-pets", description);

export default function SmallPetsPage() {
  return (
    <BreedHub
      species="small-pets"
      lede="Guinea pigs, Holland Lops, Syrian hamsters, and ferrets. Each profile separates everyday care from the signs that need a same-day veterinary visit."
      breeds={breedsBySpecies("small-pets")}
    />
  );
}
