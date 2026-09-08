// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAcceleratorParticipationSchema } from "./accelerator-participation.js";
import { EntityResearchDetailSchema } from "./research-detail.js";
const EntityListResearchSchemaDefinition = z.object({
    /** Joined accelerator participation derived from governed accelerator research rows */
    acceleratorParticipation: z.array(EntityAcceleratorParticipationSchema),
    /** Flat governed research detail rows filtered by visibility */
    detail: z.array(EntityResearchDetailSchema),
});
/**
 * Nested research projection owned by EntityList rows, excluding snippet text.
 *
 * @openapiSchema EntityListResearch
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityListSchema
 * @contractShape entity.list-research
 * @contractRole canonical
 */
export const EntityListResearchSchema = EntityListResearchSchemaDefinition;
//# sourceMappingURL=list-research.js.map