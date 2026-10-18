import type { Metadata } from "next";
import Link from "next/link";
import { HubIntro } from "@/components/editorial/HubIntro";
import { HubBanner } from "@/components/media/HubBanner";
import { SymptomExplorer } from "@/components/symptoms/SymptomExplorer";
import { SYMPTOM_GUIDES } from "@/lib/clinical/guides";
import { hubImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Symptom Triage",
  description:
    "Filter dog, cat, bird, and small-pet symptoms by urgency. Green means watch at home, yellow means a clinic within a day, and red means go now.",
};

export default function SymptomExplorerPage() {
  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 lg:py-12">
      <HubBanner
        src={hubImage("symptoms")}
        alt="Pet symptom triage"
        eyebrow="Triage"
        title="Symptom explorer"
        lede="Match the species and the change you see. Red symptoms should go to an emergency hospital. This explorer does not diagnose your pet."
      />
      <HubIntro
        howToUse="Pick the species tab, then filter by Code Green, Yellow, or Red. Open a guide for the home checklist and the “seek care if” list. Re-check the list if the pet worsens while you wait for an appointment."
        whatThisIsNot="This hub is not a diagnosis, not a home drug chart, and not a reason to skip an emergency hospital when breathing, gums, or consciousness change."
        urgentCards={[
          {
            href: "/health-symptoms/cats/straining-in-litter-box",
            title: "Cat straining in the litter box",
            blurb: "A male cat who passes little or no urine may have a blockage. That is an emergency, not constipation.",
          },
          {
            href: "/health-symptoms/dogs/collapse-or-seizure",
            title: "Dog collapse or seizure",
            blurb: "Time the event, keep hands clear of the mouth, and leave for an emergency clinic.",
          },
          {
            href: "/health-symptoms/birds/tail-bobbing",
            title: "Bird tail bobbing",
            blurb: "A rhythmic tail bob with each breath means the bird is working too hard to breathe.",
          },
          {
            href: "/health-symptoms/small-pets/teeth-grinding-hunching",
            title: "Rabbit pain posture",
            blurb: "Loud grinding with a hunched posture is a pain signal, often from the gut or teeth.",
          },
          {
            href: "/emergency/bloat-gdv",
            title: "Unproductive retching / bloat",
            blurb: "A swelling abdomen with unsuccessful retching is a surgery clock, not a wait-and-see GI upset.",
          },
        ]}
      />
      <SymptomExplorer symptoms={SYMPTOM_GUIDES} />
      <p className="mt-8 mb-0 max-w-reading text-sm text-slate-700">
        If the pet is unconscious, bleeding, seizuring, or bloated, skip the search and open the{" "}
        <Link href="/emergency" className="font-semibold text-triage-red hover:underline">
          emergency guide
        </Link>
        .
      </p>
    </div>
  );
}
