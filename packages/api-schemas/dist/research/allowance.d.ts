import { z } from "zod/v4";
/**
 * Usage allowance for one meter in one billing period, the UTC month by default
 *
 * @openapiSchema ResearchAllowance
 * @endpoint GET /v1/billing/ai-credits
 * @endpoint GET /v1/billing/subscription
 * @endpoint POST /v1/directory/exports
 * @usedBySchema DirectoryExportSchema
 * @usedBySchema ResearchAllowanceUsageSchema
 * @contractShape research.allowance
 * @contractRole canonical
 */
export declare const ResearchAllowanceSchema: z.ZodObject<{
    access: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
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
    }>>;
    limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    resetAt: z.ZodISODateTime;
    used: z.ZodInt;
}, z.core.$strip>;
export type ResearchAllowance = z.infer<typeof ResearchAllowanceSchema>;
//# sourceMappingURL=allowance.d.ts.map