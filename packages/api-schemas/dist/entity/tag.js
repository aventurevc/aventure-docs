// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationSchema } from "../classification/classification.js";
/**
 * Classification tag. Catalog and search responses describe the tag itself; entity classification responses also carry classificationId and the entity's current and primary flags.
 *
 * @openapiSchema EntityTag
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/brand
 * @endpoint GET /v1/entities/classifications/catalog
 * @endpoint GET /v1/entities/classifications/tags
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/classifications
 * @endpoint GET /v1/entities/{entityId}/classifications/suggestions
 * @endpoint GET /v1/entities/{entityId}/investors
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
 * @usedBySchema ClassificationCatalogBucketSchema
 * @usedBySchema EntityClassificationSchema
 * @usedBySchema EntityClassificationSuggestionSchema
 * @usedBySchema PageClassificationSchema
 * @contractShape entity.tag
 * @contractRole canonical
 */
export const EntityTagSchema = z.intersection(ClassificationSchema, z.object({
    /** Canonical classification bucket key; `type` is the value tag search and the catalog accept. */
    bucket: z.string().nullish(),
    /** Id of this classification on the entity; null in catalog and search results. */
    classificationId: z.int().nullish(),
    /** Whether this bucket permits creating missing values by type plus name. */
    creatable: z.boolean().optional(),
    /** Tag creation timestamp, not the time the entity received this tag. */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Classification tag id. */
    id: z.int(),
    /** In catalog and search results, whether the tag is active; in entity classification responses, whether the classification is current for the entity. */
    isCurrent: z.boolean().nullish(),
    /** Whether this is the entity's primary classification in its bucket; null in catalog and search results. */
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
    /** Tag update timestamp, not the time the entity's classification changed. */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Whether this existing tag can be joined through tagId. */
    writable: z.boolean().optional(),
}));
//# sourceMappingURL=tag.js.map