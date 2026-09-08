// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Numeric min/max bounds for range filter values
 *
 * @openapiSchema EntityFilterScope
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterChoiceSchema
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape entity.filter-scope
 * @contractRole canonical
 */
export const EntityFilterScopeSchema = z.strictObject({
    /** Maximum scope value */
    max: z.number().int().nullish(),
    /** Minimum scope value */
    min: z.number().int().nullish(),
});
//# sourceMappingURL=filter-scope.js.map