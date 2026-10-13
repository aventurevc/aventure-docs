import { z } from "zod/v4";
declare const NewsSubscriptionTestEventSchemaDefinition: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    eventId: z.ZodString;
    status: z.ZodInt;
}, z.core.$strip>;
type NewsSubscriptionTestEventDefinition = z.infer<typeof NewsSubscriptionTestEventSchemaDefinition>;
export interface NewsSubscriptionTestEventSchemaInput extends z.input<typeof NewsSubscriptionTestEventSchemaDefinition> {
}
/**
 * The receiver's answer to one signed sample entity.news.published event.
 *
 * @openapiSchema NewsSubscriptionTestEvent
 * @endpoint POST /v1/news/subscriptions/{subscriptionId}/test-events
 * @contractShape news.subscription-test-event
 * @contractRole canonical
 */
export declare const NewsSubscriptionTestEventSchema: z.ZodType<NewsSubscriptionTestEventDefinition, NewsSubscriptionTestEventSchemaInput>;
export type NewsSubscriptionTestEvent = z.infer<typeof NewsSubscriptionTestEventSchema>;
export {};
//# sourceMappingURL=subscription-test-event.d.ts.map