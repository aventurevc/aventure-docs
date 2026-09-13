// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Whether the run performs comprehensive enrichment or only selected tasks
 *
 * @openapiSchema EnrichmentMode
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape enrichment.mode
 * @contractRole canonical
 */
export const EnrichmentModeSchema = z.enum(["COMPREHENSIVE", "INDIVIDUAL"]);
//# sourceMappingURL=mode.js.map