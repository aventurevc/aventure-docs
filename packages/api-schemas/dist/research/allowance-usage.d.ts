import { z } from "zod/v4";
declare const ResearchAllowanceUsageSchemaDefinition: z.ZodObject<{
    company: z.ZodObject<{
        limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        resetAt: z.ZodISODateTime;
        used: z.ZodInt;
    }, z.core.$strip>;
    entityView: z.ZodObject<{
        limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        resetAt: z.ZodISODateTime;
        used: z.ZodInt;
    }, z.core.$strip>;
    newCompany: z.ZodOptional<z.ZodObject<{
        limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        resetAt: z.ZodISODateTime;
        used: z.ZodInt;
    }, z.core.$strip>>;
    newPerson: z.ZodOptional<z.ZodObject<{
        limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        resetAt: z.ZodISODateTime;
        used: z.ZodInt;
    }, z.core.$strip>>;
    person: z.ZodObject<{
        limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        resetAt: z.ZodISODateTime;
        used: z.ZodInt;
    }, z.core.$strip>;
    personView: z.ZodObject<{
        limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        resetAt: z.ZodISODateTime;
        used: z.ZodInt;
    }, z.core.$strip>;
    update: z.ZodOptional<z.ZodObject<{
        limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        resetAt: z.ZodISODateTime;
        used: z.ZodInt;
    }, z.core.$strip>>;
    updatePerson: z.ZodOptional<z.ZodObject<{
        limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        resetAt: z.ZodISODateTime;
        used: z.ZodInt;
    }, z.core.$strip>>;
    webSearch: z.ZodObject<{
        limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        resetAt: z.ZodISODateTime;
        used: z.ZodInt;
    }, z.core.$strip>;
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