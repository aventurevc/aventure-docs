import { z } from "zod/v4";
/**
 * What the account used since its complimentary plan started.
 *
 * @openapiSchema BillingComplimentaryUsage
 * @endpoint GET /v1/billing/subscription/next-charge
 * @usedBySchema BillingNextChargeSchema
 * @contractShape billing.complimentary-usage
 * @contractRole canonical
 */
export declare const BillingComplimentaryUsageSchema: z.ZodObject<{
    profileViewCount: z.ZodInt;
    researchRunCount: z.ZodInt;
}, z.core.$strip>;
export interface BillingComplimentaryUsageSchemaInput extends z.input<typeof BillingComplimentaryUsageSchema> {
}
export type BillingComplimentaryUsage = z.infer<typeof BillingComplimentaryUsageSchema>;
//# sourceMappingURL=complimentary-usage.d.ts.map