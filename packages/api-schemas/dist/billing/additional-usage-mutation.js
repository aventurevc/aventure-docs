// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingAdditionalUsageFundingTypeSchema } from "./additional-usage-funding-type.js";
const BillingAdditionalUsageMutationSchemaDefinition = z.object({
    /** Turn recording of usage past the monthly caps on or off. */
    enabled: z.boolean().nullish(),
    funding: BillingAdditionalUsageFundingTypeSchema.nullish(),
    /** Unbilled cents that trigger a USAGE_INVOICE invoice; one of the plan catalog's invoiceIncrementCents. */
    invoiceIncrementCents: z.number().int().nullish(),
    /** Monthly spend cap in cents; required for USAGE_INVOICE. */
    spendCapCents: z.number().int().nullish(),
});
/**
 * Merge patch of the additional-usage settings. Enabling requires funding; USAGE_INVOICE also requires spendCapCents and invoiceIncrementCents.
 *
 * @openapiSchema BillingAdditionalUsageMutation
 * @endpoint PATCH /v1/billing/additional-usage
 * @contractShape billing.additional-usage-mutation
 * @contractRole canonical
 */
export const BillingAdditionalUsageMutationSchema = BillingAdditionalUsageMutationSchemaDefinition;
//# sourceMappingURL=additional-usage-mutation.js.map