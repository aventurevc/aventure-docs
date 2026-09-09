import { z } from "zod/v4";
declare const EntityFilterCountResultSchemaDefinition: z.ZodObject<{
    count: z.ZodArray<z.ZodType<{
        count: number;
        name: string;
    }, unknown, z.core.$ZodTypeInternals<{
        count: number;
        name: string;
    }, unknown>>>;
    meta: z.ZodType<{
        total: number;
    }, unknown, z.core.$ZodTypeInternals<{
        total: number;
    }, unknown>>;
}, z.core.$strip>;
type EntityFilterCountResultDefinition = z.infer<typeof EntityFilterCountResultSchemaDefinition>;
/**
 * @openapiSchema EntityFilterCountResult
 * @endpoint GET /v1/entities/filters/counts
 * @endpoint POST /v1/entities/filters/counts
 * @contractShape entity.filter-count-result
 * @contractRole canonical
 */
export declare const EntityFilterCountResultSchema: z.ZodType<EntityFilterCountResultDefinition>;
export type EntityFilterCountResult = z.infer<typeof EntityFilterCountResultSchema>;
export {};
//# sourceMappingURL=filter-count-result.d.ts.map