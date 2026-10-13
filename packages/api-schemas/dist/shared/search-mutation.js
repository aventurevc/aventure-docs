// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SharedSearchMutationSchemaDefinition = z.object({
    /** Stable sharing UUID generated once and reused across retries. */
    id: z.uuid().nullish(),
    /** Plain-English query to run against public records and publish. */
    query: z.string().max(2000).nullish(),
});
/**
 * Publish a query under a stable client UUID; retries return the same saved answer.
 *
 * @openapiSchema SharedSearchMutation
 * @endpoint POST /v1/search/shared
 * @contractShape shared.search-mutation
 * @contractRole canonical
 */
export const SharedSearchMutationSchema = SharedSearchMutationSchemaDefinition;
//# sourceMappingURL=search-mutation.js.map