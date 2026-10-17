"use client";

import { useMemo, useState } from "react";
import type { Breed } from "@/lib/breeds/types";
import { BreedCard } from "@/components/breeds/BreedCard";
import { BreedFilter, type BreedFilterState } from "@/components/breeds/BreedFilter";

const INITIAL_FILTERS: BreedFilterState = {
  query: "",
  size: "all",
  apartmentFriendly: false,
  hypoallergenic: false,
};

export function BreedDirectory({ breeds }: { breeds: Breed[] }) {
  const [filters, setFilters] = useState<BreedFilterState>(INITIAL_FILTERS);

  const visible = useMemo(() => {
    const needle = filters.query.trim().toLowerCase();
    return breeds.filter((breed) => {
      if (filters.size !== "all" && breed.size !== filters.size) {
        return false;
      }
      if (filters.apartmentFriendly && !breed.apartmentFriendly) {
        return false;
      }
      if (filters.hypoallergenic && !breed.hypoallergenic) {
        return false;
      }
      if (!needle) {
        return true;
      }
      return breed.name.toLowerCase().includes(needle);
    });
  }, [breeds, filters]);

  return (
    <div>
      <BreedFilter value={filters} resultCount={visible.length} onChange={setFilters} />
      {visible.length === 0 ? (
        <p className="mb-0 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-8 text-slate-700">
          No breeds match that search. Clear a filter or try the breed&apos;s common name.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {visible.map((breed) => (
            <li key={breed.id}>
              <BreedCard breed={breed} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
