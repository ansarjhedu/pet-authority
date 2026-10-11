import type { VetCountry } from "@/lib/vets/types";

export function toTelHref(phone: string, country: VetCountry): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 8) {
    return null;
  }

  if (country === "US") {
    const local = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
    return local.length === 10 ? `tel:+1${local}` : null;
  }

  const national = digits.replace(/^0+/, "");
  if (country === "UK") {
    return `tel:+44${national}`;
  }

  return `tel:+61${national}`;
}
