import type { Metadata } from "next";
import { HubBanner } from "@/components/media/HubBanner";
import { MedicationDisclaimer } from "@/components/medications/MedicationDisclaimer";
import { MedicationExplorer } from "@/components/medications/MedicationExplorer";
import { MEDICATIONS } from "@/lib/medications/directory";
import { hubImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Medications & Safety",
  description:
    "Educational notes on veterinary medicines and human painkillers that are dangerous for pets. Not a dosing chart.",
  alternates: { canonical: "/medications" },
};

export default function MedicationsPage() {
  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 lg:py-12">
      <MedicationDisclaimer />
      <HubBanner
        src={hubImage("medications")}
        alt="Pet medication safety"
        eyebrow="Clinical safety"
        title="Medications and safety"
        lede="Compare medicines a veterinarian may prescribe with human pain tablets that injure the stomach, kidneys, or blood. The notes explain the risk. They do not tell you how many milligrams to give."
      />
      <MedicationExplorer medications={MEDICATIONS} />
    </div>
  );
}
