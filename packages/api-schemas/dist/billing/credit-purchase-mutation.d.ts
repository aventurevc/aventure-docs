import { z } from "zod/v4";
declare const BillingCreditPurchaseMutationSchemaDefinition: z.ZodObject<{
    pack: z.ZodEnum<{
        USD_100: "USD_100";
        USD_25: "USD_25";
        USD_250: "USD_250";
        USD_50: "USD_50";
    }>;
}, z.core.$strip>;
type BillingCreditPurchaseMutationDefinition = z.infer<typeof BillingCreditPurchaseMutationSchemaDefinition>;
export interface BillingCreditPurchaseMutationSchemaInput extends z.input<typeof BillingCreditPurchaseMutationSchemaDefinition> {
}
/**
 * Prepaid credit pack to buy through hosted Checkout.
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