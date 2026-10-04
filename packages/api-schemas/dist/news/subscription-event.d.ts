import { z } from "zod/v4";
/**
 * Subscribable event name
 *
 * @openapiSchema NewsSubscriptionEvent
 * @endpoint PUT /v1/news/subscriptions
 * @endpoint DELETE /v1/news/subscriptions
 * @usedBySchema NewsPublishedEventSchema
 * @usedBySchema NewsSubscriptionKeySchema
 * @usedBySchema NewsSubscriptionSchema
 * @contractShape news.subscription-event
 * @contractRole canonical
 */
export declare const NewsSubscriptionEventSchema: z.ZodEnum<{
    "entity.news.published": "entity.news.published";
}>;
export type NewsSubscriptionEvent = z.infer<typeof NewsSubscriptionEventSchema>;
//# sourceMappingURL=subscription-event.d.ts.map