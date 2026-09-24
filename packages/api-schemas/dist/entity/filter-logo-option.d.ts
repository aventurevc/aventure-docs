import { z } from "zod/v4";
/**
 * Logo sort priority for entity search
 *
 * @openapiSchema EntityFilterLogoOption
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape entity.filter-logo-option
 * @contractRole canonical
 */
export declare const EntityFilterLogoOptionSchema: z.ZodObject<{
    sortPriority: z.ZodOptional<z.ZodEnum<{
        ANY_LOGO_FIRST: "ANY_LOGO_FIRST";
        NONE: "NONE";
        REAL_LOGO_FIRST: "REAL_LOGO_FIRST";
    }>>;
}, z.core.$strip>;
export type EntityFilterLogoOption = z.infer<typeof EntityFilterLogoOptionSchema>;
//# sourceMappingURL=filter-logo-option.d.ts.map