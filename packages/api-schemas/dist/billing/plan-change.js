// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPlanTypeSchema } from "./plan-type.js";
const BillingPlanChangeSchemaDefinition = z.object({
    /** When the plan takes effect: now, or the current period end */
    effectiveAt: z.iso.datetime({ offset: true }),
    /** PaymentIntent client secret of the same pending invoice, for Stripe.js to complete authentication or payment in the page; set exactly when paymentUrl is. */
    paymentClientSecret: z.string().nullish(),
    /** Hosted invoice to pay when the upgrade's prorated charge needs the customer; the upgrade applies only after it is paid. Absent when no payment is pending. */
    paymentUrl: z.string().nullish(),
    /** Plan the subscription moves to */
    plan: BillingPlanTypeSchema,
    /** Stripe publishable key for Stripe.js; set with paymentClientSecret */
    publishableKey: z.string().nullish(),
});
/**
 * Plan change outcome: an upgrade applies now with a prorated invoice, a downgrade waits for the current period end.
 *
 * @openapiSchema BillingPlanChange
 * @endpoint POST /v1/billing/plan-changes
 * @contractShape billing.plan-change
 * @contractRole canonical
 */
export const BillingPlanChangeSchema = BillingPlanChangeSchemaDefinition;
//# sourceMappingURL=plan-change.js.map