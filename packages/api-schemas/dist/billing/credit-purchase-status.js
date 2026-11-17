// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingCreditPurchaseStatusSchemaKnownMembers = z.enum([
    "PENDING",
    "AUTHENTICATION_REQUIRED",
    "PROCESSING",
    "PAID",
    "FAILED",
]);
/**
 * Current purchase payment state; grant confirmation remains grantedAt.
 *
 * @openapiSchema BillingCreditPurchaseStatus
 * @endpoint GET /v1/billing/credit-purchases/{purchaseId}
 * @endpoint POST /v1/billing/credit-purchases
 * @usedBySchema BillingCreditPurchaseConfirmationSchema
 * @usedBySchema BillingCreditPurchaseSchema
 * @contractShape billing.credit-purchase-status
 * @contractRole canonical
 */
export const BillingCreditPurchaseStatusSchema = Object.assign(z.union([BillingCreditPurchaseStatusSchemaKnownMembers, z.string()]), { enum: BillingCreditPurchaseStatusSchemaKnownMembers.enum });
//# sourceMappingURL=credit-purchase-status.js.map