import { z } from "zod/v4";
declare const NaturalSearchSchemaDefinition: z.ZodObject<{
    mode: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        auto: "auto";
        exact: "exact";
        keyword: "keyword";
        natural: "natural";
        semantic: "semantic";
    }>>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    query: z.ZodString;
}, z.core.$strip>;
type NaturalSearchDefinition = z.infer<typeof NaturalSearchSchemaDefinition>;
/**
 * Plain-English search request. The server plans the query into the target domain filter plus sort, then runs that domain's canonical list engine.
 *
 * @openapiSchema NaturalSearch
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityNaturalSearchSchema
 * @usedBySchema PersonNaturalSearchSchema
 * @contractShape natural.search
 * @contractRole canonical
 */
export declare const NaturalSearchSchema: z.ZodType<NaturalSearchDefinition>;
export type NaturalSearch = z.infer<typeof NaturalSearchSchema>;
export {};
//# sourceMappingURL=search.d.ts.map