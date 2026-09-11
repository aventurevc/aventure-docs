import { z } from "zod/v4";
declare const EntityDetailBatchSchemaDefinition: z.ZodObject<{
    entityId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    permitMonogram: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodBoolean>>>;
    slug: z.ZodOptional<z.ZodArray<z.ZodString>>;
    url: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
type EntityDetailBatchDefinition = z.infer<typeof EntityDetailBatchSchemaDefinition>;
/**
 * Batch request for entity detail retrieval by id, slug, or current joined URL
 *
 * @openapiSchema EntityDetailBatch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @contractShape entity.detail-batch
 * @contractRole canonical
 */
export declare const EntityDetailBatchSchema: z.ZodType<EntityDetailBatchDefinition>;
export type EntityDetailBatch = z.infer<typeof EntityDetailBatchSchema>;
export {};
//# sourceMappingURL=detail-batch.d.ts.map