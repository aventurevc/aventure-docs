import { z } from "zod/v4";
/**
 * Card on file that pays the subscription.
 *
 * @openapiSchema BillingPaymentMethod
 * @endpoint GET /v1/billing/subscription/payment-profile
 * @endpoint POST /v1/billing/plan-change-previews
 * @usedBySchema BillingPaymentProfileSchema
 * @usedBySchema BillingPlanChangePreviewSchema
 * @contractShape billing.payment-method
 * @contractRole canonical
 */
export declare const BillingPaymentMethodSchema: z.ZodObject<{
    brand: z.ZodString;
    expiryMonth: z.ZodInt;
    expiryYear: z.ZodInt;
    last4: z.ZodString;
}, z.core.$strip>;
export type BillingPaymentMethod = z.infer<typeof BillingPaymentMethodSchema>;
//# sourceMappingURL=payment-method.d.ts.map