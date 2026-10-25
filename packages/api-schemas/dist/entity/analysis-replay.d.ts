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
    section: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type EntityAnalysisReplayDefinition = z.infer<typeof EntityAnalysisReplaySchemaDefinition>;
export interface EntityAnalysisReplaySchemaInput extends z.input<typeof EntityAnalysisReplaySchemaDefinition> {
}
/**
 * A published staff research session replayed read-only beside the Research tab's paywall. It is the requested company's own session when one exists, otherwise the newest one.
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