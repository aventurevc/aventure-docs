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
export declare const BillingPaymentMethodSchema: z.ZodObject<{
    brand: z.ZodString;
    last4: z.ZodString;
}, z.core.$strip>;
export type BillingPaymentMethod = z.infer<typeof BillingPaymentMethodSchema>;
//# sourceMappingURL=payment-method.d.ts.map