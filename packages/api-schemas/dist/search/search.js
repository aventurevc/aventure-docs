// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { WebSearchProviderSchema } from "../web/search-provider.js";
const SearchSchemaDefinition = z.object({
    /** Set true only when an unmarked amount in the search text is intentional. */
    allowSuspectedShellStrip: z.boolean().nullish(),
    /** Skip cache lookup and refresh from the search provider */
    bypassCache: z.boolean().default(false).optional(),
    /** Stable lookup text for cache keying when generated search text varies between runs */
    cacheKey: z.string().nullish(),
    /** Deprecated alias for `provider: EXA_DEEP`; `true` with any other `provider` is refused with 400. */
    deep: z.boolean().default(false).optional(),
    /** Wait in-request for Google's AI Overview when Google defers it to a follow-up request, as it does for most company and person lookups: one extra SerpAPI search per overview not already stored. An explicit `true` also reruns a stored search older than SerpAPI's one-hour cache to get a fresh token (its one-minute overview token expired and the cache would return it unchanged). Without it, no deferred overview is fetched; one an earlier fetch stored still comes back at no extra cost. A fetch that returns no overview is not retried for six hours. An overview Google returns inline always comes back in `aiOverview` at no extra cost. Exa results never carry one. */
    deferredAiOverview: z.boolean().default(false).optional(),
    /** Search language code */
    language: z.string().nullish(),
    /** Provider to search; omitted keeps the default, SerpAPI. EXA runs Exa's instant search with highlights and never falls back to SerpAPI: an Exa failure answers 503. EXA_DEEP runs Exa's slower, broader deep search (higher recall for market and provider questions, about 3-6 s) and falls back to SerpAPI on an Exa failure. Both Exa providers answer synchronously (`Prefer: respond-async` does not apply), are stored apart from SerpAPI results, and are charged like any search. */
    provider: WebSearchProviderSchema.nullish(),
    /** Search region code */
    region: z.string().nullish(),
    /** Maximum number of normalized results to keep */
    resultLimit: z.int().nullish(),
    /** Company or person this search is about; the stored result is filed under that record on a fetch or a cache hit. */
    retrievedFor: EntityPersonOwnerSchema.nullish(),
    /** Search text sent to the upstream web search provider */
    search: z.string(),
    /** Optional label for the calling application, up to 64 characters, stored with the search for attribution and abuse review. */
    source: z.string().max(64).nullish(),
});
/**
 * Live web search request with cache controls
 *
 * @openapiSchema Search
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.search
 * @contractRole canonical
 */
export const SearchSchema = SearchSchemaDefinition;
//# sourceMappingURL=search.js.map