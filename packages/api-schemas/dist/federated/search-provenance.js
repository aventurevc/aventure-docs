// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchModeExecutionSchema } from "../search/mode-execution.js";
const FederatedSearchProvenanceSchemaDefinition = z.object({
    /** Entity search strategy execution. */
    entity: SearchModeExecutionSchema,
    /** News search strategy execution. */
    news: SearchModeExecutionSchema,
    /** Person search strategy execution. */
    person: SearchModeExecutionSchema,
});
/**
 * Requested and executed search strategy for every federated scope.
 *
 * @openapiSchema FederatedSearchProvenance
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/search/all
 * @usedBySchema FederatedSearchSchema
 * @contractShape federated.search-provenance
 * @contractRole canonical
 */
export const FederatedSearchProvenanceSchema = FederatedSearchProvenanceSchemaDefinition;
//# sourceMappingURL=search-provenance.js.map