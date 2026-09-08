import { z } from "zod/v4";
declare const DatasourceProvenanceFieldChangeSchemaDefinition: z.ZodObject<{
    fieldName: z.ZodString;
    newPresent: z.ZodBoolean;
    newValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    oldPresent: z.ZodBoolean;
    oldValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type DatasourceProvenanceFieldChangeDefinition = z.infer<typeof DatasourceProvenanceFieldChangeSchemaDefinition>;
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
export declare const DatasourceProvenanceFieldChangeSchema: z.ZodType<DatasourceProvenanceFieldChangeDefinition>;
export type DatasourceProvenanceFieldChange = z.infer<typeof DatasourceProvenanceFieldChangeSchema>;
export {};
//# sourceMappingURL=provenance-field-change.d.ts.map