import { z } from "zod/v4";
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
export declare const NewsResolvedEntityLinkSchema: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    entityId: z.ZodUUID;
    href: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    internal: z.ZodBoolean;
    matchStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        approved: "approved";
        "auto-match": "auto-match";
        "needs-review": "needs-review";
        rejected: "rejected";
    }>>>;
    mention: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
export type NewsResolvedEntityLink = z.infer<typeof NewsResolvedEntityLinkSchema>;
//# sourceMappingURL=resolved-entity-link.d.ts.map