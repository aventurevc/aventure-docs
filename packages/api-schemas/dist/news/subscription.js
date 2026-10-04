// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsSubscriptionArgumentsSchema } from "./subscription-arguments.js";
import { NewsSubscriptionDeliverySchema } from "./subscription-delivery.js";
import { NewsSubscriptionEventSchema } from "./subscription-event.js";
const NewsSubscriptionSchemaDefinition = z.object({
    arguments: NewsSubscriptionArgumentsSchema,
    /** Opaque watermark from an earlier grant or event to resume after; null starts a new subscription from now and keeps an existing subscription's position. */
    cursor: z.string().nullish(),
    delivery: NewsSubscriptionDeliverySchema,
    name: NewsSubscriptionEventSchema,
    /** Requested subscription lifetime in milliseconds; the server caps it. */
    ttlMs: z.number().int().min(1).nullish(),
});
/**
 * Subscribe or refresh one webhook subscription to news newly linked to an entity. The same caller, delivery url, event name, and arguments always address the same subscription, so repeating the call refreshes it.
 *
 * @openapiSchema NewsSubscription
 * @endpoint PUT /v1/news/subscriptions
 * @contractShape news.subscription
 * @contractRole canonical
 */
export const NewsSubscriptionSchema = NewsSubscriptionSchemaDefinition;
//# sourceMappingURL=subscription.js.map