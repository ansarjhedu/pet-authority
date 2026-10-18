import type { Metadata } from "next";
import Link from "next/link";
import { EmergencyBoard } from "@/components/emergency/EmergencyBoard";
import { HotlineBar } from "@/components/emergency/HotlineBar";
import { HubBanner } from "@/components/media/HubBanner";
import { EMERGENCY_GUIDES } from "@/lib/clinical/guides";
import { hubImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Pet Emergency Guide",
  description:
    "Step-by-step action guides for life-threatening emergencies in dogs, cats, birds, and small pets. Call a clinic before you travel.",
};

export default function EmergencyPage() {
  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 lg:py-12">
      <HubBanner
        src={hubImage("emergency")}
        alt="Veterinary emergency hospital"
        eyebrow="Act first"
        title="Pet emergency guide"
        lede="Pick the species, open the matching guide, and call a hospital before you leave. These pages support first decisions. A licensed veterinarian examines and treats your pet."
        tone="emergency"
      />

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
