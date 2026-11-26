// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingAdditionalUsageSchema } from "./additional-usage.js";
import { BillingPlanTypeSchema } from "./plan-type.js";
import { BillingRecurringPriceSchema } from "./recurring-price.js";
import { BillingTierTypeSchema } from "./tier-type.js";
import { ResearchAllowanceUsageSchema } from "../research/allowance-usage.js";
const BillingSubscriptionSchemaDefinition = z.object({
    additionalUsage: BillingAdditionalUsageSchema,
    /** Used, cap, and reset time of each monthly allowance */
    allowance: ResearchAllowanceUsageSchema,
    /** True when an entitled eligible paid plan may buy App Store consumable research credit, independent of who bills its plan. Absent on older servers; clients must require true before offering a purchase. */
    appStoreCreditPurchasable: z.boolean().nullish(),
    /** True when the plan is cancelled and ends at periodEnd; a complimentary term's end is not a cancellation; next-charge complimentaryUntil reports it */
    cancelAtPeriodEnd: z.boolean(),
    /** True when POST /v1/billing/credit-purchases sells this account a prepaid credit pack without requiring a subscription. False while an App Store plan is continuing or a continuing plan cannot fund new charges (including INCOMPLETE, PAST_DUE, UNPAID, PAUSED, or expired). Buying credit never changes the tier. */
    creditPurchasable: z.boolean(),
    /** True while the subscription grants its paid tier */
    entitled: z.boolean(),
    /** Original start of the continuing paid subscription; absent when the provider did not supply it */
    originalStart: z.iso.datetime({ offset: true }).nullish(),
    /** Names the scheduled change pendingPlan and pendingPlanAt describe; send it with the current plan to undo that change. A token that does not match the currently scheduled target plan and effective second answers 409, including when no matching schedule remains; re-scheduling the same plan for the same second reuses it. Absent when nothing is scheduled. */
    pendingChangeRevision: z.string().nullish(),
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
    /** Who bills the continuing paid subscription, including one past due or paused: STRIPE (managed on the web) or APP_STORE; absent without one */
    provider: z.enum(["STRIPE", "APP_STORE"]).nullish(),
    /** Subscribed renewal price before discounts; absent without a known paid Price */
    recurringPrice: BillingRecurringPriceSchema.nullish(),
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
    tier: BillingTierTypeSchema,
});
/**
 * Current plan (Free, Startups, AI Plus, AI Pro, or Unlimited), subscription status, and monthly usage.
 *
 * @openapiSchema BillingSubscription
 * @endpoint GET /v1/billing/subscription
 * @contractShape billing.subscription
 * @contractRole canonical
 */
export const BillingSubscriptionSchema = BillingSubscriptionSchemaDefinition;
//# sourceMappingURL=subscription.js.map