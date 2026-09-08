import { z } from "zod/v4";
/**
 * Target domain for media operations (logos, pictures, thumbnails)
 *
 * @openapiSchema MediaObjectType
 * @endpoint GET /v1/media
 * @usedBySchema MediaUploadSchema
 * @contractShape media.object-type
 * @contractRole canonical
 */
export declare const MediaObjectTypeSchema: z.ZodEnum<{
    BLOG: "BLOG";
    ENTITY: "ENTITY";
    NEWS: "NEWS";
    PERSON: "PERSON";
}>;
export type MediaObjectType = z.infer<typeof MediaObjectTypeSchema>;
//# sourceMappingURL=object-type.d.ts.map