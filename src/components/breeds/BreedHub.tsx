import { BreedDirectory } from "@/components/breeds/BreedDirectory";
import { SPECIES_LABEL, type Breed, type BreedSpecies } from "@/lib/breeds/types";

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
    <div className="container py-8 lg:py-12">
      <header className="mb-8 max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          Breed directory
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          {label}
        </h1>
        <p className="mb-0 text-slate-700">{lede}</p>
      </header>
      <BreedDirectory breeds={breeds} />
    </div>
  );
}
