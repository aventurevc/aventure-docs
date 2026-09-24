import { z } from "zod/v4";
declare const ResearchAllowanceSchemaDefinition: z.ZodObject<{
    limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    resetAt: z.ZodISODateTime;
    used: z.ZodInt;
}, z.core.$strip>;
type ResearchAllowanceDefinition = z.infer<typeof ResearchAllowanceSchemaDefinition>;
/**
 * @openapiSchema ResearchAllowance
 * @endpoint GET /v1/billing/ai-credits
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema ResearchAllowanceUsageSchema
 * @contractShape research.allowance
 * @contractRole canonical
 */
export declare const ResearchAllowanceSchema: z.ZodType<ResearchAllowanceDefinition>;
export type ResearchAllowance = z.infer<typeof ResearchAllowanceSchema>;
export {};
//# sourceMappingURL=allowance.d.ts.map