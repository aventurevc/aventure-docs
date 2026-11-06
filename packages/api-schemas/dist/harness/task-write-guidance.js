// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * The expectation, body, type hints, rejections, override, and method for one judged prose write.
 *
 * @openapiSchema HarnessTaskWriteGuidance
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskPlanStepSchema
 * @contractShape harness.task-write-guidance
 * @contractRole canonical
 */
export const HarnessTaskWriteGuidanceSchema = z.object({
    /** The request body keys, the key that carries the prose, and a minimal JSON example. */
    body: z.string(),
    /** The one sentence the prose aims for. */
    expectation: z.string(),
    /** Help sections that teach this prose, each with the command that retrieves it. */
    method: z.array(z.string()),
    /** The override field, the problems it may waive, and its terms. */
    override: z.string(),
    /** Each problem that rejects this prose: what fails it and the fix. */
    reject: z.array(z.string()),
    /** The read operation that returns per-type hints for this write; call it first. */
    typeCatalog: z.string(),
});
//# sourceMappingURL=task-write-guidance.js.map