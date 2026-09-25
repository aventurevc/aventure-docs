import { z } from "zod/v4";
declare const BillingCatalogAdditionalUsageSchemaDefinition: z.ZodObject<{
    type: z.ZodEnum<{
        AI_CREDIT: "AI_CREDIT";
        ENTITY_VIEW: "ENTITY_VIEW";
        NEW_COMPANY: "NEW_COMPANY";
        NEW_PERSON: "NEW_PERSON";
        PERSON_VIEW: "PERSON_VIEW";
        UPDATE: "UPDATE";
        UPDATE_PERSON: "UPDATE_PERSON";
        WEB_SEARCH: "WEB_SEARCH";
    }>;
    unitAmount: z.ZodNumber;
}, z.core.$strip>;
type BillingCatalogAdditionalUsageDefinition = z.infer<typeof BillingCatalogAdditionalUsageSchemaDefinition>;
/**
 * Price of one unit of usage past a paid tier's monthly cap.
 *
 * @openapiSchema BillingCatalogAdditionalUsage
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogSchema
 * @contractShape billing.catalog-additional-usage
 * @contractRole canonical
 */
export declare const BillingCatalogAdditionalUsageSchema: z.ZodType<BillingCatalogAdditionalUsageDefinition>;
export type BillingCatalogAdditionalUsage = z.infer<typeof BillingCatalogAdditionalUsageSchema>;
export {};
//# sourceMappingURL=catalog-additional-usage.d.ts.map