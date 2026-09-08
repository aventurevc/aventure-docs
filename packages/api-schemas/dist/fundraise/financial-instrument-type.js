// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const FundraiseFinancialInstrumentTypeSchema = z.enum([
    "SAFE",
    "Convertible Note",
    "Preferred Stock",
    "Common Stock",
    "Other Equity",
    "Bond",
    "Loan",
    "Other Debt",
    "Grant",
    "Token",
]);
//# sourceMappingURL=financial-instrument-type.js.map