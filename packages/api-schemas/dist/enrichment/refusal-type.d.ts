import { z } from "zod/v4";
/**
 * Why a batch enrichment filed no run: NOT_FOUND for an unknown record, ALLOWANCE_EXHAUSTED once the caller's research allowance ran out during the batch
 *
 * @openapiSchema EnrichmentRefusalType
 * @endpoint POST /v1/enrichments
 * @usedBySchema EnrichmentSchema
 * @contractShape enrichment.refusal-type
 * @contractRole canonical
 */
export declare const EnrichmentRefusalTypeSchema: z.ZodEnum<{
    ALLOWANCE_EXHAUSTED: "ALLOWANCE_EXHAUSTED";
    NOT_FOUND: "NOT_FOUND";
}>;
export type EnrichmentRefusalType = z.infer<typeof EnrichmentRefusalTypeSchema>;
//# sourceMappingURL=refusal-type.d.ts.map