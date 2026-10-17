import Link from "next/link";
import {
  AlertTriangle,
  Bird,
  Bone,
  BookOpen,
  Calculator,
  Cat,
  Dog,
  HeartPulse,
  MapPin,
  Phone,
  Rabbit,
  ShieldCheck,
  Sparkles,
  Utensils,
  type LucideIcon,
} from "lucide-react";

const categories: {
  label: string;
  detail: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { label: "Dogs", detail: "Breeds and daily care", href: "/dogs", icon: Dog },
  { label: "Cats", detail: "Health and home care", href: "/cats", icon: Cat },
  { label: "Birds", detail: "Aviary warning signs", href: "/birds", icon: Bird },
  { label: "Small Pets", detail: "Rabbits and pocket pets", href: "/small-pets", icon: Rabbit },
  { label: "Symptoms & Triage", detail: "What can wait, what cannot", href: "/health-symptoms", icon: HeartPulse },
  { label: "Food Calculator", detail: "Portions from body weight", href: "/tools/pet-food-calculator", icon: Calculator },
  { label: "Free AI Assistant", detail: "Sort a care question", href: "/tools/ai-assistant", icon: Sparkles },
  { label: "Vet Finder", detail: "Clinics near a place name", href: "/tools/vet-finder", icon: MapPin },
];

const triageLevels = [
  {
    code: "Code Green",
    timing: "Monitor",
    detail: "The pet is bright, eating, and breathing quietly. Log the sign and recheck on a set schedule.",
    tone: "border-triage-green/30 bg-triage-green-surface text-triage-green-foreground",
    badge: "bg-triage-green text-white",
  },
  {
    code: "Code Yellow",
    timing: "Urgent, 12–24 hours",
    detail: "Book a veterinarian within a day. Keep water available and note what changed since the first sign.",
    tone: "border-triage-yellow/40 bg-triage-yellow-surface text-triage-yellow-foreground",
    badge: "bg-triage-yellow text-slate-900",
  },
  {
    code: "Code Red",
    timing: "Emergency, within 60 minutes",
    detail: "Collapse, labored breathing, toxin exposure, or unproductive retching. Travel to an emergency hospital now.",
    tone: "border-triage-red/30 bg-triage-red-surface text-triage-red-foreground",
    badge: "bg-triage-red text-white",
  },
] as const;

const toxinGuides: {
  title: string;
  href: string;
  species: string;
  summary: string;
}[] = [
  {
    title: "Grapes and raisins in dogs",
    href: "/nutrition/grapes-raisins-dogs",
    species: "Dogs",
    summary: "Any amount is Code Red. Kidney injury often appears in 24 to 72 hours, and there is no antidote.",
  },
  {
    title: "Chocolate toxicity",
    href: "/emergency/chocolate-toxicity",
    species: "Dogs",
    summary: "Darker chocolate packs more theobromine. Baking chocolate and cocoa powder are the highest risk forms.",
  },
  {
    title: "Lily toxicity in cats",
    href: "/emergency/lily-toxicity",
    species: "Cats",
    summary: "Lilium and Hemerocallis, including pollen and vase water, can destroy kidney tissue. Peace lily is a different plant.",
  },
  {
    title: "Xylitol in dogs",
    href: "/nutrition/xylitol-dogs",
    species: "Dogs",
    summary: "Sugar-free gum and baked goods can drop blood sugar within about 30 to 60 minutes. Liver injury can follow.",
  },
  {
    title: "Ibuprofen and human pain tablets",
    href: "/medications/ibuprofen",
    species: "Dogs & cats",
    summary: "One human tablet can ulcerate a small dog. Any amount in a cat is an emergency.",
  },
  {
    title: "Onion and garlic in dogs",
    href: "/nutrition/onions-garlic-dogs",
    species: "Dogs",
    summary: "Cooking does not remove the risk. Red blood cell damage often shows on days 2 to 5.",
  },
];

const articles: {
  title: string;
  href: string;
  kicker: string;
  summary: string;
  icon: LucideIcon;
}[] = [
  {
    title: "How to read a dog food label without guessing",
    href: "/dogs/nutrition",
    kicker: "Dog nutrition",
    icon: Utensils,
    summary:
      "The guaranteed analysis lists minimums, not the bowl in front of your dog. Compare calories per cup with the feeding table, then adjust for weight trend over two weeks.",
  },
  {
    title: "When a cat stops eating, the clock matters",
    href: "/cats/care",
    kicker: "Cat care",
    icon: Cat,
    summary:
      "A missed meal can become hepatic lipidosis faster in overweight cats. Note the last full meal, any vomiting, and whether water intake changed before you call a clinic.",
  },
  {
    title: "Quiet birds are not always resting",
    href: "/birds",
    kicker: "Avian care",
    icon: Bird,
    summary:
      "Fluffed feathers, a tail bob, or staying on the cage floor are early illness signs. Weigh small birds weekly so a drop shows up before the bird looks sick.",
  },
  {
    title: "A limp is a symptom, not a diagnosis",
    href: "/health-symptoms/dogs/limping",
    kicker: "Triage",
    icon: Bone,
    summary:
      "Sudden non-weight-bearing lameness needs same-day care, especially after a jump or a fight. Mild stiffness that eases with a short walk can be monitored and logged.",
  },
];

