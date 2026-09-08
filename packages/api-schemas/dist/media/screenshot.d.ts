import { z } from "zod/v4";
declare const MediaScreenshotSchemaDefinition: z.ZodObject<{
    contentType: z.ZodString;
    crawledAt: z.ZodISODateTime;
    createdAt: z.ZodISODateTime;
    fileSize: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    id: z.ZodNumber;
    owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    position: z.ZodInt;
    s3Key: z.ZodString;
    updatedAt: z.ZodISODateTime;
    url: z.ZodString;
    urlId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    viewportHeight: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    viewportWidth: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type MediaScreenshotDefinition = z.infer<typeof MediaScreenshotSchemaDefinition>;
/**
 * Domain record for crawl screenshot metadata - also the API response type
 *
 * @openapiSchema MediaScreenshot
 * @endpoint GET /v1/media/screenshots
 * @endpoint GET /v1/media/screenshots/{id}
 * @usedBySchema PageMediaScreenshotSchema
 * @contractShape media.screenshot
 * @contractRole canonical
 */
export declare const MediaScreenshotSchema: z.ZodType<MediaScreenshotDefinition>;
export type MediaScreenshot = z.infer<typeof MediaScreenshotSchema>;
export {};
//# sourceMappingURL=screenshot.d.ts.map