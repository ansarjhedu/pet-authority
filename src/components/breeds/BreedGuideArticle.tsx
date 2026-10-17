import Link from "next/link";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { ClinicalReview } from "@/components/editorial/ClinicalReview";
import { DirectAnswer, SnippetAnswer } from "@/components/editorial/SnippetAnswer";
import { HotlineBar } from "@/components/emergency/HotlineBar";
import { takeLeadSnippet } from "@/lib/editorial/lead";
import type { BreedGuide, GuideBlock } from "@/lib/breeds/guide";
import { SPECIES_LABEL, SPECIES_PATH, type Breed } from "@/lib/breeds/types";

function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
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
                <tr key={row[0]} className="border-b border-slate-200 last:border-b-0">
                  {row.map((cell, cellIndex) =>
                    cellIndex === 0 ? (
                      <th
                        key={cell}
                        scope="row"
                        className="px-4 py-3 text-left font-semibold text-slate-800"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td key={cell} className="px-4 py-3 text-slate-800">
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
        <div
          key={key}
          className="mb-6 rounded-2xl border border-brand-primary/20 bg-brand-primary-50 p-5 sm:p-6"
        >
          <p className="mb-6 leading-relaxed text-slate-800">{block.text}</p>
          <Link
            href={block.href}
            className="inline-flex min-h-11 items-center rounded-full bg-brand-primary px-5 text-sm font-bold text-white hover:bg-brand-primary-800"
          >
            {block.label}
          </Link>
        </div>
      );
    }

    if (block.type === "hotline") {
      return (
        <div key={key} className="mb-6">
          <HotlineBar />
        </div>
      );
    }

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
  });
}

export function BreedGuideArticle({ breed, guide }: { breed: Breed; guide: BreedGuide }) {
  const { lead, sections } = takeLeadSnippet(guide.sections);
  return (
    <article className={MEDIAVINE_CONTENT_CLASS}>
      <header className="mb-8 max-w-reading">
        <div className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          <Link href={SPECIES_PATH[breed.species]} className="hover:underline">
            {SPECIES_LABEL[breed.species]}
          </Link>
        </div>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          {guide.title}
        </h1>
        {lead ? <DirectAnswer>{lead}</DirectAnswer> : null}
        <p className="mb-6 leading-relaxed text-slate-700">{guide.lede}</p>
        <ClinicalReview />
      </header>
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
              <GuideBlocks blocks={section.blocks} />
            </section>
          );
        })}
      </div>
    </article>
  );
}
