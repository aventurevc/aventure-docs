// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Grouped source/provenance metadata for private v1 response fields
 *
 * @openapiSchema DatasourceSourceMetadata
 * @endpoint GET /v1/entities/{entityId}/media/{mediaType}
 * @endpoint GET /v1/news/{newsId}/media/{mediaType}
 * @endpoint GET /v1/people/{personId}/media/{mediaType}
 * @usedBySchema MediaUploadSchema
 * @contractShape datasource.source-metadata
 * @contractRole canonical
 */
export const DatasourceSourceMetadataSchema = z.object({
    changedAt: z.iso.datetime({ offset: true }).nullish(),
    dataSourceUpdatedAt: z.iso.datetime({ offset: true }).nullish(),
    detail: z.string().nullish(),
    kind: z.string().nullish(),
    pendingApproval: z.int().nullish(),
    sourceId: z.string().nullish(),
    status: z.string().nullish(),
});
//# sourceMappingURL=source-metadata.js.map