// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationJoinRegistrySchema } from "../classification/join-registry.js";
const StandardizedClassificationSchemaDefinition = z.object({
    /** Standardized category token. */
    category: z.string(),
    /** Id of this classification on the entity; null in catalog and search results. */
    classificationId: z.int().nullish(),
    /** Standardized classification code when present. */
    code: z.int().nullish(),
    /** Registry row creation timestamp. */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Standardized classification id. */
    id: z.int(),
    /** Standardized reference rows are current by definition. */
    isCurrent: z.boolean().nullish(),
    /** Whether this is the entity's primary classification in this category. */
    isPrimary: z.boolean().nullish(),
    /** Hierarchy level when present. */
    level: z.int().nullish(),
    /** Name */
    name: z.string().max(255),
    /** Join registry this classification belongs to; pass it as registry when reading or changing the join by classificationId. */
    registry: ClassificationJoinRegistrySchema,
    /** Registry row update timestamp. */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Industry or ownership classification from a standard taxonomy such as NAICS, SIC, or ISIC, with its category, code, and hierarchy level.
 *
 * @openapiSchema StandardizedClassification
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
 * @endpoint GET /v1/entities/search/jobs/{jobId}
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
 * @usedBySchema ClassificationCatalogCategorySchema
 * @usedBySchema EntityClassificationSchema
 * @usedBySchema EntityClassificationSuggestionSchema
 * @usedBySchema PageClassificationSchema
 * @contractShape standardized.classification
 * @contractRole canonical
 */
export const StandardizedClassificationSchema = StandardizedClassificationSchemaDefinition;
//# sourceMappingURL=classification.js.map