// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const MediaScreenshotSchemaDefinition = z.object({
    contentType: z.string(),
    crawledAt: z.iso.datetime({ offset: true }),
    createdAt: z.iso.datetime({ offset: true }),
    fileSize: z.int().nullish(),
    /** Type-safe identifier for crawl screenshots */
    id: z.number().int(),
    owner: EntityPersonOwnerSchema.nullish(),
    position: z.int(),
    s3Key: z.string(),
    updatedAt: z.iso.datetime({ offset: true }),
    url: z.string(),
    urlId: z.int().nullish(),
    viewportHeight: z.int().nullish(),
    viewportWidth: z.int().nullish(),
});
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
export const MediaScreenshotSchema = MediaScreenshotSchemaDefinition;
//# sourceMappingURL=screenshot.js.map