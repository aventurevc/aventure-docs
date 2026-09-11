import { z } from "zod/v4";
/**
 * Confidence tier stored verbatim in res_entity_detail.data_confidence.
 *
 * @openapiSchema EntityValuationDataConfidence
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people/time-series
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint GET /v1/entities/{entityId}/valuations
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityResearchDetailSchema
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