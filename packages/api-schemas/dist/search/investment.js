// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentEmbeddingMatchSchema } from "../content/embedding-match.js";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { FundraiseInvestmentEvidenceSchema } from "../fundraise/investment-evidence.js";
const SearchInvestmentSchemaDefinition = z.object({
    evidence: FundraiseInvestmentEvidenceSchema,
    investor: EntityPersonOwnerSchema,
    semanticMatch: ContentEmbeddingMatchSchema.nullish(),
});
/**
 * Canonical investor participation and matched portfolio offering evidence.
 *
 * @openapiSchema SearchInvestment
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema NaturalSearchResultSchema
 * @usedBySchema PersonNaturalSearchResultSchema
 * @contractShape search.investment
 * @contractRole canonical
 */
export const SearchInvestmentSchema = SearchInvestmentSchemaDefinition;
//# sourceMappingURL=investment.js.map