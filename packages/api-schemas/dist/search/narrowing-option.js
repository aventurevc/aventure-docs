// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterSchema } from "../entity/filter.js";
import { SearchPlaceLevelSchema } from "./place-level.js";
const SearchNarrowingOptionSchemaDefinition = z.object({
    /** Sampled candidates this exact fragment matches, counted with the directory's own filter predicates; always at least 1. Not a directory total. */
    count: z.int().min(1),
    /** The filter fragment this answer applies; it sets exactly one field. Merge it into FederatedNaturalSearch.entityFilter by replacing that field. */
    entityFilter: EntityFilterSchema,
    /** Display label. */
    label: z.string(),
    /** Place level of a place option, so one row can mix countries, states, and cities; absent on other dimensions. */
    level: SearchPlaceLevelSchema.nullish(),
});
/**
 * One answer to a narrowing question.
 *
 * @openapiSchema SearchNarrowingOption
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchNarrowingQuestionSchema
 * @contractShape search.narrowing-option
 * @contractRole canonical
 */
export const SearchNarrowingOptionSchema = SearchNarrowingOptionSchemaDefinition;
//# sourceMappingURL=narrowing-option.js.map