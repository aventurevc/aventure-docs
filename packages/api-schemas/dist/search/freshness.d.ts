import { z } from "zod/v4";
/**
 * auto refreshes relative/current queries and explicit dates from the last 90 days through tomorrow, using UTC. cached permits normal cache reuse for those queries. Explicit bypass or refresh always wins.
 *
 * @openapiSchema SearchFreshness
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/web/search
 * @usedBySchema FederatedNaturalSearchSchema
 * @usedBySchema NaturalSearchSchema
 * @usedBySchema SearchSchema
 * @contractShape search.freshness
 * @contractRole canonical
 */
export declare const SearchFreshnessSchema: z.ZodEnum<{
    auto: "auto";
    cached: "cached";
}>;
export type SearchFreshness = z.infer<typeof SearchFreshnessSchema>;
//# sourceMappingURL=freshness.d.ts.map