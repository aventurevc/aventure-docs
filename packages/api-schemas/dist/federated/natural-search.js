// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterSchema } from "../entity/filter.js";
import { ReasoningEffortSchema } from "../reasoning/effort.js";
import { SearchCacheModeSchema } from "../search/cache-mode.js";
import { SearchFreshnessSchema } from "../search/freshness.js";
import { SearchModeSchema } from "../search/mode.js";
const FederatedNaturalSearchSchemaDefinition = z.object({
    /** Optional supported model id for the written answer, which also supplies the page heading, title, and description. Leave the field out for the server's model; a value that is not a supported model id answers 422. */
    answerModel: z.string().nullish(),
    /** Cache policy. use reuses earlier search work; bypass and refresh compute fresh results and are honored only for accounts with private-data access. */
    cacheMode: SearchCacheModeSchema.default("use").optional(),
    /** Explicit entity constraints for the entity scope only, as on POST /v1/search/natural/entities: caller-supplied fields override planner values. The person and news scopes ignore it. Terminal entities are suppressed only for category discovery; named and relational searches keep them, even with true. Explicit suppressNonOperating=false always includes them. */
    entityFilter: EntityFilterSchema.optional(),
    /** auto refreshes date-sensitive queries before cache admission; cached permits ordinary cache reuse. Explicit admitted bypass or refresh wins. */
    freshness: SearchFreshnessSchema.default("auto").optional(),
    /** Search strategy to run. Defaults to `auto`: the fast name layer runs first (a single-token query as keyword search, a multiword query as an exact normalized name) and the language-model planner runs only on a miss, so name lookups never pay for planning. Any other value forces exactly that strategy: `exact` and `keyword` skip planner model resolution and its rate limit. Entity and person natural-search take every value but `hybrid`; news and federated search accept only `auto` and `keyword`; content search accepts `auto`, `keyword`, `semantic`, and `hybrid` (`semantic` and `hybrid` only for one entity's or person's content). */
    mode: SearchModeSchema.default("auto").optional(),
    /** Optional supported model id for planning the search. Leave the field out for the server's model; a value that is not a supported model id answers 422. */
    model: z.string().nullish(),
    /** Model catalog revision this search uses for its model defaults and inference policy; null reads the current revision. Callers without private-data access always read the current revision. An unknown revision returns 404. */
    modelCatalogRevision: z.int().nullish(),
    /** News scope page size; defaults to 4, matching the aventure.vc search page, under the same page-size cap. Explicit null uses the size query parameter. */
    newsSize: z.int().nullish(),
    /** Person scope page size; defaults to 10, matching the aventure.vc search page, under the same page-size cap. Explicit null uses the size query parameter. */
    personSize: z.int().nullish(),
    /** Plain-English search request. */
    query: z.string().min(1),
    /** Optional reasoning effort for every model call this search makes: the query planner and the synthesis answer. Each call sends the nearest level its model supports, the lower one on a tie. Accounts without private-data access are capped at `medium`; higher values are lowered. */
    reasoningEffort: ReasoningEffortSchema.nullish(),
    /** Search catalog revision this search uses for its global search policy and vocabulary; null reads the current revision. Callers without private-data access always read the current revision. An unknown revision returns 404. */
    searchCatalogRevision: z.int().nullish(),
    /** The stored aVenture news article this search started from. Its approved public Company and Business Line mentions lead the entity scope as subjects in mention order. An unknown or non-public article, or one without such mentions, keeps the ordinary headline search. Other scopes and answer generation are unchanged. */
    sourceNewsId: z.int().min(1).nullish(),
    /** Runtime policy revision this search uses for the serving deployment's execution budgets; null reads that deployment's current revision. Callers without private-data access always read the current revision. An unknown revision returns 404. */
    tenantPolicyRevision: z.int().nullish(),
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