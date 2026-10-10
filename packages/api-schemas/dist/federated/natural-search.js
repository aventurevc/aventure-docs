// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterSchema } from "../entity/filter.js";
import { ReasoningEffortSchema } from "../reasoning/effort.js";
import { SearchCacheModeSchema } from "../search/cache-mode.js";
import { SearchModeSchema } from "../search/mode.js";
const FederatedNaturalSearchSchemaDefinition = z.object({
    /** Optional chat model for the synthesis answer; null uses the catalog's search answer model. The same allowlist as `model` applies. The answer writes the page heading, title, and description, so this compares answer models without changing the catalog. */
    answerModel: z.string().nullish(),
    /** Search-stage cache policy. use reuses cached search work; bypass computes fresh without retaining outputs; refresh computes fresh and replaces normal entries. Record and immutable query-vector caches retain their own policy. Callers without private-data access always run use. */
    cacheMode: SearchCacheModeSchema.default("use").optional(),
    /** Explicit entity constraints for the entity scope only, as on POST /v1/search/natural/entities: caller-supplied fields override planner values. The person and news scopes ignore it. */
    entityFilter: EntityFilterSchema.optional(),
    /** Search strategy to run. Defaults to `auto`: the fast name layer runs first (a single-token query as keyword search, a multiword query as an exact normalized name) and the language-model planner runs only on a miss, so name lookups never pay for planning. Any other value forces exactly that strategy: `exact` and `keyword` skip planner model resolution and its rate limit. Entity and person natural-search take every value but `hybrid`; news and federated search accept only `auto` and `keyword`; content search accepts `auto`, `keyword`, `semantic`, and `hybrid` (`semantic` and `hybrid` only for one entity's or person's content). */
    mode: SearchModeSchema.default("auto").optional(),
    /** Optional chat model for planning; null uses the configured natural-search default. A caller without admin authority may only choose an allowlisted model; admin callers are unrestricted. */
    model: z.string().nullish(),
    /** News scope page size; omitted uses the size query parameter, under the same page-size cap. */
    newsSize: z.int().nullish(),
    /** Person scope page size; omitted uses the size query parameter, under the same page-size cap. */
    personSize: z.int().nullish(),
    /** Plain-English search request. */
    query: z.string().min(1),
    /** Optional reasoning effort for every model call this search makes: the query planner and the synthesis answer. Each call sends the nearest level its model supports, the lower one on a tie. Callers without private-data access are capped at `medium`. Null keeps the configured per-call and per-model defaults. */
    reasoningEffort: ReasoningEffortSchema.nullish(),
});
/**
 * Plain-English search across companies, people, and news, plus optional per-scope entity constraints and page sizes.
 *
 * @openapiSchema FederatedNaturalSearch
 * @endpoint POST /v1/search
 * @contractShape federated.natural-search
 * @contractRole canonical
 */
export const FederatedNaturalSearchSchema = FederatedNaturalSearchSchemaDefinition;
//# sourceMappingURL=natural-search.js.map