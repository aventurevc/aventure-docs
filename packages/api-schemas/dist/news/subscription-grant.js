// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsSubscriptionGrantSchemaDefinition = z.object({
    /** Opaque watermark the subscription delivers after. */
    cursor: z.string(),
    /** Stable subscription id; sent as X-MCP-Subscription-Id. */
    id: z.string(),
    /** The subscription expires unless refreshed before this instant. */
    refreshBefore: z.iso.datetime({ offset: true }),
    /** Whether events between the requested cursor and now were lost. */
    truncated: z.boolean(),
});
/**
 * Granted news subscription.
 *
 * @openapiSchema NewsSubscriptionGrant
 * @endpoint PUT /v1/news/subscriptions
 * @contractShape news.subscription-grant
 * @contractRole canonical
 */
export const NewsSubscriptionGrantSchema = NewsSubscriptionGrantSchemaDefinition;
//# sourceMappingURL=subscription-grant.js.map