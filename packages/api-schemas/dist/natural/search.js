// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ReasoningEffortSchema } from "../reasoning/effort.js";
import { SearchModeSchema } from "../search/mode.js";
const NaturalSearchSchemaDefinition = z.object({
    /** Search strategy to run. Defaults to `auto`: the fast name layer runs first (a single-token query as keyword search, a multiword query as an exact normalized name) and the language-model planner runs only on a miss, so name lookups never pay for planning. Any other value forces exactly that strategy: `exact` and `keyword` skip planner model resolution and its rate limit. Entity and person natural-search take every value but `hybrid`; news and federated search accept only `auto` and `keyword`; content search accepts `auto`, `keyword`, `semantic`, and `hybrid` (`semantic` and `hybrid` only for one entity's or person's content). */
    mode: SearchModeSchema.default("auto").optional(),
    /** Optional chat model for planning; null uses the configured natural-search default. A caller without admin authority may only choose an allowlisted model; admin callers are unrestricted. */
    model: z.string().nullish(),
    /** Plain-English search request. */
    query: z.string().min(1),
    /** Optional reasoning effort for every model call this search makes: the query planner and the synthesis answer. Each call sends the nearest level its model supports, the lower one on a tie. Callers without private-data access are capped at `medium`. Null keeps the configured per-call and per-model defaults. */
    reasoningEffort: ReasoningEffortSchema.nullish(),
});
/**
 * Plain-English search request. The server plans the query into the target domain filter plus sort, then runs that domain's canonical list engine.
 *
 * @openapiSchema NaturalSearch
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @usedBySchema EntityNaturalSearchSchema
 * @usedBySchema PersonNaturalSearchSchema
 * @contractShape natural.search
 * @contractRole canonical
 */
export const NaturalSearchSchema = NaturalSearchSchemaDefinition;
//# sourceMappingURL=search.js.map