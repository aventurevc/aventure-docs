import { z } from "zod/v4";
/**
 * Confidence tier stored verbatim in res_entity_detail.data_confidence.
 *
 * @openapiSchema EntityValuationDataConfidence
 * @endpoint GET /v1/entities/{entityId}/employee-counts
 * @endpoint GET /v1/entities/{entityId}/valuations
 * @endpoint GET /v1/people/{personId}/graph
 * @usedBySchema EntityResearchFactValueSchema
 * @usedBySchema EntityValuationTimeSeriesPointSchema
 * @contractShape entity.valuation-data-confidence
 * @contractRole canonical
 */
export declare const EntityValuationDataConfidenceSchema: z.ZodEnum<{
    high: "high";
    low: "low";
    medium: "medium";
}>;
export type EntityValuationDataConfidence = z.infer<typeof EntityValuationDataConfidenceSchema>;
//# sourceMappingURL=valuation-data-confidence.d.ts.map