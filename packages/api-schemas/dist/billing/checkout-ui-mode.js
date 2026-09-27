// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * HOSTED_PAGE redirects the browser to Stripe's page at url. ELEMENTS renders the Payment Element in the caller's page with Stripe.js initCheckout using clientSecret and publishableKey, then confirms there.
 *
 * @openapiSchema BillingCheckoutUiMode
 * @endpoint POST /v1/billing/checkout-sessions
 * @usedBySchema BillingCheckoutMutationSchema
 * @contractShape billing.checkout-ui-mode
 * @contractRole canonical
 */
export const BillingCheckoutUiModeSchema = z.enum(["HOSTED_PAGE", "ELEMENTS"]);
//# sourceMappingURL=checkout-ui-mode.js.map