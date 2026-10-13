import { z } from "zod/v4";
declare const SearchHitSchemaDefinition: z.ZodObject<{
    relevanceScore: z.ZodNumber;
    snippet: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
type SearchHitDefinition = z.infer<typeof SearchHitSchemaDefinition>;
export interface SearchHitSchemaInput extends z.input<typeof SearchHitSchemaDefinition> {
}
/**
 * One normalized web-search hit with its title, URL, snippet, and relevance score
 *
 * @openapiSchema SearchHit
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.hit
 * @contractRole canonical
 */
export declare const SearchHitSchema: z.ZodType<SearchHitDefinition, SearchHitSchemaInput>;
export type SearchHit = z.infer<typeof SearchHitSchema>;
export {};
//# sourceMappingURL=hit.d.ts.map