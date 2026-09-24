// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Media slot on an owner record, addressed by the {mediaType} path segment.
 *
 * @openapiSchema MediaSlot
 * @endpoint GET /v1/entities/{entityId}/media/{mediaType}
 * @endpoint GET /v1/news/{newsId}/media/{mediaType}
 * @endpoint GET /v1/people/{personId}/media/{mediaType}
 * @contractShape media.slot
 * @contractRole canonical
 */
export const MediaSlotSchema = z.enum(["logo", "photo", "thumbnail"]);
//# sourceMappingURL=slot.js.map