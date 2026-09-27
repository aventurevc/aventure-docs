import { z } from "zod/v4";
declare const BillingPlanChangePreviewSchemaDefinition: z.ZodObject<{
    amountDue: z.ZodNumber;
    currency: z.ZodString;
    effectiveAt: z.ZodISODateTime;
    paymentMethod: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        brand: z.ZodString;
        last4: z.ZodString;
    }, z.core.$strip>>>;
    plan: z.ZodEnum<{
        PLUS_MONTHLY: "PLUS_MONTHLY";
        PLUS_YEARLY: "PLUS_YEARLY";
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
    }>;
    recurringPrice: z.ZodObject<{
        cadence: z.ZodString;
        currency: z.ZodString;
        unitAmount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
type BillingPlanChangePreviewDefinition = z.infer<typeof BillingPlanChangePreviewSchemaDefinition>;
/**
 * Preview of POST /v1/billing/plan-changes for the same plan: the amount charged on confirmation, when the plan takes effect, the renewal price after it, and the card that pays.
 *
 * @openapiSchema BillingPlanChangePreview
 * @endpoint POST /v1/billing/plan-change-previews
 * @contractShape billing.plan-change-preview
 * @contractRole canonical
 */
export declare const BillingPlanChangePreviewSchema: z.ZodType<BillingPlanChangePreviewDefinition>;
export type BillingPlanChangePreview = z.infer<typeof BillingPlanChangePreviewSchema>;
export {};
//# sourceMappingURL=plan-change-preview.d.ts.map