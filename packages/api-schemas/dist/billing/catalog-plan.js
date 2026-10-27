// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPlanTypeSchema } from "./plan-type.js";
const BillingCatalogPlanSchemaDefinition = z.object({
    /** App Store product id that sells this plan in the iOS and Mac apps; absent when the plan sells only on the web. */
    appStoreProductId: z.string().nullish(),
    /** ISO 8601 billing period. */
    cadence: z.string(),
    /** ISO 4217 currency code. */
    currency: z.string(),
    displayName: z.string(),
    /** Distinct exported records per exportPeriod; absent means uncapped. */
    exportLimit: z.int().nullish(),
    /** ISO 8601 export allowance period: P1M is a UTC month; P1Y is the subscription billing period, available in full at its start. */
    exportPeriod: z.string().optional(),
    /** First invoice amount in currency minor units (USD cents) when an automatic, one-time Checkout offer is available; absent otherwise. Renewals use unitAmount. */
    introductoryAmount: z.number().int().nullish(),
    plan: BillingPlanTypeSchema,
    tier: z.enum(["ESSENTIAL", "PLUS", "PRO", "UNLIMITED"]),
    /** Price per cadence in currency minor units, not major units: USD cents (4900 means USD 49.00). */
    unitAmount: z.number().int(),
});
/**
 * One Checkout plan and its recurring price.
 *
 * @openapiSchema BillingCatalogPlan
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogSchema
 * @contractShape billing.catalog-plan
 * @contractRole canonical
 */
export const BillingCatalogPlanSchema = BillingCatalogPlanSchemaDefinition;
//# sourceMappingURL=catalog-plan.js.map