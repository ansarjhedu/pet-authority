import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContentImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Fill a relative parent (default). Pass false for fixed width/height. */
  fill?: boolean;
  width?: number;
  height?: number;
};

export function ContentImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  fill = true,
  width,
  height,
}: ContentImageProps) {
  if (!fill && width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}

export function MediaFrame({
  children,
  className,
  ratio = "aspect-[4/3]",
}: {
  children: ReactNode;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-brand-primary-50", ratio, className)}>
      {children}
    </div>
  );
}
