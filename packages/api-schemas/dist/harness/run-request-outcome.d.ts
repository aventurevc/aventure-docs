import { z } from "zod/v4";
declare const HarnessRunRequestOutcomeSchemaDefinition: z.ZodObject<{
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    request: z.ZodString;
    status: z.ZodUnion<readonly [z.ZodEnum<{
        alreadyPresent: "alreadyPresent";
        notWritten: "notWritten";
        refuted: "refuted";
        removed: "removed";
        written: "written";
    }>, z.ZodString]> & {
        enum: {
            alreadyPresent: "alreadyPresent";
            notWritten: "notWritten";
            refuted: "refuted";
            removed: "removed";
            written: "written";
        };
    };
}, z.core.$strip>;
type HarnessRunRequestOutcomeDefinition = z.infer<typeof HarnessRunRequestOutcomeSchemaDefinition>;
export interface HarnessRunRequestOutcomeSchemaInput extends z.input<typeof HarnessRunRequestOutcomeSchemaDefinition> {
}
/**
 * One distinct change the requester asked for and what the run did about it
 *
 * @openapiSchema HarnessRunRequestOutcome
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema HarnessRunProgressSchema
 * @contractShape harness.run-request-outcome
 * @contractRole canonical
 */
export declare const HarnessRunRequestOutcomeSchema: z.ZodType<HarnessRunRequestOutcomeDefinition, HarnessRunRequestOutcomeSchemaInput>;
export type HarnessRunRequestOutcome = z.infer<typeof HarnessRunRequestOutcomeSchema>;
export {};
//# sourceMappingURL=run-request-outcome.d.ts.map