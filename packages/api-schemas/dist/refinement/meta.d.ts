import { z } from "zod/v4";
declare const RefinementMetaSchemaDefinition: z.ZodObject<{
    degraded: z.ZodBoolean;
    limit: z.ZodInt;
    page: z.ZodInt;
    total: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type RefinementMetaDefinition = z.infer<typeof RefinementMetaSchemaDefinition>;
/**
 * Meta
 *
 * @openapiSchema RefinementMeta
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterRefinedFiltersSchema
 * @contractShape refinement.meta
 * @contractRole canonical
 */
export declare const RefinementMetaSchema: z.ZodType<RefinementMetaDefinition>;
export type RefinementMeta = z.infer<typeof RefinementMetaSchema>;
export {};
//# sourceMappingURL=meta.d.ts.map