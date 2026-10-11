"use client";

import { useState } from "react";

export function ActionChecklist({ steps }: { steps: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => steps.map(() => false));

  return (
    <ol className="space-y-3">
      {steps.map((step, index) => (
        <li key={step}>
          <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 accent-brand-primary"
              checked={checked[index] ?? false}
              onChange={() => {
                setChecked((current) =>
                  current.map((value, itemIndex) => (itemIndex === index ? !value : value)),
                );
              }}
            />
            <span className="text-sm leading-relaxed text-slate-800">{step}</span>
          </label>
        </li>
      ))}
    </ol>
  );
}
