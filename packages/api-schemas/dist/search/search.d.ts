import { z } from "zod/v4";
declare const SearchSchemaDefinition: z.ZodObject<{
    bypassCache: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    cacheKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    language: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    region: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resultLimit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    search: z.ZodString;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SearchDefinition = z.infer<typeof SearchSchemaDefinition>;
/**
 * Live web search request with cache controls
 *
 * @openapiSchema Search
 * @endpoint POST /v1/search/web
 * @usedBySchema WebSearchSchema
 * @contractShape search.search
 * @contractRole canonical
 */
export declare const SearchSchema: z.ZodType<SearchDefinition>;
export type Search = z.infer<typeof SearchSchema>;
export {};
//# sourceMappingURL=search.d.ts.map