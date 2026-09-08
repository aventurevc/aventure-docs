import { z } from "zod/v4";
declare const DecimalRangeSchemaDefinition: z.ZodObject<{
    max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type DecimalRangeDefinition = z.infer<typeof DecimalRangeSchemaDefinition>;
/**
 * Decimal range for monetary and numeric filter criteria
 *
 * @openapiSchema DecimalRange
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
 * @usedBySchema EntityFundraiseFilterCriteriaSchema
 * @usedBySchema InvestorActivityFilterSchema
 * @usedBySchema PersonListArrayFilterSchema
 * @contractShape decimal.range
 * @contractRole canonical
 */
export declare const DecimalRangeSchema: z.ZodType<DecimalRangeDefinition>;
export type DecimalRange = z.infer<typeof DecimalRangeSchema>;
export {};
//# sourceMappingURL=range.d.ts.map