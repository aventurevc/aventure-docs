// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTypeSchema } from "../entity/type.js";
import { NewsMatchStatusSchema } from "./match-status.js";
/**
 * Resolved entity mention in news content - hyperlink to an entity detected in article text
 *
 * @openapiSchema NewsResolvedEntityLink
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
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema NewsDetailSchema
 * @usedBySchema NewsEntityMentionSchema
 * @usedBySchema NewsTitleMentionSchema
 * @contractShape news.resolved-entity-link
 * @contractRole canonical
 */
export const NewsResolvedEntityLinkSchema = z.object({
    createdAt: z.iso.datetime({ offset: true }),
    /** Canonical entity UUID */
    entityId: z.uuid(),
    href: z.string().nullish(),
    /** True when href links to this entity's aVenture page; false when the entity has no page to link to. */
    internal: z.boolean(),
    matchStatus: NewsMatchStatusSchema.nullish(),
    mention: z.string().nullish(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    typeRecord: EntityTypeSchema.nullish(),
    updatedAt: z.iso.datetime({ offset: true }),
});
//# sourceMappingURL=resolved-entity-link.js.map