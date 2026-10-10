import { z } from "zod/v4";
declare const SearchSchemaDefinition: z.ZodObject<{
    allowSuspectedShellStrip: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    bypassCache: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    cacheKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    deep: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    language: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    region: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resultLimit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    retrievedFor: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    search: z.ZodString;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SearchDefinition = z.infer<typeof SearchSchemaDefinition>;
export interface SearchSchemaInput extends z.input<typeof SearchSchemaDefinition> {
}
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
export declare const SearchSchema: z.ZodType<SearchDefinition, SearchSchemaInput>;
export type Search = z.infer<typeof SearchSchema>;
export {};
//# sourceMappingURL=search.d.ts.map