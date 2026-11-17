// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingCreditPackTypeSchema } from "./credit-pack-type.js";
import { BillingCreditPurchaseCapDecisionSchema } from "./credit-purchase-cap-decision.js";
import { BillingCreditPurchaseModeSchema } from "./credit-purchase-mode.js";
const BillingCreditPurchaseMutationSchemaDefinition = z.object({
    /** USD integer cents, 500 through 100000; supply exactly one of pack or amountCents. */
    amountCents: z.number().int().min(500).max(100000).nullish(),
    /** Exact human authorization quotation; required for delegated API-key/OAuth purchases, preserved verbatim. */
    authorizationQuote: z.string().max(4000).nullish(),
    /** Explicit monthly usage cap decision; not a purchase budget. Required for delegated purchases. */
    capDecision: BillingCreditPurchaseCapDecisionSchema.nullish(),
    /** Credit pack to buy; its amount becomes prepaid credit. */
    pack: BillingCreditPackTypeSchema.nullish(),
    /** HOSTED_CHECKOUT opens an explicit-pay page; ATTACHED_CARD charges the existing default saved card. */
    purchaseMode: BillingCreditPurchaseModeSchema.default("HOSTED_CHECKOUT").optional(),
    /** Explicitly save this hosted payment's card for future payments you authorize. Choose the billing default separately in payment settings. Defaults to false; available only for hosted Checkout and never enables assistant purchasing. */
    savePaymentMethod: z.boolean().default(false).optional(),
    /** Positive monthly usage cap in USD cents; supply only with SET_CAP. This limits usage, not credit purchases. */
    spendCapCents: z.number().int().nullish(),
});
/**
 * Buy USD prepaid credit with exactly one amount selector; no default amount is charged.
 *
 * @openapiSchema BillingCreditPurchaseMutation
 * @endpoint POST /v1/billing/credit-purchases
 * @contractShape billing.credit-purchase-mutation
 * @contractRole canonical
 */
export const BillingCreditPurchaseMutationSchema = BillingCreditPurchaseMutationSchemaDefinition;
//# sourceMappingURL=credit-purchase-mutation.js.map