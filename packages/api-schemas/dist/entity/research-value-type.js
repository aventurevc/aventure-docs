// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Output kind for governed research detail values
 *
 * @openapiSchema EntityResearchValueType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/entities/research-details/types
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/employee-counts
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research-details
 * @endpoint GET /v1/entities/{entityId}/research-details/{detailId}
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema EntityResearchDetailSchema
 * @usedBySchema EntityResearchFactValueSchema
 * @usedBySchema ResearchDetailTypeSchema
 * @contractShape entity.research-value-type
 * @contractRole canonical
 */
export const EntityResearchValueTypeSchema = z.enum([
    "text",
    "numeric",
    "monetary",
    "percentage",
    "date",
]);
//# sourceMappingURL=research-value-type.js.map