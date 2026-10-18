import Link from "next/link";
import { StandardGuideArticle } from "@/components/editorial/StandardGuideArticle";
import type { EmergencyLongGuide } from "@/content/emergency-guides/types";
import { foodImage } from "@/lib/images";
import type { FoodTopic } from "@/lib/nutrition/topics";
import { SAFETY_LABEL, SPECIES_LABEL } from "@/lib/nutrition/types";

export function FoodTopicArticle({
  topic,
  guide,
}: {
  topic: FoodTopic;
  guide: EmergencyLongGuide;
}) {
  const badgeTone =
    topic.safetyStatus === "SAFE"
      ? "safe"
      : topic.safetyStatus === "CAUTION"
        ? "caution"
        : "toxic";

  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 pb-8 sm:px-6 lg:px-8 xl:px-10 lg:pb-12">
      <div className="mb-6 flex flex-wrap gap-2">
        {topic.variants.map((variant) => (
          <a
            key={variant.species}
            href={`#${variant.species}`}
            className="inline-flex min-h-9 items-center rounded-full border border-slate-200 bg-white px-3 text-xs font-bold tracking-wide text-brand-primary uppercase hover:border-brand-primary"
          >
            {SPECIES_LABEL[variant.species]}
          </a>
        ))}
      </div>
      <StandardGuideArticle
        guide={guide}
        heroSrc={foodImage(topic.imageSlug)}
        heroAlt={`${topic.name} food safety`}
        badge={SAFETY_LABEL[topic.safetyStatus]}
        badgeTone={badgeTone}
        reviewVariant="clinical"
        eyebrow={
          <>
            <Link href="/nutrition" className="hover:underline">
              Food safety
            </Link>
            {" · "}
            {topic.species.map((s) => SPECIES_LABEL[s]).join(" · ")}
          </>
        }
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {topic.variants.map((variant) => (
          <section
            key={variant.id}
            id={variant.species}
            className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5"
          >
            <h2 className="mb-2 text-lg font-semibold text-slate-800">
              {SPECIES_LABEL[variant.species]} note
            </h2>
            <p className="mb-2 text-xs font-bold tracking-wide text-brand-primary uppercase">
              {SAFETY_LABEL[variant.safetyStatus]}
            </p>
            <p className="mb-3 text-sm text-slate-700">{variant.safeServingSize}</p>
            <p className="mb-0 text-sm text-slate-700">{variant.emergencyAction}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
