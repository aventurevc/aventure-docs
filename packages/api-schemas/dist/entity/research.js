// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAcceleratorParticipationSchema } from "./accelerator-participation.js";
import { EntityResearchDetailSchema } from "./research-detail.js";
import { EntityResearchSnippetSchema } from "./research-snippet.js";
const EntityResearchSchemaDefinition = z.object({
    /** Joined accelerator participation derived from governed accelerator research rows */
    acceleratorParticipation: z.array(EntityAcceleratorParticipationSchema),
    /** Flat governed research detail rows filtered by visibility */
    detail: z.array(EntityResearchDetailSchema),
    /** Research text snippets for this entity */
    snippet: z.array(EntityResearchSnippetSchema),
});
/**
 * Combined entity research disclosure: governed detail rows, research text snippets, and joined accelerator participation.
 *
 * @openapiSchema EntityResearch
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/search
 * @usedBySchema EntityDetailSchema
 * @contractShape entity.research
 * @contractRole canonical
 */
export const EntityResearchSchema = EntityResearchSchemaDefinition;
//# sourceMappingURL=research.js.map