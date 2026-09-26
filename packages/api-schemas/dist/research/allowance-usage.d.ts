import { z } from "zod/v4";
declare const ResearchAllowanceUsageSchemaDefinition: z.ZodObject<{
    company: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown>>;
    entityView: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown>>;
    newCompany: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown>>;
    newPerson: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown>>;
    person: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown>>;
    personView: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown>>;
    update: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown>>;
    updatePerson: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown>>;
    webSearch: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, unknown>>;
}, z.core.$strip>;
type ResearchAllowanceUsageDefinition = z.infer<typeof ResearchAllowanceUsageSchemaDefinition>;
/**
 * @openapiSchema ResearchAllowanceUsage
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape research.allowance-usage
 * @contractRole canonical
 */
export declare const ResearchAllowanceUsageSchema: z.ZodType<ResearchAllowanceUsageDefinition>;
export type ResearchAllowanceUsage = z.infer<typeof ResearchAllowanceUsageSchema>;
export {};
//# sourceMappingURL=allowance-usage.d.ts.map