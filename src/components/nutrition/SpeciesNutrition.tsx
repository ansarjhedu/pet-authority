import Link from "next/link";
import { ContentImage, MediaFrame } from "@/components/media/ContentImage";
import { HubBanner } from "@/components/media/HubBanner";
import { foodImage, hubImage } from "@/lib/images";

const DOG_STAGES = [
  {
    title: "Puppy",
    detail:
      "Growth needs more calories than an adult of the same weight. Feed a complete growth diet and keep meals measured. Recheck body condition every two weeks so a pudgy puppy does not become an overweight adolescent.",
  },
  {
    title: "Adult",
    detail:
      "A neutered adult usually needs less food than the bag suggests. You should feel the ribs with a light touch and see a waist from above. Adjust the bowl from the scale, not from a begging look.",
  },
  {
    title: "Senior",
    detail:
      "Large dogs often reach senior years around 7, smaller dogs closer to 10. Calories may fall if activity falls, but unexplained weight loss needs a clinic visit before you simply add food.",
  },
] as const;

const CAT_STAGES = [
  {
    title: "Kitten",
    detail:
      "Kittens need a complete growth diet and several meals a day. A hungry kitten who is still growing should not be switched to an adult food early to slow the weight.",
  },
  {
    title: "Adult",
    detail:
      "Most indoor adults gain weight on free-choice dry food. Measure meals, use play before dinner, and keep a waist you can see behind the ribs.",
  },
  {
    title: "Senior",
    detail:
      "From about 11 years, watch the scale. Weight loss with a strong appetite can be thyroid disease. A cat who skips meals can develop hepatic lipidosis, so call rather than waiting out a fast.",
  },
] as const;

const DOG_CHIPS = [
  { href: "/nutrition/pumpkin-dogs", slug: "pumpkin-dogs", label: "Pumpkin" },
  { href: "/nutrition/blueberries-dogs", slug: "blueberries-dogs", label: "Blueberries" },
  { href: "/nutrition/cooked-chicken-dogs", slug: "cooked-chicken-dogs", label: "Cooked chicken" },
  { href: "/nutrition/carrots-dogs", slug: "carrots-dogs", label: "Carrots" },
  { href: "/nutrition/chocolate-dogs", slug: "chocolate-dogs", label: "Chocolate" },
  { href: "/nutrition/grapes-raisins-dogs", slug: "grapes-raisins-dogs", label: "Grapes" },
  { href: "/nutrition/xylitol-dogs", slug: "xylitol-dogs", label: "Xylitol" },
  { href: "/nutrition/onions-garlic-dogs", slug: "onions-garlic-dogs", label: "Onions" },
] as const;

const CAT_CHIPS = [
  { href: "/nutrition/pumpkin-cats", slug: "pumpkin-cats", label: "Pumpkin" },
  { href: "/nutrition/cooked-chicken-cats", slug: "cooked-chicken-cats", label: "Cooked chicken" },
  { href: "/nutrition/salmon-cats", slug: "salmon-cats", label: "Salmon" },
  { href: "/nutrition/blueberries-cats", slug: "blueberries-cats", label: "Blueberries" },
  { href: "/nutrition/lilies-cats", slug: "lilies-cats", label: "Lilies" },
  { href: "/nutrition/onions-garlic-cats", slug: "onions-garlic-cats", label: "Onions" },
  { href: "/nutrition/chocolate-cats", slug: "chocolate-cats", label: "Chocolate" },
] as const;

export function SpeciesNutrition({ species }: { species: "dogs" | "cats" }) {
  const stages = species === "dogs" ? DOG_STAGES : CAT_STAGES;
  const chips = species === "dogs" ? DOG_CHIPS : CAT_CHIPS;
  const label = species === "dogs" ? "dog" : "cat";

  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 lg:py-12">
      <HubBanner
        src={hubImage("nutrition")}
        alt={`${label} nutrition`}
        eyebrow={species === "dogs" ? "Dogs" : "Cats"}
        title={species === "dogs" ? "Dog nutrition" : "Cat nutrition"}
        lede="Life stage changes the calorie target. Water needs track the food. The safe-food cards open the species note rather than a generic list."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] xl:gap-10">
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">From growth to senior</h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {stages.map((stage) => (
                <li key={stage.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">{stage.title}</h3>
                  <p className="mb-0 text-sm text-slate-700">{stage.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">Hydration</h2>
            <p className="mb-0 max-w-reading text-slate-700">
              A practical planning figure is about 1 milliliter of water for each kilocalorie eaten.
              Wet food already contains moisture, so the bowl may look quieter. A sudden increase in
              drinking, or a {label} who will not drink and will not eat, needs a veterinarian.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              Common {label} food notes
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {chips.map((chip) => (
                <li key={chip.href}>
                  <Link
                    href={chip.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-brand-primary/30"
                  >
                    <MediaFrame ratio="aspect-[4/3]" className="rounded-none">
                      <ContentImage
                        src={foodImage(chip.slug)}
                        alt={chip.label}
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </MediaFrame>
                    <span className="p-4 text-sm font-semibold text-brand-primary group-hover:underline">
                      {chip.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 mb-0">
              <Link href="/nutrition" className="text-sm font-semibold text-brand-primary hover:underline">
                Open the full food safety search →
              </Link>
            </p>
          </section>
        </div>

        <aside className="h-fit rounded-2xl bg-brand-primary p-5 text-white lg:sticky lg:top-28">
          <h2 className="mb-3 text-lg font-semibold">Portion tools</h2>
          <p className="mb-4 text-sm text-brand-primary-100">
            Size a daily calorie target, then turn it into a week of meals.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/tools/pet-food-calculator"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-brand-primary hover:bg-brand-accent-50"
            >
              Pet food calculator
            </Link>
            <Link
              href="/tools/diet-planner"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-4 text-sm font-semibold text-white hover:bg-white/10"
            >
              7-day diet planner
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
