import { z } from "zod/v4";
/**
 * A funding round field a write asserted that its cited source did not support.
 *
 * @openapiSchema FundraiseRoundField
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
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
 * @usedBySchema EntityFundraiseTransactionSchema
 * @contractShape fundraise.round-field
 * @contractRole canonical
 */
export declare const FundraiseRoundFieldSchema: z.ZodEnum<{
    amountRaised: "amountRaised";
    currency: "currency";
    dateAnnounced: "dateAnnounced";
    dateFundingComplete: "dateFundingComplete";
    dateInvestorExit: "dateInvestorExit";
    financialInstrumentType: "financialInstrumentType";
    investorCount: "investorCount";
    round: "round";
    roundType: "roundType";
    status: "status";
    valuationPostMoney: "valuationPostMoney";
    valuationPreMoney: "valuationPreMoney";
}>;
export type FundraiseRoundField = z.infer<typeof FundraiseRoundFieldSchema>;
//# sourceMappingURL=round-field.d.ts.map