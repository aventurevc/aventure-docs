import { z } from "zod/v4";
/**
 * Logo sort priority for entity search
 *
 * @openapiSchema EntityFilterLogoOption
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
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