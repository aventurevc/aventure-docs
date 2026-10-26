import { z } from "zod/v4";
/**
 * Whether the run performs comprehensive enrichment or only selected tasks
 *
 * @openapiSchema EnrichmentMode
 * @endpoint GET /v1/research-runs
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @usedBySchema EnrichmentBatchSchema
 * @usedBySchema HarnessRunCreateSchema
 * @usedBySchema HarnessRunSchema
 * @contractShape enrichment.mode
 * @contractRole canonical
 */
export declare const EnrichmentModeSchema: z.ZodEnum<{
    COMPREHENSIVE: "COMPREHENSIVE";
    INDIVIDUAL: "INDIVIDUAL";
}>;
export type EnrichmentMode = z.infer<typeof EnrichmentModeSchema>;
//# sourceMappingURL=mode.d.ts.map