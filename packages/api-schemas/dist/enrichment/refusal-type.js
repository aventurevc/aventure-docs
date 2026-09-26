// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Why a batch enrichment filed no run: NOT_FOUND for an unknown record, ALLOWANCE_EXHAUSTED once the caller's research allowance ran out during the batch
 *
 * @openapiSchema EnrichmentRefusalType
 * @endpoint POST /v1/enrichments
 * @usedBySchema EnrichmentSchema
 * @contractShape enrichment.refusal-type
 * @contractRole canonical
 */
export const EnrichmentRefusalTypeSchema = z.enum(["NOT_FOUND", "ALLOWANCE_EXHAUSTED"]);
//# sourceMappingURL=refusal-type.js.map