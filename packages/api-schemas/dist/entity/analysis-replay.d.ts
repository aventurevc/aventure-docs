import { z } from "zod/v4";
declare const EntityAnalysisReplaySchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
    entityName: z.ZodString;
    entitySlug: z.ZodString;
    event: z.ZodArray<z.ZodType<{
        createdAt: string;
        id: number;
        payload: string;
        runId: string;
        seq: number;
        type: string;
    }, import("../harness/run-event.ts").HarnessRunEventSchemaInput, z.core.$ZodTypeInternals<{
        createdAt: string;
        id: number;
        payload: string;
        runId: string;
        seq: number;
        type: string;
    }, import("../harness/run-event.ts").HarnessRunEventSchemaInput>>>;
    publishedSection: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compliance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            characterCount: z.ZodInt;
            meetsRequirements: z.ZodBoolean;
            violation: z.ZodArray<z.ZodString>;
            wordCount: z.ZodInt;
        }, z.core.$strip>>>;
        entityId: z.ZodUUID;
        id: z.ZodInt;
        publicSource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            recordedAt: z.ZodISODateTime;
            sourceDetail: z.ZodString;
        }, z.core.$strip>>>;
        text: z.ZodString;
        textType: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    section: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type EntityAnalysisReplayDefinition = z.infer<typeof EntityAnalysisReplaySchemaDefinition>;
export interface EntityAnalysisReplaySchemaInput extends z.input<typeof EntityAnalysisReplaySchemaDefinition> {
}
/**
 * One accepted current published result shown read-only beside the Research tab's paywall. The same global example is selected independently of the requested profile.
 *
 * @openapiSchema EntityAnalysisReplay
 * @endpoint GET /v1/entities/{entityId}/analysis-replay
 * @contractShape entity.analysis-replay
 * @contractRole canonical
 */
export declare const EntityAnalysisReplaySchema: z.ZodType<EntityAnalysisReplayDefinition, EntityAnalysisReplaySchemaInput>;
export type EntityAnalysisReplay = z.infer<typeof EntityAnalysisReplaySchema>;
export {};
//# sourceMappingURL=analysis-replay.d.ts.map