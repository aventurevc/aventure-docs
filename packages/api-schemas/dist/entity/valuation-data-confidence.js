// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Confidence tier stored verbatim in res_entity_detail.data_confidence.
 *
 * @openapiSchema EntityValuationDataConfidence
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/financial/valuation
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/people/time-series
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
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
export const EntityValuationDataConfidenceSchema = z.enum(["low", "medium", "high"]);
//# sourceMappingURL=valuation-data-confidence.js.map