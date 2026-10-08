import { z } from "zod/v4";
declare const HarnessTaskSchemaDefinition: z.ZodObject<{
    description: z.ZodString;
    key: z.ZodString;
    type: z.ZodUnion<readonly [z.ZodEnum<{
        ENTITY: "ENTITY";
        TEXT: "TEXT";
    }>, z.ZodString]>;
}, z.core.$strip>;
type HarnessTaskDefinition = z.infer<typeof HarnessTaskSchemaDefinition>;
/**
 * One typed task input that must be bound before a run starts.
 *
 * @openapiSchema HarnessTaskInput
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskPlanSchema
 * @contractShape harness.task
 * @contractRole canonical
 */
export declare const HarnessTaskSchema: z.ZodType<HarnessTaskDefinition>;
export type HarnessTask = z.infer<typeof HarnessTaskSchema>;
export {};
//# sourceMappingURL=task.d.ts.map