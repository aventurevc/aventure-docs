// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunEventSchema } from "../harness/run-event.js";
const EntityAnalysisReplaySchemaDefinition = z.object({
    /** Company the replayed session researched. */
    entityId: z.uuid(),
    /** Brand name of that company. */
    entityName: z.string(),
    /** Profile slug of that company. */
    entitySlug: z.string(),
    /** The session's section requests and the analyst's replies to them, in sequence order; never free-text turns, narration, drafts, checks, tool, or usage events. */
    event: z.array(HarnessRunEventSchema),
    /** Research snippet types this session published that are still current and unchanged since. */
    section: z.array(z.string()),
});
/**
 * A published staff research session replayed read-only beside the Research tab's paywall. It is the requested company's own session when one exists, otherwise the newest one.
 *
 * @openapiSchema EntityAnalysisReplay
 * @endpoint GET /v1/entities/{entityId}/analysis-replay
 * @contractShape entity.analysis-replay
 * @contractRole canonical
 */
export const EntityAnalysisReplaySchema = EntityAnalysisReplaySchemaDefinition;
//# sourceMappingURL=analysis-replay.js.map