import { z } from "zod/v4";
/**
 * Closed write-time value shape token. Shape, not valueType, selects which write fields and validation rules apply.
 *
 * @openapiSchema ResearchValueShapeType
 * @endpoint GET /v1/entities/research/details/types
 * @usedBySchema ResearchDetailTypeSchema
 * @contractShape research.value-shape-type
 * @contractRole canonical
 */
export declare const ResearchValueShapeTypeSchema: z.ZodEnum<{
    acceleratorParticipation: "acceleratorParticipation";
    enumeratedToken: "enumeratedToken";
    freeText: "freeText";
    isoCurrencyCode: "isoCurrencyCode";
    monetaryFlow: "monetaryFlow";
    monetaryFlowOverPeriod: "monetaryFlowOverPeriod";
    monetaryStock: "monetaryStock";
    numericCount: "numericCount";
    numericCountOrRange: "numericCountOrRange";
    numericGrowthRate: "numericGrowthRate";
    numericRatio: "numericRatio";
    numericScore: "numericScore";
    targetDateAbsolute: "targetDateAbsolute";
}>;
export type ResearchValueShapeType = z.infer<typeof ResearchValueShapeTypeSchema>;
//# sourceMappingURL=value-shape-type.d.ts.map