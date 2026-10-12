import { z } from "zod/v4";
declare const BillingPaymentProfileSchemaDefinition: z.ZodObject<{
    introductoryOfferEligible: z.ZodBoolean;
    paymentMethod: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        brand: z.ZodString;
        expiryMonth: z.ZodInt;
        expiryYear: z.ZodInt;
        last4: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type BillingPaymentProfileDefinition = z.infer<typeof BillingPaymentProfileSchemaDefinition>;
export interface BillingPaymentProfileSchemaInput extends z.input<typeof BillingPaymentProfileSchemaDefinition> {
}
/**
 * The caller's card on file and whether Checkout would charge each plan's introductoryAmount on the first payment, read live from Stripe.
 *
 * @openapiSchema BillingPaymentProfile
 * @endpoint GET /v1/billing/subscription/payment-profile
 * @contractShape billing.payment-profile
 * @contractRole canonical
 */
export declare const BillingPaymentProfileSchema: z.ZodType<BillingPaymentProfileDefinition, BillingPaymentProfileSchemaInput>;
export type BillingPaymentProfile = z.infer<typeof BillingPaymentProfileSchema>;
export {};
//# sourceMappingURL=payment-profile.d.ts.map