// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterScopeSchema } from "./filter-scope.js";
const EntityFilterChoiceSchemaDefinition = z.object({
    /** Display label for the option */
    label: z.string(),
    /** Optional numeric scope for the option */
    scope: EntityFilterScopeSchema.nullish(),
    /** Canonical option value */
    value: z.string(),
});
/**
 * Filter choice payload served by filter endpoints
 *
 * @openapiSchema EntityFilterChoice
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape entity.filter-choice
 * @contractRole canonical
 */
export const EntityFilterChoiceSchema = EntityFilterChoiceSchemaDefinition;
//# sourceMappingURL=filter-choice.js.map