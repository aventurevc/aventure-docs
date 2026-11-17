import { z } from "zod/v4";
declare const BillingCreditPurchaseConfirmationSchemaDefinition: z.ZodObject<{
    amountCents: z.ZodNumber;
    closedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    grantedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodUUID;
    paymentClientSecret: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publishableKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        AUTHENTICATION_REQUIRED: "AUTHENTICATION_REQUIRED";
        FAILED: "FAILED";
        PAID: "PAID";
        PENDING: "PENDING";
        PROCESSING: "PROCESSING";
    }>, z.ZodString]> & {
        enum: {
            AUTHENTICATION_REQUIRED: "AUTHENTICATION_REQUIRED";
            FAILED: "FAILED";
            PAID: "PAID";
            PENDING: "PENDING";
            PROCESSING: "PROCESSING";
        };
    }>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type BillingCreditPurchaseConfirmationDefinition = z.infer<typeof BillingCreditPurchaseConfirmationSchemaDefinition>;
export interface BillingCreditPurchaseConfirmationSchemaInput extends z.input<typeof BillingCreditPurchaseConfirmationSchemaDefinition> {
}
/**
 * One account-owned purchase's payment state, confirmed credit-grant time, and any closure. Only grantedAt confirms that credit was fulfilled.
 *
 * @openapiSchema BillingCreditPurchaseConfirmation
 * @endpoint GET /v1/billing/credit-purchases/{purchaseId}
 * @endpoint POST /v1/billing/credit-purchases
 * @contractShape billing.credit-purchase-confirmation
 * @contractRole canonical
 */
export declare const BillingCreditPurchaseConfirmationSchema: z.ZodType<BillingCreditPurchaseConfirmationDefinition, BillingCreditPurchaseConfirmationSchemaInput>;
export type BillingCreditPurchaseConfirmation = z.infer<typeof BillingCreditPurchaseConfirmationSchema>;
export {};
//# sourceMappingURL=credit-purchase-confirmation.d.ts.map