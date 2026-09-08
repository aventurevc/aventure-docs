import { z } from "zod/v4";
declare const EntityFilterSearchResultSchemaDefinition: z.ZodObject<{
    filterKey: z.ZodString;
    result: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type EntityFilterSearchResultDefinition = z.infer<typeof EntityFilterSearchResultSchemaDefinition>;
/**
 * Typeahead search result pairing a filter key with matching option values
 *
 * @openapiSchema EntityFilterSearchResult
 * @endpoint GET /v1/entities/filters/search
 * @endpoint GET /v1/people/filters/search
 * @endpoint POST /v1/entities/filters/search
 * @contractShape entity.filter-search-result
 * @contractRole canonical
 */
export declare const EntityFilterSearchResultSchema: z.ZodType<EntityFilterSearchResultDefinition>;
export type EntityFilterSearchResult = z.infer<typeof EntityFilterSearchResultSchema>;
export {};
//# sourceMappingURL=filter-search-result.d.ts.map