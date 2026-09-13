// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Harness run kind: full enrichment loop or bounded micro-task
 *
 * @openapiSchema HarnessRunType
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-type
 * @contractRole canonical
 */
export const HarnessRunTypeSchema = z.enum(["ENRICHMENT", "TASK"]);
//# sourceMappingURL=run-type.js.map