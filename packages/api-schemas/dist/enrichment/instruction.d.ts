import { z } from "zod/v4";
declare const EnrichmentInstructionSchemaDefinition: z.ZodObject<{
    record: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EnrichmentInstructionDefinition = z.infer<typeof EnrichmentInstructionSchemaDefinition>;
export interface EnrichmentInstructionSchemaInput extends z.input<typeof EnrichmentInstructionSchemaDefinition> {
}
/**
 * Instructions appended to the shared userPrompt for exactly one selected record
 *
 * @openapiSchema EnrichmentInstruction
 * @endpoint POST /v1/enrichments
 * @usedBySchema EnrichmentBatchSchema
 * @contractShape enrichment.instruction
 * @contractRole canonical
 */
export declare const EnrichmentInstructionSchema: z.ZodType<EnrichmentInstructionDefinition, EnrichmentInstructionSchemaInput>;
export type EnrichmentInstruction = z.infer<typeof EnrichmentInstructionSchema>;
export {};
//# sourceMappingURL=instruction.d.ts.map