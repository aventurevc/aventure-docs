// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingCreditPurchaseStatusSchema } from "./credit-purchase-status.js";
const BillingCreditPurchaseConfirmationSchemaDefinition = z.object({
    amountCents: z.number().int(),
    closedAt: z.iso.datetime({ offset: true }).nullish(),
    currency: z.string().nullish(),
    /** Expiry of the open hosted Checkout, not of purchased credit. */
    expiresAt: z.iso.datetime({ offset: true }).nullish(),
    grantedAt: z.iso.datetime({ offset: true }).nullish(),
    id: z.uuid(),
    paymentClientSecret: z.string().nullish(),
    publishableKey: z.string().nullish(),
    status: BillingCreditPurchaseStatusSchema.nullish(),
    /** Hosted payment destination, only while its Checkout remains open. */
    url: z.string().nullish(),
});
/**
 * One account-owned purchase's payment state, confirmed credit-grant time, and any closure. Only grantedAt confirms that credit was fulfilled.
 *
 * @openapiSchema BillingCreditPurchaseConfirmation
 * @endpoint GET /v1/billing/credit-purchases/{purchaseId}
 * @endpoint POST /v1/billing/credit-purchases
 * @contractShape billing.credit-purchase-confirmation
 * @contractRole canonical
 */
export const BillingCreditPurchaseConfirmationSchema = BillingCreditPurchaseConfirmationSchemaDefinition;
//# sourceMappingURL=credit-purchase-confirmation.js.map