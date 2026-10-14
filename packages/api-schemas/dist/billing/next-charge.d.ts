import { z } from "zod/v4";
declare const BillingNextChargeSchemaDefinition: z.ZodObject<{
    amountDue: z.ZodNumber;
    chargeAt: z.ZodISODateTime;
    currency: z.ZodString;
    discount: z.ZodArray<z.ZodType<{
        amountOff?: number | null | undefined;
        discountedAmount: number;
        endsAt?: string | null | undefined;
        name?: string | null | undefined;
        percentOff?: number | null | undefined;
    }, import("./discount.ts").BillingDiscountSchemaInput, z.core.$ZodTypeInternals<{
        amountOff?: number | null | undefined;
        discountedAmount: number;
        endsAt?: string | null | undefined;
        name?: string | null | undefined;
        percentOff?: number | null | undefined;
    }, import("./discount.ts").BillingDiscountSchemaInput>>>;
    totalExcludingTax: z.ZodNumber;
}, z.core.$strip>;
type BillingNextChargeDefinition = z.infer<typeof BillingNextChargeSchemaDefinition>;
export interface BillingNextChargeSchemaInput extends z.input<typeof BillingNextChargeSchemaDefinition> {
}
/**
 * Next invoice of the caller's renewing Stripe subscription as Stripe previews it, after discounts and credits.
 *
 * @openapiSchema BillingNextCharge
 * @endpoint GET /v1/billing/subscription/next-charge
 * @contractShape billing.next-charge
 * @contractRole canonical
 */
export declare const BillingNextChargeSchema: z.ZodType<BillingNextChargeDefinition, BillingNextChargeSchemaInput>;
export type BillingNextCharge = z.infer<typeof BillingNextChargeSchema>;
export {};
//# sourceMappingURL=next-charge.d.ts.map