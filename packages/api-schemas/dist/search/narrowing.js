// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchNarrowingQuestionSchema } from "./narrowing-question.js";
/**
 * Questions that narrow a broad company-category search, in display order. Each option is a structured EntityFilter fragment: merge its one field into FederatedNaturalSearch.entityFilter (replacing that field) and run the same query again; the answered dimension is then not asked and the next may be. Counts come from a bounded sample of the candidate set, not the whole directory.
 *
 * @openapiSchema SearchNarrowing
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape search.narrowing
 * @contractRole canonical
 */
export const SearchNarrowingSchema = z.object({
    /** Rows the plan reaches: the exact directory count for structured plans, or the meaning-based relevance set (capped at the search catalog's retrieval.directoryMatchMax) for semantic plans. */
    candidateCount: z.number().int(),
    /** Questions in display order; never empty. */
    question: z.array(SearchNarrowingQuestionSchema),
    /** Candidates read, in default directory order, to propose options and count them. */
    sampleCount: z.int(),
});
//# sourceMappingURL=narrowing.js.map