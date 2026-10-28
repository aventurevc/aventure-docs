import { z } from "zod/v4";
declare const WriterScopeSchemaDefinition: z.ZodObject<{
    boundary: z.ZodString;
    geography: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    period: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WriterScopeDefinition = z.infer<typeof WriterScopeSchemaDefinition>;
export interface WriterScopeSchemaInput extends z.input<typeof WriterScopeSchemaDefinition> {
}
/**
 * Research boundary used by a writer brief.
 *
 * @openapiSchema WriterScope
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterMetaAnalysisSchema
 * @contractShape writer.scope
 * @contractRole canonical
 */
export declare const WriterScopeSchema: z.ZodType<WriterScopeDefinition, WriterScopeSchemaInput>;
export type WriterScope = z.infer<typeof WriterScopeSchema>;
export {};
//# sourceMappingURL=scope.d.ts.map