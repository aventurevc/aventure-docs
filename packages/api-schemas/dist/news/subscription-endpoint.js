// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsSubscriptionEndpointSchemaDefinition = z.object({
    url: z.string(),
});
/**
 * Webhook delivery target.
 *
 * @openapiSchema NewsSubscriptionEndpoint
 * @endpoint GET /v1/news/subscriptions
 * @endpoint DELETE /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionKeySchema
 * @contractShape news.subscription-endpoint
 * @contractRole canonical
 */
export const NewsSubscriptionEndpointSchema = NewsSubscriptionEndpointSchemaDefinition;
//# sourceMappingURL=subscription-endpoint.js.map