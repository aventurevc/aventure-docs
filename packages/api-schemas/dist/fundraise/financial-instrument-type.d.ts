import { z } from "zod/v4";
/**
 * Fundraise financial instrument type — the vehicle a round or investor join used
 *
 * @openapiSchema FundraiseFinancialInstrumentType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-investor-joins
 * @endpoint GET /v1/entities/{entityId}/fundraise-investor-joins/{joinId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFundraiseInvestorJoinSchema
 * @usedBySchema EntityFundraiseTransactionSchema
 * @contractShape fundraise.financial-instrument-type
 * @contractRole canonical
 */
export declare const FundraiseFinancialInstrumentTypeSchema: z.ZodEnum<{
    Bond: "Bond";
    "Common Stock": "Common Stock";
    "Convertible Note": "Convertible Note";
    Grant: "Grant";
    Loan: "Loan";
    "Other Debt": "Other Debt";
    "Other Equity": "Other Equity";
    "Preferred Stock": "Preferred Stock";
    SAFE: "SAFE";
    Token: "Token";
}>;
export type FundraiseFinancialInstrumentType = z.infer<typeof FundraiseFinancialInstrumentTypeSchema>;
//# sourceMappingURL=financial-instrument-type.d.ts.map