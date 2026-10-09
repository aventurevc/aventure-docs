// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FederatedNaturalSearchSchema } from "../federated/natural-search.js";
import { SearchLayerSchema } from "../search/layer.js";
const SharedSearchMutationSchemaDefinition = z.object({
    /** Stable sharing UUID generated once and reused across retries. */
    id: z.uuid().nullish(),
    /** Answer layers the sharing page searched with; synthesis is required and web is the only other layer allowed. Omitted means synthesis alone. */
    layer: z.array(SearchLayerSchema).nullish(),
    /** Plain-English query to run against public records and publish. */
    query: z.string().max(2000).nullish(),
    /** The federated search body the sharing page ran, as on POST /v1/search; its query must equal query. The share then publishes the answer that page showed when it is still cached, else runs this search. answerModel is not accepted; cacheMode is always use. Omitted runs query alone. */
    search: FederatedNaturalSearchSchema.nullish(),
    /** Page size the sharing page searched with, under the same page-size cap; omitted uses the default page size. */
    size: z.int().min(1).nullish(),
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