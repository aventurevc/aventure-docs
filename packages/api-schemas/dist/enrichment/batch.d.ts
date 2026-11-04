import { z } from "zod/v4";
declare const EnrichmentBatchSchemaDefinition: z.ZodObject<{
    entityId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    instruction: z.ZodOptional<z.ZodArray<z.ZodType<{
        record: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        userPrompt?: string | null | undefined;
    }, import("./instruction.ts").EnrichmentInstructionSchemaInput, z.core.$ZodTypeInternals<{
        record: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        userPrompt?: string | null | undefined;
    }, import("./instruction.ts").EnrichmentInstructionSchemaInput>>>>;
    lane: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        background: "background";
        bulk: "bulk";
        interactive: "interactive";
        live: "live";
    }>, z.ZodString]> & {
        enum: {
            background: "background";
            bulk: "bulk";
            interactive: "interactive";
            live: "live";
        };
    }>>;
    mode: z.ZodOptional<z.ZodEnum<{
        COMPREHENSIVE: "COMPREHENSIVE";
        INDIVIDUAL: "INDIVIDUAL";
    }>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newsId: z.ZodOptional<z.ZodArray<z.ZodInt>>;
    personId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    taskPresetKey: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EnrichmentBatchDefinition = z.infer<typeof EnrichmentBatchSchemaDefinition>;
export interface EnrichmentBatchSchemaInput extends z.input<typeof EnrichmentBatchSchemaDefinition> {
}
/**
 * Existing records to enrich in one call, with shared run options and optional additional instructions for individual selected records
 *
 * @openapiSchema EnrichmentBatch
 * @endpoint POST /v1/enrichments
 * @contractShape enrichment.batch
 * @contractRole canonical
 */
export declare const EnrichmentBatchSchema: z.ZodType<EnrichmentBatchDefinition, EnrichmentBatchSchemaInput>;
export type EnrichmentBatch = z.infer<typeof EnrichmentBatchSchema>;
export {};
//# sourceMappingURL=batch.d.ts.map