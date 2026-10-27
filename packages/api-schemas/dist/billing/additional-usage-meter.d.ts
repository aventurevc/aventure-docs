import { z } from "zod/v4";
declare const BillingAdditionalUsageMeterSchemaDefinition: z.ZodObject<{
    amountCents: z.ZodNumber;
    quantity: z.ZodInt;
    type: z.ZodUnion<readonly [z.ZodEnum<{
        AI_CREDIT: "AI_CREDIT";
        COMPANY: "COMPANY";
        ENTITY_BRAND: "ENTITY_BRAND";
        ENTITY_VIEW: "ENTITY_VIEW";
        PERSON: "PERSON";
        PERSON_VIEW: "PERSON_VIEW";
        WEB_SEARCH: "WEB_SEARCH";
    }>, z.ZodString]> & {
        enum: {
            AI_CREDIT: "AI_CREDIT";
            COMPANY: "COMPANY";
            ENTITY_BRAND: "ENTITY_BRAND";
            ENTITY_VIEW: "ENTITY_VIEW";
            PERSON: "PERSON";
            PERSON_VIEW: "PERSON_VIEW";
            WEB_SEARCH: "WEB_SEARCH";
        };
    };
}, z.core.$strip>;
type BillingAdditionalUsageMeterDefinition = z.infer<typeof BillingAdditionalUsageMeterSchemaDefinition>;
export interface BillingAdditionalUsageMeterSchemaInput extends z.input<typeof BillingAdditionalUsageMeterSchemaDefinition> {
}
/**
 * One meter's additional usage this UTC month.
 *
 * @openapiSchema BillingAdditionalUsageMeter
 * @endpoint GET /v1/billing/subscription
 * @endpoint PATCH /v1/billing/additional-usage
 * @usedBySchema BillingAdditionalUsageSchema
 * @contractShape billing.additional-usage-meter
 * @contractRole canonical
 */
export declare const BillingAdditionalUsageMeterSchema: z.ZodType<BillingAdditionalUsageMeterDefinition, BillingAdditionalUsageMeterSchemaInput>;
export type BillingAdditionalUsageMeter = z.infer<typeof BillingAdditionalUsageMeterSchema>;
export {};
//# sourceMappingURL=additional-usage-meter.d.ts.map