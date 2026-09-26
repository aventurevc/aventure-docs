import { z } from "zod/v4";
declare const EnrichmentBatchSchemaDefinition: z.ZodObject<{
    entityId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    mode: z.ZodOptional<z.ZodEnum<{
        COMPREHENSIVE: "COMPREHENSIVE";
        INDIVIDUAL: "INDIVIDUAL";
    }>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    taskPresetKey: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EnrichmentBatchDefinition = z.infer<typeof EnrichmentBatchSchemaDefinition>;
/**
 * Existing records to enrich in one call, with the run options every run shares
 *
 * @openapiSchema EnrichmentBatch
 * @endpoint POST /v1/enrichments
 * @contractShape enrichment.batch
 * @contractRole canonical
 */
export declare const EnrichmentBatchSchema: z.ZodType<EnrichmentBatchDefinition>;
export type EnrichmentBatch = z.infer<typeof EnrichmentBatchSchema>;
export {};
//# sourceMappingURL=batch.d.ts.map