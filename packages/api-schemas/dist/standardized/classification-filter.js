// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const StandardizedClassificationFilterSchemaDefinition = z.object({
    /** Existing standardized category; no inferred namespace. */
    category: z.string(),
    /** Exact legacy numeric code; may match multiple editions unless edition is constrained. */
    code: z.int().nullish(),
    /** Exact source-stated code text, never reconstructed from numeric code. */
    codeText: z.string().max(255).nullish(),
    /** Exact supplied codebook edition; omitted does not assume the current edition. */
    edition: z.string().max(128).nullish(),
    /** true selects recorded editions; false selects unknown edition; omitted imposes no presence predicate. */
    hasEdition: z.boolean().nullish(),
});
/**
 * Exact standardized reference tuple. All supplied fields match one reference; no edition filter means any edition, hasEdition=false selects unknown edition.
 *
 * @openapiSchema StandardizedClassificationFilter
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
 * @contractShape standardized.classification-filter
 * @contractRole canonical
 */
export const StandardizedClassificationFilterSchema = StandardizedClassificationFilterSchemaDefinition;
//# sourceMappingURL=classification-filter.js.map