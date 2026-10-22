import { z } from "zod/v4";
declare const BillingCatalogTierSchemaDefinition: z.ZodObject<{
    aiCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    allowance: z.ZodArray<z.ZodType<{
        limit?: number | null | undefined;
        type: string;
    }, import("./catalog-allowance.ts").BillingCatalogAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        type: string;
    }, import("./catalog-allowance.ts").BillingCatalogAllowanceSchemaInput>>>;
    description: z.ZodString;
    displayName: z.ZodString;
    lookupDailyLimit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    searchDailyLimit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    tier: z.ZodEnum<{
        ESSENTIAL: "ESSENTIAL";
        PLUS: "PLUS";
        PRO: "PRO";
        UNLIMITED: "UNLIMITED";
    }>;
}, z.core.$strip>;
type BillingCatalogTierDefinition = z.infer<typeof BillingCatalogTierSchemaDefinition>;
export interface BillingCatalogTierSchemaInput extends z.input<typeof BillingCatalogTierSchemaDefinition> {
}
/**
 * One subscription tier, its monthly caps, and its free daily allowances.
 *
 * @openapiSchema BillingCatalogTier
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogSchema
 * @contractShape billing.catalog-tier
 * @contractRole canonical
 */
export declare const BillingCatalogTierSchema: z.ZodType<BillingCatalogTierDefinition, BillingCatalogTierSchemaInput>;
export type BillingCatalogTier = z.infer<typeof BillingCatalogTierSchema>;
export {};
//# sourceMappingURL=catalog-tier.d.ts.map