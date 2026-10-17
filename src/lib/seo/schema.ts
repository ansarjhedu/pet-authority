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
  faqs?: { question: string; answer: string }[];
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

const CLINICAL_CITATIONS = [
  "https://www.aspca.org/pet-care/animal-poison-control",
  "https://www.merckvetmanual.com/",
] as const;

function editorialAuthor() {
  return {
    "@type": "Organization",
    name: "PetAuthority Editorial Team",
    url: absoluteUrl("/about"),
  };
}

export function generateOrganizationSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PetAuthority",
    url,
    description:
      "Evidence-based pet care, symptom triage, and veterinary tools for dogs, cats, birds, and small pets.",
    publishingPrinciples: `${url}/editorial-standards`,
    knowsAbout: ["Veterinary medicine", "Pet nutrition", "Emergency pet care"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@petauthority.com",
      contactType: "customer support",
      url: `${url}/contact`,
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
        author: editorialAuthor(),
        citation: CLINICAL_CITATIONS,
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

const ARTICLE_ABOUT = {
  emergency: "Emergency veterinary guidance",
  symptom: "Symptom triage guidance",
  nutrition: "Pet food safety guidance",
  medication: "Veterinary medication safety",
} as const;

export function generateVeterinaryArticleSchema(
  article: VeterinaryArticleInput,
  type: keyof typeof ARTICLE_ABOUT,
) {
  const url = absoluteUrl(article.path);
  const articleNode = {
    "@type": "Article",
    name: article.title,
    headline: article.title,
    description: article.description,
    url,
    dateModified: CONTENT_DATE,
    about: ARTICLE_ABOUT[type],
    author: editorialAuthor(),
    citation: CLINICAL_CITATIONS,
    audience: {
      "@type": "Audience",
      audienceType: "Pet Owners in US, UK, Australia",
    },
    publisher: {
      "@type": "Organization",
      name: "PetAuthority",
      url: getSiteUrl(),
    },
  };

  if (!article.faqs?.length) {
    return { "@context": "https://schema.org", ...articleNode };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      articleNode,
      {
        "@type": "FAQPage",
        url,
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
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
