import { z } from "zod/v4";
declare const BillingAdditionalUsageMeterSchemaDefinition: z.ZodObject<{
    amountCents: z.ZodNumber;
    quantity: z.ZodInt;
    type: z.ZodEnum<{
        AI_CREDIT: "AI_CREDIT";
        ENTITY_VIEW: "ENTITY_VIEW";
        NEW_COMPANY: "NEW_COMPANY";
        NEW_PERSON: "NEW_PERSON";
        PERSON_VIEW: "PERSON_VIEW";
        UPDATE: "UPDATE";
        UPDATE_PERSON: "UPDATE_PERSON";
        WEB_SEARCH: "WEB_SEARCH";
    }>;
}, z.core.$strip>;
type BillingAdditionalUsageMeterDefinition = z.infer<typeof BillingAdditionalUsageMeterSchemaDefinition>;
/**
 * One meter's additional usage this UTC month.
 *
 * @openapiSchema BillingAdditionalUsageMeter
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingAdditionalUsageSchema
 * @contractShape billing.additional-usage-meter
 * @contractRole canonical
 */
export declare const BillingAdditionalUsageMeterSchema: z.ZodType<BillingAdditionalUsageMeterDefinition>;
export type BillingAdditionalUsageMeter = z.infer<typeof BillingAdditionalUsageMeterSchema>;
export {};
//# sourceMappingURL=additional-usage-meter.d.ts.map