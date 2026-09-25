import { z } from "zod/v4";
declare const BillingPlanChangeSchemaDefinition: z.ZodObject<{
    effectiveAt: z.ZodISODateTime;
    paymentUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    plan: z.ZodEnum<{
        PLUS_MONTHLY: "PLUS_MONTHLY";
        PLUS_YEARLY: "PLUS_YEARLY";
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
    }>;
}, z.core.$strip>;
type BillingPlanChangeDefinition = z.infer<typeof BillingPlanChangeSchemaDefinition>;
/**
 * Plan change outcome: an upgrade applies now with a prorated invoice, a downgrade waits for the current period end.
 *
 * @openapiSchema BillingPlanChange
 * @endpoint POST /v1/billing/plan-changes
 * @contractShape billing.plan-change
 * @contractRole canonical
 */
export declare const BillingPlanChangeSchema: z.ZodType<BillingPlanChangeDefinition>;
export type BillingPlanChange = z.infer<typeof BillingPlanChangeSchema>;
export {};
//# sourceMappingURL=plan-change.d.ts.map