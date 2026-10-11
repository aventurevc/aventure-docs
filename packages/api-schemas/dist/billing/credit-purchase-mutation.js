// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingCreditPackTypeSchema } from "./credit-pack-type.js";
const BillingCreditPurchaseMutationSchemaDefinition = z.object({
    /** Credit pack to buy; its amount becomes prepaid credit. */
    pack: BillingCreditPackTypeSchema,
});
/**
 * Prepaid credit pack to buy through hosted Checkout.
 *
 * @openapiSchema BillingCreditPurchaseMutation
 * @endpoint POST /v1/billing/credit-purchases
 * @contractShape billing.credit-purchase-mutation
 * @contractRole canonical
 */
export const BillingCreditPurchaseMutationSchema = BillingCreditPurchaseMutationSchemaDefinition;
//# sourceMappingURL=credit-purchase-mutation.js.map