import { z } from "zod/v4";
declare const NewsDetailSchemaDefinition: z.ZodObject<{
    analysis: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        newsId: z.ZodInt;
        publishedAt: z.ZodISODateTime;
        section: z.ZodArray<z.ZodType<{
            reference: {
                quote: string;
                sourceDocumentId?: string | null | undefined;
                url: string;
            }[];
            stepKey: string;
            text: string;
            title: string;
        }, import("./analysis-section.ts").NewsAnalysisSectionSchemaInput, z.core.$ZodTypeInternals<{
            reference: {
                quote: string;
                sourceDocumentId?: string | null | undefined;
                url: string;
            }[];
            stepKey: string;
            text: string;
            title: string;
        }, import("./analysis-section.ts").NewsAnalysisSectionSchemaInput>>>;
        version: z.ZodInt;
    }, z.core.$strip>>>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    core: z.ZodObject<{
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
    entityMentionResolved: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    linkedContent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    linkerCompleted: z.ZodOptional<z.ZodBoolean>;
    personMentionResolved: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
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