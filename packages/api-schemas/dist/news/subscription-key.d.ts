import { z } from "zod/v4";
declare const NewsSubscriptionKeySchemaDefinition: z.ZodObject<{
    arguments: z.ZodType<{
        entityId: string;
    }, {
        entityId: string;
    }, z.core.$ZodTypeInternals<{
        entityId: string;
    }, {
        entityId: string;
    }>>;
    delivery: z.ZodType<{
        url: string;
    }, {
        url: string;
    }, z.core.$ZodTypeInternals<{
        url: string;
    }, {
        url: string;
    }>>;
    name: z.ZodEnum<{
        "entity.news.published": "entity.news.published";
    }>;
}, z.core.$strip>;
type NewsSubscriptionKeyDefinition = z.infer<typeof NewsSubscriptionKeySchemaDefinition>;
/**
 * Identifies one subscription to remove by its event name, arguments, and url.
 *
 * @openapiSchema NewsSubscriptionKey
 * @endpoint GET /v1/news/subscriptions
 * @endpoint DELETE /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionDetailSchema
 * @contractShape news.subscription-key
 * @contractRole canonical
 */
export declare const NewsSubscriptionKeySchema: z.ZodType<NewsSubscriptionKeyDefinition, z.input<typeof NewsSubscriptionKeySchemaDefinition>>;
export type NewsSubscriptionKey = z.infer<typeof NewsSubscriptionKeySchema>;
export {};
//# sourceMappingURL=subscription-key.d.ts.map