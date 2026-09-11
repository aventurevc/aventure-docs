// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationSchema } from "../classification/classification.js";
const StandardizedClassificationSchemaDefinition = z.intersection(ClassificationSchema, z.object({
    /** Standardized category token. */
    category: z.string(),
    /** Standardized classification code when present. */
    code: z.int().nullish(),
    /** Standardized taxonomy rows are join-existing-only. */
    creatable: z.boolean(),
    /** Registry row creation timestamp. */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Entity classification join row id for update/delete; present on entity classification responses and null on discovery responses. */
    entityClassificationId: z.int().nullish(),
    /** Standardized classification registry id from res_classification_ref; use as EntityClassificationMutation.classificationId. */
    id: z.int(),
    /** Standardized reference rows are current by definition. */
    isCurrent: z.boolean().nullish(),
    /** Entity join primary flag within this standardized category. */
    isPrimary: z.boolean().nullish(),
    /** Hierarchy level when present. */
    level: z.int().nullish(),
    /** Name */
    name: z.string().max(255),
    /** Registry row update timestamp. */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Existing standardized rows can be joined through classificationId. */
    writable: z.boolean(),
}));
/**
 * Canonical standardized classification projection backed by res_classification_ref. Rows are join-existing-only; creatable is false until a taxonomy writer exists.
 *
 * @openapiSchema StandardizedClassification
 * @endpoint GET /v1/classifications
 * @endpoint GET /v1/classifications/catalog
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
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema ClassificationCatalogCategorySchema
 * @usedBySchema EntityClassificationSchema
 * @usedBySchema EntityClassificationSuggestionSchema
 * @usedBySchema PageClassificationSchema
 * @contractShape standardized.classification
 * @contractRole canonical
 */
export const StandardizedClassificationSchema = StandardizedClassificationSchemaDefinition;
//# sourceMappingURL=classification.js.map