import { z } from "zod/v4";
declare const RevenueDriverContributionSchemaDefinition: z.ZodObject<{
    direction: z.ZodEnum<{
        down: "down";
        up: "up";
    }>;
    evidenceClass: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        direct: "direct";
        indirect: "indirect";
        inferred: "inferred";
    }>, z.ZodString]> & {
        enum: {
            direct: "direct";
            indirect: "indirect";
            inferred: "inferred";
        };
    }>>;
    impactMultiplier: z.ZodNumber;
    label: z.ZodString;
    signalFamily: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type RevenueDriverContributionDefinition = z.infer<typeof RevenueDriverContributionSchemaDefinition>;
export interface RevenueDriverContributionSchemaInput extends z.input<typeof RevenueDriverContributionSchemaDefinition> {
}
/**
 * One plain-language feature or signal driver's multiplicative shift on estimated revenue.
 *
 * @openapiSchema RevenueDriverContribution
 * @endpoint GET /v1/entities/{entityId}/revenue-estimate
 * @usedBySchema EntityRevenueEstimateSchema
 * @contractShape revenue.driver-contribution
 * @contractRole canonical
 */
export declare const RevenueDriverContributionSchema: z.ZodType<RevenueDriverContributionDefinition, RevenueDriverContributionSchemaInput>;
export type RevenueDriverContribution = z.infer<typeof RevenueDriverContributionSchema>;
export {};
//# sourceMappingURL=driver-contribution.d.ts.map