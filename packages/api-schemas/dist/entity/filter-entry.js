// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ChartBucketSchema } from "../chart/bucket.js";
import { EntityFilterChoiceSchema } from "./filter-choice.js";
import { EntityFilterControlTypeSchema } from "./filter-control-type.js";
import { EntityFilterMetaSchema } from "./filter-meta.js";
import { EntityFilterScopeSchema } from "./filter-scope.js";
const EntityFilterEntrySchemaDefinition = z.object({
    /** Chart filter values */
    chart: z.array(ChartBucketSchema),
    /** Choice option filter values */
    choiceOption: z.array(EntityFilterChoiceSchema),
    /** Total eligible choice option values for this filter */
    choiceOptionTotal: z.int().nullish(),
    /** Whether additional eligible choices exist beyond choiceOption */
    choiceOptionTruncated: z.boolean().nullish(),
    /** Control type used to render the filter */
    controlType: EntityFilterControlTypeSchema,
    /** Canonical filter key */
    filterKey: z.string(),
    /** Optional entity-specific filter metadata */
    filterMeta: EntityFilterMetaSchema.nullish(),
    /** Display label for the filter */
    label: z.string(),
    /** Optional numeric scope for the filter */
    scope: EntityFilterScopeSchema.nullish(),
});
/**
 * Filter entry payload served by list filter endpoints
 *
 * @openapiSchema EntityFilterEntry
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterOptionSetSchema
 * @usedBySchema EntityFilterRefinedFiltersSchema
 * @contractShape entity.filter-entry
 * @contractRole canonical
 */
export const EntityFilterEntrySchema = EntityFilterEntrySchemaDefinition;
//# sourceMappingURL=filter-entry.js.map