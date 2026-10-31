import { z } from "zod/v4";
declare const ResearchDetailRangeSchemaDefinition: z.ZodObject<{
    max: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    measurementBasis: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    min: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reportingScope: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    targetPath: z.ZodString;
    valueResearchDetail: z.ZodString;
}, z.core.$strict>;
type ResearchDetailRangeDefinition = z.infer<typeof ResearchDetailRangeSchemaDefinition>;
export interface ResearchDetailRangeSchemaInput extends z.input<typeof ResearchDetailRangeSchemaDefinition> {
}
/**
 * One monetary metric tuple. Tuples are AND-ed. Select the latest current eligible observation within exact targetPath/valueResearchDetail/reportingScope/measurementBasis before testing bounds. Unknown qualifiers match null, never any recorded value. Only stored exact decimalValue observations qualify; legacy Float rows retain unknown precision.
 *
 * @openapiSchema ResearchDetailRange
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/people
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/exports
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape research.detail-range
 * @contractRole canonical
 */
export declare const ResearchDetailRangeSchema: z.ZodType<ResearchDetailRangeDefinition, ResearchDetailRangeSchemaInput>;
export type ResearchDetailRange = z.infer<typeof ResearchDetailRangeSchema>;
export {};
//# sourceMappingURL=detail-range.d.ts.map