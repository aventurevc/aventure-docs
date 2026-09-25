import { z } from "zod/v4";
declare const BillingSubscriptionSchemaDefinition: z.ZodObject<{
    additionalUsage: z.ZodType<{
        availableCreditCents: number;
        blocked: boolean;
        enabled: boolean;
        funding?: "PREPAID_CREDIT" | "USAGE_INVOICE" | null | undefined;
        invoiceIncrementCents?: number | null | undefined;
        meter: {
            amountCents: number;
            quantity: number;
            type: "AI_CREDIT" | "ENTITY_VIEW" | "NEW_COMPANY" | "NEW_PERSON" | "PERSON_VIEW" | "UPDATE" | "UPDATE_PERSON" | "WEB_SEARCH";
        }[];
        resetAt: string;
        spendCapCents?: number | null | undefined;
        spentCents: number;
        unbilledCents: number;
    }, unknown, z.core.$ZodTypeInternals<{
        availableCreditCents: number;
        blocked: boolean;
        enabled: boolean;
        funding?: "PREPAID_CREDIT" | "USAGE_INVOICE" | null | undefined;
        invoiceIncrementCents?: number | null | undefined;
        meter: {
            amountCents: number;
            quantity: number;
            type: "AI_CREDIT" | "ENTITY_VIEW" | "NEW_COMPANY" | "NEW_PERSON" | "PERSON_VIEW" | "UPDATE" | "UPDATE_PERSON" | "WEB_SEARCH";
        }[];
        resetAt: string;
        spendCapCents?: number | null | undefined;
        spentCents: number;
        unbilledCents: number;
    }, unknown>>;
    allowance: z.ZodType<{
        entityView: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        newCompany: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        newPerson: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        personView: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        update: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        updatePerson: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        webSearch: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
    }, unknown, z.core.$ZodTypeInternals<{
        entityView: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        newCompany: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        newPerson: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        personView: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        update: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        updatePerson: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
        webSearch: {
            limit?: number | null | undefined;
            remaining?: number | null | undefined;
            resetAt: string;
            used: number;
        };
    }, unknown>>;
    cancelAtPeriodEnd: z.ZodBoolean;
    entitled: z.ZodBoolean;
    pendingPlan: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        PLUS_MONTHLY: "PLUS_MONTHLY";
        PLUS_YEARLY: "PLUS_YEARLY";
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
    }>>>;
    pendingPlanAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    periodEnd: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    periodStart: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    plan: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        PLUS_MONTHLY: "PLUS_MONTHLY";
        PLUS_YEARLY: "PLUS_YEARLY";
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
    }>>>;
    status: z.ZodEnum<{
        ACTIVE: "ACTIVE";
        CANCELED: "CANCELED";
        INCOMPLETE: "INCOMPLETE";
        INCOMPLETE_EXPIRED: "INCOMPLETE_EXPIRED";
        NONE: "NONE";
        PAST_DUE: "PAST_DUE";
        PAUSED: "PAUSED";
        TRIALING: "TRIALING";
        UNPAID: "UNPAID";
    }>;
    tier: z.ZodEnum<{
        ESSENTIAL: "ESSENTIAL";
        PLUS: "PLUS";
        PRO: "PRO";
        UNLIMITED: "UNLIMITED";
    }>;
}, z.core.$strip>;
type BillingSubscriptionDefinition = z.infer<typeof BillingSubscriptionSchemaDefinition>;
/**
 * Current Essential, AI Plus, AI Pro, or Unlimited (RBAC operator) subscription and entitlement state.
 *
 * @openapiSchema BillingSubscription
 * @endpoint GET /v1/billing/subscription
 * @contractShape billing.subscription
 * @contractRole canonical
 */
export declare const BillingSubscriptionSchema: z.ZodType<BillingSubscriptionDefinition>;
export type BillingSubscription = z.infer<typeof BillingSubscriptionSchema>;
export {};
//# sourceMappingURL=subscription.d.ts.map