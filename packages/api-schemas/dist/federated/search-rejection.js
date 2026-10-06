// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const FederatedSearchRejectionSchemaDefinition = z.object({
    /** Why the scope rejected the query. */
    detail: z.string(),
    /** Request field the scope rejected, such as search. */
    field: z.string().nullish(),
    /** Scope that rejected the query. */
    scope: z.enum(["entity", "person", "news"]),
});
/**
 * One federated scope that rejected the query instead of searching.
 *
 * @openapiSchema FederatedSearchRejection
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @usedBySchema FederatedSearchProvenanceSchema
 * @contractShape federated.search-rejection
 * @contractRole canonical
 */
export const FederatedSearchRejectionSchema = FederatedSearchRejectionSchemaDefinition;
//# sourceMappingURL=search-rejection.js.map