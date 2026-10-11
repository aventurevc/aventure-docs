// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingDiscountSchemaDefinition = z.object({
    /** Fixed amount taken off in the minor unit; absent for a percentage coupon */
    amountOff: z.number().int().nullish(),
    /** Amount this discount takes off the next invoice, minor unit */
    discountedAmount: z.number().int(),
    /** When the discount stops applying; absent when it never ends */
    endsAt: z.iso.datetime({ offset: true }).nullish(),
    /** Coupon name shown to the customer; absent when it has none */
    name: z.string().nullish(),
    /** Percentage taken off; absent for a fixed-amount coupon */
    percentOff: z.number().nullish(),
});
/**
 * A coupon applied to the next invoice.
 *
 * @openapiSchema BillingDiscount
 * @endpoint GET /v1/billing/subscription/next-charge
 * @usedBySchema BillingNextChargeSchema
 * @contractShape billing.discount
 * @contractRole canonical
 */
export const BillingDiscountSchema = BillingDiscountSchemaDefinition;
//# sourceMappingURL=discount.js.map