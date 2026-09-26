import { z } from "zod/v4";
declare const BillingAdditionalUsageSchemaDefinition: z.ZodObject<{
    availableCreditCents: z.ZodNumber;
    blocked: z.ZodBoolean;
    enabled: z.ZodBoolean;
    funding: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        PREPAID_CREDIT: "PREPAID_CREDIT";
        USAGE_INVOICE: "USAGE_INVOICE";
    }>>>;
    invoiceIncrementCents: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    meter: z.ZodArray<z.ZodType<{
        amountCents: number;
        quantity: number;
        type: "AI_CREDIT" | "COMPANY" | "ENTITY_VIEW" | "PERSON" | "PERSON_VIEW" | "WEB_SEARCH";
    }, unknown, z.core.$ZodTypeInternals<{
        amountCents: number;
        quantity: number;
        type: "AI_CREDIT" | "COMPANY" | "ENTITY_VIEW" | "PERSON" | "PERSON_VIEW" | "WEB_SEARCH";
    }, unknown>>>;
    resetAt: z.ZodISODateTime;
    spendCapCents: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    spentCents: z.ZodNumber;
    unbilledCents: z.ZodNumber;
}, z.core.$strip>;
type BillingAdditionalUsageDefinition = z.infer<typeof BillingAdditionalUsageSchemaDefinition>;
/**
 * Opt-in metered usage past the monthly allowance: settings, spend this UTC month, prepaid credit, and unbilled usage.
 *
 * @openapiSchema BillingAdditionalUsage
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.additional-usage
 * @contractRole canonical
 */
export declare const BillingAdditionalUsageSchema: z.ZodType<BillingAdditionalUsageDefinition>;
export type BillingAdditionalUsage = z.infer<typeof BillingAdditionalUsageSchema>;
export {};
//# sourceMappingURL=additional-usage.d.ts.map