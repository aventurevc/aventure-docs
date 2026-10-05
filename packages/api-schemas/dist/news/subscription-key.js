// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsSubscriptionArgumentsSchema } from "./subscription-arguments.js";
import { NewsSubscriptionEndpointSchema } from "./subscription-endpoint.js";
import { NewsSubscriptionEventSchema } from "./subscription-event.js";
const NewsSubscriptionKeySchemaDefinition = z.object({
    arguments: NewsSubscriptionArgumentsSchema,
    delivery: NewsSubscriptionEndpointSchema,
    name: NewsSubscriptionEventSchema,
});
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
export const NewsSubscriptionKeySchema = NewsSubscriptionKeySchemaDefinition;
//# sourceMappingURL=subscription-key.js.map