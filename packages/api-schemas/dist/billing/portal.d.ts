import { z } from "zod/v4";
declare const BillingPortalSchemaDefinition: z.ZodObject<{
    url: z.ZodString;
}, z.core.$strip>;
type BillingPortalDefinition = z.infer<typeof BillingPortalSchemaDefinition>;
/**
 * Hosted Billing Portal destination without provider identifiers.
 *
 * @openapiSchema BillingPortal
 * @endpoint POST /v1/billing/portal-sessions
 * @contractShape billing.portal
 * @contractRole canonical
 */
export declare const BillingPortalSchema: z.ZodType<BillingPortalDefinition>;
export type BillingPortal = z.infer<typeof BillingPortalSchema>;
export {};
//# sourceMappingURL=portal.d.ts.map