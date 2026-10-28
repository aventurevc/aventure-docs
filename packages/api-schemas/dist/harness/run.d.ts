import { z } from "zod/v4";
/**
 * One research run on a company, Product, Service, or person
 *
 * @openapiSchema HarnessRun
 * @endpoint GET /v1/research-runs
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema EnrichmentSchema
 * @usedBySchema HarnessRunDetailSchema
 * @usedBySchema PageHarnessRunSchema
 * @contractShape harness.run
 * @contractRole canonical
 */
export declare const HarnessRunSchema: z.ZodObject<{
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
    followUpAdmission: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        REJECTED: "REJECTED";
        SETTLED: "SETTLED";
        UNTRACKED: "UNTRACKED";
    }>>;
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
    researchAllowanceType: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        COMPANY: "COMPANY";
        ENTITY_BRAND: "ENTITY_BRAND";
        ENTITY_VIEW: "ENTITY_VIEW";
        PERSON: "PERSON";
        PERSON_VIEW: "PERSON_VIEW";
        WEB_SEARCH: "WEB_SEARCH";
    }>, z.ZodString]> & {
        enum: {
            COMPANY: "COMPANY";
            ENTITY_BRAND: "ENTITY_BRAND";
            ENTITY_VIEW: "ENTITY_VIEW";
            PERSON: "PERSON";
            PERSON_VIEW: "PERSON_VIEW";
            WEB_SEARCH: "WEB_SEARCH";
        };
    }>>;
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
export type HarnessRun = z.infer<typeof HarnessRunSchema>;
//# sourceMappingURL=run.d.ts.map