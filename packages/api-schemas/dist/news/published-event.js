// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsSchema } from "./news.js";
import { NewsSubscriptionEventSchema } from "./subscription-event.js";
const NewsPublishedEventSchemaDefinition = z.object({
    /** Opaque watermark to resume after this event. */
    cursor: z.string(),
    data: NewsSchema,
    /** Deterministic event id, equal to the webhook-id header. */
    eventId: z.string(),
    name: NewsSubscriptionEventSchema,
    /** When the article was linked to the entity. */
    timestamp: z.iso.datetime({ offset: true }),
});
/**
 * Webhook POST body for one news article newly linked to the subscribed entity.
 *
 * @openapiSchema NewsPublishedEvent
 * @usedByEndpoint none:external-root
 * @shared composition:used as building block for other schemas news.published-event; not direct because nested fragment composes parent endpoint contracts
 * @contractShape news.published-event
 * @contractRole canonical
 */
export const NewsPublishedEventSchema = NewsPublishedEventSchemaDefinition;
//# sourceMappingURL=published-event.js.map