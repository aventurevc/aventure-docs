import { z } from "zod/v4";
/**
 * Investor-perspective activity aggregate for entity and person investors.
 *
 * @openapiSchema EntityFundraiseInvestorActivity
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investor-activity
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonDetailSchema
 * @contractShape entity.fundraise-investor-activity
 * @contractRole canonical
 */
export declare const EntityFundraiseInvestorActivitySchema: z.ZodObject<{
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
export type EntityFundraiseInvestorActivity = z.infer<typeof EntityFundraiseInvestorActivitySchema>;
//# sourceMappingURL=fundraise-investor-activity.d.ts.map