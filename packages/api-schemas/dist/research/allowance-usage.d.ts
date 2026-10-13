import { z } from "zod/v4";
declare const ResearchAllowanceUsageSchemaDefinition: z.ZodObject<{
    company: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput>>;
    entityBrand: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput>>;
    entityView: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput>>;
    newCompany: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput>>;
    newPerson: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput>>;
    person: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput>>;
    personView: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput>>;
    update: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput>>;
    updatePerson: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput>>;
    webSearch: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, import("./allowance.ts").ResearchAllowanceSchemaInput>>;
}, z.core.$strip>;
type ResearchAllowanceUsageDefinition = z.infer<typeof ResearchAllowanceUsageSchemaDefinition>;
export interface ResearchAllowanceUsageSchemaInput extends z.input<typeof ResearchAllowanceUsageSchemaDefinition> {
}
/**
 * @openapiSchema ResearchAllowanceUsage
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape research.allowance-usage
 * @contractRole canonical
 */
export declare const ResearchAllowanceUsageSchema: z.ZodType<ResearchAllowanceUsageDefinition, ResearchAllowanceUsageSchemaInput>;
export type ResearchAllowanceUsage = z.infer<typeof ResearchAllowanceUsageSchema>;
export {};
//# sourceMappingURL=allowance-usage.d.ts.map