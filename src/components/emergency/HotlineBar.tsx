import { Phone } from "lucide-react";
import { POISON_HOTLINES } from "@/lib/ai/triage";
import { cn } from "@/lib/utils";

const DISPLAY_NUMBER: Record<string, string> = {
  US: "888-426-4435",
  UK: "01202-509000",
  AU: "1300-869-738",
};

const REGION_LABEL: Record<string, string> = {
  "united states": "US",
  "united kingdom": "UK",
  australia: "AU",
};

export type HotlineCardItem = {
  region: string;
  name: string;
  number: string;
  href: string;
};

export function hotlineCardsFromLabels(
  items: readonly { label: string; href: string }[],
): HotlineCardItem[] {
  return items.map((item) => {
    const colon = item.label.indexOf(":");
    const regionSource = colon >= 0 ? item.label.slice(0, colon).trim() : "";
    const rest = colon >= 0 ? item.label.slice(colon + 1).trim() : item.label.trim();
    const splitAt = rest.lastIndexOf(",");
    const name = splitAt >= 0 ? rest.slice(0, splitAt).trim() : rest;
    const number = splitAt >= 0 ? rest.slice(splitAt + 1).trim() : "";
    return {
      region: REGION_LABEL[regionSource.toLowerCase()] ?? regionSource,
      name,
      number,
      href: item.href,
    };
  });
}

export function HotlineCardGrid({ items }: { items: readonly HotlineCardItem[] }) {
  return (
    <ul
      className={cn(
        "m-0 grid list-none gap-3 p-0",
        items.length > 3 ? "@min-[28rem]:grid-cols-2" : "@min-[40rem]:grid-cols-3",
      )}
    >
      {items.map((line) => (
        <li key={line.href} className="min-w-0">
          <a
            href={line.href}
            className="flex h-full min-h-11 flex-col rounded-xl border border-triage-red/15 bg-white px-3 py-3 no-underline shadow-sm hover:border-triage-red/40"
          >
            <span className="text-xs font-semibold tracking-wide text-triage-red uppercase">
              {line.region}
            </span>
            <span className="mt-1 text-sm font-semibold leading-snug text-slate-800">{line.name}</span>
            <span className="mt-auto pt-3 text-base font-bold tracking-tight break-words text-triage-red">
              {line.number}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function HotlineBar() {
  const items: HotlineCardItem[] = POISON_HOTLINES.map((line) => ({
    region: line.region,
    name: line.name,
    number: DISPLAY_NUMBER[line.region] ?? line.number,
    href: line.href,
  }));

  return (
    <section
      className="not-prose @container rounded-2xl border border-triage-red/20 bg-triage-red-surface p-4 sm:p-5"
      aria-label="Poison hotlines"
    >
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-triage-red text-white">
          <Phone className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 className="mb-1 text-base font-semibold text-triage-red-foreground">
            Call a poison hotline while you travel
          </h2>
          <p className="mb-0 text-sm leading-6 text-slate-700">
            Tap the number for the country you are in. Have the product name and your pet&apos;s
            weight ready.
          </p>
        </div>
      </div>
      <HotlineCardGrid items={items} />
    </section>
  );
}
