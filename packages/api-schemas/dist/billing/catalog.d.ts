import { z } from "zod/v4";
declare const BillingCatalogSchemaDefinition: z.ZodObject<{
    additionalUsage: z.ZodArray<z.ZodType<{
        type: "AI_CREDIT" | "ENTITY_VIEW" | "NEW_COMPANY" | "NEW_PERSON" | "PERSON_VIEW" | "UPDATE" | "UPDATE_PERSON" | "WEB_SEARCH";
        unitAmount: number;
    }, unknown, z.core.$ZodTypeInternals<{
        type: "AI_CREDIT" | "ENTITY_VIEW" | "NEW_COMPANY" | "NEW_PERSON" | "PERSON_VIEW" | "UPDATE" | "UPDATE_PERSON" | "WEB_SEARCH";
        unitAmount: number;
    }, unknown>>>;
    creditPack: z.ZodArray<z.ZodType<{
        amountCents: number;
        pack: "USD_100" | "USD_25" | "USD_250" | "USD_50";
    }, unknown, z.core.$ZodTypeInternals<{
        amountCents: number;
        pack: "USD_100" | "USD_25" | "USD_250" | "USD_50";
    }, unknown>>>;
    invoiceIncrementCents: z.ZodArray<z.ZodNumber>;
    plan: z.ZodArray<z.ZodType<{
        cadence: string;
        currency: string;
        displayName: string;
        plan: "PLUS_MONTHLY" | "PLUS_YEARLY" | "PRO_MONTHLY" | "PRO_YEARLY" | "PRO_YEARLY_PROMOTION";
        tier: "ESSENTIAL" | "PLUS" | "PRO" | "UNLIMITED";
        unitAmount: number;
    }, unknown, z.core.$ZodTypeInternals<{
        cadence: string;
        currency: string;
        displayName: string;
        plan: "PLUS_MONTHLY" | "PLUS_YEARLY" | "PRO_MONTHLY" | "PRO_YEARLY" | "PRO_YEARLY_PROMOTION";
        tier: "ESSENTIAL" | "PLUS" | "PRO" | "UNLIMITED";
        unitAmount: number;
    }, unknown>>>;
    tier: z.ZodArray<z.ZodType<{
        aiCreditLimit?: number | null | undefined;
        allowance: {
            limit?: number | null | undefined;
            type: "ENTITY_VIEW" | "NEW_COMPANY" | "NEW_PERSON" | "PERSON_VIEW" | "UPDATE" | "UPDATE_PERSON" | "WEB_SEARCH";
        }[];
        displayName: string;
        tier: "ESSENTIAL" | "PLUS" | "PRO" | "UNLIMITED";
    }, unknown, z.core.$ZodTypeInternals<{
        aiCreditLimit?: number | null | undefined;
        allowance: {
            limit?: number | null | undefined;
            type: "ENTITY_VIEW" | "NEW_COMPANY" | "NEW_PERSON" | "PERSON_VIEW" | "UPDATE" | "UPDATE_PERSON" | "WEB_SEARCH";
        }[];
        displayName: string;
        tier: "ESSENTIAL" | "PLUS" | "PRO" | "UNLIMITED";
    }, unknown>>>;
}, z.core.$strip>;
type BillingCatalogDefinition = z.infer<typeof BillingCatalogSchemaDefinition>;
/**
 * Every self-serve subscription tier with its monthly allowance caps, every plan Checkout sells, and the prices of usage past those caps. The Unlimited tier is not sold through Checkout and is omitted.
 *
 * @openapiSchema BillingCatalog
 * @endpoint GET /v1/billing/plans
 * @contractShape billing.catalog
 * @contractRole canonical
 */
export declare const BillingCatalogSchema: z.ZodType<BillingCatalogDefinition>;
export type BillingCatalog = z.infer<typeof BillingCatalogSchema>;
export {};
//# sourceMappingURL=catalog.d.ts.map