import { z } from "zod/v4";
/**
 * One source-bound fact the requester asks the task run to research.
 *
 * @openapiSchema HarnessTaskFact
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessTaskInputBindingSchema
 * @contractShape harness.task-fact
 * @contractRole canonical
 */
export declare const HarnessTaskFactSchema: z.ZodObject<{
    eventDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    sourceUrl: z.ZodString;
    statement: z.ZodString;
}, z.core.$strip>;
export type HarnessTaskFact = z.infer<typeof HarnessTaskFactSchema>;
//# sourceMappingURL=task-fact.d.ts.map