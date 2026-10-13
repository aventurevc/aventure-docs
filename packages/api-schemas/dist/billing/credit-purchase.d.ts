import { z } from "zod/v4";
declare const BillingCreditPurchaseSchemaDefinition: z.ZodObject<{
    expiresAt: z.ZodISODateTime;
    id: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    pack: z.ZodEnum<{
        USD_100: "USD_100";
        USD_25: "USD_25";
        USD_250: "USD_250";
        USD_50: "USD_50";
    }>;
    url: z.ZodString;
}, z.core.$strip>;
type BillingCreditPurchaseDefinition = z.infer<typeof BillingCreditPurchaseSchemaDefinition>;
export interface BillingCreditPurchaseSchemaInput extends z.input<typeof BillingCreditPurchaseSchemaDefinition> {
}
/**
 * Hosted Checkout destination and expiry for a prepaid credit pack.
 *
 * @openapiSchema BillingCreditPurchase
 * @endpoint POST /v1/billing/credit-purchases
 * @contractShape billing.credit-purchase
 * @contractRole canonical
 */
export declare const BillingCreditPurchaseSchema: z.ZodType<BillingCreditPurchaseDefinition, BillingCreditPurchaseSchemaInput>;
export type BillingCreditPurchase = z.infer<typeof BillingCreditPurchaseSchema>;
export {};
//# sourceMappingURL=credit-purchase.d.ts.map