const homeTools: {
  title: string;
  detail: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Pet food calculator",
    detail: "Portion ranges from body weight for dogs and cats.",
    href: "/tools/pet-food-calculator",
    icon: Calculator,
  },
  {
    title: "Diet planner",
    detail: "A week of meals and a food-transition schedule you can print.",
    href: "/tools/diet-planner",
    icon: Utensils,
  },
  {
    title: "Free AI assistant",
    detail: "Sort a care question into monitor, urgent, or emergency.",
    href: "/tools/ai-assistant",
    icon: Sparkles,
  },
  {
    title: "Vet finder",
    detail: "Open clinics near a city or postal code when you need to travel.",
    href: "/tools/vet-finder",
    icon: MapPin,
  },
];

const poisonLines = [
  {
    region: "US",
    name: "ASPCA Animal Poison Control",
    href: "tel:+18884264435",
    number: "888-426-4435",
  },
  {
    region: "US",
    name: "Pet Poison Helpline",
    href: "tel:+18557647661",
    number: "855-764-7661",
    note: "Fee may apply",
  },
  {
    region: "UK",
    name: "Animal PoisonLine",
    href: "tel:+441202509000",
    number: "01202 509000",
  },
  {
    region: "AU",
    name: "Australian Animal Poisons Centre",
    href: "tel:+611300869738",
    number: "1300 869 738",
  },
] as const;

