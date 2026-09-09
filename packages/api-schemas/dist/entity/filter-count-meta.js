// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityFilterCountMetaSchemaDefinition = z.object({
    total: z.int(),
});
/**
 * @openapiSchema EntityFilterCountMeta
 * @endpoint GET /v1/entities/filters/counts
 * @endpoint POST /v1/entities/filters/counts
 * @usedBySchema EntityFilterCountResultSchema
 * @contractShape entity.filter-count-meta
 * @contractRole canonical
 */
export const EntityFilterCountMetaSchema = EntityFilterCountMetaSchemaDefinition;
//# sourceMappingURL=filter-count-meta.js.map