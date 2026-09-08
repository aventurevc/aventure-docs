// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityDetailBatchSchemaDefinition = z.strictObject({
    /** Entity UUID values */
    entityId: z.array(z.uuid()).optional(),
    /** Permit monogram fallbacks */
    permitMonogram: z.boolean().nullable().default(true).optional(),
    /** Entity slug values */
    slug: z.array(z.string()).optional(),
    /** Current joined entity URL values */
    url: z.array(z.string()).optional(),
});
/**
 * Batch request for entity detail retrieval by id, slug, or current joined URL
 *
 * @openapiSchema EntityDetailBatch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @contractShape entity.detail-batch
 * @contractRole canonical
 */
export const EntityDetailBatchSchema = EntityDetailBatchSchemaDefinition;
//# sourceMappingURL=detail-batch.js.map