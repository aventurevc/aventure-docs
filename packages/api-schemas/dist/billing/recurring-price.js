// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * @openapiSchema BillingRecurringPrice
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.recurring-price
 * @contractRole canonical
 */
export const BillingRecurringPriceSchema = z.object({
    /** ISO 8601 billing period. */
    cadence: z.string(),
    /** ISO 4217 currency code. */
    currency: z.string(),
    /** Recurring charge in the currency's minor unit, before discounts */
    unitAmount: z.number().int(),
});
//# sourceMappingURL=recurring-price.js.map