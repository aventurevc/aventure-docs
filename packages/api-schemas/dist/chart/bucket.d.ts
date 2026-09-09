import { z } from "zod/v4";
declare const ChartBucketSchemaDefinition: z.ZodObject<{
    amount: z.ZodNumber;
    end: z.ZodNumber;
    start: z.ZodNumber;
}, z.core.$strip>;
type ChartBucketDefinition = z.infer<typeof ChartBucketSchemaDefinition>;
/**
 * Typed bucket for range histogram charts
 *
 * @openapiSchema ChartBucket
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape chart.bucket
 * @contractRole canonical
 */
export declare const ChartBucketSchema: z.ZodType<ChartBucketDefinition>;
export type ChartBucket = z.infer<typeof ChartBucketSchema>;
export {};
//# sourceMappingURL=bucket.d.ts.map