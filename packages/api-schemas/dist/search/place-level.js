// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchPlaceLevelSchemaKnownMembers = z.enum(["country", "state", "city"]);
/**
 * Headquarters level a place option filters on.
 *
 * @openapiSchema SearchPlaceLevel
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchNarrowingOptionSchema
 * @contractShape search.place-level
 * @contractRole canonical
 */
export const SearchPlaceLevelSchema = Object.assign(z.union([SearchPlaceLevelSchemaKnownMembers, z.string()]), { enum: SearchPlaceLevelSchemaKnownMembers.enum });
//# sourceMappingURL=place-level.js.map