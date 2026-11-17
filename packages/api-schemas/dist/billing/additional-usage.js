// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingAdditionalUsageFundingTypeSchema } from "./additional-usage-funding-type.js";
import { BillingAdditionalUsageMeterSchema } from "./additional-usage-meter.js";
const BillingAdditionalUsageSchemaDefinition = z.object({
    /** Whether assistants may request billing changes with an exact user authorization quote. Defaults to false; only a verified first-party user session may change it. This permission neither enables usage nor buys credit. */
    assistantPurchaseEnabled: z.boolean().default(false).optional(),
    /** Spendable prepaid credit after pending usage and invoice-line rounding reserves, in cents. */
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
    /** Optional monthly usage spend cap in cents for either funding type. Null means no configured monthly cap, not unlimited credit or a purchase budget. */
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
 * @endpoint PATCH /v1/billing/additional-usage
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.additional-usage
 * @contractRole canonical
 */
export const BillingAdditionalUsageSchema = BillingAdditionalUsageSchemaDefinition;
//# sourceMappingURL=additional-usage.js.map