import type { Metadata } from "next";
import { MediavineScript } from "@/components/ads/MediavineScript";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationSchema, generateWebSiteSchema, getSiteUrl } from "@/lib/seo/schema";
import "./globals.css";

const siteDescription =
  "Evidence-based pet care, symptom triage, and veterinary tools for dogs, cats, birds, and small pets.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "PetAuthority",
    template: "%s · PetAuthority",
  },
  description: siteDescription,
  applicationName: "PetAuthority",
  openGraph: {
    type: "website",
    siteName: "PetAuthority",
    title: "PetAuthority",
    description: siteDescription,
    url: getSiteUrl(),
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "PetAuthority",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  },
  other: {
    "google-adsense-account":
      process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ACCOUNT ?? "REPLACE_WITH_CA_PUB_ID",
  },
};

const themeClassName =
  "bg-brand-surface text-slate-800 antialiased min-h-screen font-sans";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${themeClassName} flex flex-col`}>
      <body className={`${themeClassName} flex flex-1 flex-col`}>
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
