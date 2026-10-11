import {
  SEVERITY_LABEL,
  SEVERITY_TIERS,
  type SeverityTier,
} from "@/lib/clinical/guides";
import { cn } from "@/lib/utils";

const METER_CLASS: Record<SeverityTier, string> = {
  green: "bg-triage-green text-white",
  yellow: "bg-triage-yellow text-triage-yellow-foreground",
  red: "bg-triage-red text-white",
};

export function TriageMeter({ tier }: { tier: SeverityTier }) {
  return (
    <div>
      <div className="mb-3 text-sm font-semibold text-slate-800">Where this symptom sits</div>
      <ol className="grid gap-2 sm:grid-cols-3">
        {SEVERITY_TIERS.map((level) => {
          const active = level === tier;
          return (
            <li
              key={level}
              className={cn(
                "rounded-xl border px-3 py-3 text-sm font-semibold",
                active ? METER_CLASS[level] : "border-slate-200 bg-white text-slate-500",
              )}
              aria-current={active ? "true" : undefined}
            >
              {SEVERITY_LABEL[level]}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
