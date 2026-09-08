import { z } from "zod/v4";
declare const SlugLocationSchemaDefinition: z.ZodObject<{
    entityType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodString;
    path: z.ZodString;
    resourceType: z.ZodEnum<{
        blog: "blog";
        content: "content";
        entity: "entity";
        news: "news";
        person: "person";
    }>;
    slug: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
type SlugLocationDefinition = z.infer<typeof SlugLocationSchemaDefinition>;
/**
 * Current slug location for a resource
 *
 * @openapiSchema SlugLocation
 * @endpoint GET /v1/entities/{entityId}/slug
 * @endpoint GET /v1/news/{newsId}/slug
 * @contractShape slug.location
 * @contractRole canonical
 */
export declare const SlugLocationSchema: z.ZodType<SlugLocationDefinition>;
export type SlugLocation = z.infer<typeof SlugLocationSchema>;
export {};
//# sourceMappingURL=location.d.ts.map