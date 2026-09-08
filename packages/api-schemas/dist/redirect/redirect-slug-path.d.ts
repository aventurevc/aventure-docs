import { z } from "zod/v4";
/**
 * Redirect slug path
 *
 * @openapiSchema RedirectSlugPath
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape redirect.redirect-slug-path
 * @contractRole canonical
 */
export declare const RedirectSlugPathSchema: z.ZodObject<{
    newUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    oldUrl: z.ZodString;
    targetCurrentSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    targetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    targetResourceType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        blog: "blog";
        content: "content";
        entity: "entity";
        news: "news";
        person: "person";
    }>>>;
}, z.core.$strip>;
export type RedirectSlugPath = z.infer<typeof RedirectSlugPathSchema>;
//# sourceMappingURL=redirect-slug-path.d.ts.map