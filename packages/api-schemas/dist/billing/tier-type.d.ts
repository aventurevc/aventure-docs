import { z } from "zod/v4";
/**
 * Subscription tier that sets an account's monthly caps and included features.
 *
 * @openapiSchema BillingTierType
 * @endpoint GET /v1/billing/plans
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingCatalogPlanSchema
 * @usedBySchema BillingCatalogTierSchema
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.tier-type
 * @contractRole canonical
 */
export declare const BillingTierTypeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ESSENTIAL: "ESSENTIAL";
    PLUS: "PLUS";
    PRO: "PRO";
    STARTUPS: "STARTUPS";
    UNLIMITED: "UNLIMITED";
}>, z.ZodString]> & {
    enum: {
        ESSENTIAL: "ESSENTIAL";
        PLUS: "PLUS";
        PRO: "PRO";
        STARTUPS: "STARTUPS";
        UNLIMITED: "UNLIMITED";
    };
};
export type BillingTierType = z.infer<typeof BillingTierTypeSchema>;
//# sourceMappingURL=tier-type.d.ts.map