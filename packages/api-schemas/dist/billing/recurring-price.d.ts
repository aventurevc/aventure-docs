import { z } from "zod/v4";
/**
 * @openapiSchema BillingRecurringPrice
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.recurring-price
 * @contractRole canonical
 */
export declare const BillingRecurringPriceSchema: z.ZodObject<{
    cadence: z.ZodString;
    currency: z.ZodString;
    unitAmount: z.ZodNumber;
}, z.core.$strip>;
export type BillingRecurringPrice = z.infer<typeof BillingRecurringPriceSchema>;
//# sourceMappingURL=recurring-price.d.ts.map