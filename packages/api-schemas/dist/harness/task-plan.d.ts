import { z } from "zod/v4";
/**
 * One catalog task's typed inputs and ordered steps with derived CLI commands and MCP tools, read from the stated catalog revision.
 *
 * @openapiSchema HarnessTaskPlan
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HelpResolutionSchema
 * @contractShape harness.task-plan
 * @contractRole canonical
 */
export declare const HarnessTaskPlanSchema: z.ZodObject<{
    catalogRevision: z.ZodInt;
    input: z.ZodArray<z.ZodType<{
        description: string;
        key: string;
        type: "ENTITY" | "TEXT";
    }, unknown, z.core.$ZodTypeInternals<{
        description: string;
        key: string;
        type: "ENTITY" | "TEXT";
    }, unknown>>>;
    step: z.ZodArray<z.ZodType<{
        cliCommand: string;
        mcpTool?: string | null | undefined;
        step: {
            instruction: string;
            operationId: string;
            stepKey: string;
        };
    }, unknown, z.core.$ZodTypeInternals<{
        cliCommand: string;
        mcpTool?: string | null | undefined;
        step: {
            instruction: string;
            operationId: string;
            stepKey: string;
        };
    }, unknown>>>;
    taskKey: z.ZodString;
}, z.core.$strip>;
export type HarnessTaskPlan = z.infer<typeof HarnessTaskPlanSchema>;
//# sourceMappingURL=task-plan.d.ts.map