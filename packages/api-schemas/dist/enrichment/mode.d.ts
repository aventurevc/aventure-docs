import { z } from "zod/v4";
/**
 * Whether the run performs comprehensive enrichment or only selected tasks
 *
 * @openapiSchema EnrichmentMode
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
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