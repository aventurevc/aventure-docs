// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Prepaid additional-usage credit pack.
 *
 * @openapiSchema BillingCreditPackType
 * @endpoint GET /v1/billing/plans
 * @usedBySchema BillingCatalogCreditPackSchema
 * @contractShape billing.credit-pack-type
 * @contractRole canonical
 */
export const BillingCreditPackTypeSchema = z.enum(["USD_25", "USD_50", "USD_100", "USD_250"]);
//# sourceMappingURL=credit-pack-type.js.map