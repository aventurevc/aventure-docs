// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchModeSchema } from "../search/mode.js";
const NaturalSearchSchemaDefinition = z.object({
    /** Search strategy to run. Accepted values narrow per surface: entity and person natural-search take every value (`exact` is entity-only); news and federated search accept only `auto` and `keyword`; content search accepts only `auto`. Defaults to `auto`, which keeps the server-chosen pipeline; any other value forces exactly that strategy. */
    mode: SearchModeSchema.default("auto").optional(),
    /** Optional chat model for planning; null uses the configured natural-search default. CLIENT_SECRET callers may only choose client-secret-eligible models; admin keys are unrestricted. */
    model: z.string().nullish(),
    /** Plain-English search request. */
    query: z.string().min(1),
});
/**
 * Plain-English search request. The server plans the query into the target domain filter plus sort, then runs that domain's canonical list engine.
 *
 * @openapiSchema NaturalSearch
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityNaturalSearchSchema
 * @usedBySchema PersonNaturalSearchSchema
 * @contractShape natural.search
 * @contractRole canonical
 */
export const NaturalSearchSchema = NaturalSearchSchemaDefinition;
//# sourceMappingURL=search.js.map