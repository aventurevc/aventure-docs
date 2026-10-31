import { z } from "zod/v4";
declare const StandardizedClassificationFilterSchemaDefinition: z.ZodObject<{
    category: z.ZodString;
    code: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    codeText: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    edition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hasEdition: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type StandardizedClassificationFilterDefinition = z.infer<typeof StandardizedClassificationFilterSchemaDefinition>;
export interface StandardizedClassificationFilterSchemaInput extends z.input<typeof StandardizedClassificationFilterSchemaDefinition> {
}
/**
 * Exact standardized reference tuple. All supplied fields match one reference; no edition filter means any edition, hasEdition=false selects unknown edition.
 *
 * @openapiSchema StandardizedClassificationFilter
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
 * @contractShape standardized.classification-filter
 * @contractRole canonical
 */
export declare const StandardizedClassificationFilterSchema: z.ZodType<StandardizedClassificationFilterDefinition, StandardizedClassificationFilterSchemaInput>;
export type StandardizedClassificationFilter = z.infer<typeof StandardizedClassificationFilterSchema>;
export {};
//# sourceMappingURL=classification-filter.d.ts.map