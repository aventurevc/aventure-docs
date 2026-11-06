import { z } from "zod/v4";
/**
 * Executor of the accepted research work; independent of its requested scope
 *
 * @openapiSchema HarnessRunExecution
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-execution
 * @contractRole canonical
 */
export declare const HarnessRunExecutionSchema: z.ZodUnion<readonly [z.ZodEnum<{
    DIRECT: "DIRECT";
    ENGINE: "ENGINE";
}>, z.ZodString]> & {
    enum: {
        DIRECT: "DIRECT";
        ENGINE: "ENGINE";
    };
};
export type HarnessRunExecution = z.infer<typeof HarnessRunExecutionSchema>;
//# sourceMappingURL=run-execution.d.ts.map