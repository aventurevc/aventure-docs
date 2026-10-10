import { z } from "zod/v4";
declare const SearchQualifierOptionSchemaDefinition: z.ZodObject<{
    label: z.ZodString;
    query: z.ZodString;
}, z.core.$strip>;
type SearchQualifierOptionDefinition = z.infer<typeof SearchQualifierOptionSchemaDefinition>;
export interface SearchQualifierOptionSchemaInput extends z.input<typeof SearchQualifierOptionSchemaDefinition> {
}
/**
 * One rewritten query a qualifier offers.
 *
 * @openapiSchema SearchQualifierOption
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchQualifierSchema
 * @contractShape search.qualifier-option
 * @contractRole canonical
 */
export declare const SearchQualifierOptionSchema: z.ZodType<SearchQualifierOptionDefinition, SearchQualifierOptionSchemaInput>;
export type SearchQualifierOption = z.infer<typeof SearchQualifierOptionSchema>;
export {};
//# sourceMappingURL=qualifier-option.d.ts.map