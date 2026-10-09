import { z } from "zod/v4";
/**
 * The expectation, body, type hints, rejections, override, and method for one judged prose write.
 *
 * @openapiSchema HarnessTaskWriteGuidance
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskPlanStepSchema
 * @contractShape harness.task-write-guidance
 * @contractRole canonical
 */
export declare const HarnessTaskWriteGuidanceSchema: z.ZodObject<{
    body: z.ZodString;
    expectation: z.ZodString;
    method: z.ZodArray<z.ZodString>;
    override: z.ZodString;
    reject: z.ZodArray<z.ZodString>;
    typeCatalog: z.ZodString;
}, z.core.$strip>;
export type HarnessTaskWriteGuidance = z.infer<typeof HarnessTaskWriteGuidanceSchema>;
//# sourceMappingURL=task-write-guidance.d.ts.map