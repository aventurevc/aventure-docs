// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPaymentMethodSchema } from "./payment-method.js";
const BillingPaymentProfileSchemaDefinition = z.object({
    /** True when the catalog offers introductoryAmount, the App Store does not bill the account, and it has no earlier subscription, payment, or unvoided invoice; false otherwise */
    introductoryOfferEligible: z.boolean(),
    /** Card that pays the continuing Stripe subscription; absent without one or when it is paid by something other than a card */
    paymentMethod: BillingPaymentMethodSchema.nullish(),
});
/**
 * The caller's card on file and whether Checkout would charge each plan's introductoryAmount on the first payment, read live from Stripe.
 *
 * @openapiSchema BillingPaymentProfile
 * @endpoint GET /v1/billing/subscription/payment-profile
 * @contractShape billing.payment-profile
 * @contractRole canonical
 */
export const BillingPaymentProfileSchema = BillingPaymentProfileSchemaDefinition;
//# sourceMappingURL=payment-profile.js.map