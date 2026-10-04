// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Event delivery mode
 *
 * @openapiSchema NewsSubscriptionDeliveryMode
 * @endpoint PUT /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionDeliverySchema
 * @contractShape news.subscription-delivery-mode
 * @contractRole canonical
 */
export const NewsSubscriptionDeliveryModeSchema = z.enum(["webhook"]);
//# sourceMappingURL=subscription-delivery-mode.js.map