// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * How a content card relates to an entity or person owner.
 *
 * @openapiSchema PublicationRelation
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/people/{personId}/content
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema PublicationSchema
 * @contractShape publication.relation
 * @contractRole canonical
 */
export const PublicationRelationSchema = z.enum(["by", "about"]);
//# sourceMappingURL=relation.js.map