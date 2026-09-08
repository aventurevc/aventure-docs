import { z } from "zod/v4";
declare const SearchHitSchemaDefinition: z.ZodObject<{
    relevanceScore: z.ZodNumber;
    snippet: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
type SearchHitDefinition = z.infer<typeof SearchHitSchemaDefinition>;
/**
 * One normalized web-search hit with its title, URL, snippet, and relevance score
 *
 * @openapiSchema SearchHit
 * @endpoint POST /v1/search/web
 * @usedBySchema WebSearchSchema
 * @contractShape search.hit
 * @contractRole canonical
 */
export declare const SearchHitSchema: z.ZodType<SearchHitDefinition>;
export type SearchHit = z.infer<typeof SearchHitSchema>;
export {};
//# sourceMappingURL=hit.d.ts.map