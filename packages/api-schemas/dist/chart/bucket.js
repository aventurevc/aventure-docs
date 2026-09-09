// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ChartBucketSchemaDefinition = z.object({
    /** Amount */
    amount: z.number().int(),
    /** Exclusive bucket end value */
    end: z.number().int(),
    /** Inclusive bucket start value */
    start: z.number().int(),
});
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
export const ChartBucketSchema = ChartBucketSchemaDefinition;
//# sourceMappingURL=bucket.js.map