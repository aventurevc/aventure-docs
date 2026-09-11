import { z } from "zod/v4";
/**
 * Aggregate view of an entity's fundraising activity
 *
 * @openapiSchema EntityFundingDetail
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema EntityFundraiseTransactionEntitySchema
 * @contractShape entity.funding-detail
 * @contractRole canonical
 */
export declare const EntityFundingDetailSchema: z.ZodObject<{
    fundingRoundCount: z.ZodInt;
    investorCount: z.ZodInt;
    latestValuation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    mostRecentAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    mostRecentDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    stage: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Acquired: "Acquired";
        "Acquired Subsidiary": "Acquired Subsidiary";
        Angel: "Angel";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        "Pre-Seed": "Pre-Seed";
        Public: "Public";
        Seed: "Seed";
        "Series A": "Series A";
        "Series B": "Series B";
        "Series C": "Series C";
        "Series D": "Series D";
        "Series E": "Series E";
        "Series F": "Series F";
        "Series G": "Series G";
        "Series H": "Series H";
        "Series I": "Series I";
        "Series J": "Series J";
        "Series K": "Series K";
        "Series L": "Series L";
        "Series M": "Series M";
        "Series N": "Series N";
        "Series O": "Series O";
        "Series P": "Series P";
        "Series Q": "Series Q";
        "Series R": "Series R";
        "Series S": "Series S";
        "Series T": "Series T";
        "Series U": "Series U";
        "Series V": "Series V";
        "Series W": "Series W";
        "Series X": "Series X";
        "Series Y": "Series Y";
        "Series Z": "Series Z";
    }>>>;
    totalRaised: z.ZodNumber;
}, z.core.$strip>;
export type EntityFundingDetail = z.infer<typeof EntityFundingDetailSchema>;
//# sourceMappingURL=funding-detail.d.ts.map