import { z } from "zod/v4";
/**
 * Event delivery mode
 *
 * @openapiSchema NewsSubscriptionDeliveryMode
 * @endpoint PUT /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionDeliverySchema
 * @contractShape news.subscription-delivery-mode
 * @contractRole canonical
 */
export declare const NewsSubscriptionDeliveryModeSchema: z.ZodEnum<{
    webhook: "webhook";
}>;
export type NewsSubscriptionDeliveryMode = z.infer<typeof NewsSubscriptionDeliveryModeSchema>;
//# sourceMappingURL=subscription-delivery-mode.d.ts.map