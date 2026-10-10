import { z } from "zod/v4";
declare const BillingSubscriptionMutationSchemaDefinition: z.ZodObject<{
    cancelAtPeriodEnd: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type BillingSubscriptionMutationDefinition = z.infer<typeof BillingSubscriptionMutationSchemaDefinition>;
export interface BillingSubscriptionMutationSchemaInput extends z.input<typeof BillingSubscriptionMutationSchemaDefinition> {
}
/**
 * Merge patch of a continuing AI Plus or AI Pro subscription: cancel it at the period end or resume it.
 *
 * @openapiSchema BillingSubscriptionMutation
 * @endpoint PATCH /v1/billing/subscription
 * @contractShape billing.subscription-mutation
 * @contractRole canonical
 */
export declare const BillingSubscriptionMutationSchema: z.ZodType<BillingSubscriptionMutationDefinition, BillingSubscriptionMutationSchemaInput>;
export type BillingSubscriptionMutation = z.infer<typeof BillingSubscriptionMutationSchema>;
export {};
//# sourceMappingURL=subscription-mutation.d.ts.map