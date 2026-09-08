// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { LocationResolutionOutcomeSchema } from "./resolution-outcome.js";
/**
 * Slug resolution pair for sitemap hydration
 *
 * @openapiSchema LocationSlugResolution
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationSitemapSchema
 * @contractShape location.slug-resolution
 * @contractRole canonical
 */
export const LocationSlugResolutionSchema = z.object({
    canonicalSlug: z.string(),
    matched: z.boolean(),
    /** Lifecycle outcome for the requested slug; absent or current means live, unpublished accompanies an HTTP 410 response. */
    outcome: LocationResolutionOutcomeSchema.optional(),
    seoSlug: z.string(),
});
//# sourceMappingURL=slug-resolution.js.map