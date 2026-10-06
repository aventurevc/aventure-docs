// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FederatedSearchRejectionSchema } from "./search-rejection.js";
import { SearchModeExecutionSchema } from "../search/mode-execution.js";
const FederatedSearchProvenanceSchemaDefinition = z.object({
    /** Entity search strategy execution. */
    entity: SearchModeExecutionSchema,
    /** News search strategy execution. */
    news: SearchModeExecutionSchema,
    /** Person search strategy execution. */
    person: SearchModeExecutionSchema,
    /** Scopes that rejected the query as unsearchable and returned an empty page while the other scopes ran; empty when every scope ran. */
    rejection: z.array(FederatedSearchRejectionSchema),
    /** Scopes whose search was temporarily unavailable (an upstream outage, open circuit, full concurrency limit, or expired deadline) and returned an empty page while the other scopes ran; empty when every scope ran. Retrying the same query may succeed, unlike a rejection. */
    unavailable: z.array(z.enum(["entity", "person", "news"])),
});
/**
 * Requested and executed search strategy for every federated scope.
 *
 * @openapiSchema FederatedSearchProvenance
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @usedBySchema FederatedSearchSchema
 * @contractShape federated.search-provenance
 * @contractRole canonical
 */
export const FederatedSearchProvenanceSchema = FederatedSearchProvenanceSchemaDefinition;
//# sourceMappingURL=search-provenance.js.map