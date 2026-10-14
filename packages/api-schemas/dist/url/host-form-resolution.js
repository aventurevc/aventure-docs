// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityUrlCrawlCdnProviderSchema } from "../entity/url-crawl-cdn-provider.js";
import { EntityUrlCrawlRenderModeSchema } from "../entity/url-crawl-render-mode.js";
const UrlHostFormResolutionSchemaDefinition = z.object({
    /** True only when live evidence landed on the submitted apex/www host pair, or the exact submitted host for URLs without that pair. */
    concluded: z.boolean(),
    /** Edge provider observed by this probe. */
    crawlCdnProvider: EntityUrlCrawlCdnProviderSchema.nullish(),
    /** Render requirement established from static and rendered readings of the same page. */
    crawlRenderMode: EntityUrlCrawlRenderModeSchema.nullish(),
    /** Host the live answer landed on after redirects; absent for other outcomes. */
    landingHost: z.string().nullish(),
    /** Typed outcome from the fresh probe; absent when no probe ran. */
    outcome: z.enum(["success", "refusal", "rejection", "noResponse", "transient"]).nullish(),
    /** Fresh HTTP status or classified probe result; absent for cached write normalization. */
    status: z.string().nullish(),
    /** The URL submitted for this probe. */
    submittedUrl: z.string(),
    /** Preferred same-site URL; submittedUrl when evidence is inconclusive. */
    url: z.string(),
});
/**
 * Fresh HTTP evidence and the preferred same-site host form of a submitted URL.
 *
 * @openapiSchema UrlHostFormResolution
 * @endpoint GET /v1/lookup
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSchema
 * @contractShape url.host-form-resolution
 * @contractRole canonical
 */
export const UrlHostFormResolutionSchema = UrlHostFormResolutionSchemaDefinition;
//# sourceMappingURL=host-form-resolution.js.map