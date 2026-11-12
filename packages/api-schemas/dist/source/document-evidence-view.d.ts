import { z } from "zod/v4";
/**
 * Captured-text representation: LEGACY preserves existing offsets; ARTICLE_V1 reads the captured article without page controls.
 *
 * @openapiSchema SourceDocumentEvidenceView
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft/sections/{sectionKey}/writes/{writeId}
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisCitationSchema
 * @usedBySchema ResearchFindingSchema
 * @contractShape source.document-evidence-view
 * @contractRole canonical
 */
export declare const SourceDocumentEvidenceViewSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ARTICLE_V1: "ARTICLE_V1";
    LEGACY: "LEGACY";
}>, z.ZodString]> & {
    enum: {
        ARTICLE_V1: "ARTICLE_V1";
        LEGACY: "LEGACY";
    };
};
export type SourceDocumentEvidenceView = z.infer<typeof SourceDocumentEvidenceViewSchema>;
//# sourceMappingURL=document-evidence-view.d.ts.map