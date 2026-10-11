"use client";

import { BREED_SIZES, type BreedSize } from "@/lib/breeds/types";
import { cn } from "@/lib/utils";

const SIZE_LABEL: Record<BreedSize, string> = {
  toy: "Toy",
  small: "Small",
  medium: "Medium",
  large: "Large",
  giant: "Giant",
};

export type BreedFilterState = {
  query: string;
  size: BreedSize | "all";
  apartmentFriendly: boolean;
  hypoallergenic: boolean;
};

export function BreedFilter({
  value,
  resultCount,
  onChange,
}: {
  value: BreedFilterState;
  resultCount: number;
  onChange: (next: BreedFilterState) => void;
}) {
  return (
    <form
      className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_12rem]">
        <label className="block text-sm font-semibold text-slate-800">
          Search by name
          <input
            type="search"
            value={value.query}
            placeholder="French Bulldog, Cockatiel…"
            className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-brand-surface px-3 text-base font-normal text-slate-800"
            onChange={(event) => onChange({ ...value, query: event.target.value })}
          />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Size
          <select
            value={value.size}
            className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-brand-surface px-3 text-base font-normal text-slate-800"
            onChange={(event) =>
              onChange({ ...value, size: event.target.value as BreedFilterState["size"] })
            }
          >
            <option value="all">All sizes</option>
            {BREED_SIZES.map((size) => (
              <option key={size} value={size}>
                {SIZE_LABEL[size]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <FilterToggle
          pressed={value.apartmentFriendly}
          label="Apartment friendly"
          onClick={() => onChange({ ...value, apartmentFriendly: !value.apartmentFriendly })}
        />
        <FilterToggle
          pressed={value.hypoallergenic}
          label="Hypoallergenic"
          onClick={() => onChange({ ...value, hypoallergenic: !value.hypoallergenic })}
        />
      </div>

      <p className="mt-4 mb-0 text-sm text-slate-700" aria-live="polite">
        {resultCount} {resultCount === 1 ? "profile" : "profiles"}
      </p>
    </form>
  );
}

function FilterToggle({
  pressed,
  label,
  onClick,
}: {
  pressed: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={cn(
        "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold",
        pressed
          ? "border-brand-primary bg-brand-primary text-white"
          : "border-slate-200 bg-brand-surface text-slate-800 hover:border-brand-primary",
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
