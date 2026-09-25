// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingCatalogAllowanceSchema } from "./catalog-allowance.js";
const BillingCatalogTierSchemaDefinition = z.object({
    /** Researchly AI credits per Researchly billing period; 0 withholds them and absent means uncapped. */
    aiCreditLimit: z.int().nullish(),
    allowance: z.array(BillingCatalogAllowanceSchema),
    displayName: z.string(),
    tier: z.enum(["ESSENTIAL", "PLUS", "PRO", "UNLIMITED"]),
});
/**
 * One subscription tier and its monthly caps.
 *
 * @openapiSchema BillingCatalogTier
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogSchema
 * @contractShape billing.catalog-tier
 * @contractRole canonical
 */
export const BillingCatalogTierSchema = BillingCatalogTierSchemaDefinition;
//# sourceMappingURL=catalog-tier.js.map