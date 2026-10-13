import { z } from "zod/v4";
/**
 * Search-stage cache policy: use reuses completed and in-flight work; bypass computes independently without retaining search outputs; refresh computes independently and replaces the normal cache entry. Immutable query vectors and canonical record caches retain their own cache policy.
 *
 * @openapiSchema SearchCacheMode
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @usedBySchema FederatedNaturalSearchSchema
 * @usedBySchema NaturalSearchSchema
 * @contractShape search.cache-mode
 * @contractRole canonical
 */
export declare const SearchCacheModeSchema: z.ZodEnum<{
    bypass: "bypass";
    refresh: "refresh";
    use: "use";
}>;
export type SearchCacheMode = z.infer<typeof SearchCacheModeSchema>;
//# sourceMappingURL=cache-mode.d.ts.map