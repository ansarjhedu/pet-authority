import type { Metadata } from "next";
import { getBreed } from "@/lib/breeds/directory";
import { SPECIES_LABEL, SPECIES_PATH, type BreedSpecies } from "@/lib/breeds/types";

export function breedProfileMetadata(species: BreedSpecies, slug: string): Metadata {
  const breed = getBreed(species, slug);
  if (!breed) {
    return { title: "Breed profile" };
  }

  return {
    title: breed.name,
    description: breed.tagline,
    alternates: {
      canonical: `${SPECIES_PATH[species]}/${breed.slug}`,
    },
  };
}

export function breedHubMetadata(species: BreedSpecies, description: string): Metadata {
  return {
    title: SPECIES_LABEL[species],
    description,
    alternates: {
      canonical: SPECIES_PATH[species],
    },
  };
}
