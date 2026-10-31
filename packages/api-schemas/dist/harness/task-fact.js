// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * One source-bound fact the requester asks the task run to research.
 *
 * @openapiSchema HarnessTaskFact
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessTaskInputBindingSchema
 * @contractShape harness.task-fact
 * @contractRole canonical
 */
export const HarnessTaskFactSchema = z.object({
    /** Date of the event, when known. */
    eventDate: z.iso.date().nullish(),
    /** Absolute http or https URL of the page supporting the fact. */
    sourceUrl: z.string(),
    /** The single fact to research; non-blank and bounded by the task-input text limit. */
    statement: z.string(),
});
//# sourceMappingURL=task-fact.js.map