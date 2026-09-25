import { z } from "zod/v4";
declare const HarnessRunSchemaDefinition: z.ZodObject<{
    attempt: z.ZodInt;
    chassis: z.ZodEnum<{
        "claude-agent-sdk": "claude-agent-sdk";
        "pi-agent-sdk": "pi-agent-sdk";
    }>;
    chassisRouted: z.ZodBoolean;
    createdAt: z.ZodISODateTime;
    entitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    environment: z.ZodEnum<{
        development: "development";
        production: "production";
        staging: "staging";
        unassigned: "unassigned";
    }>;
    error: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    failureClass: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    finishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    hasSourceDocument: z.ZodBoolean;
    id: z.ZodUUID;
    iteration: z.ZodInt;
    lane: z.ZodEnum<{
        background: "background";
        interactive: "interactive";
    }>;
    latestStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    llmApi: z.ZodEnum<{
        anthropic: "anthropic";
        "openai-chat": "openai-chat";
        "openai-responses": "openai-responses";
    }>;
    maxIteration: z.ZodInt;
    maxScoutConcurrent: z.ZodInt;
    mode: z.ZodEnum<{
        COMPREHENSIVE: "COMPREHENSIVE";
        INDIVIDUAL: "INDIVIDUAL";
    }>;
    model: z.ZodString;
    nextAttemptAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    resumeSafeUntil: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    startedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    status: z.ZodEnum<{
        completed: "completed";
        failed: "failed";
        queued: "queued";
        running: "running";
        stopped: "stopped";
    }>;
    subagentModel: z.ZodString;
    taskPresetKey: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    type: z.ZodEnum<{
        ENRICHMENT: "ENRICHMENT";
        TASK: "TASK";
    }>;
    updatedAt: z.ZodISODateTime;
    url: z.ZodString;
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunDefinition = z.infer<typeof HarnessRunSchemaDefinition>;
/**
 * One harness enrichment run
 *
 * @openapiSchema HarnessRun
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @contractShape harness.run
 * @contractRole canonical
 */
export declare const HarnessRunSchema: z.ZodType<HarnessRunDefinition>;
export type HarnessRun = z.infer<typeof HarnessRunSchema>;
export {};
//# sourceMappingURL=run.d.ts.map