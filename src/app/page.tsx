import Link from "next/link";
import { Sidebar } from "@/components/layout/Sidebar";

const categories = [
  { label: "Dogs", href: "/dogs" },
  { label: "Cats", href: "/cats" },
  { label: "Birds", href: "/birds" },
  { label: "Small Pets", href: "/small-pets" },
  { label: "Symptoms & Triage", href: "/health-symptoms" },
  { label: "Food Calculator", href: "/tools/pet-food-calculator" },
  { label: "Free AI Assistant", href: "/tools/ai-assistant" },
  { label: "Vet Finder", href: "/tools/vet-finder" },
] as const;

const articles = [
  {
    title: "How to read a dog food label without guessing",
    href: "/dogs/nutrition",
    kicker: "Dog nutrition",
    summary:
      "The guaranteed analysis lists minimums, not the bowl in front of your dog. Compare calories per cup with the feeding table, then adjust for weight trend over two weeks.",
  },
  {
    title: "When a cat stops eating, the clock matters",
    href: "/cats/care",
    kicker: "Cat care",
    summary:
      "A missed meal can become hepatic lipidosis faster in overweight cats. Note the last full meal, any vomiting, and whether water intake changed before you call a clinic.",
  },
  {
    title: "Quiet birds are not always resting",
    href: "/birds",
    kicker: "Avian care",
    summary:
      "Fluffed feathers, a tail bob, or staying on the cage floor are early illness signs. Weigh small birds weekly so a drop shows up before the bird looks sick.",
  },
  {
    title: "A limp is a symptom, not a diagnosis",
    href: "/health-symptoms/dogs/limping",
    kicker: "Triage",
    summary:
      "Sudden non-weight-bearing lameness needs same-day care, especially after a jump or a fight. Mild stiffness that eases with a short walk can be monitored and logged.",
  },
] as const;

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
                <p className="mb-6 max-w-reading text-base leading-relaxed text-emerald-50">
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
              <div
                className="aspect-[4/3] rounded-2xl bg-brand-primary-800"
                aria-hidden="true"
              />
            </div>
          </section>

          <nav aria-label="Categories" className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="shrink-0 rounded-full border border-brand-primary/15 bg-white px-4 py-2 text-sm font-semibold text-brand-primary hover:border-brand-primary hover:bg-brand-primary-50"
              >
                {category.label}
              </Link>
            ))}
          </nav>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-primary">From the care library</h2>
            <p className="mb-6 max-w-reading text-slate-700">
              These guides show how nutrition, illness signs, and home monitoring read in the
              care library. Image areas keep a fixed ratio so photos cannot shift the page.
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
}: {
  title: string;
  href: string;
  kicker: string;
  summary: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="aspect-[16/10] bg-brand-primary-50" aria-hidden="true" />
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold tracking-wide text-brand-accent-700 uppercase">
          {kicker}
        </p>
        <h3 className="mb-3 text-lg font-semibold leading-snug text-slate-800">
          <Link href={href} className="hover:text-brand-primary">
            {title}
          </Link>
        </h3>
        <p className="mb-0 text-sm leading-relaxed text-slate-700">{summary}</p>
      </div>
    </article>
  );
}
