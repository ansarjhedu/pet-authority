import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Dog Breeds", href: "/dogs" },
  { label: "Cat Health", href: "/cats" },
  { label: "Avian Care", href: "/birds" },
  { label: "Small Mammals", href: "/small-pets" },
] as const;

const tools = [
  { label: "Vet Finder", href: "/tools/vet-finder" },
  { label: "Calorie Calculator", href: "/tools/pet-food-calculator" },
  { label: "Diet Planner", href: "/tools/diet-planner" },
  { label: "AI Assistant", href: "/tools/ai-assistant" },
  { label: "Medications & Safety", href: "/medications" },
] as const;

const contacts = [
  {
    region: "US",
    name: "ASPCA Animal Poison Control",
    detail: "888-426-4435",
    href: "tel:+18884264435",
  },
  {
    region: "UK",
    name: "Animal PoisonLine",
    detail: "01202 509000",
    href: "tel:+441202509000",
  },
  {
    region: "AU",
    name: "Australian Animal Poisons Centre",
    detail: "1300 869 738",
    href: "tel:+611300869738",
  },
] as const;

const trust = [
  { label: "About", href: "/about" },
  { label: "Editorial standards", href: "/editorial-standards" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
] as const;

const regions = ["US", "UK", "AU"] as const;

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-primary text-white">
      <div className="container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <Image src="/brand/logo-icon.png" alt="" width={36} height={36} className="h-9 w-9" />
              </span>
              <span className="text-lg font-semibold">Pet Safety Hub</span>
            </Link>
            <p className="mb-0 max-w-reading text-sm leading-relaxed text-brand-primary-100">
              Pet Safety Hub publishes educational pet-care guides from clinical references. Use the
              triage codes and toxin pages to decide when a licensed veterinarian should take over.
            </p>
          </div>

          <nav aria-label="Categories">
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-brand-accent-200 uppercase">
              Care topics
            </h2>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white hover:text-brand-accent-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Tools">
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-brand-accent-200 uppercase">
              Tools and directories
            </h2>
            <ul className="space-y-2">
              {tools.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white hover:text-brand-accent-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-label="Emergency contacts">
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-brand-accent-200 uppercase">
              Emergency contacts
            </h2>
            <ul className="space-y-3">
              {contacts.map((contact) => (
                <li key={contact.region}>
                  <a href={contact.href} className="block hover:text-brand-accent-100">
                    <span className="block text-xs font-semibold tracking-wide text-brand-accent-100 uppercase">
                      {contact.region}
                    </span>
                    <span className="block text-sm font-semibold">{contact.name}</span>
                    <span className="block text-sm text-brand-primary-100">{contact.detail}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 rounded-2xl bg-brand-surface px-5 py-4 text-slate-800">
          <h2 className="mb-2 text-sm font-semibold tracking-wide text-triage-red uppercase">
            Veterinary disclaimer
          </h2>
          <p className="mb-0 text-sm leading-relaxed">
            Pet Safety Hub content is for educational purposes and is not a substitute for clinical
            veterinary diagnosis, prognosis, or treatment. Always consult a licensed veterinarian
            in an emergency.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-brand-primary-100 sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-0">© 2026 Pet Safety Hub. All rights reserved.</p>
          <nav aria-label="Editorial" className="flex flex-wrap gap-x-4 gap-y-2">
            {trust.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-white hover:text-brand-accent-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Region" className="flex items-center gap-1">
            {regions.map((region) => (
              <Link
                key={region}
                href={`/?region=${region}`}
                className="rounded-full px-3 py-1 text-xs font-bold tracking-wide text-white uppercase hover:bg-white/15"
              >
                {region}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
