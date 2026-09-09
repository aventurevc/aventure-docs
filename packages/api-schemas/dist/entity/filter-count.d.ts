import { z } from "zod/v4";
declare const EntityFilterCountSchemaDefinition: z.ZodObject<{
    minCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    name: z.ZodArray<z.ZodString>;
    size: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    typeRecord: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityFilterCountDefinition = z.infer<typeof EntityFilterCountSchemaDefinition>;
/**
 * Entity filter tag count criteria
 *
 * @openapiSchema EntityFilterCount
 * @endpoint POST /v1/entities/filters/counts
 * @contractShape entity.filter-count
 * @contractRole canonical
 */
export declare const EntityFilterCountSchema: z.ZodType<EntityFilterCountDefinition>;
export type EntityFilterCount = z.infer<typeof EntityFilterCountSchema>;
export {};
//# sourceMappingURL=filter-count.d.ts.map