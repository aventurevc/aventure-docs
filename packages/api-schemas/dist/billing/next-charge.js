// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingDiscountSchema } from "./discount.js";
const BillingNextChargeSchemaDefinition = z.object({
    /** Amount the next invoice will charge in the currency's minor unit, after discounts, credits, and usage so far; 0 when a discount covers it */
    amountDue: z.number().int(),
    /** When the next invoice is raised and charged. When the subscription ends before raising another invoice, this is that end and both amounts are 0. */
    chargeAt: z.iso.datetime({ offset: true }),
    /** When the free stretch ends: the end of a complimentary plan granted for a term, or the first renewal that coupons no longer make free; the plan charge is 0 until then. Absent when coupons do not make the next invoice's plan charge free, or when it stays free with no end */
    complimentaryUntil: z.iso.datetime({ offset: true }).nullish(),
    /** ISO 4217 currency code. */
    currency: z.string(),
    /** Discounts applied to the next invoice; empty when none apply */
    discount: z.array(BillingDiscountSchema),
    /** When money is next collected after coupons, complimentary terms, and account credit: chargeAt when amountDue is above 0, otherwise the first later renewal they no longer cover. Absent when nothing is charged before the subscription ends, or ever. Renewals after the next invoice are estimated from the plan price and exclude usage */
    paidChargeAt: z.iso.datetime({ offset: true }).nullish(),
    /** Next invoice total in the currency's minor unit after discounts, before tax and account credit; compare it, not amountDue, with the plan's price */
    totalExcludingTax: z.number().int(),
});
/**
 * Next invoice of the caller's renewing Stripe subscription as Stripe previews it, after discounts and credits, and when the account next pays.
 *
 * @openapiSchema BillingNextCharge
 * @endpoint GET /v1/billing/subscription/next-charge
 * @contractShape billing.next-charge
 * @contractRole canonical
 */
export const BillingNextChargeSchema = BillingNextChargeSchemaDefinition;
//# sourceMappingURL=next-charge.js.map