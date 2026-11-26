import { z } from "zod/v4";
declare const BillingComplimentaryContinuationMutationSchemaDefinition: z.ZodObject<{
    complimentaryContinuationOfferRevision: z.ZodString;
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
}, z.core.$strip>;
type BillingComplimentaryContinuationMutationDefinition = z.infer<typeof BillingComplimentaryContinuationMutationSchemaDefinition>;
export interface BillingComplimentaryContinuationMutationSchemaInput extends z.input<typeof BillingComplimentaryContinuationMutationSchemaDefinition> {
}
/**
 * Keep an administrator's complimentary plan on paid billing when its term ends.
 *
 * @openapiSchema BillingComplimentaryContinuationMutation
 * @endpoint PUT /v1/billing/subscription/complimentary-continuation
 * @contractShape billing.complimentary-continuation-mutation
 * @contractRole canonical
 */
export declare const BillingComplimentaryContinuationMutationSchema: z.ZodType<BillingComplimentaryContinuationMutationDefinition, BillingComplimentaryContinuationMutationSchemaInput>;
export type BillingComplimentaryContinuationMutation = z.infer<typeof BillingComplimentaryContinuationMutationSchema>;
export {};
//# sourceMappingURL=complimentary-continuation-mutation.d.ts.map