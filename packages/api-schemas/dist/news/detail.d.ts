import { z } from "zod/v4";
declare const NewsDetailSchemaDefinition: z.ZodObject<{
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
    }, import("./news.ts").NewsSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("./news.ts").NewsSchemaInput>>;
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
    }, import("./resolved-entity-link.ts").NewsResolvedEntityLinkSchemaInput, z.core.$ZodTypeInternals<{
        createdAt: string;
        entityId: string;
        href?: string | null | undefined;
        internal: boolean;
        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
        mention?: string | null | undefined;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
        updatedAt: string;
    }, import("./resolved-entity-link.ts").NewsResolvedEntityLinkSchemaInput>>>;
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    linkedContent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    linkerCompleted: z.ZodOptional<z.ZodBoolean>;
    personMentionResolved: z.ZodArray<z.ZodType<{
        createdAt: string;
        href?: string | null | undefined;
        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
        mention?: string | null | undefined;
        personId: string;
        slug?: string | null | undefined;
        updatedAt: string;
    }, import("./resolved-person-link.ts").NewsResolvedPersonLinkSchemaInput, z.core.$ZodTypeInternals<{
        createdAt: string;
        href?: string | null | undefined;
        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
        mention?: string | null | undefined;
        personId: string;
        slug?: string | null | undefined;
        updatedAt: string;
    }, import("./resolved-person-link.ts").NewsResolvedPersonLinkSchemaInput>>>;
}, z.core.$strip>;
type NewsDetailDefinition = z.infer<typeof NewsDetailSchemaDefinition>;
export interface NewsDetailSchemaInput extends z.input<typeof NewsDetailSchemaDefinition> {
}
/**
 * Canonical news detail owner
 *
 * @openapiSchema NewsDetail
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/{newsId}
 * @contractShape news.detail
 * @contractRole canonical
 */
export declare const NewsDetailSchema: z.ZodType<NewsDetailDefinition, NewsDetailSchemaInput>;
export type NewsDetail = z.infer<typeof NewsDetailSchema>;
export {};
//# sourceMappingURL=detail.d.ts.map