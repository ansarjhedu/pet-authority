import Link from "next/link";

export type HubUrgentCard = {
  href: string;
  title: string;
  blurb: string;
};

export function HubIntro({
  howToUse,
  whatThisIsNot,
  urgentCards,
}: {
  howToUse: string;
  whatThisIsNot: string;
  urgentCards: HubUrgentCard[];
}) {
  return (
    <div className="mb-10 space-y-8">
      <section className="max-w-reading">
        <h2 className="mb-3 text-2xl font-semibold text-slate-800">How to use this hub</h2>
        <p className="mb-0 text-slate-700">{howToUse}</p>
      </section>

      {urgentCards.length > 0 ? (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-slate-800">Start here if it is urgent</h2>
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {urgentCards.map((card) => (
              <li key={card.href}>
                <Link
                  href={card.href}
                  className="flex h-full flex-col rounded-2xl border border-triage-red/25 bg-triage-red-surface p-5 transition-colors hover:border-triage-red/50"
                >
                  <span className="mb-2 text-base font-semibold text-triage-red-foreground">
                    {card.title}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-700">{card.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="max-w-reading rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="mb-2 text-lg font-semibold text-slate-800">What this hub is not</h2>
        <p className="mb-3 text-sm leading-relaxed text-slate-700">{whatThisIsNot}</p>
        <p className="mb-0 text-sm text-slate-700">
          Read the{" "}
          <Link href="/editorial-standards" className="font-semibold text-brand-primary hover:underline">
            editorial standards
          </Link>{" "}
          for how pages are compiled and checked.
        </p>
      </section>
    </div>
  );
}
