import { z } from "zod/v4";
declare const ResearchAllowanceUsageSchemaDefinition: z.ZodObject<{
    company: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }>>;
    entityBrand: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }>>;
    entityView: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }>>;
    newCompany: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }>>;
    newPerson: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }>>;
    person: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }>>;
    personView: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }>>;
    update: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }>>;
    updatePerson: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }>>;
    webSearch: z.ZodType<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, z.core.$ZodTypeInternals<{
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }, {
        limit?: number | null | undefined;
        remaining?: number | null | undefined;
        resetAt: string;
        used: number;
    }>>;
}, z.core.$strip>;
type ResearchAllowanceUsageDefinition = z.infer<typeof ResearchAllowanceUsageSchemaDefinition>;
/**
 * @openapiSchema ResearchAllowanceUsage
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape research.allowance-usage
 * @contractRole canonical
 */
export declare const ResearchAllowanceUsageSchema: z.ZodType<ResearchAllowanceUsageDefinition, z.input<typeof ResearchAllowanceUsageSchemaDefinition>>;
export type ResearchAllowanceUsage = z.infer<typeof ResearchAllowanceUsageSchema>;
export {};
//# sourceMappingURL=allowance-usage.d.ts.map