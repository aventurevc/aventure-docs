// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPlanTypeSchema } from "./plan-type.js";
const BillingCheckoutSchemaDefinition = z.object({
    /** Checkout Session client secret for Stripe.js initCheckout; set for ELEMENTS */
    clientSecret: z.string().nullish(),
    /** When the Checkout Session stops accepting payment */
    expiresAt: z.iso.datetime({ offset: true }),
    plan: BillingPlanTypeSchema,
    /** Stripe publishable key that loads Stripe.js; set for ELEMENTS */
    publishableKey: z.string().nullish(),
    /** Hosted Checkout page to open in a browser; set for HOSTED_PAGE */
    url: z.string().nullish(),
});
/**
 * Checkout Session destination or client secret and expiry without provider identifiers.
 *
 * @openapiSchema BillingCheckout
 * @endpoint POST /v1/billing/checkout-sessions
 * @contractShape billing.checkout
 * @contractRole canonical
 */
export const BillingCheckoutSchema = BillingCheckoutSchemaDefinition;
//# sourceMappingURL=checkout.js.map