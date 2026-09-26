import { z } from "zod/v4";
declare const HarnessRunDetailSchemaDefinition: z.ZodObject<{
    entity: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        id: z.ZodUUID;
        image: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown>>;
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown>>>;
        nameBrand: z.ZodString;
        nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sitemap: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            hasAnalysis: z.ZodBoolean;
            hasEmployees: z.ZodBoolean;
            hasFundraising: z.ZodBoolean;
            hasNews: z.ZodBoolean;
            productServiceSlug: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        slug: z.ZodString;
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    latestStatus: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        complete: z.ZodBoolean;
        entitySlug: z.ZodNullable<z.ZodString>;
        gateRemaining: z.ZodArray<z.ZodString>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        whatElseRemaining: z.ZodArray<z.ZodString>;
        writeThisIteration: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    provider: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        id: z.ZodUUID;
        image: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown>>;
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown>>>;
        nameBrand: z.ZodString;
        nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sitemap: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            hasAnalysis: z.ZodBoolean;
            hasEmployees: z.ZodBoolean;
            hasFundraising: z.ZodBoolean;
            hasNews: z.ZodBoolean;
            productServiceSlug: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        slug: z.ZodString;
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    run: z.ZodObject<{
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
}, z.core.$strip>;
type HarnessRunDetailDefinition = z.infer<typeof HarnessRunDetailSchemaDefinition>;
/**
 * Harness run with its resolved public entity
 *
 * @openapiSchema HarnessRunDetail
 * @endpoint GET /v1/harness/runs/{runId}
 * @contractShape harness.run-detail
 * @contractRole canonical
 */
export declare const HarnessRunDetailSchema: z.ZodType<HarnessRunDetailDefinition>;
export type HarnessRunDetail = z.infer<typeof HarnessRunDetailSchema>;
export {};
//# sourceMappingURL=run-detail.d.ts.map