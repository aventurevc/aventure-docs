// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingAdditionalUsageFundingTypeSchema } from "./additional-usage-funding-type.js";
import { BillingAdditionalUsageMeterSchema } from "./additional-usage-meter.js";
const BillingAdditionalUsageSchemaDefinition = z.object({
    /** Prepaid credit not yet consumed by priced usage, in cents. */
    availableCreditCents: z.number(),
    /** True while a failed threshold invoice blocks additional usage; paying it in Billing Portal clears the block. */
    blocked: z.boolean(),
    /** Whether usage past the monthly caps is recorded and billed. */
    enabled: z.boolean(),
    funding: BillingAdditionalUsageFundingTypeSchema.nullish(),
    /** USAGE_INVOICE bills an invoice once unbilled usage reaches this many cents; the invoice can exceed it by the usage recorded while it was being created. */
    invoiceIncrementCents: z.number().int().nullish(),
    meter: z.array(BillingAdditionalUsageMeterSchema),
    /** When spentCents returns to zero: the next UTC month. */
    resetAt: z.iso.datetime({ offset: true }),
    /** Monthly spend cap in cents. Required for USAGE_INVOICE; absent for PREPAID_CREDIT means only the prepaid credit bounds usage. */
    spendCapCents: z.number().int().nullish(),
    /** Additional usage priced this UTC month, in cents. */
    spentCents: z.number(),
    /** Priced usage not yet paid by credit or placed on an invoice, in cents; the next threshold or period invoice bills it. */
    unbilledCents: z.number(),
});
/**
 * Opt-in metered usage past the monthly allowance: settings, spend this UTC month, prepaid credit, and unbilled usage.
 *
 * @openapiSchema BillingAdditionalUsage
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.additional-usage
 * @contractRole canonical
 */
export const BillingAdditionalUsageSchema = BillingAdditionalUsageSchemaDefinition;
//# sourceMappingURL=additional-usage.js.map