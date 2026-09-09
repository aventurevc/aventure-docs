import { z } from "zod/v4";
/**
 * Numeric min/max bounds for range filter values
 *
 * @openapiSchema EntityFilterScope
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterChoiceSchema
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape entity.filter-scope
 * @contractRole canonical
 */
export declare const EntityFilterScopeSchema: z.ZodObject<{
    max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strict>;
export type EntityFilterScope = z.infer<typeof EntityFilterScopeSchema>;
//# sourceMappingURL=filter-scope.d.ts.map