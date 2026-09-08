// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterEntrySchema } from "./filter-entry.js";
import { RefinementMetaSchema } from "../refinement/meta.js";
const EntityFilterRefinedFiltersSchemaDefinition = z.object({
    /** Canonical filter entries for the active entity scope. */
    filter: z.array(EntityFilterEntrySchema),
    /** Pagination and degradation state for this refinement. */
    meta: RefinementMetaSchema,
});
/**
 * Refined filters
 *
 * @openapiSchema EntityFilterRefinedFilters
 * @endpoint POST /v1/entities/filters/refine
 * @contractShape entity.filter-refined-filters
 * @contractRole canonical
 */
export const EntityFilterRefinedFiltersSchema = EntityFilterRefinedFiltersSchemaDefinition;
//# sourceMappingURL=filter-refined-filters.js.map