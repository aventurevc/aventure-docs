import { z } from "zod/v4";
declare const BillingCatalogCreditPackSchemaDefinition: z.ZodObject<{
    amountCents: z.ZodNumber;
    pack: z.ZodEnum<{
        USD_100: "USD_100";
        USD_25: "USD_25";
        USD_250: "USD_250";
        USD_50: "USD_50";
    }>;
}, z.core.$strip>;
type BillingCatalogCreditPackDefinition = z.infer<typeof BillingCatalogCreditPackSchemaDefinition>;
/**
 * One prepaid credit pack.
 *
 * @openapiSchema BillingCatalogCreditPack
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogSchema
 * @contractShape billing.catalog-credit-pack
 * @contractRole canonical
 */
export declare const BillingCatalogCreditPackSchema: z.ZodType<BillingCatalogCreditPackDefinition>;
export type BillingCatalogCreditPack = z.infer<typeof BillingCatalogCreditPackSchema>;
export {};
//# sourceMappingURL=catalog-credit-pack.d.ts.map