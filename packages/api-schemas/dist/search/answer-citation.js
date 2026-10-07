// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchEvidenceSourceSchema } from "./evidence-source.js";
const SearchAnswerCitationSchemaDefinition = z.object({
    /** Entity the evidence is about. */
    entityId: z.uuid(),
    /** Record that owns the cited evidence. */
    source: SearchEvidenceSourceSchema,
    /** Entity id for `entityRecord`, snippet or news article id from `passage`, person id for `personRecord`, or the recorded round id for `fundraiseTransaction`. */
    sourceId: z.string(),
});
/**
 * One piece of evidence an answer cites, by its owning record.
 *
 * @openapiSchema SearchAnswerCitation
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchAnswerParagraphSchema
 * @usedBySchema SearchAnswerSchema
 * @contractShape search.answer-citation
 * @contractRole canonical
 */
export const SearchAnswerCitationSchema = SearchAnswerCitationSchemaDefinition;
//# sourceMappingURL=answer-citation.js.map