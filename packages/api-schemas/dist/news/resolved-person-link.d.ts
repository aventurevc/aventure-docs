import { z } from "zod/v4";
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
 * @usedBySchema NewsTitleMentionSchema
 * @contractShape news.resolved-person-link
 * @contractRole canonical
 */
export declare const NewsResolvedPersonLinkSchema: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    href: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    matchStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        approved: "approved";
        "auto-match": "auto-match";
        "needs-review": "needs-review";
        rejected: "rejected";
    }>>>;
    mention: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personId: z.ZodUUID;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
export type NewsResolvedPersonLink = z.infer<typeof NewsResolvedPersonLinkSchema>;
//# sourceMappingURL=resolved-person-link.d.ts.map