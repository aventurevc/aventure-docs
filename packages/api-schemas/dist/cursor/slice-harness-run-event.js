// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunEventSchema } from "../harness/run-event.js";
const CursorSliceHarnessRunEventSchemaDefinition = z.object({
    content: z.array(HarnessRunEventSchema),
    nextCursor: z.string().nullish(),
});
/**
 * @openapiSchema CursorSliceHarnessRunEvent
 * @endpoint GET /v1/research-runs/{runId}/events
 * @endpoint GET /v1/research/runs/{runId}/events
 * @contractShape cursor.slice-harness-run-event
 * @contractRole canonical
 */
export const CursorSliceHarnessRunEventSchema = CursorSliceHarnessRunEventSchemaDefinition;
//# sourceMappingURL=slice-harness-run-event.js.map