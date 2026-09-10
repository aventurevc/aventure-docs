// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Target domain for media operations (logos, pictures, thumbnails)
 *
 * @openapiSchema MediaObjectType
 * @endpoint GET /v1/media
 * @endpoint GET /v1/entities/{entityId}/media/logo
 * @endpoint GET /v1/news/{newsId}/media/thumbnail
 * @endpoint GET /v1/people/{personId}/media/photo
 * @usedBySchema MediaUploadSchema
 * @contractShape media.object-type
 * @contractRole canonical
 */
export const MediaObjectTypeSchema = z.enum(["ENTITY", "PERSON", "NEWS", "BLOG"]);
//# sourceMappingURL=object-type.js.map