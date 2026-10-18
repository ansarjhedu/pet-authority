import Link from "next/link";

export type ClinicalReviewVariant = "clinical" | "editorial";

export function ClinicalReview({ variant = "clinical" }: { variant?: ClinicalReviewVariant }) {
  return (
    <div className="mb-6 max-w-reading rounded-2xl border border-brand-primary/20 bg-white px-4 py-3">
      <p className="text-sm font-semibold leading-relaxed text-slate-800">
        Researched & Compiled by the Pet Safety Hub Editorial Team
      </p>
      {variant === "clinical" ? (
        <p className="mt-1 text-sm leading-relaxed text-slate-700">
          Clinical Data Sources: ASPCA Animal Poison Control Center & Merck Veterinary Manual
        </p>
      ) : (
        <p className="mt-1 text-sm leading-relaxed text-slate-700">
          Compiled from published breed and husbandry references. This is not a veterinary exam for
          an individual animal.
        </p>
      )}
      <p className="mt-2 text-sm leading-relaxed text-slate-700">
        These pages describe clinical possibilities and a Green, Yellow, or Red triage path. They do
        not diagnose an individual animal or replace an examination by a licensed veterinarian.{" "}
        <Link href="/editorial-standards" className="font-semibold text-brand-primary hover:underline">
          Read the editorial standards
        </Link>
        .
      </p>
    </div>
  );
}
