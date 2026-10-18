import { ContentImage, MediaFrame } from "@/components/media/ContentImage";
import { cn } from "@/lib/utils";

export function DetailHero({
  src,
  alt,
  className,
  badge,
  badgeTone = "default",
}: {
  src: string;
  alt: string;
  className?: string;
  badge?: string;
  badgeTone?: "default" | "safe" | "caution" | "toxic";
}) {
  const badgeClass =
    badgeTone === "safe"
      ? "bg-triage-green text-white"
      : badgeTone === "caution"
        ? "bg-triage-yellow text-triage-yellow-foreground"
        : badgeTone === "toxic"
          ? "bg-triage-red text-white"
          : "bg-brand-primary text-white";

  return (
    <div className={cn("relative mb-6 -mx-4 sm:mx-0", className)}>
      <MediaFrame
        ratio="aspect-[16/9] sm:aspect-[2/1]"
        className="w-full overflow-hidden rounded-none sm:rounded-2xl"
      >
        <ContentImage
          src={src}
          alt={alt}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
        />
      </MediaFrame>
      {badge ? (
        <span
          className={cn(
            "absolute top-3 left-3 inline-flex min-h-9 items-center rounded-xl px-3 text-xs font-bold tracking-wide uppercase shadow-md ring-2 ring-white/90 sm:top-4 sm:left-4",
            badgeClass,
          )}
        >
          {badge}
        </span>
      ) : null}
    </div>
  );
}
