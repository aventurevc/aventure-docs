// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingAdditionalUsageTypeSchema } from "./additional-usage-type.js";
const BillingCatalogAdditionalUsageSchemaDefinition = z.object({
    type: BillingAdditionalUsageTypeSchema,
    /** US cents per unit; may be fractional, such as 2.5. */
    unitAmount: z.number(),
});
/**
 * Price of one unit of usage past a paid tier's monthly cap.
 *
 * @openapiSchema BillingCatalogAdditionalUsage
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogSchema
 * @contractShape billing.catalog-additional-usage
 * @contractRole canonical
 */
export const BillingCatalogAdditionalUsageSchema = BillingCatalogAdditionalUsageSchemaDefinition;
//# sourceMappingURL=catalog-additional-usage.js.map