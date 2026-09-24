import { z } from "zod/v4";
/**
 * Canonical news detail owner
 *
 * @openapiSchema NewsDetail
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/{newsId}
 * @contractShape news.detail
 * @contractRole canonical
 */
export declare const NewsDetailSchema: z.ZodObject<{
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    core: z.ZodType<{
        author?: string | null | undefined;
        category?: string | null | undefined;
        createdAt?: string | null | undefined;
        excerpt?: string | null | undefined;
        externalNewsArticle?: boolean | null | undefined;
        id: number;
        newsImageThumbnail?: string | null | undefined;
        newsUrlOriginal?: string | null | undefined;
        publication?: string | null | undefined;
        publishedAt?: string | null | undefined;
        slug?: string | null | undefined;
        title: string;
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        author?: string | null | undefined;
        category?: string | null | undefined;
        createdAt?: string | null | undefined;
        excerpt?: string | null | undefined;
        externalNewsArticle?: boolean | null | undefined;
        id: number;
        newsImageThumbnail?: string | null | undefined;
        newsUrlOriginal?: string | null | undefined;
        publication?: string | null | undefined;
        publishedAt?: string | null | undefined;
        slug?: string | null | undefined;
        title: string;
        updatedAt?: string | null | undefined;
    }, unknown>>;
    entityMentionResolved: z.ZodArray<z.ZodType<{
        createdAt: string;
        entityId: string;
        href?: string | null | undefined;
        internal: boolean;
        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
        mention?: string | null | undefined;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt: string;
        entityId: string;
        href?: string | null | undefined;
        internal: boolean;
        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
        mention?: string | null | undefined;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
        updatedAt: string;
    }, unknown>>>;
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    linkedContent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personMentionResolved: z.ZodArray<z.ZodType<{
        createdAt: string;
        href?: string | null | undefined;
        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
        mention?: string | null | undefined;
        personId: string;
        slug?: string | null | undefined;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt: string;
        href?: string | null | undefined;
        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
        mention?: string | null | undefined;
        personId: string;
        slug?: string | null | undefined;
        updatedAt: string;
    }, unknown>>>;
}, z.core.$strip>;
export type NewsDetail = z.infer<typeof NewsDetailSchema>;
//# sourceMappingURL=detail.d.ts.map