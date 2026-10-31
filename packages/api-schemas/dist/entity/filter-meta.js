// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterRequestBindingSchema } from "./filter-request-binding.js";
import { EntityFilterUiMetaSchema } from "./filter-ui-meta.js";
import { EntityTypeSchema } from "./type.js";
/**
 * API response fragment for entity filter metadata
 *
 * @openapiSchema EntityFilterMeta
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape entity.filter-meta
 * @contractRole canonical
 */
export const EntityFilterMetaSchema = z.object({
    /** Concrete entity kinds supported by this facet, not a claim that each has recorded values. */
    applicableTypeRecord: z.array(EntityTypeSchema).nullish(),
    /** Executable binding in the EntityFilter request body; absent on older servers. */
    requestBinding: EntityFilterRequestBindingSchema.nullish(),
    /** UI metadata for rendering entity filter controls */
    ui: EntityFilterUiMetaSchema.nullish(),
});
//# sourceMappingURL=filter-meta.js.map