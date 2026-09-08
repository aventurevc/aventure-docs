import { z } from "zod/v4";
/**
 * @openapiSchema ResearchValueRange
 * @endpoint GET /v1/entities/research/details/types
 * @usedBySchema ResearchDetailTypeSchema
 * @contractShape research.value-range
 * @contractRole canonical
 */
export declare const ResearchValueRangeSchema: z.ZodObject<{
    max: z.ZodNumber;
    min: z.ZodNumber;
}, z.core.$strip>;
export type ResearchValueRange = z.infer<typeof ResearchValueRangeSchema>;
//# sourceMappingURL=value-range.d.ts.map