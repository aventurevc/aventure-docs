import { z } from "zod/v4";
declare const EntityAnalysisSourceSchemaDefinition: z.ZodObject<{
    publicSource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        recordedAt: z.ZodISODateTime;
        sourceDetail: z.ZodString;
    }, z.core.$strip>>>;
    sourceDocumentId: z.ZodUUID;
}, z.core.$strip>;
type EntityAnalysisSourceDefinition = z.infer<typeof EntityAnalysisSourceSchemaDefinition>;
export interface EntityAnalysisSourceSchemaInput extends z.input<typeof EntityAnalysisSourceSchemaDefinition> {
}
/**
 * Public page behind a source document a draft quotes; never persisted in a draft.
 *
 * @openapiSchema EntityAnalysisSource
 * @endpoint GET /v1/research-runs/{runId}/draft/sources
 * @contractShape entity.analysis-source
 * @contractRole canonical
 */
export declare const EntityAnalysisSourceSchema: z.ZodType<EntityAnalysisSourceDefinition, EntityAnalysisSourceSchemaInput>;
export type EntityAnalysisSource = z.infer<typeof EntityAnalysisSourceSchema>;
export {};
//# sourceMappingURL=analysis-source.d.ts.map