import { z } from "zod/v4";
declare const EntityFundraiseInvestorActivitySchemaDefinition: z.ZodObject<{
    attributedInvestmentCount: z.ZodInt;
    averageAmountInvestedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    currentPortfolioCount: z.ZodInt;
    largestAmountInvestedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    portfolioCompanyCount: z.ZodInt;
    smallestAmountInvestedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    topInvestmentStage: z.ZodArray<z.ZodType<{
        count: number;
        stage: string;
    }, import("../stage/frequency.ts").StageFrequencySchemaInput, z.core.$ZodTypeInternals<{
        count: number;
        stage: string;
    }, import("../stage/frequency.ts").StageFrequencySchemaInput>>>;
    totalAmountInvestedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    totalInvestment: z.ZodInt;
    totalPortfolioExit: z.ZodInt;
    totalWriteOff: z.ZodInt;
}, z.core.$strip>;
type EntityFundraiseInvestorActivityDefinition = z.infer<typeof EntityFundraiseInvestorActivitySchemaDefinition>;
export interface EntityFundraiseInvestorActivitySchemaInput extends z.input<typeof EntityFundraiseInvestorActivitySchemaDefinition> {
}
/**
 * Investor-perspective activity aggregate for entity and person investors.
 *
 * @openapiSchema EntityFundraiseInvestorActivity
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @endpoint GET /v1/people/{personId}/investor-activity
 * @contractShape entity.fundraise-investor-activity
 * @contractRole canonical
 */
export declare const EntityFundraiseInvestorActivitySchema: z.ZodType<EntityFundraiseInvestorActivityDefinition, EntityFundraiseInvestorActivitySchemaInput>;
export type EntityFundraiseInvestorActivity = z.infer<typeof EntityFundraiseInvestorActivitySchema>;
export {};
//# sourceMappingURL=fundraise-investor-activity.d.ts.map