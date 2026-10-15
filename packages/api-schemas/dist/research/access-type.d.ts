import { z } from "zod/v4";
/**
 * What filing one more research run does now. `INCLUDED`: the plan's monthly allowance covers it. `ADDITIONAL_USAGE`: the allowance is spent or withheld, and the run is billed as additional usage (prepaid credit or invoice). `EXHAUSTED`: the plan's allowance is spent and no additional usage can pay for it (off, spend cap reached, or prepaid credit below the unit price); filing answers 429. `PLAN_REQUIRED`: the plan includes no research and no additional usage can pay for it; filing answers 402 or 429. `BILLING_BLOCKED`: a paid plan is past due, unpaid, incomplete, or paused, or an additional-usage invoice is unpaid; filing answers 402.
 *
 * @openapiSchema ResearchAccessType
 * @endpoint GET /v1/billing/ai-credits
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema ResearchAllowanceSchema
 * @contractShape research.access-type
 * @contractRole canonical
 */
export declare const ResearchAccessTypeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ADDITIONAL_USAGE: "ADDITIONAL_USAGE";
    BILLING_BLOCKED: "BILLING_BLOCKED";
    EXHAUSTED: "EXHAUSTED";
    INCLUDED: "INCLUDED";
    PLAN_REQUIRED: "PLAN_REQUIRED";
}>, z.ZodString]> & {
    enum: {
        ADDITIONAL_USAGE: "ADDITIONAL_USAGE";
        BILLING_BLOCKED: "BILLING_BLOCKED";
        EXHAUSTED: "EXHAUSTED";
        INCLUDED: "INCLUDED";
        PLAN_REQUIRED: "PLAN_REQUIRED";
    };
};
export type ResearchAccessType = z.infer<typeof ResearchAccessTypeSchema>;
//# sourceMappingURL=access-type.d.ts.map