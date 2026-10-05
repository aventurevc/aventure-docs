// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsSubscriptionArgumentsSchemaDefinition = z.object({
    /** Entity whose newly linked public news is delivered. */
    entityId: z.uuid(),
});
/**
 * Arguments of the entity.news.published event.
 *
 * @openapiSchema NewsSubscriptionArguments
 * @endpoint GET /v1/news/subscriptions
 * @endpoint PUT /v1/news/subscriptions
 * @endpoint DELETE /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionKeySchema
 * @usedBySchema NewsSubscriptionSchema
 * @contractShape news.subscription-arguments
 * @contractRole canonical
 */
export const NewsSubscriptionArgumentsSchema = NewsSubscriptionArgumentsSchemaDefinition;
//# sourceMappingURL=subscription-arguments.js.map