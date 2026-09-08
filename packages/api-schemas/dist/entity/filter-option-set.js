// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterEntrySchema } from "./filter-entry.js";
import { EntityFilterOptionSetMetaSchema } from "./filter-option-set-meta.js";
const EntityFilterOptionSetSchemaDefinition = z.object({
    /** Array filter entries */
    arrayFilterEntry: z.array(EntityFilterEntrySchema),
    /** Metadata for the generated filter option set */
    filtersMeta: EntityFilterOptionSetMetaSchema.nullish(),
    /** Range filter entries */
    rangeFilterEntry: z.array(EntityFilterEntrySchema),
});
/**
 * Available filter options for list endpoints
 *
 * @openapiSchema EntityFilterOptionSet
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/people/filters
 * @contractShape entity.filter-option-set
 * @contractRole canonical
 */
export const EntityFilterOptionSetSchema = EntityFilterOptionSetSchemaDefinition;
//# sourceMappingURL=filter-option-set.js.map