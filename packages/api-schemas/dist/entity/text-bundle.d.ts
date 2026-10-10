import { z } from "zod/v4";
declare const EntityTextBundleSchemaDefinition: z.ZodObject<{
    expanded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    generatedDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    short: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityTextBundleDefinition = z.infer<typeof EntityTextBundleSchemaDefinition>;
export interface EntityTextBundleSchemaInput extends z.input<typeof EntityTextBundleSchemaDefinition> {
}
/**
 * Grouped entity/person text content
 *
 * @openapiSchema EntityTextBundle
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema PersonSchema
 * @contractShape entity.text-bundle
 * @contractRole canonical
 */
export declare const EntityTextBundleSchema: z.ZodType<EntityTextBundleDefinition, EntityTextBundleSchemaInput>;
export type EntityTextBundle = z.infer<typeof EntityTextBundleSchema>;
export {};
//# sourceMappingURL=text-bundle.d.ts.map