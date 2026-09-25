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
    ENTITY_VIEW: "ENTITY_VIEW";
    NEW_COMPANY: "NEW_COMPANY";
    NEW_PERSON: "NEW_PERSON";
    PERSON_VIEW: "PERSON_VIEW";
    UPDATE: "UPDATE";
    UPDATE_PERSON: "UPDATE_PERSON";
    WEB_SEARCH: "WEB_SEARCH";
}>;
export type BillingAdditionalUsageType = z.infer<typeof BillingAdditionalUsageTypeSchema>;
//# sourceMappingURL=additional-usage-type.d.ts.map