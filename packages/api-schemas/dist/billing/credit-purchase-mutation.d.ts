import { z } from "zod/v4";
declare const BillingCreditPurchaseMutationSchemaDefinition: z.ZodObject<{
    amountCents: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    authorizationQuote: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    capDecision: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        KEEP_CAP: "KEEP_CAP";
        NO_CAP: "NO_CAP";
        SET_CAP: "SET_CAP";
    }>>>;
    pack: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        USD_100: "USD_100";
        USD_25: "USD_25";
        USD_250: "USD_250";
        USD_50: "USD_50";
    }>>>;
    purchaseMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        ATTACHED_CARD: "ATTACHED_CARD";
        HOSTED_CHECKOUT: "HOSTED_CHECKOUT";
    }>>>;
    savePaymentMethod: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    spendCapCents: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type BillingCreditPurchaseMutationDefinition = z.infer<typeof BillingCreditPurchaseMutationSchemaDefinition>;
export interface BillingCreditPurchaseMutationSchemaInput extends z.input<typeof BillingCreditPurchaseMutationSchemaDefinition> {
}
/**
 * Buy USD prepaid credit with exactly one amount selector; no default amount is charged.
 *
 * @openapiSchema BillingCreditPurchaseMutation
 * @endpoint POST /v1/billing/credit-purchases
 * @contractShape billing.credit-purchase-mutation
 * @contractRole canonical
 */
export declare const BillingCreditPurchaseMutationSchema: z.ZodType<BillingCreditPurchaseMutationDefinition, BillingCreditPurchaseMutationSchemaInput>;
export type BillingCreditPurchaseMutation = z.infer<typeof BillingCreditPurchaseMutationSchema>;
export {};
//# sourceMappingURL=credit-purchase-mutation.d.ts.map