import { z } from "zod/v4";
declare const BillingCatalogPlanSchemaDefinition: z.ZodObject<{
    cadence: z.ZodString;
    currency: z.ZodString;
    displayName: z.ZodString;
    plan: z.ZodEnum<{
        PLUS_MONTHLY: "PLUS_MONTHLY";
        PLUS_YEARLY: "PLUS_YEARLY";
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
    }>;
    tier: z.ZodEnum<{
        ESSENTIAL: "ESSENTIAL";
        PLUS: "PLUS";
        PRO: "PRO";
        UNLIMITED: "UNLIMITED";
    }>;
    unitAmount: z.ZodNumber;
}, z.core.$strip>;
type BillingCatalogPlanDefinition = z.infer<typeof BillingCatalogPlanSchemaDefinition>;
/**
 * One Checkout plan and its recurring price.
 *
 * @openapiSchema BillingCatalogPlan
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogSchema
 * @contractShape billing.catalog-plan
 * @contractRole canonical
 */
export declare const BillingCatalogPlanSchema: z.ZodType<BillingCatalogPlanDefinition>;
export type BillingCatalogPlan = z.infer<typeof BillingCatalogPlanSchema>;
export {};
//# sourceMappingURL=catalog-plan.d.ts.map