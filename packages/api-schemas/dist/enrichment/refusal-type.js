// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Why a batch enrichment filed no run: NOT_FOUND for an unknown record; ALLOWANCE_EXHAUSTED when the record's company or person research allowance is spent and additional usage is off or at its spend cap or prepaid credit; AMBIGUOUS when the record's profile matches more than one current record; SUBSCRIPTION_REQUIRED when the subscription stopped covering research mid-batch, such as additional usage while past due
 *
 * @openapiSchema EnrichmentRefusalType
 * @endpoint POST /v1/enrichments
 * @usedBySchema EnrichmentSchema
 * @contractShape enrichment.refusal-type
 * @contractRole canonical
 */
export const EnrichmentRefusalTypeSchema = z.enum([
    "NOT_FOUND",
    "ALLOWANCE_EXHAUSTED",
    "AMBIGUOUS",
    "SUBSCRIPTION_REQUIRED",
]);
//# sourceMappingURL=refusal-type.js.map