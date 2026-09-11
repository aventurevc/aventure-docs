import { z } from "zod/v4";
/**
 * Fundraise data confidence label
 *
 * @openapiSchema FundraiseDataConfidence
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityAcquisitionSchema
 * @usedBySchema EntityFundraiseTransactionSchema
 * @contractShape fundraise.data-confidence
 * @contractRole canonical
 */
export declare const FundraiseDataConfidenceSchema: z.ZodEnum<{
    High: "High";
    Low: "Low";
    Medium: "Medium";
    Verified: "Verified";
}>;
export type FundraiseDataConfidence = z.infer<typeof FundraiseDataConfidenceSchema>;
//# sourceMappingURL=data-confidence.d.ts.map