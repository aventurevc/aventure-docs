// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingDiscountSchema } from "./discount.js";
const BillingNextChargeSchemaDefinition = z.object({
    /** Amount the next invoice will charge in the currency's minor unit, after discounts, credits, and usage so far; 0 when a discount covers it */
    amountDue: z.number().int(),
    /** When the next invoice is raised and charged */
    chargeAt: z.iso.datetime({ offset: true }),
    /** ISO 4217 currency code. */
    currency: z.string(),
    /** Discounts applied to the next invoice; empty when none apply */
    discount: z.array(BillingDiscountSchema),
});
/**
 * Next invoice of the caller's renewing Stripe subscription as Stripe previews it, after discounts and credits.
 *
 * @openapiSchema BillingNextCharge
 * @endpoint GET /v1/billing/subscription/next-charge
 * @contractShape billing.next-charge
 * @contractRole canonical
 */
export const BillingNextChargeSchema = BillingNextChargeSchemaDefinition;
//# sourceMappingURL=next-charge.js.map