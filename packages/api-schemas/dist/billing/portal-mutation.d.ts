import { z } from "zod/v4";
declare const BillingPortalMutationSchemaDefinition: z.ZodObject<{
    flow: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        PAYMENT_METHOD_UPDATE: "PAYMENT_METHOD_UPDATE";
    }>>>;
}, z.core.$strip>;
type BillingPortalMutationDefinition = z.infer<typeof BillingPortalMutationSchemaDefinition>;
export interface BillingPortalMutationSchemaInput extends z.input<typeof BillingPortalMutationSchemaDefinition> {
}
/**
 * Where the hosted Billing Portal session opens.
 *
 * @openapiSchema BillingPortalMutation
 * @endpoint POST /v1/billing/portal-sessions
 * @contractShape billing.portal-mutation
 * @contractRole canonical
 */
export declare const BillingPortalMutationSchema: z.ZodType<BillingPortalMutationDefinition, BillingPortalMutationSchemaInput>;
export type BillingPortalMutation = z.infer<typeof BillingPortalMutationSchema>;
export {};
//# sourceMappingURL=portal-mutation.d.ts.map