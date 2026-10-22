// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingCatalogAllowanceSchema } from "./catalog-allowance.js";
const BillingCatalogTierSchemaDefinition = z.object({
    /** Researchly AI credits per Researchly billing period; 0 withholds them and absent means uncapped. */
    aiCreditLimit: z.int().nullish(),
    allowance: z.array(BillingCatalogAllowanceSchema),
    /** Who the tier is for, in one or two sentences; it states no caps or prices, which allowance and plan carry. */
    description: z.string(),
    displayName: z.string(),
    /** Name lookups per UTC day without a paid plan; past it a lookup answers 402 subscription_required until the next UTC day. Absent on a paid tier, which has no daily lookup gate. */
    lookupDailyLimit: z.int().nullish(),
    /** Searches per UTC day without a paid plan: plain-English company, people, and federated search, one per request; link search always needs a paid plan. Past it a search answers 402 subscription_required until the next UTC day. Absent on a paid tier, which has no daily search gate. */
    searchDailyLimit: z.int().nullish(),
    tier: z.enum(["ESSENTIAL", "PLUS", "PRO", "UNLIMITED"]),
});
/**
 * One subscription tier, its monthly caps, and its free daily allowances.
 *
 * @openapiSchema BillingCatalogTier
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogSchema
 * @contractShape billing.catalog-tier
 * @contractRole canonical
 */
export const BillingCatalogTierSchema = BillingCatalogTierSchemaDefinition;
//# sourceMappingURL=catalog-tier.js.map