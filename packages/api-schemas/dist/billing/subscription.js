// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingAdditionalUsageSchema } from "./additional-usage.js";
import { BillingPlanTypeSchema } from "./plan-type.js";
import { ResearchAllowanceUsageSchema } from "../research/allowance-usage.js";
const BillingSubscriptionSchemaDefinition = z.object({
    additionalUsage: BillingAdditionalUsageSchema,
    allowance: ResearchAllowanceUsageSchema,
    cancelAtPeriodEnd: z.boolean(),
    entitled: z.boolean(),
    periodEnd: z.iso.datetime({ offset: true }).nullish(),
    periodStart: z.iso.datetime({ offset: true }).nullish(),
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