import { z } from "zod/v4";
/**
 * Revenue model behind an estimate: reportedRegulatory = revenue a regulator publishes; financialAum = fees on assets under management; vcTechSaas = venture-backed software scaled by headcount and funding; traditionalOperating = industry revenue per employee.
 *
 * @openapiSchema RevenueEstimateRegime
 * @endpoint GET /v1/entities/{entityId}/revenue-estimate
 * @usedBySchema EntityRevenueEstimateSchema
 * @contractShape revenue.estimate-regime
 * @contractRole canonical
 */
export declare const RevenueEstimateRegimeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    financialAum: "financialAum";
    reportedRegulatory: "reportedRegulatory";
    traditionalOperating: "traditionalOperating";
    vcTechSaas: "vcTechSaas";
}>, z.ZodString]> & {
    enum: {
        financialAum: "financialAum";
        reportedRegulatory: "reportedRegulatory";
        traditionalOperating: "traditionalOperating";
        vcTechSaas: "vcTechSaas";
    };
};
export type RevenueEstimateRegime = z.infer<typeof RevenueEstimateRegimeSchema>;
//# sourceMappingURL=estimate-regime.d.ts.map