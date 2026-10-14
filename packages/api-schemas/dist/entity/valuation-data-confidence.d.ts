import { z } from "zod/v4";
/**
 * Confidence tier for this data point.
 *
 * @openapiSchema EntityValuationDataConfidence
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/employee-counts
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/valuations
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
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