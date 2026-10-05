// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Subscribable event name
 *
 * @openapiSchema NewsSubscriptionEvent
 * @endpoint GET /v1/news/subscriptions
 * @endpoint PUT /v1/news/subscriptions
 * @endpoint DELETE /v1/news/subscriptions
 * @usedBySchema NewsPublishedEventSchema
 * @usedBySchema NewsSubscriptionKeySchema
 * @usedBySchema NewsSubscriptionSchema
 * @contractShape news.subscription-event
 * @contractRole canonical
 */
export const NewsSubscriptionEventSchema = z.enum(["entity.news.published"]);
//# sourceMappingURL=subscription-event.js.map