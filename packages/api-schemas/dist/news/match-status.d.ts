import { z } from "zod/v4";
/**
 * auto-match = linked by the matcher; needs-review = awaiting a reviewer; approved; rejected
 *
 * @openapiSchema NewsMatchStatus
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
 * @usedBySchema NewsResolvedEntityLinkSchema
 * @usedBySchema NewsResolvedPersonLinkSchema
 * @contractShape news.match-status
 * @contractRole canonical
 */
export declare const NewsMatchStatusSchema: z.ZodEnum<{
    approved: "approved";
    "auto-match": "auto-match";
    "needs-review": "needs-review";
    rejected: "rejected";
}>;
export type NewsMatchStatus = z.infer<typeof NewsMatchStatusSchema>;
//# sourceMappingURL=match-status.d.ts.map