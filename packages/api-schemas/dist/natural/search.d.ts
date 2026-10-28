import { z } from "zod/v4";
declare const NaturalSearchSchemaDefinition: z.ZodObject<{
    answerModel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cacheMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        bypass: "bypass";
        refresh: "refresh";
        use: "use";
    }>>>;
    mode: z.ZodOptional<z.ZodDefault<z.ZodUnion<readonly [z.ZodEnum<{
        auto: "auto";
        exact: "exact";
        hybrid: "hybrid";
        keyword: "keyword";
        natural: "natural";
        semantic: "semantic";
    }>, z.ZodString]> & {
        enum: {
            auto: "auto";
            exact: "exact";
            hybrid: "hybrid";
            keyword: "keyword";
            natural: "natural";
            semantic: "semantic";
        };
    }>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelCatalogRevision: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    query: z.ZodString;
    reasoningEffort: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        high: "high";
        low: "low";
        max: "max";
        medium: "medium";
        minimal: "minimal";
        xhigh: "xhigh";
    }>, z.ZodString]> & {
        enum: {
            high: "high";
            low: "low";
            max: "max";
            medium: "medium";
            minimal: "minimal";
            xhigh: "xhigh";
        };
    }>>;
    searchCatalogRevision: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    tenantPolicyRevision: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type NaturalSearchDefinition = z.infer<typeof NaturalSearchSchemaDefinition>;
export interface NaturalSearchSchemaInput extends z.input<typeof NaturalSearchSchemaDefinition> {
}
/**
 * Plain-English search request. The server plans the query into the target domain filter plus sort, then runs that domain's canonical list engine.
 *
 * @openapiSchema NaturalSearch
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @usedBySchema EntityNaturalSearchSchema
 * @usedBySchema PersonNaturalSearchSchema
 * @contractShape natural.search
 * @contractRole canonical
 */
export declare const NaturalSearchSchema: z.ZodType<NaturalSearchDefinition, NaturalSearchSchemaInput>;
export type NaturalSearch = z.infer<typeof NaturalSearchSchema>;
export {};
//# sourceMappingURL=search.d.ts.map