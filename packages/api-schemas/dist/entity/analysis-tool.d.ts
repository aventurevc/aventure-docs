import { z } from "zod/v4";
/**
 * Analysis tool
 *
 * @openapiSchema EntityAnalysisTool
 * @endpoint POST /v1/research-runs/{runId}/turns
 * @usedBySchema EntityAnalysisInvocationSchema
 * @contractShape entity.analysis-tool
 * @contractRole canonical
 */
export declare const EntityAnalysisToolSchema: z.ZodEnum<{
    LIST_SECTION: "LIST_SECTION";
    RENDER_SECTION: "RENDER_SECTION";
}>;
export type EntityAnalysisTool = z.infer<typeof EntityAnalysisToolSchema>;
//# sourceMappingURL=analysis-tool.d.ts.map