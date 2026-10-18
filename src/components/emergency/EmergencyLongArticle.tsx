import Link from "next/link";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { ClinicalReview } from "@/components/editorial/ClinicalReview";
import { DirectAnswer, SnippetAnswer } from "@/components/editorial/SnippetAnswer";
import type { EmergencyBlock, EmergencyLongGuide } from "@/content/emergency-guides/types";
import { HotlineCardGrid, hotlineCardsFromLabels } from "@/components/emergency/HotlineBar";
import { DetailHero } from "@/components/media/DetailHero";
import { takeLeadSnippet } from "@/lib/editorial/lead";
import { actionWindowLabel, SPECIES_LABEL, urgencyLabel, type EmergencyGuide } from "@/lib/clinical/guides";
import { emergencyImage } from "@/lib/images";

export function EmergencyBlocks({ blocks }: { blocks: EmergencyBlock[] }) {
  return blocks.map((block, index) => {
    const key = `${block.type}-${index}`;

    if (block.type === "snippet") {
      return <SnippetAnswer key={key}>{block.text}</SnippetAnswer>;
    }

    if (block.type === "p") {
      return (
        <p key={key} className="mb-6 max-w-reading leading-relaxed text-slate-800">
          {block.text}
        </p>
      );
    }

    if (block.type === "table") {
      return (
        <div key={key} className="mb-6 overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-brand-primary-50">
                {block.headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-4 py-3 text-left font-semibold text-brand-primary"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")} className="border-b border-slate-200 last:border-b-0">
                  {row.map((cell, cellIndex) =>
                    cellIndex === 0 ? (
                      <th key={cell} scope="row" className="px-4 py-3 text-left font-semibold text-slate-800">
                        {cell}
                      </th>
                    ) : (
                      <td key={`${cell}-${cellIndex}`} className="px-4 py-3 text-slate-800">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (block.type === "callout") {
      return (
        <div key={key} className="mb-6 rounded-2xl border border-triage-red/30 bg-triage-red-surface p-5 sm:p-6">
          <p className="mb-6 leading-relaxed text-triage-red-foreground">{block.text}</p>
          <Link
            href={block.href}
            className="inline-flex min-h-11 items-center rounded-full bg-triage-red px-5 text-sm font-bold text-white hover:bg-triage-red-foreground"
          >
            {block.label}
          </Link>
        </div>
      );
    }

    if (block.type === "phones") {
      return (
        <div
          key={key}
          className="not-prose @container mb-6 rounded-2xl border border-triage-red/20 bg-triage-red-surface p-4 sm:p-5"
        >
          <HotlineCardGrid items={hotlineCardsFromLabels(block.items)} />
        </div>
      );
    }

    if (block.type === "links") {
      return (
        <ul key={key} className="mb-6 space-y-2">
          {block.items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-bold text-brand-primary hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    return null;
  });
}

export function EmergencyLongArticle({
  guide,
  longGuide,
}: {
  guide: EmergencyGuide;
  longGuide: EmergencyLongGuide;
}) {
  const { lead, sections } = takeLeadSnippet(longGuide.sections);
  return (
    <article className={MEDIAVINE_CONTENT_CLASS}>
      <DetailHero
        src={emergencyImage(guide.slug)}
        alt=""
        className="mb-4 max-w-none"
      />
      <header className="mb-6 rounded-3xl bg-triage-red px-5 py-6 text-white sm:px-8">
        <div className="mb-3 text-sm font-semibold tracking-wide text-white uppercase">
          {SPECIES_LABEL[guide.species]} · {urgencyLabel(guide.urgency)}
        </div>
        <h1 className="mb-4 max-w-reading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {longGuide.title}
        </h1>
        {lead ? <DirectAnswer>{lead}</DirectAnswer> : null}
        <div className="mb-4 max-w-reading text-base font-semibold text-white">
          {actionWindowLabel(guide.actionWithinMinutes)}
        </div>
        <p className="mb-6 max-w-reading leading-relaxed text-white">{longGuide.lede}</p>
        <Link
          href="/tools/vet-finder"
          className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-bold text-triage-red hover:bg-triage-red-surface"
        >
          Call an emergency hospital
        </Link>
      </header>
      <ClinicalReview />
      <div className="space-y-8">
        {sections.map((section) => {
          const Heading = section.level === 3 ? "h3" : "h2";
          const headingClass =
            section.level === 3
              ? "mb-3 text-xl font-semibold text-slate-800"
              : "mb-4 text-2xl font-semibold text-slate-800";
          return (
            <section key={section.heading}>
              <Heading className={headingClass}>{section.heading}</Heading>
              <EmergencyBlocks blocks={section.blocks} />
            </section>
          );
        })}
      </div>
    </article>
  );
}
