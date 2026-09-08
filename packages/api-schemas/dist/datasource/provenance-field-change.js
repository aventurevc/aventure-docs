// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const DatasourceProvenanceFieldChangeSchemaDefinition = z.object({
    fieldName: z.string(),
    newPresent: z.boolean(),
    newValue: z.string().nullish(),
    oldPresent: z.boolean(),
    oldValue: z.string().nullish(),
});
/**
 * One changed field inside a provenance write event
 *
 * @openapiSchema DatasourceProvenanceFieldChange
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @contractShape datasource.provenance-field-change
 * @contractRole canonical
 */
export const DatasourceProvenanceFieldChangeSchema = DatasourceProvenanceFieldChangeSchemaDefinition;
//# sourceMappingURL=provenance-field-change.js.map