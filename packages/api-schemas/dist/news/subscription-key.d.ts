import { z } from "zod/v4";
declare const NewsSubscriptionKeySchemaDefinition: z.ZodObject<{
    arguments: z.ZodType<{
        entityId: string;
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
    }, unknown>>;
    delivery: z.ZodType<{
        url: string;
    }, unknown, z.core.$ZodTypeInternals<{
        url: string;
    }, unknown>>;
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
export declare const NewsSubscriptionKeySchema: z.ZodType<NewsSubscriptionKeyDefinition>;
export type NewsSubscriptionKey = z.infer<typeof NewsSubscriptionKeySchema>;
export {};
//# sourceMappingURL=subscription-key.d.ts.map