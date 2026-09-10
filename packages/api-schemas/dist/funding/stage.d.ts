import { z } from "zod/v4";
/**
 * Canonical inferred equity, entity-type, or Company operating-status stage emitted by the entity fundraise rollup. Transaction classifications such as Debt, IPO, and Acquisition are not entity stages.
 *
 * @openapiSchema FundingStage
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityComparisonSignalsSchema
 * @usedBySchema EntityFundingDetailSchema
 * @contractShape funding.stage
 * @contractRole canonical
 */
export declare const FundingStageSchema: z.ZodEnum<{
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
}>;
export type FundingStage = z.infer<typeof FundingStageSchema>;
//# sourceMappingURL=stage.d.ts.map