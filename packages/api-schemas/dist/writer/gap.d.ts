import { z } from "zod/v4";
declare const WriterGapSchemaDefinition: z.ZodObject<{
    claim: z.ZodArray<z.ZodInt>;
    reason: z.ZodUnion<readonly [z.ZodEnum<{
        CONFLICTING: "CONFLICTING";
        NOT_APPLICABLE: "NOT_APPLICABLE";
        NOT_DISCLOSED: "NOT_DISCLOSED";
        NOT_FOUND: "NOT_FOUND";
    }>, z.ZodString]> & {
        enum: {
            CONFLICTING: "CONFLICTING";
            NOT_APPLICABLE: "NOT_APPLICABLE";
            NOT_DISCLOSED: "NOT_DISCLOSED";
            NOT_FOUND: "NOT_FOUND";
        };
    };
    statement: z.ZodString;
}, z.core.$strip>;
type WriterGapDefinition = z.infer<typeof WriterGapSchemaDefinition>;
export interface WriterGapSchemaInput extends z.input<typeof WriterGapSchemaDefinition> {
}
/**
 * A known evidence gap or conflict.
 *
 * @openapiSchema WriterGap
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterMetaAnalysisSchema
 * @contractShape writer.gap
 * @contractRole canonical
 */
export declare const WriterGapSchema: z.ZodType<WriterGapDefinition, WriterGapSchemaInput>;
export type WriterGap = z.infer<typeof WriterGapSchema>;
export {};
//# sourceMappingURL=gap.d.ts.map