// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingCreditPackTypeSchema } from "./credit-pack-type.js";
const BillingCreditPurchaseSchemaDefinition = z.object({
    expiresAt: z.iso.datetime({ offset: true }),
    id: z.uuid().nullish(),
    pack: BillingCreditPackTypeSchema,
    url: z.string(),
});
/**
 * Hosted Checkout destination and expiry for a prepaid credit pack.
 *
 * @openapiSchema BillingCreditPurchase
 * @endpoint POST /v1/billing/credit-purchases
 * @contractShape billing.credit-purchase
 * @contractRole canonical
 */
export const BillingCreditPurchaseSchema = BillingCreditPurchaseSchemaDefinition;
//# sourceMappingURL=credit-purchase.js.map