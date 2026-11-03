import { z } from "zod/v4";
/**
 * ANY reuses a compatible cached web search from any provider, checking the selected provider first. PROVIDER restricts reuse to the selected live provider. Neither option changes bypassCache, which always fetches from the live provider.
 *
 * @openapiSchema WebSearchCacheSource
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchSchema
 * @contractShape web.search-cache-source
 * @contractRole canonical
 */
export declare const WebSearchCacheSourceSchema: z.ZodEnum<{
    ANY: "ANY";
    PROVIDER: "PROVIDER";
}>;
export type WebSearchCacheSource = z.infer<typeof WebSearchCacheSourceSchema>;
//# sourceMappingURL=search-cache-source.d.ts.map