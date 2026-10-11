import copy from "@/data/editorial-copy.json";

export function ClinicalReview() {
  return <p className="mb-6 max-w-reading text-sm leading-relaxed text-slate-700">{copy.review}</p>;
}
