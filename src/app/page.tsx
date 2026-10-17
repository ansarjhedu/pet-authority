import Image from "next/image";
import Link from "next/link";
import {
  Bird,
  Bone,
  Calculator,
  Cat,
  Dog,
  HeartPulse,
  MapPin,
  Rabbit,
  Sparkles,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";

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

export default function Home() {
  return (
    <div className="container py-8 lg:py-12">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="min-w-0 max-w-full flex-1 space-y-8">
          <section className="overflow-hidden rounded-3xl bg-brand-primary text-white">
            <div className="grid gap-6 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-200 uppercase">
                  Veterinary pet authority
                </p>
                <h1 className="mb-4 max-w-reading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Clear pet health guidance, written for the moment you need it.
                </h1>
                <p className="mb-6 max-w-reading text-base leading-relaxed text-brand-primary-100">
                  PetAuthority explains symptoms, nutrition, and home care in plain language.
                  Each guide tells you what to watch, what can wait, and when to contact a
                  licensed veterinarian.
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
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-white p-4">
                <Image
                  src="/brand/logo-full.png"
                  alt="PetAuthority. Veterinary insight for dogs, cats, birds, and small pets."
                  width={480}
                  height={430}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </section>

          <nav aria-label="Categories" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-brand-primary/30 hover:bg-brand-primary-50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary text-white">
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

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-primary">From the care library</h2>
            <p className="mb-6 max-w-reading text-slate-700">
              These guides show how nutrition, illness signs, and home monitoring read in the
              care library.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {articles.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </section>
        </div>

        <div className="hidden w-full shrink-0 lg:block lg:w-[320px]">
          <Sidebar />
        </div>
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
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
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
