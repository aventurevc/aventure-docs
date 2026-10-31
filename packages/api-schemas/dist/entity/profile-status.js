// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityProfileHeadlineSchema } from "./profile-headline.js";
/**
 * Read-only profile status derived from stored kind, ownership, operating status, and a Business Line's proven public controlling parent. Funding stage stays on enrichment.fundingDetail.stage.
 *
 * @openapiSchema EntityProfileStatus
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityComparisonSignalsSchema
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityListSchema
 * @contractShape entity.profile-status
 * @contractRole canonical
 */
export const EntityProfileStatusSchema = z.object({
    /** Headline label for this record. */
    headline: EntityProfileHeadlineSchema,
    /** Operating status records an acquisition; null when no status is established. */
    isAcquired: z.boolean().nullish(),
    /** Stopped operating with no surviving business; null when no status is established. */
    isClosed: z.boolean().nullish(),
    /** Operating status is terminal; null when no status is established. */
    isTerminal: z.boolean().nullish(),
});
//# sourceMappingURL=profile-status.js.map