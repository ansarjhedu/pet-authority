import { filterEmergencyVets } from "@/lib/vets/directory";
import { reserveVetSearch } from "@/lib/vets/quota";
import {
  isVetCountry,
  type EmergencyVet,
  type VetCountry,
  type VetFinderResponse,
  type VetSource,
} from "@/lib/vets/types";

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places:searchText";
const PLACES_FIELDS = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.nationalPhoneNumber",
  "places.internationalPhoneNumber",
  "places.googleMapsUri",
  "places.websiteUri",
].join(",");

const COUNTRY_LABEL: Record<VetCountry, string> = {
  US: "United States",
  UK: "United Kingdom",
  AU: "Australia",
};

type PlacesResponse = {
  places?: Array<{
    id?: string;
    displayName?: { text?: string };
    formattedAddress?: string;
    nationalPhoneNumber?: string;
    internationalPhoneNumber?: string;
    googleMapsUri?: string;
    websiteUri?: string;
  }>;
};

type FinderRequest = {
  query: string;
  country: VetCountry;
  emergencyOnly: boolean;
};

export async function POST(request: Request) {
  const parsed = await readRequest(request);
  if (!parsed) {
    return Response.json(
      { error: "Send query, country (US, UK, or AU), and emergencyOnly." },
      { status: 400 },
    );
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim() ?? "";
  const reservation = await reserveVetSearch(apiKey.length > 0);

  if (reservation.action === "blocked") {
    return Response.json(directoryResponse("curated_directory", true, reservation.count, parsed));
  }

  if (reservation.action === "preview") {
    return Response.json(directoryResponse("preview_directory", false, reservation.count, parsed));
  }

  const liveResults = await searchGooglePlaces(apiKey, parsed);
  if (liveResults.length > 0) {
    return Response.json({
      quotaExceeded: false,
      source: "google_places",
      count: reservation.count,
      broadened: false,
      results: liveResults,
    } satisfies VetFinderResponse);
  }

  return Response.json(directoryResponse("curated_directory", false, reservation.count, parsed));
}

function directoryResponse(
  source: VetSource,
  quotaExceeded: boolean,
  count: number,
  request: FinderRequest,
): VetFinderResponse {
  const { results, broadened } = filterEmergencyVets(
    request.query,
    request.country,
    request.emergencyOnly,
  );

  return { quotaExceeded, source, count, broadened, results };
}

async function readRequest(request: Request): Promise<FinderRequest | null> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return null;
  }

  if (!body || typeof body !== "object") {
    return null;
  }

  const record = body as Record<string, unknown>;
  if (!isVetCountry(record.country) || typeof record.query !== "string") {
    return null;
  }

  if (typeof record.emergencyOnly !== "boolean") {
    return null;
  }

  return {
    query: record.query.trim().slice(0, 120),
    country: record.country,
    emergencyOnly: record.emergencyOnly,
  };
}

async function searchGooglePlaces(apiKey: string, request: FinderRequest): Promise<EmergencyVet[]> {
  const place = request.query || COUNTRY_LABEL[request.country];
  const textQuery = request.emergencyOnly
    ? `24 hour emergency veterinarian in ${place}, ${COUNTRY_LABEL[request.country]}`
    : `veterinarian in ${place}, ${COUNTRY_LABEL[request.country]}`;

  try {
    const response = await fetch(PLACES_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": PLACES_FIELDS,
      },
      body: JSON.stringify({
        textQuery,
        pageSize: 8,
        regionCode: request.country === "UK" ? "GB" : request.country,
      }),
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as PlacesResponse;
    return (payload.places ?? [])
      .map((placeResult, index) => mapPlace(placeResult, index, request))
      .filter((placeResult): placeResult is EmergencyVet => placeResult !== null);
  } catch {
    return [];
  }
}

function mapPlace(
  place: NonNullable<PlacesResponse["places"]>[number],
  index: number,
  request: FinderRequest,
): EmergencyVet | null {
  const name = place.displayName?.text?.trim();
  if (!name) {
    return null;
  }

  const address = place.formattedAddress?.trim() || request.query || COUNTRY_LABEL[request.country];
  const phone = place.nationalPhoneNumber?.trim() || place.internationalPhoneNumber?.trim() || "";
  const mapsUrl =
    place.googleMapsUri?.trim() ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address}`)}`;

  return {
    id: place.id?.trim() || `google-${index}-${name.toLowerCase().replace(/\s+/g, "-")}`,
    name,
    network: "Google Places",
    phone,
    address,
    city: request.query || COUNTRY_LABEL[request.country],
    stateOrRegion: "",
    country: request.country,
    is24Hours: request.emergencyOnly,
    mapsUrl,
    website: place.websiteUri?.trim() || mapsUrl,
  };
}
