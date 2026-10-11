import type { GuideBlock, GuideSection } from "@/lib/breeds/guide";

export type PhoneLine = {
  label: string;
  href: string;
};

export type EmergencyBlock = GuideBlock | { type: "phones"; items: PhoneLine[] };

export type EmergencySection = Omit<GuideSection, "blocks"> & {
  blocks: EmergencyBlock[];
};

export type EmergencyLongGuide = {
  title: string;
  lede: string;
  sections: EmergencySection[];
};
