import { z } from "zod/v4";
/**
 * When a plan change takes effect: IMMEDIATE applies now with proration, PERIOD_END schedules the switch for the next renewal.
 *
 * @openapiSchema BillingChangeTimingType
 * @endpoint POST /v1/billing/plan-change-previews
 * @endpoint POST /v1/billing/plan-changes
 * @usedBySchema BillingPlanChangeMutationSchema
 * @contractShape billing.change-timing-type
 * @contractRole canonical
 */
export declare const BillingChangeTimingTypeSchema: z.ZodEnum<{
    IMMEDIATE: "IMMEDIATE";
    PERIOD_END: "PERIOD_END";
}>;
export type BillingChangeTimingType = z.infer<typeof BillingChangeTimingTypeSchema>;
//# sourceMappingURL=change-timing-type.d.ts.map