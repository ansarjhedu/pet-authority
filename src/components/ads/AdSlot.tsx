export type AdSlotType = "sidebar-sticky" | "in-content" | "leaderboard";

type AdSlotProps = {
  slotType: AdSlotType;
  label?: string;
};

/** Ad units stay unmounted until a network placement is approved. */
export function AdSlot(_props: AdSlotProps) {
  return null;
}
