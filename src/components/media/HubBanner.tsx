import { ContentImage, MediaFrame } from "@/components/media/ContentImage";

export function HubBanner({
  src,
  alt,
  eyebrow,
  title,
  lede,
  tone = "default",
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  lede: string;
  tone?: "default" | "emergency";
}) {
  const isEmergency = tone === "emergency";
  const gradient = isEmergency
    ? "bg-gradient-to-t from-slate-950/92 via-slate-900/55 to-slate-900/10"
    : "bg-gradient-to-t from-brand-primary/92 via-brand-primary/50 to-brand-primary/10";
  const eyebrowClass = isEmergency
    ? "mb-2 text-sm font-semibold tracking-wide text-red-200 uppercase"
    : "mb-2 text-sm font-semibold tracking-wide text-brand-accent-200 uppercase";

  return (
    <header className="relative mb-10 -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-10">
      <MediaFrame
        ratio="aspect-[16/10] sm:aspect-[2.4/1] xl:aspect-[2.8/1]"
        className="rounded-none"
      >
        <ContentImage
          src={src}
          alt={alt}
          priority
          sizes="(max-width: 1600px) 100vw, 1600px"
          className="object-cover"
        />
        <div className={`absolute inset-0 ${gradient}`} aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-6 pt-16 sm:px-6 sm:pb-8 lg:px-8 xl:px-10 xl:pb-10">
          <p className={eyebrowClass}>{eyebrow}</p>
          <h1 className="mb-3 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
            {title}
          </h1>
          <p className="mb-0 max-w-3xl text-base leading-relaxed text-white/90 xl:text-lg">
            {lede}
          </p>
        </div>
      </MediaFrame>
    </header>
  );
}
