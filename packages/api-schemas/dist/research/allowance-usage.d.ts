import { z } from "zod/v4";
declare const ResearchAllowanceUsageSchemaDefinition: z.ZodObject<{
    company: z.ZodObject<{
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
    entityBrand: z.ZodObject<{
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
    entityView: z.ZodObject<{
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
    export: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    newCompany: z.ZodObject<{
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
    newPerson: z.ZodObject<{
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
    person: z.ZodObject<{
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
    personView: z.ZodObject<{
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
    update: z.ZodObject<{
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
    updatePerson: z.ZodObject<{
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
    webSearch: z.ZodObject<{
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