import { z } from "zod/v4";
declare const EntityFilterCountMetaSchemaDefinition: z.ZodObject<{
    total: z.ZodInt;
}, z.core.$strip>;
type EntityFilterCountMetaDefinition = z.infer<typeof EntityFilterCountMetaSchemaDefinition>;
/**
 * @openapiSchema EntityFilterCountMeta
 * @endpoint POST /v1/entities/filters/counts
 * @usedBySchema EntityFilterCountResultSchema
 * @contractShape entity.filter-count-meta
 * @contractRole canonical
 */
export declare const EntityFilterCountMetaSchema: z.ZodType<EntityFilterCountMetaDefinition>;
export type EntityFilterCountMeta = z.infer<typeof EntityFilterCountMetaSchema>;
export {};
//# sourceMappingURL=filter-count-meta.d.ts.map