import type { EmergencyLongGuide } from "@/content/emergency-guides/types";

export const chocolateToxicityGuide: EmergencyLongGuide = {
  title: "Emergency Guide: Dark Chocolate Ingestion in Dogs – Action Steps & Triage",
  lede: "This guide is for a dog in the United States, the United Kingdom, or Australia who may have eaten dark chocolate, baking chocolate, or cocoa. It covers the first 15 minutes, the signs that cannot wait, and what the hospital may do. It does not calculate a safe leftover amount for the dog in front of you.",
  sections: [
    {
      heading: "1. Immediate Answer and Triage Verdict",
      blocks: [
        {
          type: "snippet",
          text: "Yes, dark chocolate in a dog is an emergency until a poison hotline says otherwise. Signs can worsen for 12 to 24 hours. Within 15 minutes, remove the rest and call a hotline or emergency hospital with the wrapper and the dog's weight.",
        },
      ],
    },
    {
      heading: "2. Emergency Hotline and Vet Routing",
      blocks: [
        {
          type: "p",
          text: "Call one poison line while another person moves the dog away from the remaining chocolate. Have the wrapper, the amount missing in ounces (grams), the dog's weight in pounds (kilograms), and the time eaten. A consultation fee may apply to the United States lines.",
        },
        {
          type: "phones",
          items: [
            {
              label: "United States: ASPCA Animal Poison Control, 888-426-4435",
              href: "tel:+18884264435",
            },
            {
              label: "United States: Pet Poison Helpline, 855-764-7661",
              href: "tel:+18557647661",
            },
            {
              label: "United Kingdom: Animal PoisonLine, 01202-509000",
              href: "tel:+441202509000",
            },
            {
              label: "United Kingdom: RSPCA, England and Wales, 0300 1234 999",
              href: "tel:+443001234999",
            },
            {
              label: "Australia: Australian Animal Poisons Centre, 1300-869-738",
              href: "tel:+611300869738",
            },
          ],
        },
        {
          type: "p",
          text: "Animal PoisonLine and the Australian Animal Poisons Centre handle the toxin calculation. The RSPCA number is the England and Wales cruelty and advice line, and it is not a substitute for the emergency hospital. If the dog is trembling, vomiting without stopping, or collapsed, leave for the hospital while the call is still going.",
        },
        {
          type: "callout",
          text: "If symptoms are severe, do not wait for a call back. Use our 24/7 Vet Finder to locate your nearest emergency hospital immediately. Bring the wrapper and the weight in pounds (kilograms) so the team can prepare before you arrive.",
          href: "/tools/vet-finder",
          label: "Find a 24/7 emergency hospital",
        },
      ],
    },
    {
      heading: "3. What to Do in the Next 15 Minutes",
      blocks: [
        {
          type: "p",
          text: "Work in this order, and do not stop to search for a home remedy between the steps. The useful window for the clinic to empty the stomach is often the first hour or two, and it closes if the dog becomes drowsy or starts to tremor. Leave as soon as the hospital or the hotline tells you to come in.",
        },
      ],
    },
    {
      heading: "Step 1. Get the chocolate away from the dog",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Pick up wrappers, boxes, cocoa powder, baking squares, and any brownie or cake that is left. Shut the dog in a quiet room so they cannot go back to the bin. If another pet shared the food, separate that animal too and tell the hotline how many animals ate.",
        },
        {
          type: "p",
          text: "Check the label for the words dark, bittersweet, baking, cocoa percent, or sugar-free. Sugar-free chocolate can also contain xylitol, which drops a dog's blood sugar and is a second emergency. Say that word on the call even if you are not sure the dog swallowed it.",
        },
      ],
    },
    {
      heading: "Step 2. Collect the facts the clinic will ask for",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Photograph the front and the nutrition panel, and note how much is missing in ounces (grams). A whole bar, a corner, or a licked bowl are different reports, so estimate the missing piece rather than the whole package if some remains. Write the clock time the dog was last seen normal and the time you found the mess.",
        },
        {
          type: "p",
          text: "Weigh the dog if a scale is already in the room, in pounds (kilograms), and do not delay the call to go buy one. Look at the gums: pink, pale, blue, or brick red. Note vomiting, pacing, panting, tremors, or a seizure, and do not put your hands in the mouth of a dog who is fitting.",
        },
      ],
    },
    {
      heading: "Step 3. Transport the dog calmly",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Use a crate or a carrier the dog already accepts, with bedding that can be washed if they vomit. Keep the head level or slightly down if they retch, so vomit is less likely to be inhaled. Offer no food, water, milk, or medicine unless the veterinarian on the phone tells you to.",
        },
        {
          type: "p",
          text: "Carry a small dog rather than letting them jump in and out of the car. A large dog can walk to the car if they are steady, and they should not run or play on the way. If tremors start during the drive, pull over only if the car is unsafe, then continue to the hospital that is expecting you.",
        },
        {
          type: "p",
          text: "If a second dog or a cat shared the same pan, start a separate note with that animal's weight in pounds (kilograms). Cats are less often poisoned by theobromine than dogs, and they still need their own call after a concentrated product. Do not assume the smaller animal is fine because the larger one is still walking.",
        },
      ],
    },
    {
      heading: "4. Critical Warning: What Not to Do",
      blocks: [
        {
          type: "p",
          text: "Internet first-aid for chocolate often adds a second injury. The hospital can empty the stomach when it is still safe to do so. Home versions of that step are how dogs aspirate vomit or burn the esophagus before they ever reach a clinic.",
        },
      ],
    },
    {
      heading: "Do not induce vomiting at home",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Do not make the dog vomit unless a veterinarian or poison specialist tells you to for this specific dog. Hydrogen peroxide can irritate or burn the stomach and the throat, and inhaled vomit can cause aspiration pneumonia. If the dog is drowsy, trembling, seizing, or already vomiting, a home vomit attempt makes the trip more dangerous.",
        },
      ],
    },
    {
      heading: "Do not give milk, oil, or salt",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Milk does not bind theobromine, and oil or butter only adds fat that the pancreas may not tolerate. Salt is itself a poison in a large enough dose, and it does not cancel chocolate. Activated charcoal is a clinic treatment because a struggling dog can inhale the powder.",
        },
      ],
    },
    {
      heading: "Do not give human medication",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Ibuprofen, naproxen, and acetaminophen are a second poisoning in dogs, and none of them treats theobromine. Do not use a leftover seizure tablet, sedative, or heart pill from another pet. The hospital chooses those drugs after they can see the heart rhythm and the dog's mental state.",
        },
      ],
    },
    {
      heading: "Do not wait for a seizure",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "A dog can look bright for the first hour and still be absorbing theobromine. Dark and baking chocolate are more concentrated than milk chocolate, and cocoa powder is more concentrated still. Waiting for tremors throws away the hour when decontamination is most useful.",
        },
      ],
    },
    {
      heading: "5. Toxicity and Severity Reference",
      blocks: [
        {
          type: "p",
          text: "Theobromine is the main toxin, with caffeine adding to the heart and nervous-system effects. Dogs clear it slowly, often over 12 to 24 hours or longer. These bands are published clinical estimates for theobromine, not a home clearance, and the wrapper plus the dog's weight decide the real case.",
        },
        {
          type: "p",
          text: "The gram examples assume typical dark chocolate near 150 mg of theobromine per oz (about 5.3 mg per g) in a 20 lb (9 kg) dog. A 10 lb (4.5 kg) dog reaches the same bands at about half that amount. Baking chocolate and cocoa powder are stronger, so a smaller piece can reach the same dose.",
        },
        {
          type: "table",
          headers: ["Exposure band", "Theobromine", "Dark chocolate, 20 lb (9 kg) dog"],
          rows: [
            ["Gut signs often begin", "About 20 mg per kg", "About 1.2 oz (34 g)"],
            ["Heart-rhythm concern", "About 40 mg per kg", "About 2.4 oz (68 g)"],
            ["Seizures can occur", "About 60 mg per kg", "About 3.6 oz (102 g)"],
          ],
        },
        {
          type: "p",
          text: "There is no amount on this table that you should sit out at home. Milk chocolate contains less theobromine per ounce, and a large milk-chocolate binge can still reach these bands. White chocolate is low in theobromine, and the fat can still make a dog sick, so it belongs in the same phone call.",
        },
        {
          type: "table",
          headers: ["Time after eating", "What owners often see"],
          rows: [
            ["0–2 hours", "Vomiting, restlessness, or a dog who still looks normal"],
            ["2–6 hours", "Panting, a fast heart rate, tremors, diarrhea, or thirst"],
            ["12–24 hours", "Signs can still peak, including seizures or collapse"],
          ],
        },
        {
          type: "p",
          text: "A normal appearance at 30 minutes does not close the case. Theobromine keeps circulating after the chocolate has left the stomach, which is why some dogs worsen overnight. Collapse, a seizure, pale or blue gums, or vomiting that will not stop is an emergency hospital trip within 60 minutes.",
        },
        {
          type: "p",
          text: "Cocoa powder and baking chocolate pack more theobromine into each ounce (gram) than a typical dark bar. A heaped tablespoon of cocoa, about 0.2–0.3 oz (5–8 g), can matter in a 10 lb (4.5 kg) dog. Tell the hotline the form of the chocolate, not only the brand name on the box.",
        },
      ],
    },
    {
      heading: "6. What the Emergency Hospital Will Do",
      blocks: [
        {
          type: "p",
          text: "The team triages breathing, gum color, heart rate, and tremors before they discuss the stomach. If the dog is stable and the chocolate was recent, they may induce vomiting with a veterinary drug such as apomorphine. That decision is theirs, and it is not a step to copy in the kitchen.",
        },
        {
          type: "p",
          text: "They may follow with activated charcoal and an intravenous catheter for fluids, then place the dog on a heart monitor. Blood tests can include electrolytes, kidney and liver values, and a blood-sugar check, especially if the product was sugar-free. An electrocardiogram looks for an abnormal rhythm, and an ultrasound is not required in every chocolate case.",
        },
        {
          type: "p",
          text: "Dogs with tremors or seizures stay in hospital for drugs that control the nervous system, plus continued heart monitoring. Many dogs go home after decontamination if the dose was modest and the rhythm stays normal. A dog who ate baking chocolate or cocoa powder is more likely to need overnight care because the dose per ounce is higher.",
        },
        {
          type: "p",
          text: "The fees below are planning ranges for a dog who is seen promptly, not a quote from a named clinic. An after-midnight arrival, a seizure, or a multi-day stay costs more. The Australian figures follow about 1.5 Australian dollars per US dollar and are rounded as planning bands, not a hospital tariff.",
        },
        {
          type: "table",
          headers: ["Care the hospital may provide", "United States", "United Kingdom", "Australia"],
          rows: [
            ["Exam and decontamination", "$400–$900", "£300–£700", "A$600–A$1,400"],
            ["Overnight fluids and monitoring", "$1,000–$2,500", "£800–£1,900", "A$1,500–A$3,800"],
            ["Seizures or intensive care", "$2,500–$6,000", "£2,000–£4,500", "A$3,800–A$9,000"],
          ],
        },
        {
          type: "p",
          text: "Before you leave the hospital, ask which signs mean a return the same night, including new tremors, collapse, or vomiting that will not stop. Keep the dog quiet, offer water only if the clinic allowed it, and skip hard exercise that raises the heart rate. A morning recheck is part of the plan when they discharged the dog overnight.",
        },
      ],
    },
    {
      heading: "7. People Also Ask",
      blocks: [
        {
          type: "snippet",
          text: "Owners usually ask when signs start, whether a dog can ride this out, and whether to cause vomiting. The answers below are triage ranges for dark chocolate in dogs. They do not replace the hotline calculation for this dog's weight in pounds (kilograms).",
        },
      ],
    },
    {
      heading: "How soon do chocolate poisoning signs start?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Vomiting or restlessness can start within 1 to 2 hours, and the dog may still look normal then. Heart signs and tremors often follow from 2 to 6 hours, and theobromine can keep working for 12 to 24 hours. A quiet first hour is not an all-clear.",
        },
      ],
    },
    {
      heading: "Can a dog survive dark chocolate without a vet?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "Some dogs live after a small piece, and some seize or die after a larger dose for their weight. You cannot tell which path this is from the sofa. Call a poison hotline or emergency hospital now, and do not wait to see if the dog sleeps it off.",
        },
      ],
    },
    {
      heading: "How much dark chocolate is dangerous for a dog?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "About 20 mg of theobromine per kg can start gut signs, and about 60 mg per kg can cause seizures. In a 20 lb (9 kg) dog that is roughly 1.2 oz (34 g) to 3.6 oz (102 g) of typical dark chocolate. Cocoa percent changes the math, so the wrapper has to decide.",
        },
      ],
    },
    {
      heading: "Should I make my dog vomit after chocolate?",
      level: 3,
      blocks: [
        {
          type: "p",
          text: "No, do not induce vomiting unless a veterinarian or poison specialist tells you to for this dog. Hydrogen peroxide can burn the stomach, and the vomit can be inhaled into the lungs. If the dog is drowsy, trembling, or already vomiting, home vomiting makes the trip more dangerous.",
        },
      ],
    },
  ],
};
