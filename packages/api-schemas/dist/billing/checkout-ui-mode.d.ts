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
export declare const BillingCheckoutUiModeSchema: z.ZodEnum<{
    ELEMENTS: "ELEMENTS";
    HOSTED_PAGE: "HOSTED_PAGE";
}>;
export type BillingCheckoutUiMode = z.infer<typeof BillingCheckoutUiModeSchema>;
//# sourceMappingURL=checkout-ui-mode.d.ts.map