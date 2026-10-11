import Link from "next/link";
import { Calculator, MapPin, Phone, Utensils } from "lucide-react";

const emergencyLines = [
  {
    name: "ASPCA Poison Control (US)",
    href: "tel:+18884264435",
    number: "888-426-4435",
  },
  {
    name: "RSPCA (UK)",
    href: "tel:+443001234999",
    number: "0300 1234 999",
  },
  {
    name: "Australian Animal Poisons Centre",
    href: "tel:+611300869738",
    number: "1300 869 738",
  },
] as const;

const tools = [
  {
    label: "Food Calculator",
    href: "/tools/pet-food-calculator",
    icon: Calculator,
  },
  {
    label: "Diet Planner",
    href: "/tools/diet-planner",
    icon: Utensils,
  },
  {
    label: "Vet Finder",
    href: "/tools/vet-finder",
    icon: MapPin,
  },
] as const;

export function Sidebar() {
  return (
    <aside className="flex h-full w-full shrink-0 flex-col gap-6 lg:w-[320px]">
      <section className="rounded-2xl border border-triage-red/20 bg-triage-red-surface p-5">
        <div className="mb-4 flex items-center gap-2">
          <Phone className="h-5 w-5 text-triage-red" aria-hidden="true" />
          <h2 className="text-base font-semibold text-triage-red-foreground">
            Quick emergency action
          </h2>
        </div>
        <div className="mb-4 grid gap-2">
          <Link
            href="/emergency"
            className="flex min-h-11 items-center rounded-xl bg-triage-red px-3 text-sm font-bold text-white hover:bg-triage-red-foreground"
          >
            Open the emergency guide
          </Link>
          <Link
            href="/health-symptoms"
            className="flex min-h-11 items-center rounded-xl bg-white px-3 text-sm font-semibold text-slate-800 hover:bg-brand-surface"
          >
            Symptom triage
          </Link>
        </div>
        <ul className="space-y-2">
          {emergencyLines.map((line) => (
            <li key={line.href}>
              <a
                href={line.href}
                className="flex min-h-11 items-center justify-between gap-3 rounded-xl bg-white px-3 py-2.5 text-slate-800 shadow-sm transition-colors hover:bg-brand-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-triage-red"
              >
                <span className="text-sm font-semibold leading-5">{line.name}</span>
                <span className="shrink-0 text-sm font-bold text-triage-red">{line.number}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="mb-3 text-base font-semibold text-brand-primary">Tool quick links</h2>
        <ul className="space-y-1">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <li key={tool.href}>
                <Link
                  href={tool.href}
                  className="flex min-h-11 items-center gap-3 rounded-xl px-2 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-brand-primary-50 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {tool.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </aside>
  );
}
