import { z } from "zod/v4";
declare const NewsSubscriptionDeliverySchemaDefinition: z.ZodObject<{
    mode: z.ZodEnum<{
        webhook: "webhook";
    }>;
    secret: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
type NewsSubscriptionDeliveryDefinition = z.infer<typeof NewsSubscriptionDeliverySchemaDefinition>;
export interface NewsSubscriptionDeliverySchemaInput extends z.input<typeof NewsSubscriptionDeliverySchemaDefinition> {
}
/**
 * Webhook delivery target and secret.
 *
 * @openapiSchema NewsSubscriptionDelivery
 * @endpoint PUT /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionSchema
 * @contractShape news.subscription-delivery
 * @contractRole canonical
 */
export declare const NewsSubscriptionDeliverySchema: z.ZodType<NewsSubscriptionDeliveryDefinition, NewsSubscriptionDeliverySchemaInput>;
export type NewsSubscriptionDelivery = z.infer<typeof NewsSubscriptionDeliverySchema>;
export {};
//# sourceMappingURL=subscription-delivery.d.ts.map