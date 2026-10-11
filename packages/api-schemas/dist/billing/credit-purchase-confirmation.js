// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingCreditPurchaseConfirmationSchemaDefinition = z.object({
    amountCents: z.number().int(),
    closedAt: z.iso.datetime({ offset: true }).nullish(),
    grantedAt: z.iso.datetime({ offset: true }).nullish(),
    id: z.uuid(),
});
/**
 * One account-owned purchase's confirmed credit grant or checkout closure.
 *
 * @openapiSchema BillingCreditPurchaseConfirmation
 * @endpoint GET /v1/billing/credit-purchases/{purchaseId}
 * @contractShape billing.credit-purchase-confirmation
 * @contractRole canonical
 */
export const BillingCreditPurchaseConfirmationSchema = BillingCreditPurchaseConfirmationSchemaDefinition;
//# sourceMappingURL=credit-purchase-confirmation.js.map