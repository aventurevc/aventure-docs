import { z } from "zod/v4";
declare const EntityTagCountSchemaDefinition: z.ZodObject<{
    count: z.ZodNumber;
    name: z.ZodString;
}, z.core.$strip>;
type EntityTagCountDefinition = z.infer<typeof EntityTagCountSchemaDefinition>;
/**
 * Summary count for a specific tag.
 *
 * @openapiSchema EntityTagCount
 * @endpoint POST /v1/entities/filters/counts
 * @usedBySchema EntityFilterCountResultSchema
 * @contractShape entity.tag-count
 * @contractRole canonical
 */
export declare const EntityTagCountSchema: z.ZodType<EntityTagCountDefinition>;
export type EntityTagCount = z.infer<typeof EntityTagCountSchema>;
export {};
//# sourceMappingURL=tag-count.d.ts.map