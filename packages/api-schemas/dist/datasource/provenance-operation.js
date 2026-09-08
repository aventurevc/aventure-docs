// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Write operation captured by a provenance event row
 *
 * @openapiSchema DatasourceProvenanceOperation
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @contractShape datasource.provenance-operation
 * @contractRole canonical
 */
export const DatasourceProvenanceOperationSchema = z.enum(["insert", "update", "delete"]);
//# sourceMappingURL=provenance-operation.js.map