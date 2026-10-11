import { z } from "zod/v4";
declare const BillingCreditPurchaseConfirmationSchemaDefinition: z.ZodObject<{
    amountCents: z.ZodNumber;
    closedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    grantedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodUUID;
}, z.core.$strip>;
type BillingCreditPurchaseConfirmationDefinition = z.infer<typeof BillingCreditPurchaseConfirmationSchemaDefinition>;
export interface BillingCreditPurchaseConfirmationSchemaInput extends z.input<typeof BillingCreditPurchaseConfirmationSchemaDefinition> {
}
/**
 * One account-owned purchase's confirmed credit grant or checkout closure.
 *
 * @openapiSchema BillingCreditPurchaseConfirmation
 * @endpoint GET /v1/billing/credit-purchases/{purchaseId}
 * @contractShape billing.credit-purchase-confirmation
 * @contractRole canonical
 */
export declare const BillingCreditPurchaseConfirmationSchema: z.ZodType<BillingCreditPurchaseConfirmationDefinition, BillingCreditPurchaseConfirmationSchemaInput>;
export type BillingCreditPurchaseConfirmation = z.infer<typeof BillingCreditPurchaseConfirmationSchema>;
export {};
//# sourceMappingURL=credit-purchase-confirmation.d.ts.map