// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "./entity.js";
const EntityAcceleratorParticipationSchemaDefinition = z.object({
    /** Canonical thin accelerator entity from the acceleratorParticipant relationship */
    accelerator: EntitySchema,
    /** Full accelerator participation name, including program detail */
    acceleratorName: z.string(),
    /** Source-stated participation effective date or instant */
    asOfDate: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/),
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
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityListResearchSchema
 * @usedBySchema EntityResearchSchema
 * @contractShape entity.accelerator-participation
 * @contractRole canonical
 */
export const EntityAcceleratorParticipationSchema = EntityAcceleratorParticipationSchemaDefinition;
//# sourceMappingURL=accelerator-participation.js.map