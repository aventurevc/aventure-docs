import { z } from "zod/v4";
declare const ResearchDetailTypeSchemaDefinition: z.ZodObject<{
    allowedToken: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    curated: z.ZodBoolean;
    label: z.ZodString;
    range: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        max: z.ZodNumber;
        min: z.ZodNumber;
    }, z.core.$strip>>>;
    targetPath: z.ZodString;
    timeSeries: z.ZodBoolean;
    typeValue: z.ZodString;
    valueShape: z.ZodEnum<{
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
    valueType: z.ZodEnum<{
        date: "date";
        monetary: "monetary";
        numeric: "numeric";
        percentage: "percentage";
        text: "text";
    }>;
}, z.core.$strip>;
type ResearchDetailTypeDefinition = z.infer<typeof ResearchDetailTypeSchemaDefinition>;
/**
 * @openapiSchema ResearchDetailType
 * @endpoint GET /v1/entities/research/details/types
 * @contractShape research.detail-type
 * @contractRole canonical
 */
export declare const ResearchDetailTypeSchema: z.ZodType<ResearchDetailTypeDefinition>;
export type ResearchDetailType = z.infer<typeof ResearchDetailTypeSchema>;
export {};
//# sourceMappingURL=detail-type.d.ts.map