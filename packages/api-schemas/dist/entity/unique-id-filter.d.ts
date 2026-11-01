import { z } from "zod/v4";
declare const EntityUniqueIdFilterSchemaDefinition: z.ZodObject<{
    identifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    idType: z.ZodString;
}, z.core.$strip>;
type EntityUniqueIdFilterDefinition = z.infer<typeof EntityUniqueIdFilterSchemaDefinition>;
export interface EntityUniqueIdFilterSchemaInput extends z.input<typeof EntityUniqueIdFilterSchemaDefinition> {
}
/**
 * Public-registry identifier predicate: entities holding an identifier in this namespace, or this exact identifier when identifier is supplied. Private namespaces are refused.
 *
 * @openapiSchema EntityUniqueIdFilter
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/people
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/exports
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape entity.unique-id-filter
 * @contractRole canonical
 */
export declare const EntityUniqueIdFilterSchema: z.ZodType<EntityUniqueIdFilterDefinition, EntityUniqueIdFilterSchemaInput>;
export type EntityUniqueIdFilter = z.infer<typeof EntityUniqueIdFilterSchema>;
export {};
//# sourceMappingURL=unique-id-filter.d.ts.map