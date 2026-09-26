import { z } from "zod/v4";
/**
 * One metered allowance a paid subscriber may use past its monthly cap.
 *
 * @openapiSchema BillingAdditionalUsageType
 * @endpoint GET /v1/billing/plans
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingAdditionalUsageMeterSchema
 * @usedBySchema BillingCatalogAdditionalUsageSchema
 * @contractShape billing.additional-usage-type
 * @contractRole canonical
 */
export declare const BillingAdditionalUsageTypeSchema: z.ZodEnum<{
    AI_CREDIT: "AI_CREDIT";
    COMPANY: "COMPANY";
    ENTITY_VIEW: "ENTITY_VIEW";
    PERSON: "PERSON";
    PERSON_VIEW: "PERSON_VIEW";
    WEB_SEARCH: "WEB_SEARCH";
}>;
export type BillingAdditionalUsageType = z.infer<typeof BillingAdditionalUsageTypeSchema>;
//# sourceMappingURL=additional-usage-type.d.ts.map