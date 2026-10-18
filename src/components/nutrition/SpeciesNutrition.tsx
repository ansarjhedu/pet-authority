import Link from "next/link";
import { HubIntro } from "@/components/editorial/HubIntro";
import { ContentImage, MediaFrame } from "@/components/media/ContentImage";
import { HubBanner } from "@/components/media/HubBanner";
import { foodImage, hubImage } from "@/lib/images";
import { foodArticleHref } from "@/lib/nutrition/topics";
import { getFood } from "@/lib/nutrition/directory";

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

const DOG_CHIP_SLUGS = [
  "pumpkin-dogs",
  "blueberries-dogs",
  "cooked-chicken-dogs",
  "carrots-dogs",
  "chocolate-dogs",
  "grapes-raisins-dogs",
  "xylitol-dogs",
  "onions-garlic-dogs",
] as const;

const CAT_CHIP_SLUGS = [
  "pumpkin-cats",
  "cooked-chicken-cats",
  "salmon-cats",
  "blueberries-cats",
  "lilies-cats",
  "onions-garlic-cats",
  "chocolate-cats",
] as const;

const SPECIES_FRAME = {
  dogs: {
    title: "Dog nutrition",
    lede: "Match calories to life stage, keep a visible waist, and treat chocolate, grapes, xylitol, and onion seasoning as same-hour calls—not taste tests. Water intake should track the food; a sudden thirst spike still needs a clinic.",
    howToUse:
      "Start with the life-stage cards, then size portions with the calorie calculator. Open the food cards below for dog-specific notes, or jump to the full food safety search when the leftover on the counter is not on this short list.",
    whatThisIsNot:
      "This page is not a homemade diet recipe book, not a detox protocol after a toxin, and not a free pass to share human dessert. Code Red foods belong on their emergency-style guides the same hour.",
    urgentCards: [
      {
        href: "/nutrition/chocolate",
        title: "Chocolate",
        blurb: "Darker chocolate and smaller dogs raise the theobromine risk fast.",
      },
      {
        href: "/nutrition/grapes-raisins",
        title: "Grapes and raisins",
        blurb: "Any amount in a dog is treated as a kidney emergency.",
      },
      {
        href: "/nutrition/xylitol",
        title: "Xylitol",
        blurb: "Sugar-free gum and baked goods can drop blood sugar within about an hour.",
      },
    ],
    hydration:
      "A practical planning figure is about 1 oz of water per pound of body weight per day (about 50–60 mL per kg), plus moisture already in wet food. A sudden jump in drinking, or a dog who will not drink and will not eat, needs a veterinarian—not a bigger water bowl alone.",
  },
  cats: {
    title: "Cat nutrition",
    lede: "Cats are obligate carnivores with thin fasting margins. Measure meals, protect taurine through complete diets, and treat true lilies as a kidney emergency even when the plant was “just decorative.”",
    howToUse:
      "Use the life-stage cards for kitten through senior, then open the cat food cards for safe toppers versus toxins. Lily pollen and vase water count. For any kitchen leftover not listed here, use the full food safety search.",
    whatThisIsNot:
      "This page is not a raw-diet how-to, not a home lily antidote, and not a reason to wait when a male cat strains without urine. Complete commercial or vet-designed diets still carry the micronutrient load house leftovers cannot.",
    urgentCards: [
      {
        href: "/nutrition/lilies",
        title: "Lilies",
        blurb: "True lilies and daylilies can destroy kidneys from a chew, pollen, or vase water.",
      },
      {
        href: "/nutrition/onions-garlic",
        title: "Onions and garlic",
        blurb: "Powdered broth and leftovers still count as allium exposure.",
      },
      {
        href: "/nutrition/chocolate",
        title: "Chocolate",
        blurb: "Cats rarely seek it, but any amount is still a poison call.",
      },
    ],
    hydration:
      "Many cats drink little from a still bowl. Wet food helps, and a practical planning figure is still about 1 mL of water per kilocalorie eaten across bowl plus food moisture. A sudden thirst increase belongs on the drinking-more-water triage page; a male who strains with little urine is an emergency.",
  },
} as const;

export function SpeciesNutrition({ species }: { species: "dogs" | "cats" }) {
  const stages = species === "dogs" ? DOG_STAGES : CAT_STAGES;
  const chipSlugs = species === "dogs" ? DOG_CHIP_SLUGS : CAT_CHIP_SLUGS;
  const frame = SPECIES_FRAME[species];
  const chips = chipSlugs
    .map((slug) => getFood(slug))
    .filter((food): food is NonNullable<typeof food> => Boolean(food))
    .map((food) => ({
      href: foodArticleHref(food),
      slug: food.slug,
      label: food.name,
      imageSlug: food.slug,
    }));
  const label = species === "dogs" ? "dog" : "cat";

  return (
    <div className="mx-auto w-full max-w-[100rem] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 lg:py-12">
      <HubBanner
        src={hubImage("nutrition")}
        alt={`${label} nutrition`}
        eyebrow={species === "dogs" ? "Dogs" : "Cats"}
        title={frame.title}
        lede={frame.lede}
      />

      <HubIntro
        howToUse={frame.howToUse}
        whatThisIsNot={frame.whatThisIsNot}
        urgentCards={[...frame.urgentCards]}
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
            <p className="mb-0 max-w-reading text-slate-700">{frame.hydration}</p>
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
                        src={foodImage(chip.imageSlug)}
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
