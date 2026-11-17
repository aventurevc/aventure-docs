// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * HOSTED_CHECKOUT requires payment on a hosted page; ATTACHED_CARD uses the account's selected default card.
 *
 * @openapiSchema BillingCreditPurchaseMode
 * @endpoint POST /v1/billing/credit-purchases
 * @usedBySchema BillingCreditPurchaseMutationSchema
 * @contractShape billing.credit-purchase-mode
 * @contractRole canonical
 */
export const BillingCreditPurchaseModeSchema = z.enum(["HOSTED_CHECKOUT", "ATTACHED_CARD"]);
//# sourceMappingURL=credit-purchase-mode.js.map