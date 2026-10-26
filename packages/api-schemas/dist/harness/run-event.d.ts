import { z } from "zod/v4";
declare const HarnessRunEventSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    id: z.ZodNumber;
    payload: z.ZodString;
    runId: z.ZodUUID;
    seq: z.ZodInt;
    type: z.ZodString;
}, z.core.$strip>;
type HarnessRunEventDefinition = z.infer<typeof HarnessRunEventSchemaDefinition>;
export interface HarnessRunEventSchemaInput extends z.input<typeof HarnessRunEventSchemaDefinition> {
}
/**
 * One ordered run stream-log entry
 *
 * @openapiSchema HarnessRunEvent
 * @endpoint GET /v1/entities/{entityId}/analysis-replay
 * @endpoint GET /v1/research-runs/{runId}/events
 * @endpoint POST /v1/research-runs/{runId}/turns
 * @usedBySchema CursorSliceHarnessRunEventSchema
 * @usedBySchema EntityAnalysisReplaySchema
 * @contractShape harness.run-event
 * @contractRole canonical
 */
export declare const HarnessRunEventSchema: z.ZodType<HarnessRunEventDefinition, HarnessRunEventSchemaInput>;
export type HarnessRunEvent = z.infer<typeof HarnessRunEventSchema>;
export {};
//# sourceMappingURL=run-event.d.ts.map