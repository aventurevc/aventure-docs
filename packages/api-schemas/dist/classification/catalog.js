// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationCatalogBucketSchema } from "./catalog-bucket.js";
import { ClassificationCatalogCategorySchema } from "./catalog-category.js";
const ClassificationCatalogSchemaDefinition = z.object({
    bucket: z.array(ClassificationCatalogBucketSchema),
    category: z.array(ClassificationCatalogCategorySchema),
    generatedAt: z.iso.datetime({ offset: true }),
    totalBucket: z.int(),
    totalCategory: z.int(),
    totalStandardizedClassification: z.int(),
    totalTag: z.int(),
});
/**
 * Full active entity classification taxonomy in one payload. Dormant registry tags are omitted from the catalog and surface through write-time 409 recovery instead.
 *
 * @openapiSchema ClassificationCatalog
 * @endpoint GET /v1/classifications/catalog
 * @contractShape classification.catalog
 * @contractRole canonical
 */
export const ClassificationCatalogSchema = ClassificationCatalogSchemaDefinition;
//# sourceMappingURL=catalog.js.map