import { z } from "zod/v4";
/**
 * ENTITY binds a target entity to its canonical id through entity identification; TEXT is a literal value the request states; WRITER_BRIEF is the typed research analysis a prose writer composes from (claim ledger, positioning frame, paragraph plan).
 *
 * @openapiSchema HarnessTaskInputType
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskSchema
 * @contractShape harness.task-input-type
 * @contractRole canonical
 */
export declare const HarnessTaskInputTypeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ENTITY: "ENTITY";
    TEXT: "TEXT";
    WRITER_BRIEF: "WRITER_BRIEF";
}>, z.ZodString]> & {
    enum: {
        ENTITY: "ENTITY";
        TEXT: "TEXT";
        WRITER_BRIEF: "WRITER_BRIEF";
    };
};
export type HarnessTaskInputType = z.infer<typeof HarnessTaskInputTypeSchema>;
//# sourceMappingURL=task-input-type.d.ts.map