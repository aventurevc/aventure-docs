// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { LogoAccuracySchema } from "../logo/accuracy.js";
import { MediaObjectTypeSchema } from "./object-type.js";
const MediaUploadSchemaDefinition = z.object({
    /** Entity logo writes only: the brand-match verdict the write's gate computed on these bytes; absent on reads, photos, thumbnails, and brand-match overrides. */
    accuracy: LogoAccuracySchema.nullish(),
    /** Resolved API CDN URL */
    cdnUrl: z.string(),
    /** Earliest recorded write timestamp for this media asset slot from res_provenance_event (when this entity/person/news first received any image in this slot). */
    firstUploadedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Target media domain */
    mediaType: MediaObjectTypeSchema,
    /** Attached managed storage path; never an external image URL */
    path: z.string(),
    /** Attached entity/person/news target id, when known */
    targetId: z.string().nullish(),
});
/**
 * Managed media asset reference with resolved CDN URL and target metadata
 *
 * @openapiSchema MediaUpload
 * @endpoint GET /v1/entities/{entityId}/logo
 * @endpoint GET /v1/news/{newsId}/thumbnail
 * @endpoint GET /v1/people/{personId}/photo
 * @contractShape media.upload
 * @contractRole canonical
 */
export const MediaUploadSchema = MediaUploadSchemaDefinition;
//# sourceMappingURL=upload.js.map