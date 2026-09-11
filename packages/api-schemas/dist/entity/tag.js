// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationSchema } from "../classification/classification.js";
const EntityTagSchemaDefinition = z.intersection(ClassificationSchema, z.object({
    /** Canonical entity-classification bucket key. Use this as EntityClassificationMutation.type when creating by type plus name; `type` remains the registry wire value for tag search and catalog round-trips. */
    bucket: z.string().nullish(),
    /** Entity classification join row id for update/delete; present on entity classification responses and null on discovery responses. */
    classificationId: z.int().nullish(),
    /** Whether this bucket permits creating missing values by type plus name. */
    creatable: z.boolean(),
    /** Registry tag creation timestamp, not the entity join timestamp. */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Classification tag registry id from res_type_ref; use as EntityClassificationMutation.tagId. */
    id: z.int(),
    /** Current-state flag for this context: registry active flag in discovery, entity join current flag in entity-classification responses. */
    isCurrent: z.boolean().nullish(),
    /** Entity join primary flag within its bucket; null on catalog/tag discovery. */
    isPrimary: z.boolean().nullish(),
    /** Name */
    name: z.string().max(255),
    /** Slug */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    /** Canonical tag classification type */
    type: z.string(),
    /** Registry tag update timestamp; join updates return isCurrent/isPrimary but no join updatedAt. */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Whether this existing tag can be joined through tagId. */
    writable: z.boolean(),
}));
/**
 * Canonical classification tag projection. Catalog/search responses describe registry tags; entity-classification responses include classificationId plus join state.
 *
 * @openapiSchema EntityTag
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
 * @usedBySchema ClassificationCatalogBucketSchema
 * @usedBySchema EntityClassificationSchema
 * @usedBySchema EntityClassificationSuggestionSchema
 * @usedBySchema PageClassificationSchema
 * @usedBySchema PageEntityTagSchema
 * @contractShape entity.tag
 * @contractRole canonical
 */
export const EntityTagSchema = EntityTagSchemaDefinition;
//# sourceMappingURL=tag.js.map