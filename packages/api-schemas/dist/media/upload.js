// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DatasourceSourceMetadataSchema } from "../datasource/source-metadata.js";
import { MediaObjectTypeSchema } from "./object-type.js";
/**
 * Managed media asset reference with resolved CDN URL and target metadata
 *
 * @openapiSchema MediaUpload
 * @endpoint GET /v1/media
 * @contractShape media.upload
 * @contractRole canonical
 */
export const MediaUploadSchema = z.object({
    /** Resolved API CDN URL */
    cdnUrl: z.string(),
    /** Earliest recorded write timestamp for this media asset slot from res_provenance_event (when this entity/person/news first received any image in this slot). */
    firstUploadedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Target media domain */
    mediaType: MediaObjectTypeSchema,
    /** Attached managed storage path; never an external image URL */
    path: z.string(),
    /** Latest write source for this media asset slot from res_provenance_event. `changedAt` is the last-modified timestamp of the current attached file. */
    provenance: DatasourceSourceMetadataSchema.nullish(),
    /** Attached entity/person/news target id, when known */
    targetId: z.string().nullish(),
});
//# sourceMappingURL=upload.js.map