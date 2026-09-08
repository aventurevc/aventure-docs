// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterCountMetaSchema } from "./filter-count-meta.js";
import { EntityTagCountSchema } from "./tag-count.js";
const EntityFilterCountResultSchemaDefinition = z.object({
    count: z.array(EntityTagCountSchema),
    meta: EntityFilterCountMetaSchema,
});
/**
 * @openapiSchema EntityFilterCountResult
 * @endpoint POST /v1/entities/filters/counts
 * @contractShape entity.filter-count-result
 * @contractRole canonical
 */
export const EntityFilterCountResultSchema = EntityFilterCountResultSchemaDefinition;
//# sourceMappingURL=filter-count-result.js.map