// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPlanTypeSchema } from "./plan-type.js";
const BillingCatalogPlanSchemaDefinition = z.object({
    /** ISO 8601 billing period. */
    cadence: z.string(),
    /** ISO 4217 currency code. */
    currency: z.string(),
    displayName: z.string(),
    plan: BillingPlanTypeSchema,
    tier: z.enum(["ESSENTIAL", "PLUS", "PRO", "UNLIMITED"]),
    /** Price per cadence in the currency's minor unit, such as cents. */
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