// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { HarnessRunEnvironmentSchema } from "../harness/run-environment.js";
const SearchSchemaDefinition = z.object({
    /** Allow intentional money-like text without a currency marker; prefer --from-file. */
    allowSuspectedShellStrip: z.boolean().nullish(),
    /** Skip cache lookup and refresh from the search provider */
    bypassCache: z.boolean().default(false).optional(),
    /** Stable lookup text for cache keying when generated search text varies between runs */
    cacheKey: z.string().nullish(),
    /** Server-selected search catalog revision. */
    catalogRevision: z.int().nullish(),
    /** Run Exa's slower, broader deep search instead of the default provider: higher recall for market and provider questions, about 3-6 s per search, answered synchronously (`Prefer: respond-async` does not apply). Charged like any search. */
    deep: z.boolean().default(false).optional(),
    /** Wait in-request for Google's AI Overview when Google defers it to a follow-up request, as it does for most company and person lookups: one extra SerpAPI search per overview not already stored, plus a fresh search first when the stored search is over an hour old (its one-minute overview token expired and SerpAPI's cache would return it unchanged). Without it, a search whose token is still live fetches the overview in the background and later reads return it. A fetch that returns no overview is not retried for six hours. An overview Google returns inline always comes back in `aiOverview` at no extra cost. Exa results never carry one. */
    deferredAiOverview: z.boolean().default(false).optional(),
    /** Search language code */
    language: z.string().nullish(),
    /** Search region code */
    region: z.string().nullish(),
    /** Maximum number of normalized results to keep */
    resultLimit: z.int().nullish(),
    /** Entity or person this search was retrieved for: its stored result lists under that subject (`GET /v1/research/source-documents?entityId=` or `?personId=`) on a fetch or a cache hit */
    retrievedFor: EntityPersonOwnerSchema.nullish(),
    /** Search text sent to the upstream web search provider */
    search: z.string(),
    /** Optional caller identity, up to 64 characters, persisted for source-document attribution and abuse triage. Agent requests derive `<agentModel>-<agentChassis>` from the validated provenance actor instead of this field. */
    source: z.string().max(64).nullish(),
    /** Server-selected deployment tenant. */
    tenant: HarnessRunEnvironmentSchema.nullish(),
    /** Server-selected tenant execution-policy revision. */
    tenantPolicyRevision: z.int().nullish(),
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