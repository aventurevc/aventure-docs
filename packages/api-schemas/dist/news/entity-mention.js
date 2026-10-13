// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsResolvedEntityLinkSchema } from "./resolved-entity-link.js";
const NewsEntityMentionSchemaDefinition = z.object({
    /** Public entities the article links to. */
    entity: z.array(NewsResolvedEntityLinkSchema),
    /** News article id. */
    newsId: z.int(),
});
/**
 * Public entities one news article links to, in link order.
 *
 * @openapiSchema NewsEntityMention
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape news.entity-mention
 * @contractRole canonical
 */
export const NewsEntityMentionSchema = NewsEntityMentionSchemaDefinition;
//# sourceMappingURL=entity-mention.js.map