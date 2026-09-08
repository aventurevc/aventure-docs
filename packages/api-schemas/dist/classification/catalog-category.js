// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { StandardizedClassificationSchema } from "../standardized/classification.js";
const ClassificationCatalogCategorySchemaDefinition = z.object({
    /** Accepted spellings for this category. */
    alias: z.array(z.string()),
    /** Canonical standardized category key. */
    category: z.string(),
    /** Standardized classifications. Empty when includeTags=false. */
    classification: z.array(StandardizedClassificationSchema),
    /** Total standardized classifications in this category. */
    classificationCount: z.int(),
    /** Whether missing values in this category can be created by name. */
    creatable: z.boolean(),
    /** Whether the category has hierarchy semantics. */
    hierarchical: z.boolean(),
    /** Human-readable category label. */
    label: z.string(),
    /** Whether existing rows in this category can be joined. */
    writable: z.boolean(),
});
/**
 * Standardized classification category with accepted spellings and registry rows.
 *
 * @openapiSchema ClassificationCatalogCategory
 * @endpoint GET /v1/classifications/catalog
 * @usedBySchema ClassificationCatalogSchema
 * @contractShape classification.catalog-category
 * @contractRole canonical
 */
export const ClassificationCatalogCategorySchema = ClassificationCatalogCategorySchemaDefinition;
//# sourceMappingURL=catalog-category.js.map