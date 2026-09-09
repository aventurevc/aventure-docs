import { z } from "zod/v4";
/**
 * Investor-specific attribution for one fundraise participation row
 *
 * @openapiSchema FundraiseInvestmentAttribution
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
 * @endpoint GET /v1/people/lookup
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
 * @usedBySchema EntityFundraiseTransactionSchema
 * @usedBySchema EntityInvestorParticipationSchema
 * @usedBySchema PersonInvestmentSchema
 * @usedBySchema PersonInvestorParticipationSchema
 * @contractShape fundraise.investment-attribution
 * @contractRole canonical
 */
export declare const FundraiseInvestmentAttributionSchema: z.ZodObject<{
    amountInvested: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    attributionType: z.ZodEnum<{
        direct: "direct";
        managedFund: "managedFund";
    }>;
    beneficialEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    fundManagerRelationshipId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    joinId: z.ZodUUID;
    leadInvestor: z.ZodBoolean;
    recordedEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    round: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        round: z.ZodString;
    }, z.core.$strip>>>;
    transactionId: z.ZodUUID;
}, z.core.$strip>;
export type FundraiseInvestmentAttribution = z.infer<typeof FundraiseInvestmentAttributionSchema>;
//# sourceMappingURL=investment-attribution.d.ts.map