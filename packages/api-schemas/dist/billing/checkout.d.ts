import { z } from "zod/v4";
declare const BillingCheckoutSchemaDefinition: z.ZodObject<{
    clientSecret: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    expiresAt: z.ZodISODateTime;
    plan: z.ZodEnum<{
        PLUS_MONTHLY: "PLUS_MONTHLY";
        PLUS_YEARLY: "PLUS_YEARLY";
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
    }>;
    publishableKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type BillingCheckoutDefinition = z.infer<typeof BillingCheckoutSchemaDefinition>;
/**
 * Checkout Session destination or client secret and expiry without provider identifiers.
 *
 * @openapiSchema BillingCheckout
 * @endpoint POST /v1/billing/checkout-sessions
 * @contractShape billing.checkout
 * @contractRole canonical
 */
export declare const BillingCheckoutSchema: z.ZodType<BillingCheckoutDefinition>;
export type BillingCheckout = z.infer<typeof BillingCheckoutSchema>;
export {};
//# sourceMappingURL=checkout.d.ts.map