import { z } from "zod/v4";
declare const HarnessTaskSchemaDefinition: z.ZodObject<{
    allowedValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodString;
    key: z.ZodString;
    required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    type: z.ZodUnion<readonly [z.ZodEnum<{
        ENTITY: "ENTITY";
        NEWS: "NEWS";
        TEXT: "TEXT";
        WRITER_BRIEF: "WRITER_BRIEF";
    }>, z.ZodString]> & {
        enum: {
            ENTITY: "ENTITY";
            NEWS: "NEWS";
            TEXT: "TEXT";
            WRITER_BRIEF: "WRITER_BRIEF";
        };
    };
}, z.core.$strip>;
type HarnessTaskDefinition = z.infer<typeof HarnessTaskSchemaDefinition>;
export interface HarnessTaskSchemaInput extends z.input<typeof HarnessTaskSchemaDefinition> {
}
/**
 * One typed task input, required unless explicitly marked optional.
 *
 * @openapiSchema HarnessTaskInput
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskPlanSchema
 * @contractShape harness.task
 * @contractRole canonical
 */
export declare const HarnessTaskSchema: z.ZodType<HarnessTaskDefinition, HarnessTaskSchemaInput>;
export type HarnessTask = z.infer<typeof HarnessTaskSchema>;
export {};
//# sourceMappingURL=task.d.ts.map