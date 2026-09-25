// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const EntityValuationDataConfidenceSchema = z.enum(["low", "medium", "high"]);
//# sourceMappingURL=valuation-data-confidence.js.map