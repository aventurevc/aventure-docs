// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityUniqueIdFilterSchemaDefinition = z.object({
    /** Exact identifier in that namespace; omitted matches any recorded value. */
    identifier: z.string().max(255).nullish(),
    /** Public identifier type token, for example secCik, ein, or ticker. */
    idType: z.string(),
});
/**
 * Public-registry identifier predicate: entities holding an identifier in this namespace, or this exact identifier when identifier is supplied. Private namespaces are refused.
 *
 * @openapiSchema EntityUniqueIdFilter
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/people
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
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape entity.unique-id-filter
 * @contractRole canonical
 */
export const EntityUniqueIdFilterSchema = EntityUniqueIdFilterSchemaDefinition;
//# sourceMappingURL=unique-id-filter.js.map