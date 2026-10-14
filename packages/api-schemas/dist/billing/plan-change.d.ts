import { z } from "zod/v4";
declare const BillingPlanChangeSchemaDefinition: z.ZodObject<{
    effectiveAt: z.ZodISODateTime;
    paymentClientSecret: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    paymentUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    plan: z.ZodUnion<readonly [z.ZodEnum<{
        PLUS_MONTHLY: "PLUS_MONTHLY";
        PLUS_YEARLY: "PLUS_YEARLY";
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
        UNLIMITED_MONTHLY: "UNLIMITED_MONTHLY";
    }>, z.ZodString]> & {
        enum: {
            PLUS_MONTHLY: "PLUS_MONTHLY";
            PLUS_YEARLY: "PLUS_YEARLY";
            PRO_MONTHLY: "PRO_MONTHLY";
            PRO_YEARLY: "PRO_YEARLY";
            PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
            UNLIMITED_MONTHLY: "UNLIMITED_MONTHLY";
        };
    };
    publishableKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type BillingPlanChangeDefinition = z.infer<typeof BillingPlanChangeSchemaDefinition>;
export interface BillingPlanChangeSchemaInput extends z.input<typeof BillingPlanChangeSchemaDefinition> {
}
/**
 * Plan change outcome: an upgrade applies now with a prorated invoice, a downgrade waits for the current period end.
 *
 * @openapiSchema BillingPlanChange
 * @endpoint POST /v1/billing/plan-changes
 * @contractShape billing.plan-change
 * @contractRole canonical
 */
export declare const BillingPlanChangeSchema: z.ZodType<BillingPlanChangeDefinition, BillingPlanChangeSchemaInput>;
export type BillingPlanChange = z.infer<typeof BillingPlanChangeSchema>;
export {};
//# sourceMappingURL=plan-change.d.ts.map