export default function Home() {
  return (
    <div className="container py-8 lg:py-12">
      <div className="w-full space-y-14">
        <section className="home-rise overflow-hidden rounded-3xl bg-brand-primary text-white">
          <div className="max-w-3xl p-6 sm:p-10 xl:p-12">
            <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-200 uppercase">
              Pet Safety Hub
            </p>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
              Symptom triage, toxin guides, and feeding help you can act on tonight.
            </h1>
            <p className="mb-6 text-base leading-relaxed text-brand-primary-100 xl:text-lg">
              Start with Code Green, Yellow, or Red. Open a grape, chocolate, lily, or xylitol page
              when exposure already happened. A licensed veterinarian still makes the diagnosis.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/health-symptoms"
                className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-brand-primary hover:bg-brand-accent-50"
              >
                Start with symptoms
              </Link>
              <Link
                href="/emergency"
                className="inline-flex min-h-11 items-center rounded-full bg-brand-accent-800 px-5 text-sm font-semibold text-white hover:bg-brand-accent-900"
              >
                Emergency guide
              </Link>
              <Link
                href="/tools/ai-assistant"
                className="inline-flex min-h-11 items-center rounded-full border border-white/40 px-5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Free AI assistant
              </Link>
            </div>
          </div>
        </section>

        <nav
          aria-label="Categories"
          className="home-rise home-rise-delay-1 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:gap-4"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.href}
                href={category.href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-brand-primary/30 hover:bg-brand-primary-50 sm:p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary text-white transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <span className="mt-4">
                  <span className="block text-sm font-semibold text-brand-primary">{category.label}</span>
                  <span className="mt-1 block text-xs leading-snug text-slate-600">{category.detail}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        <section className="home-rise home-rise-delay-2 space-y-5">
          <div className="max-w-3xl">
            <p className="mb-2 text-xs font-semibold tracking-wide text-brand-accent-700 uppercase">
              Symptom triage
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-brand-primary xl:text-3xl">
              Three codes for the next hour
            </h2>
            <p className="mb-0 text-slate-700">
              Every illness guide on Pet Safety Hub uses the same three levels so you can decide
              whether to watch, book soon, or leave for the hospital.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {triageLevels.map((level) => (
              <div key={level.code} className={`rounded-2xl border p-5 xl:p-6 ${level.tone}`}>
                <span
                  className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase ${level.badge}`}
                >
                  {level.code}
                </span>
                <p className="mb-2 text-sm font-semibold">{level.timing}</p>
                <p className="mb-0 text-sm leading-relaxed opacity-90">{level.detail}</p>
              </div>
            ))}
          </div>
          <Link
            href="/health-symptoms"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-primary hover:text-brand-primary-700"
          >
            Open the symptom library →
          </Link>
        </section>

        <section className="home-rise home-rise-delay-3 rounded-3xl border border-triage-red/20 bg-gradient-to-br from-triage-red-surface via-brand-surface to-brand-surface-warm p-6 sm:p-8 xl:p-10">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-3xl">
              <div className="mb-2 flex items-center gap-2 text-triage-red">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                <p className="mb-0 text-xs font-semibold tracking-wide uppercase">Poison & toxins</p>
              </div>
              <h2 className="mb-3 text-2xl font-semibold text-brand-primary xl:text-3xl">
                Common household toxins
              </h2>
              <p className="mb-0 text-slate-700">
                These guides name clinic treatments without home dosing charts. If exposure already
                happened, call a poison hotline while you travel.
              </p>
            </div>
            <Link
              href="/emergency"
              className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-triage-red px-5 text-sm font-semibold text-white hover:bg-triage-red-foreground"
            >
              Full emergency board
            </Link>
          </div>
          <div className="mb-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {toxinGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-2xl border border-white/80 bg-white/90 p-4 transition-colors hover:border-triage-red/30 hover:bg-white xl:p-5"
              >
                <p className="mb-1 text-xs font-semibold tracking-wide text-triage-red uppercase">
                  {guide.species}
                </p>
                <p className="mb-2 text-base font-semibold text-slate-800">{guide.title}</p>
                <p className="mb-0 text-sm leading-relaxed text-slate-600">{guide.summary}</p>
              </Link>
            ))}
          </div>
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Phone className="h-4 w-4 text-triage-red" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-slate-800">Poison hotlines</h3>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
              {poisonLines.map((line) => (
                <li key={line.href + line.name}>
                  <a
                    href={line.href}
                    className="flex min-h-11 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 transition-colors hover:border-triage-red/40 hover:bg-triage-red-surface"
                  >
                    <span>
                      <span className="block text-xs font-bold tracking-wide text-triage-red uppercase">
                        {line.region}
                      </span>
                      <span className="block text-sm font-semibold leading-5">{line.name}</span>
                      {"note" in line && line.note ? (
                        <span className="block text-xs text-slate-500">{line.note}</span>
                      ) : null}
                    </span>
                    <span className="shrink-0 text-sm font-bold text-triage-red">{line.number}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="home-rise space-y-5">
          <div className="max-w-3xl">
            <div className="mb-2 flex items-center gap-2 text-brand-accent-700">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              <p className="mb-0 text-xs font-semibold tracking-wide uppercase">Care library</p>
            </div>
            <h2 className="mb-3 text-2xl font-semibold text-brand-primary xl:text-3xl">
              From the care library
            </h2>
            <p className="mb-0 text-slate-700">
              These guides show how nutrition, illness signs, and home monitoring read across the
              library.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {articles.map((article) => (
              <ArticleCard key={article.href} {...article} />
            ))}
          </div>
        </section>

        <section className="home-rise space-y-5">
          <div className="max-w-3xl">
            <h2 className="mb-3 text-2xl font-semibold text-brand-primary xl:text-3xl">
              Tools for the next decision
            </h2>
            <p className="mb-0 text-slate-700">
              Calculators and finders help you size a meal, plan a diet change, or locate an open
              clinic. They do not replace a licensed veterinarian.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {homeTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-primary/30 hover:bg-brand-primary-50"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent text-white transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-brand-primary">{tool.title}</span>
                    <span className="mt-1 block text-sm leading-snug text-slate-600">{tool.detail}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="home-rise overflow-hidden rounded-3xl border border-brand-primary/15 bg-brand-primary-50 px-6 py-8 sm:px-8 xl:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-2 flex items-center gap-2 text-brand-primary">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                <p className="mb-0 text-xs font-semibold tracking-wide uppercase">Editorial standards</p>
              </div>
              <h2 className="mb-3 text-2xl font-semibold text-brand-primary xl:text-3xl">
                Compiled from published clinical sources
              </h2>
              <p className="mb-0 text-slate-700">
                The Pet Safety Hub Editorial Team works from references such as the ASPCA Animal
                Poison Control Center and the Merck Veterinary Manual. Pages are educational. They
                do not replace an exam by a licensed veterinarian.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-end">
              <Link
                href="/editorial-standards"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-primary px-5 text-sm font-semibold text-white hover:bg-brand-primary-700"
              >
                Read our standards
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-primary hover:text-brand-primary-700"
              >
                About Pet Safety Hub →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ArticleCard({
  title,
  href,
  kicker,
  summary,
  icon: Icon,
}: {
  title: string;
  href: string;
  kicker: string;
  summary: string;
  icon: LucideIcon;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-primary/25">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary text-white">
        <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
      </span>
      <p className="mb-2 text-xs font-semibold tracking-wide text-brand-accent-700 uppercase">
        {kicker}
      </p>
      <h3 className="mb-3 text-lg font-semibold leading-snug text-slate-800">
        <Link href={href} className="hover:text-brand-primary">
          {title}
        </Link>
      </h3>
      <p className="mb-0 text-sm leading-relaxed text-slate-700">{summary}</p>
    </article>
  );
}
