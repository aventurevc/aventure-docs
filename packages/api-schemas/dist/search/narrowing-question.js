// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchNarrowingDimensionSchema } from "./narrowing-dimension.js";
import { SearchNarrowingOptionSchema } from "./narrowing-option.js";
const SearchNarrowingQuestionSchemaDefinition = z.object({
    /** What the question narrows. */
    dimension: SearchNarrowingDimensionSchema,
    /** Stable question key; equals the dimension. */
    key: z.string(),
    /** Answers in display order (two or more). Every option's entityFilter sets exactly one EntityFilter field. Type and size options all share one field, so several picks union their arrays (OR). Place options may mix countries, states, and cities: picks union only within one field, and picking another level replaces the place selection. */
    option: z.array(SearchNarrowingOptionSchema),
    /** Very short prompt shown before the options. */
    prompt: z.string(),
});
/**
 * One narrowing question and its optional answers.
 *
 * @openapiSchema SearchNarrowingQuestion
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchNarrowingSchema
 * @contractShape search.narrowing-question
 * @contractRole canonical
 */
export const SearchNarrowingQuestionSchema = SearchNarrowingQuestionSchemaDefinition;
//# sourceMappingURL=narrowing-question.js.map