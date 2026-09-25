// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingAdditionalUsageSchema } from "./additional-usage.js";
import { BillingPlanTypeSchema } from "./plan-type.js";
import { ResearchAllowanceUsageSchema } from "../research/allowance-usage.js";
const BillingSubscriptionSchemaDefinition = z.object({
    additionalUsage: BillingAdditionalUsageSchema,
    /** Used, cap, and reset time of each monthly allowance */
    allowance: ResearchAllowanceUsageSchema,
    /** True when the plan is cancelled and ends at periodEnd */
    cancelAtPeriodEnd: z.boolean(),
    /** True while the subscription grants its paid tier */
    entitled: z.boolean(),
    /** Plan a scheduled change moves the subscription to at pendingPlanAt; absent when nothing is scheduled */
    pendingPlan: BillingPlanTypeSchema.nullish(),
    /** When pendingPlan takes effect; absent when nothing is scheduled */
    pendingPlanAt: z.iso.datetime({ offset: true }).nullish(),
    /** When the plan renews, or when access ends if cancelAtPeriodEnd */
    periodEnd: z.iso.datetime({ offset: true }).nullish(),
    /** Start of the current billing period */
    periodStart: z.iso.datetime({ offset: true }).nullish(),
    /** Paid plan and billing cycle; absent without a paid subscription */
    plan: BillingPlanTypeSchema.nullish(),
    status: z.enum([
        "NONE",
        "INCOMPLETE",
        "INCOMPLETE_EXPIRED",
        "TRIALING",
        "ACTIVE",
        "PAST_DUE",
        "CANCELED",
        "UNPAID",
        "PAUSED",
    ]),
    /** Tier whose monthly allowances apply now */
    tier: z.enum(["ESSENTIAL", "PLUS", "PRO", "UNLIMITED"]),
});
/**
 * Current Essential, AI Plus, AI Pro, or Unlimited (RBAC operator) subscription and entitlement state.
 *
 * @openapiSchema BillingSubscription
 * @endpoint GET /v1/billing/subscription
 * @contractShape billing.subscription
 * @contractRole canonical
 */
export const BillingSubscriptionSchema = BillingSubscriptionSchemaDefinition;
//# sourceMappingURL=subscription.js.map