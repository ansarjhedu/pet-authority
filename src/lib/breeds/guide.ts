export type GuideLink = {
  href: string;
  label: string;
};

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "snippet"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; text: string; href: string; label: string }
  | { type: "hotline" }
  | { type: "links"; items: GuideLink[] };

export type GuideSection = {
  heading: string;
  level?: 2 | 3;
  blocks: GuideBlock[];
};

export type BreedGuide = {
  title: string;
  lede: string;
  sections: GuideSection[];
};
