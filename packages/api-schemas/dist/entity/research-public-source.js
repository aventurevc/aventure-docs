// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Published page behind a research value, read from its provenance. Absent when the value came from an internal source.
 *
 * @openapiSchema EntityResearchPublicSource
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research-details
 * @endpoint GET /v1/entities/{entityId}/research-details/{detailId}
 * @endpoint GET /v1/entities/{entityId}/research-snippets
 * @endpoint GET /v1/entities/{entityId}/research-snippets/{snippetId}
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema EntityAcquisitionSchema
 * @usedBySchema EntityRelationshipSchema
 * @usedBySchema EntityResearchDetailSchema
 * @usedBySchema EntityResearchSnippetSchema
 * @contractShape entity.research-public-source
 * @contractRole canonical
 */
export const EntityResearchPublicSourceSchema = z.object({
    /** When the value was last written from this source. */
    changedAt: z.iso.datetime({ offset: true }).nullish(),
    /** URL of the published page supporting the value. */
    sourceDetail: z.string(),
});
//# sourceMappingURL=research-public-source.js.map