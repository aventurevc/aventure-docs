// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunActivityTypeSchemaKnownMembers = z.enum([
    "QUEUED",
    "STARTED",
    "SEARCH",
    "READ",
    "CHECK",
    "WRITE",
    "FINISHED",
]);
/**
 * Reader-facing activity category
 *
 * @openapiSchema HarnessRunActivityType
 * @endpoint GET /v1/research/runs/{runId}/events
 * @usedBySchema HarnessRunActivitySchema
 * @contractShape harness.run-activity-type
 * @contractRole canonical
 */
export const HarnessRunActivityTypeSchema = Object.assign(z.union([HarnessRunActivityTypeSchemaKnownMembers, z.string()]), { enum: HarnessRunActivityTypeSchemaKnownMembers.enum });
//# sourceMappingURL=run-activity-type.js.map