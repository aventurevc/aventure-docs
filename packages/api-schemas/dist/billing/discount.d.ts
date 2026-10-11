import { z } from "zod/v4";
declare const BillingDiscountSchemaDefinition: z.ZodObject<{
    amountOff: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    discountedAmount: z.ZodNumber;
    endsAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    percentOff: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type BillingDiscountDefinition = z.infer<typeof BillingDiscountSchemaDefinition>;
export interface BillingDiscountSchemaInput extends z.input<typeof BillingDiscountSchemaDefinition> {
}
/**
 * A coupon applied to the next invoice.
 *
 * @openapiSchema BillingDiscount
 * @endpoint GET /v1/billing/subscription/next-charge
 * @usedBySchema BillingNextChargeSchema
 * @contractShape billing.discount
 * @contractRole canonical
 */
export declare const BillingDiscountSchema: z.ZodType<BillingDiscountDefinition, BillingDiscountSchemaInput>;
export type BillingDiscount = z.infer<typeof BillingDiscountSchema>;
export {};
//# sourceMappingURL=discount.d.ts.map