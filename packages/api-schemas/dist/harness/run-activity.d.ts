import { z } from "zod/v4";
declare const HarnessRunActivitySchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    kind: z.ZodUnion<readonly [z.ZodEnum<{
        CHECK: "CHECK";
        FINISHED: "FINISHED";
        QUEUED: "QUEUED";
        READ: "READ";
        SEARCH: "SEARCH";
        STARTED: "STARTED";
        WRITE: "WRITE";
    }>, z.ZodString]> & {
        enum: {
            CHECK: "CHECK";
            FINISHED: "FINISHED";
            QUEUED: "QUEUED";
            READ: "READ";
            SEARCH: "SEARCH";
            STARTED: "STARTED";
            WRITE: "WRITE";
        };
    };
    label: z.ZodString;
    seq: z.ZodInt;
}, z.core.$strip>;
type HarnessRunActivityDefinition = z.infer<typeof HarnessRunActivitySchemaDefinition>;
export interface HarnessRunActivitySchemaInput extends z.input<typeof HarnessRunActivitySchemaDefinition> {
}
/**
 * One ordered reader-facing run activity
 *
 * @openapiSchema HarnessRunActivity
 * @endpoint GET /v1/research/runs/{runId}/events
 * @contractShape harness.run-activity
 * @contractRole canonical
 */
export declare const HarnessRunActivitySchema: z.ZodType<HarnessRunActivityDefinition, HarnessRunActivitySchemaInput>;
export type HarnessRunActivity = z.infer<typeof HarnessRunActivitySchema>;
export {};
//# sourceMappingURL=run-activity.d.ts.map