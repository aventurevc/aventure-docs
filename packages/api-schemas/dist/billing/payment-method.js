// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Card on file that pays the subscription.
 *
 * @openapiSchema BillingPaymentMethod
 * @endpoint POST /v1/billing/plan-change-previews
 * @usedBySchema BillingPlanChangePreviewSchema
 * @contractShape billing.payment-method
 * @contractRole canonical
 */
export const BillingPaymentMethodSchema = z.object({
    /** Card brand as Stripe reports it */
    brand: z.string(),
    /** Last four digits of the card number */
    last4: z.string(),
});
//# sourceMappingURL=payment-method.js.map