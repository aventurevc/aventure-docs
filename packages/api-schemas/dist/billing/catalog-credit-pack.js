// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingCreditPackTypeSchema } from "./credit-pack-type.js";
const BillingCatalogCreditPackSchemaDefinition = z.object({
    /** Credit granted and price charged, in US cents. */
    amountCents: z.number().int(),
    pack: BillingCreditPackTypeSchema,
});
/**
 * One prepaid credit pack.
 *
 * @openapiSchema BillingCatalogCreditPack
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogSchema
 * @contractShape billing.catalog-credit-pack
 * @contractRole canonical
 */
export const BillingCatalogCreditPackSchema = BillingCatalogCreditPackSchemaDefinition;
//# sourceMappingURL=catalog-credit-pack.js.map