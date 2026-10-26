// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunEventSchemaDefinition = z.object({
    /** Append timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Monotonic event id */
    id: z.number().int(),
    /** Run-stream envelope as an opaque JSON string */
    payload: z.string(),
    /** Owning run id */
    runId: z.uuid(),
    /** Per-run ordering sequence */
    seq: z.int(),
    /** Stream part type */
    type: z.string(),
});
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
export const HarnessRunEventSchema = HarnessRunEventSchemaDefinition;
//# sourceMappingURL=run-event.js.map