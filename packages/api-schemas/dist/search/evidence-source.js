// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Owner of search evidence: `entityRecord` is the entity's structured record, `researchSnippet` an entity research snippet, `newsArticle` a news article linked to the entity; `personRecord` a person linked to the entity; `fundraiseTransaction` a recorded investment round with investor attribution.
 *
 * @openapiSchema SearchEvidenceSource
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchAnswerCitationSchema
 * @usedBySchema SearchPassageSchema
 * @contractShape search.evidence-source
 * @contractRole canonical
 */
export const SearchEvidenceSourceSchema = z.union([
    z.enum([
        "entityRecord",
        "researchSnippet",
        "newsArticle",
        "personRecord",
        "fundraiseTransaction",
    ]),
    z.string(),
]);
//# sourceMappingURL=evidence-source.js.map