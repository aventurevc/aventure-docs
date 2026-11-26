// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingPlanTypeSchemaKnownMembers = z.enum([
    "PLUS_MONTHLY",
    "PLUS_YEARLY",
    "PRO_MONTHLY",
    "PRO_YEARLY",
    "PRO_YEARLY_PROMOTION",
    "STARTUPS_MONTHLY",
    "UNLIMITED_MONTHLY",
]);
/**
 * Canonical paid billing plan offered by aVenture.
 *
 * @openapiSchema BillingPlanType
 * @endpoint GET /v1/billing/plans
 * @endpoint GET /v1/billing/subscription
 * @endpoint GET /v1/billing/subscription/next-charge
 * @endpoint POST /v1/billing/checkout-sessions
 * @endpoint POST /v1/billing/plan-change-previews
 * @endpoint POST /v1/billing/plan-changes
 * @endpoint PUT /v1/billing/subscription/complimentary-continuation
 * @usedBySchema BillingCatalogPlanSchema
 * @usedBySchema BillingCheckoutMutationSchema
 * @usedBySchema BillingCheckoutSchema
 * @usedBySchema BillingComplimentaryContinuationMutationSchema
 * @usedBySchema BillingComplimentaryContinuationSchema
 * @usedBySchema BillingPlanChangeMutationSchema
 * @usedBySchema BillingPlanChangeSchema
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.plan-type
 * @contractRole canonical
 */
export const BillingPlanTypeSchema = Object.assign(z.union([BillingPlanTypeSchemaKnownMembers, z.string()]), { enum: BillingPlanTypeSchemaKnownMembers.enum });
//# sourceMappingURL=plan-type.js.map