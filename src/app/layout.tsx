import type { Metadata } from "next";
import { MediavineScript } from "@/components/ads/MediavineScript";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_OG_IMAGE } from "@/lib/images";
import { generateOrganizationSchema, generateWebSiteSchema, getSiteUrl } from "@/lib/seo/schema";
import "./globals.css";

const siteDescription =
  "Pet Safety Hub (petsafetyhub.com): symptom triage, nutrition guides, toxin pages, and care tools for dogs, cats, birds, and small pets.";

const adsenseAccount = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ACCOUNT?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Pet Safety Hub",
    template: "%s · Pet Safety Hub",
  },
  description: siteDescription,
  applicationName: "Pet Safety Hub",
  openGraph: {
    type: "website",
    siteName: "Pet Safety Hub",
    title: "Pet Safety Hub",
    description: siteDescription,
    url: getSiteUrl(),
    locale: "en_US",
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 675, alt: "Pet Safety Hub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Safety Hub",
    description: siteDescription,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  },
  ...(adsenseAccount
    ? {
        other: {
          "google-adsense-account": adsenseAccount,
        },
      }
    : {}),
};

const themeClassName =
  "bg-brand-surface text-slate-800 antialiased min-h-screen font-sans";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${themeClassName} flex flex-col`}>
      <body className={`${themeClassName} flex flex-1 flex-col`}>
        <GoogleAnalytics />
        <MediavineScript />
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebSiteSchema()} />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
