// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SharedSearchMutationSchemaDefinition = z.object({
    /** Stable sharing UUID generated once and reused across retries. */
    id: z.uuid().nullish(),
    /** Plain-English query to run against public records and publish. */
    query: z.string().max(2000).nullish(),
    /** entity.searchRequestId of the federated search response the sharing page showed. When that search was signed in, asked this query (ignoring case), and its shareable answer is still kept, the share publishes exactly that answer without searching again; otherwise it runs the default public search. */
    searchRequestId: z.uuid().nullish(),
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