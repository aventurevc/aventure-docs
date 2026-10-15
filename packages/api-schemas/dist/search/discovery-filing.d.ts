import { z } from "zod/v4";
declare const SearchDiscoveryFilingSchemaDefinition: z.ZodObject<{
    enrichmentRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    entityId: z.ZodUUID;
}, z.core.$strip>;
type SearchDiscoveryFilingDefinition = z.infer<typeof SearchDiscoveryFilingSchemaDefinition>;
export interface SearchDiscoveryFilingSchemaInput extends z.input<typeof SearchDiscoveryFilingSchemaDefinition> {
}
/**
 * Company record filed from one search discovery result and its queued research.
 *
 * @openapiSchema SearchDiscoveryFiling
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.discovery-filing
 * @contractRole canonical
 */
export declare const SearchDiscoveryFilingSchema: z.ZodType<SearchDiscoveryFilingDefinition, SearchDiscoveryFilingSchemaInput>;
export type SearchDiscoveryFiling = z.infer<typeof SearchDiscoveryFilingSchema>;
export {};
//# sourceMappingURL=discovery-filing.d.ts.map