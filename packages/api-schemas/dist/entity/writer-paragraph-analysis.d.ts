import { z } from "zod/v4";
declare const EntityWriterParagraphAnalysisSchemaDefinition: z.ZodObject<{
    answer: z.ZodBoolean;
}, z.core.$strip>;
type EntityWriterParagraphAnalysisDefinition = z.infer<typeof EntityWriterParagraphAnalysisSchemaDefinition>;
export interface EntityWriterParagraphAnalysisSchemaInput extends z.input<typeof EntityWriterParagraphAnalysisSchemaDefinition> {
}
/**
 * Overall research answer assignment for entity text.
 *
 * @openapiSchema EntityWriterParagraphAnalysis
 * @endpoint POST /v1/research/runs
 * @usedBySchema EntityWriterParagraphSchema
 * @contractShape entity.writer-paragraph-analysis
 * @contractRole canonical
 */
export declare const EntityWriterParagraphAnalysisSchema: z.ZodType<EntityWriterParagraphAnalysisDefinition, EntityWriterParagraphAnalysisSchemaInput>;
export type EntityWriterParagraphAnalysis = z.infer<typeof EntityWriterParagraphAnalysisSchema>;
export {};
//# sourceMappingURL=writer-paragraph-analysis.d.ts.map