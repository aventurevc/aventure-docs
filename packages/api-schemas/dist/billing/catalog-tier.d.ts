import { z } from "zod/v4";
declare const BillingCatalogTierSchemaDefinition: z.ZodObject<{
    aiCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    allowance: z.ZodArray<z.ZodType<{
        limit?: number | null | undefined;
        type: "COMPANY" | "ENTITY_BRAND" | "ENTITY_VIEW" | "PERSON" | "PERSON_VIEW" | "WEB_SEARCH";
    }, import("./catalog-allowance.ts").BillingCatalogAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        type: "COMPANY" | "ENTITY_BRAND" | "ENTITY_VIEW" | "PERSON" | "PERSON_VIEW" | "WEB_SEARCH";
    }, import("./catalog-allowance.ts").BillingCatalogAllowanceSchemaInput>>>;
    displayName: z.ZodString;
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
 * One subscription tier and its monthly caps.
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