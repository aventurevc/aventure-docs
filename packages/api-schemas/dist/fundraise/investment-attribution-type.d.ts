import { z } from "zod/v4";
/**
 * How a fundraise investor attribution row was selected for an investor view.
 *
 * @openapiSchema FundraiseInvestmentAttributionType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/investments
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
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