// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchNarrowingDimensionSchemaKnownMembers = z.enum(["place", "size", "type"]);
/**
 * What a narrowing question narrows: place (headquarters country, state, or city), size (employee band), or type (one classification facet).
 *
 * @openapiSchema SearchNarrowingDimension
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchNarrowingQuestionSchema
 * @contractShape search.narrowing-dimension
 * @contractRole canonical
 */
export const SearchNarrowingDimensionSchema = Object.assign(z.union([SearchNarrowingDimensionSchemaKnownMembers, z.string()]), { enum: SearchNarrowingDimensionSchemaKnownMembers.enum });
//# sourceMappingURL=narrowing-dimension.js.map