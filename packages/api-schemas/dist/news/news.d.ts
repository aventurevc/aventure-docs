import { z } from "zod/v4";
declare const NewsSchemaDefinition: z.ZodObject<{
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    excerpt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalNewsArticle: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    id: z.ZodInt;
    newsImageThumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newsUrlOriginal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    publication: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type NewsDefinition = z.infer<typeof NewsSchemaDefinition>;
/**
 * Canonical news owner for list and core semantics
 *
 * @openapiSchema News
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/news
 * @endpoint GET /v1/entities/detail/trending-news
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/news
 * @endpoint GET /v1/news/detail
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/recent
 * @endpoint GET /v1/news/similar
 * @endpoint GET /v1/people/detail/news
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/trending-news
 * @endpoint GET /v1/news/{newsId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/news
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityDetailSchema
 * @usedBySchema NewsDetailSchema
 * @usedBySchema PageNewsSchema
 * @usedBySchema PageResultNewsSchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape news.news
 * @contractRole canonical
 */
export declare const NewsSchema: z.ZodType<NewsDefinition>;
export type News = z.infer<typeof NewsSchema>;
export {};
//# sourceMappingURL=news.d.ts.map