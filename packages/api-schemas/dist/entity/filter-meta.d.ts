import { z } from "zod/v4";
/**
 * API response fragment for entity filter metadata
 *
 * @openapiSchema EntityFilterMeta
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape entity.filter-meta
 * @contractRole canonical
 */
export declare const EntityFilterMetaSchema: z.ZodObject<{
    ui: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        headquartersOption: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            country: z.ZodArray<z.ZodType<{
                country: string;
                state: {
                    city: string[];
                    state: string;
                }[];
            }, unknown, z.core.$ZodTypeInternals<{
                country: string;
                state: {
                    city: string[];
                    state: string;
                }[];
            }, unknown>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type EntityFilterMeta = z.infer<typeof EntityFilterMetaSchema>;
//# sourceMappingURL=filter-meta.d.ts.map