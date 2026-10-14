// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ReasoningEffortSchema } from "../reasoning/effort.js";
import { SearchCacheModeSchema } from "../search/cache-mode.js";
import { SearchModeSchema } from "../search/mode.js";
const NaturalSearchSchemaDefinition = z.object({
    /** Optional supported model for the written answer, which also supplies the page heading, title, and description. Omit it to use the default; an unsupported model answers 422. */
    answerModel: z.string().nullish(),
    /** Cache policy. use reuses earlier search work; bypass and refresh compute fresh results and are honored only for accounts with private-data access. */
    cacheMode: SearchCacheModeSchema.default("use").optional(),
    /** Search strategy to run. Defaults to `auto`: the fast name layer runs first (a single-token query as keyword search, a multiword query as an exact normalized name) and the language-model planner runs only on a miss, so name lookups never pay for planning. Any other value forces exactly that strategy: `exact` and `keyword` skip planner model resolution and its rate limit. Entity and person natural-search take every value but `hybrid`; news and federated search accept only `auto` and `keyword`; content search accepts `auto`, `keyword`, `semantic`, and `hybrid` (`semantic` and `hybrid` only for one entity's or person's content). */
    mode: SearchModeSchema.default("auto").optional(),
    /** Optional supported model for planning the search. Omit it to use the default; an unsupported model answers 422. */
    model: z.string().nullish(),
    /** Model catalog revision this search uses for its model defaults and inference policy; null reads the current revision. Callers without private-data access always read the current revision. An unknown revision returns 404. */
    modelCatalogRevision: z.int().nullish(),
    /** Plain-English search request. */
    query: z.string().min(1),
    /** Optional reasoning effort for every model call this search makes: the query planner and the synthesis answer. Each call sends the nearest level its model supports, the lower one on a tie. Accounts without private-data access are capped at `medium`; higher values are lowered. */
    reasoningEffort: ReasoningEffortSchema.nullish(),
    /** Search catalog revision this search uses for its global search policy and vocabulary; null reads the current revision. Callers without private-data access always read the current revision. An unknown revision returns 404. */
    searchCatalogRevision: z.int().nullish(),
    /** Runtime policy revision this search uses for the serving deployment's execution budgets; null reads that deployment's current revision. Callers without private-data access always read the current revision. An unknown revision returns 404. */
    tenantPolicyRevision: z.int().nullish(),
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