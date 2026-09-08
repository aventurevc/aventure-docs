// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchSchemaDefinition = z.object({
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
    /** Search text sent to the upstream web search provider */
    search: z.string(),
    /** Optional caller identity for source-document attribution and abuse triage. Any non-blank string up to 64 characters is accepted and persisted with the resolved request context. */
    source: z.string().max(64).nullish(),
});
/**
 * Live web search request with cache controls
 *
 * @openapiSchema Search
 * @endpoint POST /v1/search/web
 * @usedBySchema WebSearchSchema
 * @contractShape search.search
 * @contractRole canonical
 */
export const SearchSchema = SearchSchemaDefinition;
//# sourceMappingURL=search.js.map