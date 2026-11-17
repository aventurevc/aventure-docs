import { z } from "zod/v4";
declare const BillingAdditionalUsageMutationSchemaDefinition: z.ZodObject<{
    assistantPurchaseEnabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    authorizationQuote: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    funding: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        PREPAID_CREDIT: "PREPAID_CREDIT";
        USAGE_INVOICE: "USAGE_INVOICE";
    }>>>;
    invoiceIncrementCents: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    spendCapCents: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type BillingAdditionalUsageMutationDefinition = z.infer<typeof BillingAdditionalUsageMutationSchemaDefinition>;
export interface BillingAdditionalUsageMutationSchemaInput extends z.input<typeof BillingAdditionalUsageMutationSchemaDefinition> {
}
/**
 * Merge patch of additional-usage settings: omission preserves a setting and null clears it. Enabling requires funding; USAGE_INVOICE also requires invoiceIncrementCents. A permission-only initial save stays disabled with PREPAID_CREDIT and provisions nothing.
 *
 * @openapiSchema BillingAdditionalUsageMutation
 * @endpoint PATCH /v1/billing/additional-usage
 * @contractShape billing.additional-usage-mutation
 * @contractRole canonical
 */
export declare const BillingAdditionalUsageMutationSchema: z.ZodType<BillingAdditionalUsageMutationDefinition, BillingAdditionalUsageMutationSchemaInput>;
export type BillingAdditionalUsageMutation = z.infer<typeof BillingAdditionalUsageMutationSchema>;
export {};
//# sourceMappingURL=additional-usage-mutation.d.ts.map