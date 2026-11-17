import { z } from "zod/v4";
/**
 * KEEP_CAP preserves the current monthly usage cap, SET_CAP sets spendCapCents, and NO_CAP clears it. None limits credit purchases.
 *
 * @openapiSchema BillingCreditPurchaseCapDecision
 * @endpoint POST /v1/billing/credit-purchases
 * @usedBySchema BillingCreditPurchaseMutationSchema
 * @contractShape billing.credit-purchase-cap-decision
 * @contractRole canonical
 */
export declare const BillingCreditPurchaseCapDecisionSchema: z.ZodEnum<{
    KEEP_CAP: "KEEP_CAP";
    NO_CAP: "NO_CAP";
    SET_CAP: "SET_CAP";
}>;
export type BillingCreditPurchaseCapDecision = z.infer<typeof BillingCreditPurchaseCapDecisionSchema>;
//# sourceMappingURL=credit-purchase-cap-decision.d.ts.map