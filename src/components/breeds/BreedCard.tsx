import Link from "next/link";
import { Building2 } from "lucide-react";
import { breedPath, SPECIES_LABEL, type Breed } from "@/lib/breeds/types";
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
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:border-brand-primary/40 hover:shadow-md">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-brand-primary-50 px-2.5 py-1 text-xs font-bold tracking-wide text-brand-primary uppercase">
          {SPECIES_LABEL[breed.species]}
        </span>
        <span className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700">
          {SIZE_LABEL[breed.size]}
        </span>
      </div>

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
    </article>
  );
}
