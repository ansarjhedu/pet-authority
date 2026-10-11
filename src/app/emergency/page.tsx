import type { Metadata } from "next";
import Link from "next/link";
import { EmergencyBoard } from "@/components/emergency/EmergencyBoard";
import { HotlineBar } from "@/components/emergency/HotlineBar";
import { EMERGENCY_GUIDES } from "@/lib/clinical/guides";

export const metadata: Metadata = {
  title: "Pet Emergency Guide",
  description:
    "Step-by-step action guides for life-threatening emergencies in dogs, cats, birds, and small pets. Call a clinic before you travel.",
};

export default function EmergencyPage() {
  return (
    <div className="container py-8 lg:py-12">
      <header className="mb-6 max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-triage-red uppercase">
          Act first
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
          Pet emergency guide
        </h1>
        <p className="mb-0 text-slate-700">
          Pick the species, open the matching guide, and call a hospital before you leave. These
          pages support first decisions. A licensed veterinarian examines and treats your pet.
        </p>
      </header>

      <div className="mb-6">
        <HotlineBar />
      </div>

      <Link
        href="/tools/vet-finder"
        className="mb-8 inline-flex min-h-11 items-center rounded-full bg-slate-800 px-5 text-sm font-bold text-white hover:bg-slate-700"
      >
        Find Nearest 24/7 Emergency Animal Hospital
      </Link>

      <EmergencyBoard guides={EMERGENCY_GUIDES} />
    </div>
  );
}
