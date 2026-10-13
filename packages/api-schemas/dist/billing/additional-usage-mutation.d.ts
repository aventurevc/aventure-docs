import { z } from "zod/v4";
declare const BillingAdditionalUsageMutationSchemaDefinition: z.ZodObject<{
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
 * Merge patch of the additional-usage settings. Enabling requires funding; USAGE_INVOICE also requires spendCapCents and invoiceIncrementCents.
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