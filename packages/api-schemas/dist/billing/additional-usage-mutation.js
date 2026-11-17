// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingAdditionalUsageFundingTypeSchema } from "./additional-usage-funding-type.js";
const BillingAdditionalUsageMutationSchemaDefinition = z.object({
    /** Allow assistant billing changes. Only a verified first-party user session may set or clear this permission; null revokes it. Omission preserves it. */
    assistantPurchaseEnabled: z.boolean().nullish(),
    /** Exact user quote authorizing this delegated settings change, including the funding and monthly cap decision (keep, set, or no cap). Required for delegated changes that enable usage or change funding, cap, or invoice increment. Ask the user first; send their words unchanged. This quote is retained verbatim, never returned as settings. */
    authorizationQuote: z.string().max(4000).nullish(),
    /** Turn recording of usage past the monthly caps on or off. */
    enabled: z.boolean().nullish(),
    funding: BillingAdditionalUsageFundingTypeSchema.nullish(),
    /** Unbilled cents that trigger a USAGE_INVOICE invoice; one of the plan catalog's invoiceIncrementCents. */
    invoiceIncrementCents: z.number().int().nullish(),
    /** Optional monthly usage spend cap in cents; null clears it for either funding type. */
    spendCapCents: z.number().int().nullish(),
});
/**
 * Merge patch of additional-usage settings: omission preserves a setting and null clears it. Enabling requires funding; USAGE_INVOICE also requires invoiceIncrementCents. A permission-only initial save stays disabled with PREPAID_CREDIT and provisions nothing.
 *
 * @openapiSchema BillingAdditionalUsageMutation
 * @endpoint PATCH /v1/billing/additional-usage
 * @contractShape billing.additional-usage-mutation
 * @contractRole canonical
 */
export const BillingAdditionalUsageMutationSchema = BillingAdditionalUsageMutationSchemaDefinition;
//# sourceMappingURL=additional-usage-mutation.js.map