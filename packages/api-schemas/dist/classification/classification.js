// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ClassificationSchemaDefinition = z.object({
    creatable: z.boolean(),
    isCurrent: z.boolean().nullish(),
    isPrimary: z.boolean().nullish(),
    /** Display name. Capped to the standardized taxonomy storage limit because this shared read contract covers NAICS/SIC/ISIC-style classification labels as well as editorial tags. */
    name: z.string().max(255),
    writable: z.boolean(),
});
/**
 * @openapiSchema Classification
 * @endpoint GET /v1/classifications
 * @endpoint GET /v1/classifications/catalog
 * @endpoint GET /v1/classifications/tags
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/classifications
 * @endpoint GET /v1/entities/{entityId}/classifications/suggestions
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityTagSchema
 * @usedBySchema StandardizedClassificationSchema
 * @contractShape classification.classification
 * @contractRole canonical
 */
export const ClassificationSchema = ClassificationSchemaDefinition;
//# sourceMappingURL=classification.js.map