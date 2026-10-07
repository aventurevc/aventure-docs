// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Operating state accepted by entity filters and mutation endpoints. Acquired Subsidiary means the entity was acquired and still operates; Closed (Acquihire) means the entity was acquired for its team and is terminal, rendering like Closed everywhere; Acquired means the entity is terminal, folded into the buyer, or closed.
 *
 * @openapiSchema EntityOperatingStatus
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
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
 * @contractShape entity.operating-status
 * @contractRole canonical
 */
export const EntityOperatingStatusSchema = z.enum([
    "Operating",
    "Acquired",
    "Acquired Subsidiary",
    "Closed",
    "Closed (Acquihire)",
    "Inactive",
]);
//# sourceMappingURL=operating-status.js.map