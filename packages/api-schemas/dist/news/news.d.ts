import { z } from "zod/v4";
/**
 * Canonical news owner for list and core semantics
 *
 * @openapiSchema News
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
 * @usedBySchema EntityDetailSchema
 * @usedBySchema MentionLookupSchema
 * @usedBySchema NewsDetailSchema
 * @usedBySchema NewsPublishedEventSchema
 * @usedBySchema PageNewsSchema
 * @usedBySchema PageResultNewsSchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape news.news
 * @contractRole canonical
 */
export declare const NewsSchema: z.ZodObject<{
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    excerpt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalNewsArticle: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    id: z.ZodInt;
    newsImageThumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newsUrlOriginal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publication: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    titleMention: z.ZodOptional<z.ZodArray<z.ZodType<{
        end: number;
        entity?: {
            createdAt: string;
            entityId: string;
            href?: string | null | undefined;
            internal: boolean;
            matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
            mention?: string | null | undefined;
            slug?: string | null | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt: string;
        } | null | undefined;
        person?: {
            createdAt: string;
            href?: string | null | undefined;
            matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
            mention?: string | null | undefined;
            personId: string;
            slug?: string | null | undefined;
            updatedAt: string;
        } | null | undefined;
        start: number;
    }, import("./title-mention.ts").NewsTitleMentionSchemaInput, z.core.$ZodTypeInternals<{
        end: number;
        entity?: {
            createdAt: string;
            entityId: string;
            href?: string | null | undefined;
            internal: boolean;
            matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
            mention?: string | null | undefined;
            slug?: string | null | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt: string;
        } | null | undefined;
        person?: {
            createdAt: string;
            href?: string | null | undefined;
            matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
            mention?: string | null | undefined;
            personId: string;
            slug?: string | null | undefined;
            updatedAt: string;
        } | null | undefined;
        start: number;
    }, import("./title-mention.ts").NewsTitleMentionSchemaInput>>>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
export type News = z.infer<typeof NewsSchema>;
//# sourceMappingURL=news.d.ts.map