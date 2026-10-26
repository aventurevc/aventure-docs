import { z } from "zod/v4";
/**
 * One analysis tool invocation
 *
 * @openapiSchema EntityAnalysisInvocation
 * @endpoint POST /v1/research-runs/{runId}/turns
 * @usedBySchema HarnessRunTurnSchema
 * @contractShape entity.analysis-invocation
 * @contractRole canonical
 */
export declare const EntityAnalysisInvocationSchema: z.ZodObject<{
    instruction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sectionKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tool: z.ZodEnum<{
        LIST_SECTION: "LIST_SECTION";
        RENDER_SECTION: "RENDER_SECTION";
    }>;
}, z.core.$strip>;
export type EntityAnalysisInvocation = z.infer<typeof EntityAnalysisInvocationSchema>;
//# sourceMappingURL=analysis-invocation.d.ts.map