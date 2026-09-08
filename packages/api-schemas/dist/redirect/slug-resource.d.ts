import { z } from "zod/v4";
/**
 * Resource type whose slug is being changed
 *
 * @openapiSchema SlugResource
 * @standardProblemResponse
 * @usedBySchema CurrentSlugOwnerSchema
 * @usedBySchema RedirectSlugPathSchema
 * @usedBySchema SlugLocationSchema
 * @contractShape redirect.slug-resource
 * @contractRole canonical
 */
export declare const SlugResourceSchema: z.ZodEnum<{
    blog: "blog";
    content: "content";
    entity: "entity";
    news: "news";
    person: "person";
}>;
export type SlugResource = z.infer<typeof SlugResourceSchema>;
//# sourceMappingURL=slug-resource.d.ts.map