import { BreedDirectory } from "@/components/breeds/BreedDirectory";
import { HubBanner } from "@/components/media/HubBanner";
import { SPECIES_LABEL, type Breed, type BreedSpecies } from "@/lib/breeds/types";
import { hubImage } from "@/lib/images";

export function BreedHub({
  species,
  lede,
  breeds,
}: {
  species: BreedSpecies;
  lede: string;
  breeds: Breed[];
}) {
  const label = SPECIES_LABEL[species];

  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 lg:py-12">
      <HubBanner
        src={hubImage(species)}
        alt={`${label} care directory`}
        eyebrow="Breed directory"
        title={label}
        lede={lede}
      />
      <BreedDirectory breeds={breeds} />
    </div>
  );
}
