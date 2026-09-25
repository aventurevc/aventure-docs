// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * PREPAID_CREDIT spends purchased credit packs and stops when they run out. USAGE_INVOICE bills an invoice each time unbilled usage reaches invoiceIncrementCents, up to spendCapCents per month.
 *
 * @openapiSchema BillingAdditionalUsageFundingType
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingAdditionalUsageSchema
 * @contractShape billing.additional-usage-funding-type
 * @contractRole canonical
 */
export const BillingAdditionalUsageFundingTypeSchema = z.enum(["PREPAID_CREDIT", "USAGE_INVOICE"]);
//# sourceMappingURL=additional-usage-funding-type.js.map