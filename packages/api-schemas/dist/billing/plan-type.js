// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Canonical paid billing plan offered by aVenture.
 *
 * @openapiSchema BillingPlanType
 * @endpoint GET /v1/billing/plans
 * @endpoint GET /v1/billing/subscription
 * @endpoint POST /v1/billing/checkout-sessions
 * @usedBySchema BillingCatalogPlanSchema
 * @usedBySchema BillingCheckoutMutationSchema
 * @usedBySchema BillingCheckoutSchema
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.plan-type
 * @contractRole canonical
 */
export const BillingPlanTypeSchema = z.enum([
    "PLUS_MONTHLY",
    "PLUS_YEARLY",
    "PRO_MONTHLY",
    "PRO_YEARLY",
    "PRO_YEARLY_PROMOTION",
]);
//# sourceMappingURL=plan-type.js.map