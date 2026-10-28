import { z } from "zod/v4";
declare const CursorSliceHarnessRunEventSchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
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
    nextCursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type CursorSliceHarnessRunEventDefinition = z.infer<typeof CursorSliceHarnessRunEventSchemaDefinition>;
export interface CursorSliceHarnessRunEventSchemaInput extends z.input<typeof CursorSliceHarnessRunEventSchemaDefinition> {
}
/**
 * @openapiSchema CursorSliceHarnessRunEvent
 * @endpoint GET /v1/research-runs/{runId}/events
 * @endpoint GET /v1/research/runs/{runId}/events
 * @contractShape cursor.slice-harness-run-event
 * @contractRole canonical
 */
export declare const CursorSliceHarnessRunEventSchema: z.ZodType<CursorSliceHarnessRunEventDefinition, CursorSliceHarnessRunEventSchemaInput>;
export type CursorSliceHarnessRunEvent = z.infer<typeof CursorSliceHarnessRunEventSchema>;
export {};
//# sourceMappingURL=slice-harness-run-event.d.ts.map