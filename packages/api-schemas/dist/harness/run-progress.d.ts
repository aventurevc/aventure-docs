import { z } from "zod/v4";
/**
 * Current public progress of a harness run
 *
 * @openapiSchema HarnessRunProgress
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema HarnessRunDetailSchema
 * @contractShape harness.run-progress
 * @contractRole canonical
 */
export declare const HarnessRunProgressSchema: z.ZodObject<{
    complete: z.ZodBoolean;
    entitySlug: z.ZodNullable<z.ZodString>;
    gateRemaining: z.ZodArray<z.ZodString>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requestOutcome: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        reason?: string | null | undefined;
        request: string;
        status: string;
    }, import("./run-request-outcome.ts").HarnessRunRequestOutcomeSchemaInput, z.core.$ZodTypeInternals<{
        reason?: string | null | undefined;
        request: string;
        status: string;
    }, import("./run-request-outcome.ts").HarnessRunRequestOutcomeSchemaInput>>>>>;
    whatElseRemaining: z.ZodArray<z.ZodString>;
    writeThisIteration: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type HarnessRunProgress = z.infer<typeof HarnessRunProgressSchema>;
//# sourceMappingURL=run-progress.d.ts.map