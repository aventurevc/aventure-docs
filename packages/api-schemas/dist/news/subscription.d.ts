import { z } from "zod/v4";
declare const NewsSubscriptionSchemaDefinition: z.ZodObject<{
    arguments: z.ZodType<{
        entityId: string;
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
    }, unknown>>;
    cursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    delivery: z.ZodType<{
        mode: "webhook";
        secret: string;
        url: string;
    }, unknown, z.core.$ZodTypeInternals<{
        mode: "webhook";
        secret: string;
        url: string;
    }, unknown>>;
    name: z.ZodEnum<{
        "entity.news.published": "entity.news.published";
    }>;
    ttlMs: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type NewsSubscriptionDefinition = z.infer<typeof NewsSubscriptionSchemaDefinition>;
/**
 * Subscribe or refresh one webhook subscription to news newly linked to an entity. The same caller, delivery url, event name, and arguments always address the same subscription, so repeating the call refreshes it.
 *
 * @openapiSchema NewsSubscription
 * @endpoint PUT /v1/news/subscriptions
 * @contractShape news.subscription
 * @contractRole canonical
 */
export declare const NewsSubscriptionSchema: z.ZodType<NewsSubscriptionDefinition>;
export type NewsSubscription = z.infer<typeof NewsSubscriptionSchema>;
export {};
//# sourceMappingURL=subscription.d.ts.map