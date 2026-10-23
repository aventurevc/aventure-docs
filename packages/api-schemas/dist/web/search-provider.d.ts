import { z } from "zod/v4";
/**
 * Upstream web search provider: SERPAPI is Google results through SerpAPI, EXA is Exa's instant search with highlights, EXA_DEEP is Exa's slower, broader deep search, and BRIGHT_DATA is Google results through Bright Data's SERP access.
 *
 * @openapiSchema WebSearchProvider
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchSchema
 * @contractShape web.search-provider
 * @contractRole canonical
 */
export declare const WebSearchProviderSchema: z.ZodUnion<readonly [z.ZodEnum<{
    BRIGHT_DATA: "BRIGHT_DATA";
    EXA: "EXA";
    EXA_DEEP: "EXA_DEEP";
    SERPAPI: "SERPAPI";
}>, z.ZodString]> & {
    enum: {
        BRIGHT_DATA: "BRIGHT_DATA";
        EXA: "EXA";
        EXA_DEEP: "EXA_DEEP";
        SERPAPI: "SERPAPI";
    };
};
export type WebSearchProvider = z.infer<typeof WebSearchProviderSchema>;
//# sourceMappingURL=search-provider.d.ts.map