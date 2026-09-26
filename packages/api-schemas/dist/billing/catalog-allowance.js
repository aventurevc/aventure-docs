// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingCatalogAllowanceSchemaDefinition = z.object({
    /** Monthly cap; 0 withholds the allowance and absent means uncapped. */
    limit: z.int().nullish(),
    type: z.enum(["COMPANY", "PERSON", "ENTITY_VIEW", "PERSON_VIEW", "WEB_SEARCH"]),
});
/**
 * A tier's monthly cap for one allowance.
 *
 * @openapiSchema BillingCatalogAllowance
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogTierSchema
 * @contractShape billing.catalog-allowance
 * @contractRole canonical
 */
export const BillingCatalogAllowanceSchema = BillingCatalogAllowanceSchemaDefinition;
//# sourceMappingURL=catalog-allowance.js.map