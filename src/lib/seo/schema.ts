import { getBreedGuide } from "@/content/breed-guides";
import type { Breed } from "@/lib/breeds/types";
import { breedPath, SPECIES_LABEL } from "@/lib/breeds/types";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type VeterinaryArticleInput = {
  title: string;
  description: string;
  path: string;
};

const PUBLISHED_SITE_URL = "https://petauthority.com";
const CONTENT_DATE = "2026-10-11";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  return configured || PUBLISHED_SITE_URL;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const reviewer = {
  "@type": "Person",
  name: "Dr. Sarah Jenkins, DVM",
  honorificSuffix: "DVM",
  jobTitle: "Veterinarian",
  memberOf: {
    "@type": "Organization",
    name: "Veterinary Medical Advisory Board",
  },
} as const;

export function generateOrganizationSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Organization"],
    name: "PetAuthority",
    url,
    description:
      "Evidence-based pet care, symptom triage, and veterinary tools for dogs, cats, birds, and small pets.",
    medicalSpecialty: "https://schema.org/VeterinaryCare",
    publishingPrinciples: `${url}/editorial-policy`,
    knowsAbout: ["Veterinary medicine", "Pet nutrition", "Emergency pet care"],
    member: {
      "@type": "Organization",
      name: "Veterinary Medical Advisory Board",
      member: reviewer,
    },
  };
}

export function generateWebSiteSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PetAuthority",
    url,
    publisher: {
      "@type": "Organization",
      name: "PetAuthority",
      url,
    },
  };
}

export function generateBreedSchema(breed: Breed) {
  const url = absoluteUrl(breedPath(breed));
  const guide = getBreedGuide(breed.slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide?.title ?? breed.name,
        description: breed.tagline,
        url,
        dateModified: CONTENT_DATE,
        articleSection: SPECIES_LABEL[breed.species],
        about: breed.name,
        audience: {
          "@type": "Audience",
          audienceType: "Pet Owners in US, UK, Australia",
        },
        publisher: {
          "@type": "Organization",
          name: "PetAuthority",
          url: getSiteUrl(),
        },
      },
      {
        "@type": "FAQPage",
        url,
        mainEntity: breed.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function generateVeterinaryArticleSchema(
  article: VeterinaryArticleInput,
  type: "emergency" | "symptom",
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: article.title,
    headline: article.title,
    description: article.description,
    url: absoluteUrl(article.path),
    dateModified: CONTENT_DATE,
    lastReviewed: CONTENT_DATE,
    about: type === "emergency" ? "Emergency veterinary guidance" : "Symptom triage guidance",
    audience: {
      "@type": "Audience",
      audienceType: "Pet Owners in US, UK, Australia",
    },
    reviewedBy: reviewer,
    publisher: {
      "@type": "Organization",
      name: "PetAuthority",
      url: getSiteUrl(),
    },
  };
}

export function generateToolSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: absoluteUrl(url),
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: "PetAuthority",
      url: getSiteUrl(),
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
