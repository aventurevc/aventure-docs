// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const SearchSchemaDefinition = z.object({
    /** Allow intentional money-like text without a currency marker; prefer --from-file. */
    allowSuspectedShellStrip: z.boolean().nullish(),
    /** Skip cache lookup and refresh from the search provider */
    bypassCache: z.boolean().default(false).optional(),
    /** Stable lookup text for cache keying when generated search text varies between runs */
    cacheKey: z.string().nullish(),
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