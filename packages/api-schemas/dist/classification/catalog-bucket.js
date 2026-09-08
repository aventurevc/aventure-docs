// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTagSchema } from "../entity/tag.js";
const ClassificationCatalogBucketSchemaDefinition = z.object({
    /** Other accepted spellings for this bucket (JSON key plus storage form, deduplicated against `type`). The /tags ?type= and /catalog ?bucketType= parameters accept any of `[type, ...alias]`. Empty when the bucket has only one canonical spelling. */
    alias: z.array(z.string()),
    /** Canonical entity-classification bucket key. Use as EntityClassificationMutation.type when creating by type plus name. */
    bucket: z.string().nullish(),
    /** Whether missing values in this bucket can be created by name. */
    creatable: z.boolean(),
    /** Whether the bucket has hierarchy semantics. */
    hierarchical: z.boolean(),
    /** Human-readable bucket label (e.g. 'Revenue Model'). */
    label: z.string(),
    /** Active registry tags only. Empty when includeTags=false; dormant tags are omitted and require write-time inactiveTagOverride recovery when type + name matches. */
    tag: z.array(EntityTagSchema),
    /** Total active tags in this bucket. Populated regardless of `includeTags` so callers can decide whether to fetch detail without a follow-up count query. */
    tagCount: z.int(),
    /** Canonical wire value — use as ?type= for /tags, as ?bucketType= for /catalog, and as Tag.type when round-tripping. Matches Tag.type returned in this bucket's tag[]. */
    type: z.string(),
    /** Whether existing rows in this bucket can be joined. */
    writable: z.boolean(),
});
/**
 * Classification bucket with active registry tags and accepted-spelling aliases.
 *
 * @openapiSchema ClassificationCatalogBucket
 * @endpoint GET /v1/classifications/catalog
 * @usedBySchema ClassificationCatalogSchema
 * @contractShape classification.catalog-bucket
 * @contractRole canonical
 */
export const ClassificationCatalogBucketSchema = ClassificationCatalogBucketSchemaDefinition;
//# sourceMappingURL=catalog-bucket.js.map