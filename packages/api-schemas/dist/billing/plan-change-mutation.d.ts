import { z } from "zod/v4";
declare const BillingPlanChangeMutationSchemaDefinition: z.ZodObject<{
    plan: z.ZodEnum<{
        PLUS_MONTHLY: "PLUS_MONTHLY";
        PLUS_YEARLY: "PLUS_YEARLY";
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
    }>;
}, z.core.$strip>;
type BillingPlanChangeMutationDefinition = z.infer<typeof BillingPlanChangeMutationSchemaDefinition>;
/**
 * Caller-selected plan for changing a continuing AI Plus or AI Pro subscription.
 *
 * @openapiSchema BillingPlanChangeMutation
 * @endpoint POST /v1/billing/plan-changes
 * @contractShape billing.plan-change-mutation
 * @contractRole canonical
 */
export declare const BillingPlanChangeMutationSchema: z.ZodType<BillingPlanChangeMutationDefinition>;
export type BillingPlanChangeMutation = z.infer<typeof BillingPlanChangeMutationSchema>;
export {};
//# sourceMappingURL=plan-change-mutation.d.ts.map