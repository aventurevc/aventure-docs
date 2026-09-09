// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterHeadquartersOptionSetSchema } from "./filter-headquarters-option-set.js";
/**
 * UI-only metadata used for rendering entity filter panels
 *
 * @openapiSchema EntityFilterUiMeta
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterMetaSchema
 * @contractShape entity.filter-ui-meta
 * @contractRole canonical
 */
export const EntityFilterUiMetaSchema = z.object({
    headquartersOption: EntityFilterHeadquartersOptionSetSchema.nullish(),
});
//# sourceMappingURL=filter-ui-meta.js.map