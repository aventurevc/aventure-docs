// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPlanTypeSchema } from "./plan-type.js";
const BillingCheckoutSchemaDefinition = z.object({
    /** When the Checkout page stops accepting payment */
    expiresAt: z.iso.datetime({ offset: true }),
    plan: BillingPlanTypeSchema,
    /** Hosted Checkout page to open in a browser to pay */
    url: z.string(),
});
/**
 * Hosted Checkout destination and expiry without provider identifiers.
 *
 * @openapiSchema BillingCheckout
 * @endpoint POST /v1/billing/checkout-sessions
 * @contractShape billing.checkout
 * @contractRole canonical
 */
export const BillingCheckoutSchema = BillingCheckoutSchemaDefinition;
//# sourceMappingURL=checkout.js.map