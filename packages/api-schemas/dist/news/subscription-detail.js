// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsSubscriptionDeliveryStatusSchema } from "./subscription-delivery-status.js";
import { NewsSubscriptionKeySchema } from "./subscription-key.js";
const NewsSubscriptionDetailSchemaDefinition = z.object({
    /** Failed deliveries since the last acknowledged one or refresh. */
    consecutiveFailureCount: z.int(),
    createdAt: z.iso.datetime({ offset: true }),
    /** Opaque watermark the next delivery resumes after. */
    cursor: z.string(),
    /** Stable subscription id; sent as X-MCP-Subscription-Id. */
    id: z.string(),
    /** Short cause of the latest failed delivery; null after a success. */
    lastError: z.string().nullish(),
    /** Earliest time the next delivery attempt runs. */
    nextAttemptAt: z.iso.datetime({ offset: true }),
    /** The subscription expires unless refreshed before this instant. */
    refreshBefore: z.iso.datetime({ offset: true }),
    status: NewsSubscriptionDeliveryStatusSchema,
    /** Event, arguments, and url; the unsubscribe request body. */
    subscription: NewsSubscriptionKeySchema,
    /** Latest subscribe, refresh, acknowledged, or failed delivery. */
    updatedAt: z.iso.datetime({ offset: true }),
    /** When the endpoint last answered the verification challenge. */
    verifiedAt: z.iso.datetime({ offset: true }),
});
/**
 * One of the caller's news subscriptions and its delivery state.
 *
 * @openapiSchema NewsSubscriptionDetail
 * @endpoint GET /v1/news/subscriptions
 * @contractShape news.subscription-detail
 * @contractRole canonical
 */
export const NewsSubscriptionDetailSchema = NewsSubscriptionDetailSchemaDefinition;
//# sourceMappingURL=subscription-detail.js.map