// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterSchema } from "./filter.js";
/**
 * Constraints on one independent entity-person association.
 *
 * @openapiSchema EntityPersonAssociationFilter
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/exports
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonFilterSchema
 * @contractShape entity.person-association-filter
 * @contractRole canonical
 */
export const EntityPersonAssociationFilterSchema = z.object({
    /** Constraints on the associated entity, including its exact names. */
    entityFilter: EntityFilterSchema.nullish(),
    /** Filter this association by whether it is current. */
    isCurrent: z.boolean().nullish(),
    /** Titles on this association. */
    personTitle: z.array(z.string()).optional(),
});
//# sourceMappingURL=person-association-filter.js.map