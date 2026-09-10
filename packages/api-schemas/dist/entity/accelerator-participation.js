// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "./entity.js";
const EntityAcceleratorParticipationSchemaDefinition = z.object({
    /** Canonical thin accelerator entity from the acceleratorParticipant relationship */
    accelerator: EntitySchema,
    /** Full accelerator participation name, including program detail */
    acceleratorName: z.string(),
    /** Participation effective timestamp */
    asOfDate: z.iso.datetime({ offset: true }),
    /** Accelerator batch or cohort */
    batch: z.string().nullish(),
    /** Stable participation identifier anchored to the contributing acceleratorParticipant relationship */
    id: z.string(),
    /** Accelerator program name, when the source distinguishes one */
    program: z.string().nullish(),
    /** Accelerator participation status */
    status: z.string().nullish(),
});
/**
 * Flattened accelerator participation derived from acceleratorParticipant relationship rows and joined to the canonical accelerator entity.
 *
 * @openapiSchema EntityAcceleratorParticipation
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityListResearchSchema
 * @usedBySchema EntityResearchSchema
 * @contractShape entity.accelerator-participation
 * @contractRole canonical
 */
export const EntityAcceleratorParticipationSchema = EntityAcceleratorParticipationSchemaDefinition;
//# sourceMappingURL=accelerator-participation.js.map