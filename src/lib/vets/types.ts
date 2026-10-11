export const VET_COUNTRIES = ["US", "UK", "AU"] as const;

export type VetCountry = (typeof VET_COUNTRIES)[number];

export type VetSource = "curated_directory" | "preview_directory" | "google_places";

export type EmergencyVet = {
  id: string;
  name: string;
  network: string;
  phone: string;
  address: string;
  city: string;
  stateOrRegion: string;
  country: VetCountry;
  is24Hours: boolean;
  mapsUrl: string;
  website: string;
};

export type VetFinderResponse = {
  quotaExceeded: boolean;
  source: VetSource;
  count: number;
  broadened: boolean;
  results: EmergencyVet[];
};

export function isVetCountry(value: unknown): value is VetCountry {
  return value === "US" || value === "UK" || value === "AU";
}
