// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsMatchStatusSchema } from "./match-status.js";
/**
 * Resolved person mention in news content - hyperlink to a person detected in article text
 *
 * @openapiSchema NewsResolvedPersonLink
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
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
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
 * @usedBySchema NewsDetailSchema
 * @usedBySchema NewsTitleMentionSchema
 * @contractShape news.resolved-person-link
 * @contractRole canonical
 */
export const NewsResolvedPersonLinkSchema = z.object({
    createdAt: z.iso.datetime({ offset: true }),
    href: z.string().nullish(),
    matchStatus: NewsMatchStatusSchema.nullish(),
    mention: z.string().nullish(),
    /** Canonical person UUID */
    personId: z.uuid(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    updatedAt: z.iso.datetime({ offset: true }),
});
//# sourceMappingURL=resolved-person-link.js.map