// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchDiscoveryFilingSchemaDefinition = z.object({
    /** Research run queued for that company by this filing; null when the record already existed or no run was available within the response deadline. */
    enrichmentRunId: z.uuid().nullish(),
    /** Company record filed for the discovered site. */
    entityId: z.uuid(),
});
/**
 * Company record filed from one search discovery result and its queued research.
 *
 * @openapiSchema SearchDiscoveryFiling
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.discovery-filing
 * @contractRole canonical
 */
export const SearchDiscoveryFilingSchema = SearchDiscoveryFilingSchemaDefinition;
//# sourceMappingURL=discovery-filing.js.map