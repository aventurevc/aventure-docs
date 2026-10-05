import { z } from "zod/v4";
/**
 * active delivers; retrying backs off after a failure; paused stopped after the maximum consecutive failures until the subscription is refreshed; expired passed refreshBefore and is about to be removed.
 *
 * @openapiSchema NewsSubscriptionDeliveryStatus
 * @endpoint GET /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionDetailSchema
 * @contractShape news.subscription-delivery-status
 * @contractRole canonical
 */
export declare const NewsSubscriptionDeliveryStatusSchema: z.ZodEnum<{
    active: "active";
    expired: "expired";
    paused: "paused";
    retrying: "retrying";
}>;
export type NewsSubscriptionDeliveryStatus = z.infer<typeof NewsSubscriptionDeliveryStatusSchema>;
//# sourceMappingURL=subscription-delivery-status.d.ts.map