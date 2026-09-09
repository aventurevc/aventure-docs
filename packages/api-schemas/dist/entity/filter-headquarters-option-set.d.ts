import { z } from "zod/v4";
/**
 * Headquarters option hierarchy
 *
 * @openapiSchema EntityFilterHeadquartersOptionSet
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterUiMetaSchema
 * @contractShape entity.filter-headquarters-option-set
 * @contractRole canonical
 */
export declare const EntityFilterHeadquartersOptionSetSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type EntityFilterHeadquartersOptionSet = z.infer<typeof EntityFilterHeadquartersOptionSetSchema>;
//# sourceMappingURL=filter-headquarters-option-set.d.ts.map