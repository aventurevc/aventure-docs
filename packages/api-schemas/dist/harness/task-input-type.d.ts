import { z } from "zod/v4";
/**
 * ENTITY binds a target entity to its canonical id through entity identification; TEXT is a literal value the request states.
 *
 * @openapiSchema HarnessTaskInputType
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskSchema
 * @contractShape harness.task-input-type
 * @contractRole canonical
 */
export declare const HarnessTaskInputTypeSchema: z.ZodEnum<{
    ENTITY: "ENTITY";
    TEXT: "TEXT";
}>;
export type HarnessTaskInputType = z.infer<typeof HarnessTaskInputTypeSchema>;
//# sourceMappingURL=task-input-type.d.ts.map