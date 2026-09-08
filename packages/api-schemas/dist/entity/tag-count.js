// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityTagCountSchemaDefinition = z.object({
    count: z.number().int(),
    name: z.string(),
});
/**
 * Summary count for a specific tag.
 *
 * @openapiSchema EntityTagCount
 * @endpoint POST /v1/entities/filters/counts
 * @usedBySchema EntityFilterCountResultSchema
 * @contractShape entity.tag-count
 * @contractRole canonical
 */
export const EntityTagCountSchema = EntityTagCountSchemaDefinition;
//# sourceMappingURL=tag-count.js.map