// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPaymentMethodSchema } from "./payment-method.js";
const BillingPaymentProfileSchemaDefinition = z.object({
    /** Whether a new Stripe Checkout for a plan with freeTrialDays receives its free trial: the App Store does not bill the account and its Stripe Customer has no prior subscription, successful payment, or non-void invoice. An account without a Stripe Customer is eligible. This is Stripe history eligibility, not a guarantee of one trial across payment providers; plan changes are excluded. Absent on servers released before free-trial eligibility was introduced. */
    freeTrialEligible: z.boolean().optional(),
    /** Whether the caller's next purchase or upgrade to a plan with an introductoryAmount is charged that amount: true when the catalog offers introductoryAmount, the App Store does not bill the account, and either it has no earlier subscription, payment, or unvoided invoice, or it pays an active subscription on a cheaper sold plan and has never redeemed the introductory discount; false otherwise */
    introductoryOfferEligible: z.boolean(),
    /** Card that pays the continuing Stripe subscription; absent without one or when it is paid by something other than a card */
    paymentMethod: BillingPaymentMethodSchema.nullish(),
});
/**
 * The caller's card on file, paid introductory discount eligibility, and eligibility for a free trial on a new Stripe Checkout, read live from Stripe.
 *
 * @openapiSchema BillingPaymentProfile
 * @endpoint GET /v1/billing/subscription/payment-profile
 * @contractShape billing.payment-profile
 * @contractRole canonical
 */
export const BillingPaymentProfileSchema = BillingPaymentProfileSchemaDefinition;
//# sourceMappingURL=payment-profile.js.map