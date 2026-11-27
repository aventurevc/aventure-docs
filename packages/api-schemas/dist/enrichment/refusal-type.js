// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EnrichmentRefusalTypeSchemaKnownMembers = z.enum([
    "NOT_FOUND",
    "ALLOWANCE_EXHAUSTED",
    "AMBIGUOUS",
    "SUBSCRIPTION_REQUIRED",
    "TURN_CAPPED",
]);
/**
 * Why a batch enrichment filed no run: NOT_FOUND for an unknown record; ALLOWANCE_EXHAUSTED when the record's company or person research allowance is spent and additional usage is off or at its spend cap or prepaid credit; AMBIGUOUS when the record's profile matches more than one current record; TURN_CAPPED when a queued run has reached its turn limit and cannot accept an edit; SUBSCRIPTION_REQUIRED when the subscription stopped covering research mid-batch, such as additional usage while past due. Readers accept members they do not yet know
 *
 * @openapiSchema EnrichmentRefusalType
 * @endpoint POST /v1/enrichments
 * @usedBySchema EnrichmentSchema
 * @contractShape enrichment.refusal-type
 * @contractRole canonical
 */
export const EnrichmentRefusalTypeSchema = Object.assign(z.union([EnrichmentRefusalTypeSchemaKnownMembers, z.string()]), { enum: EnrichmentRefusalTypeSchemaKnownMembers.enum });
//# sourceMappingURL=refusal-type.js.map