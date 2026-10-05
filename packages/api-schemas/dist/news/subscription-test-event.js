// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsSubscriptionTestEventSchemaDefinition = z.object({
    /** Whether the receiver answered 2xx. */
    acknowledged: z.boolean(),
    /** The sample's event id, equal to its webhook-id header. */
    eventId: z.string(),
    /** HTTP status the receiver answered. */
    status: z.int(),
});
/**
 * The receiver's answer to one signed sample entity.news.published event.
 *
 * @openapiSchema NewsSubscriptionTestEvent
 * @endpoint POST /v1/news/subscriptions/{subscriptionId}/test-events
 * @contractShape news.subscription-test-event
 * @contractRole canonical
 */
export const NewsSubscriptionTestEventSchema = NewsSubscriptionTestEventSchemaDefinition;
//# sourceMappingURL=subscription-test-event.js.map