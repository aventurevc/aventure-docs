// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * How a content card relates to an entity or person owner.
 *
 * @openapiSchema ContentRelation
 * @endpoint GET /v1/content
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/people/{personId}/content
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema ContentFilterSchema
 * @usedBySchema ContentSchema
 * @contractShape content.relation
 * @contractRole canonical
 */
export const ContentRelationSchema = z.enum(["by", "about"]);
//# sourceMappingURL=relation.js.map