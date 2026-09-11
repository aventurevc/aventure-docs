// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Canonical inferred equity, entity-type, or Company operating-status stage emitted by the entity fundraise rollup. Transaction classifications such as Debt, IPO, and Acquisition are not entity stages.
 *
 * @openapiSchema FundingStage
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
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
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
export const FundingStageSchema = z.enum([
    "Angel",
    "Pre-Seed",
    "Seed",
    "Series A",
    "Series B",
    "Series C",
    "Series D",
    "Series E",
    "Series F",
    "Series G",
    "Series H",
    "Series I",
    "Series J",
    "Series K",
    "Series L",
    "Series M",
    "Series N",
    "Series O",
    "Series P",
    "Series Q",
    "Series R",
    "Series S",
    "Series T",
    "Series U",
    "Series V",
    "Series W",
    "Series X",
    "Series Y",
    "Series Z",
    "Investment Firm",
    "Fund",
    "Nonprofit",
    "Government",
    "Public",
    "Acquired",
    "Acquired Subsidiary",
]);
//# sourceMappingURL=stage.js.map