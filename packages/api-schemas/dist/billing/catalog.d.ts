import { z } from "zod/v4";
declare const BillingCatalogSchemaDefinition: z.ZodObject<{
    additionalUsage: z.ZodArray<z.ZodType<{
        type: string;
        unitAmount: number;
    }, import("./catalog-additional-usage.ts").BillingCatalogAdditionalUsageSchemaInput, z.core.$ZodTypeInternals<{
        type: string;
        unitAmount: number;
    }, import("./catalog-additional-usage.ts").BillingCatalogAdditionalUsageSchemaInput>>>;
    creditPack: z.ZodArray<z.ZodType<{
        amountCents: number;
        pack: "USD_100" | "USD_25" | "USD_250" | "USD_50";
    }, import("./catalog-credit-pack.ts").BillingCatalogCreditPackSchemaInput, z.core.$ZodTypeInternals<{
        amountCents: number;
        pack: "USD_100" | "USD_25" | "USD_250" | "USD_50";
    }, import("./catalog-credit-pack.ts").BillingCatalogCreditPackSchemaInput>>>;
    invoiceIncrementCents: z.ZodArray<z.ZodNumber>;
    plan: z.ZodArray<z.ZodType<{
        appStoreProductId?: string | null | undefined;
        cadence: string;
        currency: string;
        displayName: string;
        exportLimit?: number | null | undefined;
        exportPeriod?: string | undefined;
        introductoryAmount?: number | null | undefined;
        plan: string;
        tier: "ESSENTIAL" | "PLUS" | "PRO" | "UNLIMITED";
        unitAmount: number;
    }, import("./catalog-plan.ts").BillingCatalogPlanSchemaInput, z.core.$ZodTypeInternals<{
        appStoreProductId?: string | null | undefined;
        cadence: string;
        currency: string;
        displayName: string;
        exportLimit?: number | null | undefined;
        exportPeriod?: string | undefined;
        introductoryAmount?: number | null | undefined;
        plan: string;
        tier: "ESSENTIAL" | "PLUS" | "PRO" | "UNLIMITED";
        unitAmount: number;
    }, import("./catalog-plan.ts").BillingCatalogPlanSchemaInput>>>;
    tier: z.ZodArray<z.ZodType<{
        aiCreditLimit?: number | null | undefined;
        allowance: {
            limit?: number | null | undefined;
            type: string;
        }[];
        description: string;
        displayName: string;
        lookupDailyLimit?: number | null | undefined;
        searchDailyLimit?: number | null | undefined;
        tier: "ESSENTIAL" | "PLUS" | "PRO" | "UNLIMITED";
    }, import("./catalog-tier.ts").BillingCatalogTierSchemaInput, z.core.$ZodTypeInternals<{
        aiCreditLimit?: number | null | undefined;
        allowance: {
            limit?: number | null | undefined;
            type: string;
        }[];
        description: string;
        displayName: string;
        lookupDailyLimit?: number | null | undefined;
        searchDailyLimit?: number | null | undefined;
        tier: "ESSENTIAL" | "PLUS" | "PRO" | "UNLIMITED";
    }, import("./catalog-tier.ts").BillingCatalogTierSchemaInput>>>;
}, z.core.$strip>;
type BillingCatalogDefinition = z.infer<typeof BillingCatalogSchemaDefinition>;
export interface BillingCatalogSchemaInput extends z.input<typeof BillingCatalogSchemaDefinition> {
}
/**
 * Every self-serve subscription tier with its monthly allowance caps and free daily allowances, every plan Checkout sells with its effective export cap and period, and the prices of eligible usage past those caps. The Unlimited tier is not sold through Checkout and is omitted.
 *
 * @openapiSchema BillingCatalog
 * @endpoint GET /v1/billing/plans
 * @contractShape billing.catalog
 * @contractRole canonical
 */
export declare const BillingCatalogSchema: z.ZodType<BillingCatalogDefinition, BillingCatalogSchemaInput>;
export type BillingCatalog = z.infer<typeof BillingCatalogSchema>;
export {};
//# sourceMappingURL=catalog.d.ts.map