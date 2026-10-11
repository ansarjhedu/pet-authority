import type { Metadata } from "next";
import { CareGuide } from "@/components/care/CareGuide";

export const metadata: Metadata = {
  title: "Cat Care",
  description:
    "Cat vaccination, dental care, parasite prevention, grooming, play, and senior wellness, including hepatic lipidosis risk if a cat stops eating.",
  alternates: { canonical: "/cats/care" },
};

export default function CatCarePage() {
  return <CareGuide species="cats" />;
}
