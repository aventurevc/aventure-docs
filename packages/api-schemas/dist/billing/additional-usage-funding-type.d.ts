import { z } from "zod/v4";
/**
 * PREPAID_CREDIT spends purchased credit packs and stops when they run out. USAGE_INVOICE bills an invoice each time unbilled usage reaches invoiceIncrementCents, up to spendCapCents per month.
 *
 * @openapiSchema BillingAdditionalUsageFundingType
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingAdditionalUsageSchema
 * @contractShape billing.additional-usage-funding-type
 * @contractRole canonical
 */
export declare const BillingAdditionalUsageFundingTypeSchema: z.ZodEnum<{
    PREPAID_CREDIT: "PREPAID_CREDIT";
    USAGE_INVOICE: "USAGE_INVOICE";
}>;
export type BillingAdditionalUsageFundingType = z.infer<typeof BillingAdditionalUsageFundingTypeSchema>;
//# sourceMappingURL=additional-usage-funding-type.d.ts.map