import { z } from "zod/v4";
/**
 * UI-only metadata used for rendering entity filter panels
 *
 * @openapiSchema EntityFilterUiMeta
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterMetaSchema
 * @contractShape entity.filter-ui-meta
 * @contractRole canonical
 */
export declare const EntityFilterUiMetaSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type EntityFilterUiMeta = z.infer<typeof EntityFilterUiMetaSchema>;
//# sourceMappingURL=filter-ui-meta.d.ts.map