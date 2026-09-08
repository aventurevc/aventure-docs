// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Actor boundary for a provenance write event
 *
 * @openapiSchema DatasourceProvenanceActorType
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema DatasourceProvenanceActorSchema
 * @usedBySchema DatasourceProvenanceSourceSchema
 * @contractShape datasource.provenance-actor-type
 * @contractRole canonical
 */
export const DatasourceProvenanceActorTypeSchema = z.enum(["agent", "employee"]);
//# sourceMappingURL=provenance-actor-type.js.map