// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Confidence and dispute state of a field-level provenance row
 *
 * @openapiSchema DatasourceProvenanceStatus
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @contractShape datasource.provenance-status
 * @contractRole canonical
 */
export const DatasourceProvenanceStatusSchema = z.enum([
    "unconfirmed",
    "confirmed",
    "disputedFirstParty",
    "disputedRelatedParty",
    "disputedThirdParty",
    "disputedAnonymous",
]);
//# sourceMappingURL=provenance-status.js.map