import Link from "next/link";
import { notFound } from "next/navigation";
import { BreedGuideArticle } from "@/components/breeds/BreedGuideArticle";
import { getBreedGuide } from "@/content/breed-guides";
import { SPECIES_LABEL, SPECIES_PATH, type Breed } from "@/lib/breeds/types";

const SIZE_LABEL: Record<Breed["size"], string> = {
  toy: "Toy",
  small: "Small",
  medium: "Medium",
  large: "Large",
  giant: "Giant",
};

export function BreedProfileView({ breed }: { breed: Breed }) {
  const guide = getBreedGuide(breed.slug);
  if (!guide) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 pb-8 sm:px-6 lg:px-8 xl:px-10 lg:pb-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <BreedGuideArticle breed={breed} guide={guide} />
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
          <p className="mb-2 text-xs font-bold tracking-wide text-brand-accent-700 uppercase">
            {SPECIES_LABEL[breed.species]} · {SIZE_LABEL[breed.size]}
          </p>
          <p className="mb-4 text-sm text-slate-700">{breed.tagline}</p>
          <Link
            href={SPECIES_PATH[breed.species]}
            className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-primary hover:underline"
          >
            Back to {SPECIES_LABEL[breed.species].toLowerCase()} breeds
          </Link>
        </aside>
      </div>
    </div>
  );
}
