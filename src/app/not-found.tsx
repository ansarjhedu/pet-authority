import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That Pet Safety Hub page is not available. Return to the homepage to find a guide.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container flex flex-1 flex-col justify-center py-16 lg:py-24">
      <article className="mx-auto max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          404
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          This page is not on Pet Safety Hub
        </h1>
        <p className="mb-8 text-slate-700">
          The address may be mistyped, or the guide has moved. Use the homepage to open emergency
          care, nutrition, or medications. If a pet is in danger, call an emergency hospital or a
          poison hotline before you keep searching.
        </p>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-full bg-brand-primary px-5 text-sm font-bold text-white hover:bg-brand-primary-800"
        >
          Back to the homepage
        </Link>
      </article>
    </div>
  );
}
