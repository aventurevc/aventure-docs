import { z } from "zod/v4";
/**
 * Upstream web search provider: SERPAPI is Google results through SerpAPI, EXA is Exa's instant search with highlights, and EXA_DEEP is Exa's slower, broader deep search.
 *
 * @openapiSchema WebSearchProvider
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchSchema
 * @contractShape web.search-provider
 * @contractRole canonical
 */
export declare const WebSearchProviderSchema: z.ZodUnion<readonly [z.ZodEnum<{
    EXA: "EXA";
    EXA_DEEP: "EXA_DEEP";
    SERPAPI: "SERPAPI";
}>, z.ZodString]>;
export type WebSearchProvider = z.infer<typeof WebSearchProviderSchema>;
//# sourceMappingURL=search-provider.d.ts.map