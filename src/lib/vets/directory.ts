import emergencyVets from "@/data/emergency-vets.json";
import { isVetCountry, type EmergencyVet, type VetCountry } from "@/lib/vets/types";

const RESULT_LIMIT = 12;

const QUERY_ALIASES: Record<string, string> = {
  nyc: "new york",
  la: "los angeles",
  philly: "philadelphia",
};

function isEmergencyVet(value: unknown): value is EmergencyVet {
  if (!value || typeof value !== "object") {
    return false;
  }

  const entry = value as Record<string, unknown>;
  return (
    typeof entry.id === "string" &&
    typeof entry.name === "string" &&
    typeof entry.network === "string" &&
    typeof entry.phone === "string" &&
    typeof entry.address === "string" &&
    typeof entry.city === "string" &&
    typeof entry.stateOrRegion === "string" &&
    isVetCountry(entry.country) &&
    entry.is24Hours === true &&
    typeof entry.mapsUrl === "string" &&
    typeof entry.website === "string"
  );
}

export const EMERGENCY_VETS: EmergencyVet[] = emergencyVets.filter(isEmergencyVet);

function searchableText(vet: EmergencyVet): string {
  return [vet.name, vet.network, vet.city, vet.stateOrRegion, vet.address, vet.phone]
    .join(" ")
    .toLowerCase();
}

function queryTokens(query: string): string[] {
  const normalized = query.trim().toLowerCase().replace(/\s+/g, " ");
  const aliased = QUERY_ALIASES[normalized] ?? normalized;
  return aliased.split(" ").filter((token) => token.length >= 2);
}

export function filterEmergencyVets(
  query: string,
  country: VetCountry,
  emergencyOnly: boolean,
): { results: EmergencyVet[]; broadened: boolean } {
  const inCountry = EMERGENCY_VETS.filter(
    (vet) => vet.country === country && (!emergencyOnly || vet.is24Hours),
  ).sort((left, right) =>
    left.city === right.city ? left.name.localeCompare(right.name) : left.city.localeCompare(right.city),
  );

  const tokens = queryTokens(query);
  if (tokens.length === 0) {
    return { results: inCountry.slice(0, RESULT_LIMIT), broadened: false };
  }

  const matches = inCountry.filter((vet) => {
    const haystack = searchableText(vet);
    return tokens.every((token) => haystack.includes(token));
  });

  if (matches.length > 0) {
    return { results: matches.slice(0, RESULT_LIMIT), broadened: false };
  }

  return { results: inCountry.slice(0, RESULT_LIMIT), broadened: true };
}
