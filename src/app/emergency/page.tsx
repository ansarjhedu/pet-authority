import type { Metadata } from "next";
import Link from "next/link";
import { HubIntro } from "@/components/editorial/HubIntro";
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

      <HubIntro
        howToUse="Open the species filter, then the matching emergency card. Each guide covers recognition, the first minutes, what not to do at home, and what the ER may do. Call the hospital while you travel."
        whatThisIsNot="This hub is not a home surgery kit, not a peroxide dosing chart, and not a reason to wait overnight when the page says minutes matter."
        urgentCards={[
          {
            href: "/emergency/bloat-gdv",
            title: "Bloat / GDV",
            blurb: "Unproductive retching with a swelling abdomen needs an emergency hospital now.",
          },
          {
            href: "/emergency/feline-urethral-blockage",
            title: "Feline urethral blockage",
            blurb: "A male cat straining with little urine is a same-hour emergency.",
          },
          {
            href: "/emergency/lily-toxicity",
            title: "Lily toxicity",
            blurb: "Any true-lily exposure in a cat, including pollen, is a kidney emergency.",
          },
          {
            href: "/emergency/chocolate-toxicity",
            title: "Chocolate toxicity",
            blurb: "Bring the wrapper, the amount missing, and the weight in pounds (kilograms).",
          },
          {
            href: "/emergency/heatstroke",
            title: "Heatstroke",
            blurb: "Move to shade, start cooling carefully, and travel—do not dunk an unconscious pet.",
          },
        ]}
      />

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
