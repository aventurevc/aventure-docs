import { z } from "zod/v4";
/**
 * Current slug owner
 *
 * @openapiSchema CurrentSlugOwner
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape redirect.current-slug-owner
 * @contractRole canonical
 */
export declare const CurrentSlugOwnerSchema: z.ZodObject<{
    deletedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodString;
    isHidden: z.ZodBoolean;
    nameBrand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceType: z.ZodEnum<{
        blog: "blog";
        content: "content";
        entity: "entity";
        news: "news";
        person: "person";
    }>;
    showOnSitemap: z.ZodBoolean;
    slug: z.ZodString;
}, z.core.$strip>;
export type CurrentSlugOwner = z.infer<typeof CurrentSlugOwnerSchema>;
//# sourceMappingURL=current-slug-owner.d.ts.map