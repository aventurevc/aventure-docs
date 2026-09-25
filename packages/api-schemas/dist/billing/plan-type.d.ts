import { z } from "zod/v4";
/**
 * Canonical paid billing plan offered by aVenture.
 *
 * @openapiSchema BillingPlanType
 * @endpoint GET /v1/billing/plans
 * @endpoint GET /v1/billing/subscription
 * @endpoint POST /v1/billing/checkout-sessions
 * @endpoint POST /v1/billing/plan-changes
 * @usedBySchema BillingCatalogPlanSchema
 * @usedBySchema BillingCheckoutMutationSchema
 * @usedBySchema BillingCheckoutSchema
 * @usedBySchema BillingPlanChangeMutationSchema
 * @usedBySchema BillingPlanChangeSchema
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.plan-type
 * @contractRole canonical
 */
export declare const BillingPlanTypeSchema: z.ZodEnum<{
    PLUS_MONTHLY: "PLUS_MONTHLY";
    PLUS_YEARLY: "PLUS_YEARLY";
    PRO_MONTHLY: "PRO_MONTHLY";
    PRO_YEARLY: "PRO_YEARLY";
    PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
}>;
export type BillingPlanType = z.infer<typeof BillingPlanTypeSchema>;
//# sourceMappingURL=plan-type.d.ts.map