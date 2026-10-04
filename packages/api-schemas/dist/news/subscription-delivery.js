// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsSubscriptionDeliveryModeSchema } from "./subscription-delivery-mode.js";
const NewsSubscriptionDeliverySchemaDefinition = z.object({
    mode: NewsSubscriptionDeliveryModeSchema,
    /** Standard Webhooks signing secret: whsec_ followed by base64 of 24 to 64 bytes. It is never returned. The CLI reads it only from --from-file, never a flag. */
    secret: z.string(),
    /** Public https endpoint that receives signed event POSTs. */
    url: z.string().max(2048),
});
/**
 * Webhook delivery target and secret.
 *
 * @openapiSchema NewsSubscriptionDelivery
 * @endpoint PUT /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionSchema
 * @contractShape news.subscription-delivery
 * @contractRole canonical
 */
export const NewsSubscriptionDeliverySchema = NewsSubscriptionDeliverySchemaDefinition;
//# sourceMappingURL=subscription-delivery.js.map