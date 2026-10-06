// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchEvidenceSourceSchemaDefinition = z.union([
    z.enum(["entityRecord", "researchSnippet", "newsArticle"]),
    z.string(),
]);
/**
 * Owner of search evidence: `entityRecord` is the entity's structured record, `researchSnippet` an entity research snippet, `newsArticle` a news article linked to the entity.
 *
 * @openapiSchema SearchEvidenceSource
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema SearchAnswerCitationSchema
 * @usedBySchema SearchPassageSchema
 * @contractShape search.evidence-source
 * @contractRole canonical
 */
export const SearchEvidenceSourceSchema = SearchEvidenceSourceSchemaDefinition;
//# sourceMappingURL=evidence-source.js.map