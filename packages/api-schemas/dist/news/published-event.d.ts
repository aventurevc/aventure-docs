import { z } from "zod/v4";
declare const NewsPublishedEventSchemaDefinition: z.ZodObject<{
    cursor: z.ZodString;
    data: z.ZodObject<{
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
    eventId: z.ZodString;
    name: z.ZodEnum<{
        "entity.news.published": "entity.news.published";
    }>;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
type NewsPublishedEventDefinition = z.infer<typeof NewsPublishedEventSchemaDefinition>;
export interface NewsPublishedEventSchemaInput extends z.input<typeof NewsPublishedEventSchemaDefinition> {
}
/**
 * Webhook POST body for one news article newly linked to the subscribed entity.
 *
 * @openapiSchema NewsPublishedEvent
 * @usedByEndpoint none:external-root
 * @shared composition:used as building block for other schemas news.published-event; not direct because nested fragment composes parent endpoint contracts
 * @contractShape news.published-event
 * @contractRole canonical
 */
export declare const NewsPublishedEventSchema: z.ZodType<NewsPublishedEventDefinition, NewsPublishedEventSchemaInput>;
export type NewsPublishedEvent = z.infer<typeof NewsPublishedEventSchema>;
export {};
//# sourceMappingURL=published-event.d.ts.map