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
export declare const BillingCreditPurchaseModeSchema: z.ZodEnum<{
    ATTACHED_CARD: "ATTACHED_CARD";
    HOSTED_CHECKOUT: "HOSTED_CHECKOUT";
}>;
export type BillingCreditPurchaseMode = z.infer<typeof BillingCreditPurchaseModeSchema>;
//# sourceMappingURL=credit-purchase-mode.d.ts.map