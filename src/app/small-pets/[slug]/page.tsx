import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreedProfileView } from "@/components/breeds/BreedProfileView";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breedsBySpecies, getBreed } from "@/lib/breeds/directory";
import { breedProfileMetadata } from "@/lib/breeds/metadata";
import { breedPath, SPECIES_LABEL, SPECIES_PATH } from "@/lib/breeds/types";
import { generateBreedSchema } from "@/lib/seo/schema";

type SmallPetPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return breedsBySpecies("small-pets").map((breed) => ({ slug: breed.slug }));
}

export async function generateMetadata({ params }: SmallPetPageProps): Promise<Metadata> {
  const { slug } = await params;
  return breedProfileMetadata("small-pets", slug);
}

export default async function SmallPetPage({ params }: SmallPetPageProps) {
  const { slug } = await params;
  const breed = getBreed("small-pets", slug);
  if (!breed) {
    notFound();
  }
  return (
    <>
      <JsonLd data={generateBreedSchema(breed)} />
      <div className="container pt-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: SPECIES_LABEL[breed.species], path: SPECIES_PATH[breed.species] },
            { name: breed.name, path: breedPath(breed) },
          ]}
        />
      </div>
      <BreedProfileView breed={breed} />
    </>
  );
}
