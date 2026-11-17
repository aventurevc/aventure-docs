import { z } from "zod/v4";
/**
 * Current purchase payment state; grant confirmation remains grantedAt.
 *
 * @openapiSchema BillingCreditPurchaseStatus
 * @endpoint GET /v1/billing/credit-purchases/{purchaseId}
 * @endpoint POST /v1/billing/credit-purchases
 * @usedBySchema BillingCreditPurchaseConfirmationSchema
 * @usedBySchema BillingCreditPurchaseSchema
 * @contractShape billing.credit-purchase-status
 * @contractRole canonical
 */
export declare const BillingCreditPurchaseStatusSchema: z.ZodUnion<readonly [z.ZodEnum<{
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
};
export type BillingCreditPurchaseStatus = z.infer<typeof BillingCreditPurchaseStatusSchema>;
//# sourceMappingURL=credit-purchase-status.d.ts.map