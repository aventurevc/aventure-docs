// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsResolvedEntityLinkSchema } from "./resolved-entity-link.js";
import { NewsResolvedPersonLinkSchema } from "./resolved-person-link.js";
const NewsTitleMentionSchemaDefinition = z.object({
    /** Exclusive UTF-16 end offset into News.title. */
    end: z.int().min(1),
    entity: NewsResolvedEntityLinkSchema.nullish(),
    person: NewsResolvedPersonLinkSchema.nullish(),
    /** Inclusive UTF-16 start offset into News.title. */
    start: z.int().min(0),
});
/**
 * A linked record's current name in the exact article title; exactly one record is set.
 *
 * @openapiSchema NewsTitleMention
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/news
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/trending-news
 * @endpoint GET /v1/news/{newsId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema NewsSchema
 * @contractShape news.title-mention
 * @contractRole canonical
 */
export const NewsTitleMentionSchema = NewsTitleMentionSchemaDefinition;
//# sourceMappingURL=title-mention.js.map