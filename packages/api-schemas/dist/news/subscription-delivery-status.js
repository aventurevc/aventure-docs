// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * active delivers; retrying backs off after a failure; paused stopped after the maximum consecutive failures until the subscription is refreshed; expired passed refreshBefore and is about to be removed.
 *
 * @openapiSchema NewsSubscriptionDeliveryStatus
 * @endpoint GET /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionDetailSchema
 * @contractShape news.subscription-delivery-status
 * @contractRole canonical
 */
export const NewsSubscriptionDeliveryStatusSchema = z.enum([
    "active",
    "retrying",
    "paused",
    "expired",
]);
//# sourceMappingURL=subscription-delivery-status.js.map