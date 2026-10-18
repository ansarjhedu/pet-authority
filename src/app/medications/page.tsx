import type { Metadata } from "next";
import { HubIntro } from "@/components/editorial/HubIntro";
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
      <HubIntro
        howToUse="Filter veterinary medicines versus human toxins, then open the guide for product lookalikes, overdose signs, and what to bring to the clinic. Every page refuses a home milligram chart on purpose."
        whatThisIsNot="This hub is not a dosing calculator, not permission to share human tablets, and not a substitute for the prescription written for one animal."
        urgentCards={[
          {
            href: "/medications/ibuprofen",
            title: "Ibuprofen",
            blurb: "Human Advil, Motrin, and Nurofen are treated as poison exposures for dogs and cats.",
          },
          {
            href: "/medications/acetaminophen",
            title: "Acetaminophen / paracetamol",
            blurb: "Especially lethal for cats. Any bathroom-cabinet exposure is an emergency call.",
          },
          {
            href: "/medications/meloxicam",
            title: "Meloxicam mix-ups",
            blurb: "A dog oral solution given to a cat, or a repeated cat dose, can cause kidney failure.",
          },
          {
            href: "/medications/carprofen",
            title: "Carprofen double-ups",
            blurb: "Stacking with another anti-inflammatory or steroid is a common ulcer emergency.",
          },
          {
            href: "/medications/diphenhydramine",
            title: "Diphenhydramine products",
            blurb: "Only when a veterinarian chooses the plain product—combination cold liquids can add toxins.",
          },
        ]}
      />
      <MedicationExplorer medications={MEDICATIONS} />
    </div>
  );
}
