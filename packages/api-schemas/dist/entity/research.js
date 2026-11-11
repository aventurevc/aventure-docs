// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAcceleratorParticipationSchema } from "./accelerator-participation.js";
import { EntityFinancialSchema } from "./financial.js";
import { EntityResearchDetailSchema } from "./research-detail.js";
import { EntityResearchSnippetSchema } from "./research-snippet.js";
const EntityResearchSchemaDefinition = z.object({
    /** Accelerator programs the entity took part in, derived from its accelerator research records */
    acceleratorParticipation: z.array(EntityAcceleratorParticipationSchema),
    /** Structured research details the caller is allowed to see */
    detail: z.array(EntityResearchDetailSchema),
    /** Stored financial facts selected by financialYear and financialPeriod; omitted when not selected, empty when no matching row exists. Includes no private provenance. */
    financial: z.array(EntityFinancialSchema).nullish(),
    /** Research text snippets for this entity */
    snippet: z.array(EntityResearchSnippetSchema),
});
/**
 * Research findings for an entity: structured research details, written research snippets, and accelerator participation.
 *
 * @openapiSchema EntityResearch
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @contractShape entity.research
 * @contractRole canonical
 */
export const EntityResearchSchema = EntityResearchSchemaDefinition;
//# sourceMappingURL=research.js.map