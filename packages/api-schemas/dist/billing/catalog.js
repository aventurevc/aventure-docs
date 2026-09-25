// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingCatalogAdditionalUsageSchema } from "./catalog-additional-usage.js";
import { BillingCatalogCreditPackSchema } from "./catalog-credit-pack.js";
import { BillingCatalogPlanSchema } from "./catalog-plan.js";
import { BillingCatalogTierSchema } from "./catalog-tier.js";
const BillingCatalogSchemaDefinition = z.object({
    additionalUsage: z.array(BillingCatalogAdditionalUsageSchema),
    creditPack: z.array(BillingCatalogCreditPackSchema),
    /** Invoice increments a USAGE_INVOICE subscriber may choose, in cents. */
    invoiceIncrementCents: z.array(z.number().int()),
    plan: z.array(BillingCatalogPlanSchema),
    tier: z.array(BillingCatalogTierSchema),
});
/**
 * Every self-serve subscription tier with its monthly allowance caps, every plan Checkout sells, and the prices of usage past those caps. The Unlimited tier is not sold through Checkout and is omitted.
 *
 * @openapiSchema BillingCatalog
 * @endpoint GET /v1/billing/plans
 * @contractShape billing.catalog
 * @contractRole canonical
 */
export const BillingCatalogSchema = BillingCatalogSchemaDefinition;
//# sourceMappingURL=catalog.js.map