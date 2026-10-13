import { z } from "zod/v4";
/**
 * How a fundraise investor attribution row was selected for an investor view.
 *
 * @openapiSchema FundraiseInvestmentAttributionType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investments
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema FundraiseInvestmentAttributionSchema
 * @contractShape fundraise.investment-attribution-type
 * @contractRole canonical
 */
export declare const FundraiseInvestmentAttributionTypeSchema: z.ZodEnum<{
    direct: "direct";
    managedFund: "managedFund";
}>;
export type FundraiseInvestmentAttributionType = z.infer<typeof FundraiseInvestmentAttributionTypeSchema>;
//# sourceMappingURL=investment-attribution-type.d.ts.map