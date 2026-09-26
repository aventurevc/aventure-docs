import { z } from "zod/v4";
declare const BillingCatalogAllowanceSchemaDefinition: z.ZodObject<{
    limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    type: z.ZodEnum<{
        COMPANY: "COMPANY";
        ENTITY_VIEW: "ENTITY_VIEW";
        PERSON: "PERSON";
        PERSON_VIEW: "PERSON_VIEW";
        WEB_SEARCH: "WEB_SEARCH";
    }>;
}, z.core.$strip>;
type BillingCatalogAllowanceDefinition = z.infer<typeof BillingCatalogAllowanceSchemaDefinition>;
/**
 * A tier's monthly cap for one allowance.
 *
 * @openapiSchema BillingCatalogAllowance
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogTierSchema
 * @contractShape billing.catalog-allowance
 * @contractRole canonical
 */
export declare const BillingCatalogAllowanceSchema: z.ZodType<BillingCatalogAllowanceDefinition>;
export type BillingCatalogAllowance = z.infer<typeof BillingCatalogAllowanceSchema>;
export {};
//# sourceMappingURL=catalog-allowance.d.ts.map