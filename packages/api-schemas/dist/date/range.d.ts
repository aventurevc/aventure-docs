import { z } from "zod/v4";
/**
 * ISO-8601 timestamp range for temporal filters.
 *
 * @openapiSchema DateRange
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFundraiseFilterCriteriaSchema
 * @contractShape date.range
 * @contractRole canonical
 */
export declare const DateRangeSchema: z.ZodObject<{
    max: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    min: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
export type DateRange = z.infer<typeof DateRangeSchema>;
//# sourceMappingURL=range.d.ts.map