import { z } from "zod/v4";
declare const EntityTextBundleSchemaDefinition: z.ZodObject<{
    expanded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    generatedDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    short: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityTextBundleDefinition = z.infer<typeof EntityTextBundleSchemaDefinition>;
/**
 * Grouped entity/person text content
 *
 * @openapiSchema EntityTextBundle
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema PersonSchema
 * @contractShape entity.text-bundle
 * @contractRole canonical
 */
export declare const EntityTextBundleSchema: z.ZodType<EntityTextBundleDefinition>;
export type EntityTextBundle = z.infer<typeof EntityTextBundleSchema>;
export {};
//# sourceMappingURL=text-bundle.d.ts.map