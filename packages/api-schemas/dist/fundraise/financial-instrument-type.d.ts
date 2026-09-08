import { z } from "zod/v4";
/**
 * Fundraise financial instrument type — the vehicle a round or investor join used
 *
 * @openapiSchema FundraiseFinancialInstrumentType
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins/{joinId}
 * @usedBySchema EntityFundraiseInvestorJoinSchema
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