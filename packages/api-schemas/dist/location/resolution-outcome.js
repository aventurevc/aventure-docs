// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Lifecycle classification for a requested location slug: current resolves to a live published directory entry; unpublished means the canonical token resolves to a real reference-table location that has no publishable companies, served as HTTP 410 Gone so crawlers drop the URL permanently
 *
 * @openapiSchema LocationResolutionOutcome
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationSlugResolutionSchema
 * @contractShape location.resolution-outcome
 * @contractRole canonical
 */
export const LocationResolutionOutcomeSchema = z.enum(["current", "unpublished"]);
//# sourceMappingURL=resolution-outcome.js.map