import { z } from "zod/v4";
/**
 * What a caller without a paid plan gets. `PAID_PLAN`: nothing; the operation answers 402 subscription_required until the caller subscribes. `DAILY_ALLOWANCE`: a free UTC-day allowance, then 402 subscription_required until it refills.
 *
 * @openapiSchema BillingAccessType
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HelpCitationSchema
 * @contractShape billing.access-type
 * @contractRole canonical
 */
export declare const BillingAccessTypeSchema: z.ZodEnum<{
    DAILY_ALLOWANCE: "DAILY_ALLOWANCE";
    PAID_PLAN: "PAID_PLAN";
}>;
export type BillingAccessType = z.infer<typeof BillingAccessTypeSchema>;
//# sourceMappingURL=access-type.d.ts.map