import Link from "next/link";
import { Building2 } from "lucide-react";
import { ContentImage, MediaFrame } from "@/components/media/ContentImage";
import { breedPath, SPECIES_LABEL, type Breed } from "@/lib/breeds/types";
import { breedImage } from "@/lib/images";
import { cn } from "@/lib/utils";

const SIZE_LABEL: Record<Breed["size"], string> = {
  toy: "Toy",
  small: "Small",
  medium: "Medium",
  large: "Large",
  giant: "Giant",
};

export function BreedCard({ breed }: { breed: Breed }) {
  const href = breedPath(breed);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:border-brand-primary/40 hover:shadow-md">
      <div className="relative">
        <MediaFrame ratio="aspect-[4/3]" className="rounded-none">
          <ContentImage
            src={breedImage(breed.slug)}
            alt={`${breed.name} portrait`}
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        </MediaFrame>
        <span className="absolute top-3 left-3 rounded-xl bg-brand-primary px-2.5 py-1 text-xs font-bold tracking-wide text-white uppercase shadow-md ring-2 ring-white/90">
          {SPECIES_LABEL[breed.species]}
        </span>
        <span className="absolute top-3 right-3 rounded-xl border border-white/80 bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-md">
          {SIZE_LABEL[breed.size]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="mb-2 text-xl font-semibold tracking-tight text-slate-800">
          <Link href={href} className="hover:text-brand-primary">
            {breed.name}
          </Link>
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-700">{breed.tagline}</p>

        <ul className="mb-4 mt-auto flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
          <li
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",
              breed.apartmentFriendly
                ? "bg-triage-green-surface text-triage-green-foreground"
                : "bg-slate-100 text-slate-700",
            )}
          >
            <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
            {breed.apartmentFriendly ? "Apartment friendly" : "Needs more space"}
          </li>
          {breed.hypoallergenic ? (
            <li className="rounded-full bg-brand-accent-100 px-2.5 py-1 text-brand-accent-900">
              Hypoallergenic
            </li>
          ) : null}
          <li className="rounded-full bg-slate-100 px-2.5 py-1">Lives {breed.lifespan}</li>
        </ul>

        <Link
          href={href}
          className="inline-flex min-h-11 items-center text-sm font-bold text-brand-primary group-hover:underline"
        >
          View profile
        </Link>
      </div>
    </article>
  );
}
