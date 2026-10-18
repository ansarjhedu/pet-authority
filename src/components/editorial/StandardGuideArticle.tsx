import Link from "next/link";
import type { ReactNode } from "react";
import { MEDIAVINE_CONTENT_CLASS } from "@/components/ads/MediavineScript";
import { ClinicalReview, type ClinicalReviewVariant } from "@/components/editorial/ClinicalReview";
import { DirectAnswer } from "@/components/editorial/SnippetAnswer";
import { EmergencyBlocks } from "@/components/emergency/EmergencyLongArticle";
import { DetailHero } from "@/components/media/DetailHero";
import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { takeLeadSnippet } from "@/lib/editorial/lead";

type BadgeTone = "default" | "safe" | "caution" | "toxic";

export function StandardGuideArticle({
  guide,
  heroSrc,
  heroAlt,
  eyebrow,
  badge,
  badgeTone = "default",
  reviewVariant = "clinical",
}: {
  guide: EmergencyLongGuide;
  heroSrc: string;
  heroAlt: string;
  eyebrow: ReactNode;
  badge?: string;
  badgeTone?: BadgeTone;
  reviewVariant?: ClinicalReviewVariant;
}) {
  const { lead, sections } = takeLeadSnippet(guide.sections);

  return (
    <article className={MEDIAVINE_CONTENT_CLASS}>
      <header className="mb-8">
        <DetailHero src={heroSrc} alt={heroAlt} badge={badge} badgeTone={badgeTone} />
        <div className="max-w-reading">
          <div className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
            {eyebrow}
          </div>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
            {guide.title}
          </h1>
          {lead ? <DirectAnswer>{lead}</DirectAnswer> : null}
          <p className="mb-6 leading-relaxed text-slate-700">{guide.lede}</p>
          <ClinicalReview variant={reviewVariant} />
        </div>
      </header>
      <div className="space-y-8">
        {sections.map((section) => {
          const Heading = section.level === 3 ? "h3" : "h2";
          const headingClass =
            section.level === 3
              ? "mb-3 text-xl font-semibold text-slate-800"
              : "mb-4 text-2xl font-semibold text-slate-800";
          return (
            <section key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
              <Heading className={headingClass}>{section.heading}</Heading>
              <EmergencyBlocks blocks={section.blocks} />
            </section>
          );
        })}
      </div>
    </article>
  );
}

export function GuideEyebrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="hover:underline">
      {label}
    </Link>
  );
}
