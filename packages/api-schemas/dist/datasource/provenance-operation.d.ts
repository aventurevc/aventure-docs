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
export declare const DatasourceProvenanceOperationSchema: z.ZodEnum<{
    delete: "delete";
    insert: "insert";
    update: "update";
}>;
export type DatasourceProvenanceOperation = z.infer<typeof DatasourceProvenanceOperationSchema>;
//# sourceMappingURL=provenance-operation.d.ts.map