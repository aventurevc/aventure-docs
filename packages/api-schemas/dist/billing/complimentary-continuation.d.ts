import { z } from "zod/v4";
/**
 * The account chose to keep its complimentary plan on paid billing: plan bills from continuesAt, when the complimentary term ends.
 *
 * @openapiSchema BillingComplimentaryContinuation
 * @endpoint GET /v1/billing/subscription/next-charge
 * @endpoint PUT /v1/billing/subscription/complimentary-continuation
 * @usedBySchema BillingNextChargeSchema
 * @contractShape billing.complimentary-continuation
 * @contractRole canonical
 */
export declare const BillingComplimentaryContinuationSchema: z.ZodObject<{
    continuesAt: z.ZodISODateTime;
    plan: z.ZodUnion<readonly [z.ZodEnum<{
        PLUS_MONTHLY: "PLUS_MONTHLY";
        PLUS_YEARLY: "PLUS_YEARLY";
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
        STARTUPS_MONTHLY: "STARTUPS_MONTHLY";
        UNLIMITED_MONTHLY: "UNLIMITED_MONTHLY";
    }>, z.ZodString]> & {
        enum: {
            PLUS_MONTHLY: "PLUS_MONTHLY";
            PLUS_YEARLY: "PLUS_YEARLY";
            PRO_MONTHLY: "PRO_MONTHLY";
            PRO_YEARLY: "PRO_YEARLY";
            PRO_YEARLY_PROMOTION: "PRO_YEARLY_PROMOTION";
            STARTUPS_MONTHLY: "STARTUPS_MONTHLY";
            UNLIMITED_MONTHLY: "UNLIMITED_MONTHLY";
        };
    };
    revision: z.ZodString;
    undoable: z.ZodBoolean;
}, z.core.$strip>;
export interface BillingComplimentaryContinuationSchemaInput extends z.input<typeof BillingComplimentaryContinuationSchema> {
}
export type BillingComplimentaryContinuation = z.infer<typeof BillingComplimentaryContinuationSchema>;
//# sourceMappingURL=complimentary-continuation.d.ts.map