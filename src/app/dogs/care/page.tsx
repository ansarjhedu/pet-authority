import type { Metadata } from "next";
import { CareGuide } from "@/components/care/CareGuide";

export const metadata: Metadata = {
  title: "Dog Care",
  description:
    "Dog vaccination, dental care, parasite prevention, grooming, exercise, and senior wellness for US, UK, and Australian households.",
  alternates: { canonical: "/dogs/care" },
};

export default function DogCarePage() {
  return <CareGuide species="dogs" />;
}
