import { z } from "zod/v4";
declare const NewsSubscriptionKeySchemaDefinition: z.ZodObject<{
    arguments: z.ZodType<{
        entityId: string;
    }, import("./subscription-arguments.ts").NewsSubscriptionArgumentsSchemaInput, z.core.$ZodTypeInternals<{
        entityId: string;
    }, import("./subscription-arguments.ts").NewsSubscriptionArgumentsSchemaInput>>;
    delivery: z.ZodType<{
        url: string;
    }, import("./subscription-endpoint.ts").NewsSubscriptionEndpointSchemaInput, z.core.$ZodTypeInternals<{
        url: string;
    }, import("./subscription-endpoint.ts").NewsSubscriptionEndpointSchemaInput>>;
    name: z.ZodEnum<{
        "entity.news.published": "entity.news.published";
    }>;
}, z.core.$strip>;
type NewsSubscriptionKeyDefinition = z.infer<typeof NewsSubscriptionKeySchemaDefinition>;
export interface NewsSubscriptionKeySchemaInput extends z.input<typeof NewsSubscriptionKeySchemaDefinition> {
}
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
export declare const NewsSubscriptionKeySchema: z.ZodType<NewsSubscriptionKeyDefinition, NewsSubscriptionKeySchemaInput>;
export type NewsSubscriptionKey = z.infer<typeof NewsSubscriptionKeySchema>;
export {};
//# sourceMappingURL=subscription-key.d.ts.map