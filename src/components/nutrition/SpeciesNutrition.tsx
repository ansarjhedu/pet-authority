import Link from "next/link";

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
  { href: "/nutrition/pumpkin-dogs", label: "Pumpkin" },
  { href: "/nutrition/blueberries-dogs", label: "Blueberries" },
  { href: "/nutrition/cooked-chicken-dogs", label: "Cooked chicken" },
  { href: "/nutrition/carrots-dogs", label: "Carrots" },
  { href: "/nutrition/chocolate-dogs", label: "Chocolate" },
  { href: "/nutrition/grapes-raisins-dogs", label: "Grapes" },
  { href: "/nutrition/xylitol-dogs", label: "Xylitol" },
  { href: "/nutrition/onions-garlic-dogs", label: "Onions" },
] as const;

const CAT_CHIPS = [
  { href: "/nutrition/pumpkin-cats", label: "Pumpkin" },
  { href: "/nutrition/cooked-chicken-cats", label: "Cooked chicken" },
  { href: "/nutrition/salmon-cats", label: "Salmon" },
  { href: "/nutrition/blueberries-cats", label: "Blueberries" },
  { href: "/nutrition/lilies-cats", label: "Lilies" },
  { href: "/nutrition/onions-garlic-cats", label: "Onions" },
  { href: "/nutrition/chocolate-cats", label: "Chocolate" },
] as const;

export function SpeciesNutrition({ species }: { species: "dogs" | "cats" }) {
  const stages = species === "dogs" ? DOG_STAGES : CAT_STAGES;
  const chips = species === "dogs" ? DOG_CHIPS : CAT_CHIPS;
  const label = species === "dogs" ? "dog" : "cat";

  return (
    <div className="container py-8 lg:py-12">
      <header className="mb-8 max-w-reading">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-accent-700 uppercase">
          <Link href={species === "dogs" ? "/dogs" : "/cats"} className="hover:underline">
            {species === "dogs" ? "Dogs" : "Cats"}
          </Link>
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
          {species === "dogs" ? "Dog nutrition" : "Cat nutrition"}
        </h1>
        <p className="mb-0 text-slate-700">
          Life stage changes the calorie target. Water needs track the food. The safe-food chips
          open the species note rather than a generic list.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">From growth to senior</h2>
            <ul className="space-y-4">
              {stages.map((stage) => (
                <li key={stage.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">{stage.title}</h3>
                  <p className="mb-0 text-sm text-slate-700">{stage.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="max-w-reading">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">Hydration</h2>
            <p className="mb-0">
              A practical planning figure is about 1 milliliter of water for each kilocalorie eaten.
              Wet food already contains moisture, so the bowl may look quieter. A sudden increase in
              drinking, or a {label} who will not drink and will not eat, needs a veterinarian.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">Safe and toxic quick search</h2>
            <ul className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li key={chip.href}>
                  <Link
                    href={chip.href}
                    className="inline-flex min-h-11 items-center rounded-full border border-brand-primary/20 bg-white px-4 text-sm font-semibold text-brand-primary hover:bg-brand-primary-50"
                  >
                    {chip.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 mb-0 text-sm">
              <Link href="/nutrition" className="font-bold text-brand-primary hover:underline">
                Search the full food list
              </Link>
            </p>
          </section>
        </div>

        <aside className="h-fit rounded-2xl bg-brand-primary p-5 text-white">
          <h2 className="mb-3 text-lg font-semibold">Daily portions</h2>
          <p className="mb-4 text-sm text-emerald-50">
            Enter weight, life stage, and body condition. The calculator uses WSAVA resting-energy
            math and turns it into a food portion.
          </p>
          <Link
            href="/tools/pet-food-calculator"
            className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-bold text-brand-primary hover:bg-brand-accent-50"
          >
            Open the pet food calculator
          </Link>
        </aside>
      </div>
    </div>
  );
}
