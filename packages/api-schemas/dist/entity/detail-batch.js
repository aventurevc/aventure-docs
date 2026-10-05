// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityDetailBatchSchemaDefinition = z
    .strictObject({
    /** Entity UUID values */
    entityId: z.array(z.uuid()).max(200).optional(),
    /** Permit monogram fallbacks */
    permitMonogram: z.boolean().nullable().default(true).optional(),
    /** Entity slug values */
    slug: z.array(z.string()).max(200).optional(),
    /** Current joined entity URL values */
    url: z.array(z.string()).max(200).optional(),
})
    .check(({ value, issues }) => {
    if ((value.entityId?.length ?? 0) + (value.slug?.length ?? 0) + (value.url?.length ?? 0) >
        200) {
        issues.push({
            code: "custom",
            origin: "custom",
            path: [],
            input: value,
            message: "combined array item count must be at most 200",
        });
    }
});
/**
 * Batch request for entity detail retrieval by id, slug, or current joined URL. Each identifier array accepts at most 200 values, and at most 200 identifiers may be submitted across entityId, slug, and url.
 *
 * @openapiSchema EntityDetailBatch
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @contractShape entity.detail-batch
 * @contractRole canonical
 */
export const EntityDetailBatchSchema = EntityDetailBatchSchemaDefinition;
//# sourceMappingURL=detail-batch.js.map