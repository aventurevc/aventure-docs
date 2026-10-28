// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const FundingStageSchemaKnownMembers = z.enum([
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
    "Late Stage Private",
    "Investment Firm",
    "Fund",
    "Nonprofit",
    "Government",
    "Public",
    "Acquired",
    "Acquired Subsidiary",
    "Bankrupt",
]);
/**
 * Funding stage only, emitted by the entity fundraise rollup. The record headline is profileStatus.headline; the entity-type and operating-status members are deprecated as a headline and retire in a later contract change. Transaction classifications such as Debt, IPO, and Acquisition are not entity stages.
 *
 * @openapiSchema FundingStage
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityComparisonSignalsSchema
 * @usedBySchema EntityFundingDetailSchema
 * @contractShape funding.stage
 * @contractRole canonical
 */
export const FundingStageSchema = Object.assign(z.union([FundingStageSchemaKnownMembers, z.string()]), { enum: FundingStageSchemaKnownMembers.enum });
//# sourceMappingURL=stage.js.map