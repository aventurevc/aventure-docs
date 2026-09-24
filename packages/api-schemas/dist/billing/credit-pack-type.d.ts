import { z } from "zod/v4";
/**
 * Prepaid additional-usage credit pack.
 *
 * @openapiSchema BillingCreditPackType
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogCreditPackSchema
 * @contractShape billing.credit-pack-type
 * @contractRole canonical
 */
export declare const BillingCreditPackTypeSchema: z.ZodEnum<{
    USD_100: "USD_100";
    USD_25: "USD_25";
    USD_250: "USD_250";
    USD_50: "USD_50";
}>;
export type BillingCreditPackType = z.infer<typeof BillingCreditPackTypeSchema>;
//# sourceMappingURL=credit-pack-type.d.ts.map