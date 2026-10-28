import { z } from "zod/v4";
declare const EntityAnalysisParagraphSchemaDefinition: z.ZodObject<{
    label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    text: z.ZodString;
}, z.core.$strip>;
type EntityAnalysisParagraphDefinition = z.infer<typeof EntityAnalysisParagraphSchemaDefinition>;
export interface EntityAnalysisParagraphSchemaInput extends z.input<typeof EntityAnalysisParagraphSchemaDefinition> {
}
/**
 * A single paragraph of analysis.
 *
 * @openapiSchema EntityAnalysisParagraph
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisSectionSchema
 * @contractShape entity.analysis-paragraph
 * @contractRole canonical
 */
export declare const EntityAnalysisParagraphSchema: z.ZodType<EntityAnalysisParagraphDefinition, EntityAnalysisParagraphSchemaInput>;
export type EntityAnalysisParagraph = z.infer<typeof EntityAnalysisParagraphSchema>;
export {};
//# sourceMappingURL=analysis-paragraph.d.ts.map