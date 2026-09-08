// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DatasourceProvenanceActorSchema } from "./provenance-actor.js";
import { DatasourceProvenanceFieldChangeSchema } from "./provenance-field-change.js";
import { DatasourceProvenanceOperationSchema } from "./provenance-operation.js";
import { DatasourceProvenanceSourceSchema } from "./provenance-source.js";
import { DatasourceProvenanceStatusSchema } from "./provenance-status.js";
import { DatasourceTrackedProvenanceTableSchema } from "./tracked-provenance-table.js";
const DatasourceFieldProvenanceSchemaDefinition = z.object({
    actor: DatasourceProvenanceActorSchema.nullish(),
    changedBy: z.string().nullish(),
    changes: z.array(DatasourceProvenanceFieldChangeSchema),
    effectiveAt: z.iso.datetime({ offset: true }),
    entityId: z.uuid().nullish(),
    eventId: z.uuid(),
    id: z.number().int(),
    operation: DatasourceProvenanceOperationSchema,
    personId: z.uuid().nullish(),
    recordId: z.string(),
    source: DatasourceProvenanceSourceSchema,
    status: DatasourceProvenanceStatusSchema,
    tableName: DatasourceTrackedProvenanceTableSchema,
});
/**
 * Full audit row from research.res_provenance_event
 *
 * @openapiSchema DatasourceFieldProvenance
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema PageDatasourceFieldProvenanceSchema
 * @contractShape datasource.field-provenance
 * @contractRole canonical
 */
export const DatasourceFieldProvenanceSchema = DatasourceFieldProvenanceSchemaDefinition;
//# sourceMappingURL=field-provenance.js.map