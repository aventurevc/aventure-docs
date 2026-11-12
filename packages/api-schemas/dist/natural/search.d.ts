import { z } from "zod/v4";
declare const NaturalSearchSchemaDefinition: z.ZodObject<{
    answerModel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cacheMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        bypass: "bypass";
        refresh: "refresh";
        use: "use";
    }>>>;
    freshness: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        auto: "auto";
        cached: "cached";
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
}, z.core.$strip>;
type NaturalSearchDefinition = z.infer<typeof NaturalSearchSchemaDefinition>;
export interface NaturalSearchSchemaInput extends z.input<typeof NaturalSearchSchemaDefinition> {
}
/**
 * Plain-English search request. The server turns the query into a filter and sort for the target record type, then runs that type's standard list search.
 *
 * @openapiSchema NaturalSearch
 * @endpoint POST /v1/content/search
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