// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AcceleratorParticipationDetailSchema } from "./participation-detail.js";
const AcceleratorParticipationFilterSchemaDefinition = z.object({
    /** Exact accelerator entity ID. */
    acceleratorEntityId: z.uuid(),
    /** Exact program and batch; null program matches no subprogram. */
    detail: AcceleratorParticipationDetailSchema,
});
/**
 * @openapiSchema AcceleratorParticipationFilter
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/exports
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/research/runs
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape accelerator.participation-filter
 * @contractRole canonical
 */
export const AcceleratorParticipationFilterSchema = AcceleratorParticipationFilterSchemaDefinition;
//# sourceMappingURL=participation-filter.js.map