import { z } from "zod/v4";
declare const EntityAnalysisCitationSchemaDefinition: z.ZodObject<{
    quote: z.ZodString;
    sourceDocumentId: z.ZodUUID;
}, z.core.$strip>;
type EntityAnalysisCitationDefinition = z.infer<typeof EntityAnalysisCitationSchemaDefinition>;
export interface EntityAnalysisCitationSchemaInput extends z.input<typeof EntityAnalysisCitationSchemaDefinition> {
}
/**
 * Verbatim evidence from an archived source document.
 *
 * @openapiSchema EntityAnalysisCitation
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisSectionSchema
 * @contractShape entity.analysis-citation
 * @contractRole canonical
 */
export declare const EntityAnalysisCitationSchema: z.ZodType<EntityAnalysisCitationDefinition, EntityAnalysisCitationSchemaInput>;
export type EntityAnalysisCitation = z.infer<typeof EntityAnalysisCitationSchema>;
export {};
//# sourceMappingURL=analysis-citation.d.ts.map