import { z } from "zod/v4";
declare const IntRangeSchemaDefinition: z.ZodObject<{
    max: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    min: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type IntRangeDefinition = z.infer<typeof IntRangeSchemaDefinition>;
/**
 * Integer range for count-based filter criteria
 *
 * @openapiSchema IntRange
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityFundraiseFilterCriteriaSchema
 * @usedBySchema EntityListFilterSchema
 * @usedBySchema InvestorActivityFilterSchema
 * @usedBySchema PersonListArrayFilterSchema
 * @contractShape int.range
 * @contractRole canonical
 */
export declare const IntRangeSchema: z.ZodType<IntRangeDefinition>;
export type IntRange = z.infer<typeof IntRangeSchema>;
export {};
//# sourceMappingURL=range.d.ts.map