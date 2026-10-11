import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreedProfileView } from "@/components/breeds/BreedProfileView";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breedsBySpecies, getBreed } from "@/lib/breeds/directory";
import { breedProfileMetadata } from "@/lib/breeds/metadata";
import { breedPath, SPECIES_LABEL, SPECIES_PATH } from "@/lib/breeds/types";
import { generateBreedSchema } from "@/lib/seo/schema";

type BirdBreedPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return breedsBySpecies("birds").map((breed) => ({ slug: breed.slug }));
}

export async function generateMetadata({ params }: BirdBreedPageProps): Promise<Metadata> {
  const { slug } = await params;
  return breedProfileMetadata("birds", slug);
}

export default async function BirdBreedPage({ params }: BirdBreedPageProps) {
  const { slug } = await params;
  const breed = getBreed("birds", slug);
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
