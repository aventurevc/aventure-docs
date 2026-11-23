// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Peer-group distribution summary across valued peers (and subject when it holds a daily quote).
 *
 * @openapiSchema EntityPeerMetricSummary
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityPeerMultipleSummarySchema
 * @contractShape entity.peer-metric-summary
 * @contractRole canonical
 */
export const EntityPeerMetricSummarySchema = z.object({
    /** Maximum value among peer-group members with a valid metric value. */
    max: z.number().nullish(),
    /** Arithmetic mean across peer-group members with a valid metric value. */
    mean: z.number().nullish(),
    /** Median (50th percentile) across peer-group members with a valid metric value. */
    median: z.number().nullish(),
    /** Minimum value among peer-group members with a valid metric value. */
    min: z.number().nullish(),
    /** Count of peer-group members contributing a non-null observation. */
    sampleCount: z.int(),
});
//# sourceMappingURL=peer-metric-summary.js.map