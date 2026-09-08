// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Grouped source/provenance metadata for private v1 response fields
 *
 * @openapiSchema DatasourceSourceMetadata
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/media
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/provenance/latest
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema MediaUploadSchema
 * @usedBySchema PersonSchema
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