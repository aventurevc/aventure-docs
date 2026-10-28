import { z } from "zod/v4";
declare const WriterChangeSignalSchemaDefinition: z.ZodObject<{
    claim: z.ZodArray<z.ZodInt>;
    statement: z.ZodString;
}, z.core.$strip>;
type WriterChangeSignalDefinition = z.infer<typeof WriterChangeSignalSchemaDefinition>;
export interface WriterChangeSignalSchemaInput extends z.input<typeof WriterChangeSignalSchemaDefinition> {
}
/**
 * Evidence that would change the supplied judgment.
 *
 * @openapiSchema WriterChangeSignal
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterMetaAnalysisSchema
 * @contractShape writer.change-signal
 * @contractRole canonical
 */
export declare const WriterChangeSignalSchema: z.ZodType<WriterChangeSignalDefinition, WriterChangeSignalSchemaInput>;
export type WriterChangeSignal = z.infer<typeof WriterChangeSignalSchema>;
export {};
//# sourceMappingURL=change-signal.d.ts.map