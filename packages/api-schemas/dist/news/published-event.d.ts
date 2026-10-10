import { z } from "zod/v4";
declare const NewsPublishedEventSchemaDefinition: z.ZodObject<{
    cursor: z.ZodString;
    data: z.ZodType<{
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